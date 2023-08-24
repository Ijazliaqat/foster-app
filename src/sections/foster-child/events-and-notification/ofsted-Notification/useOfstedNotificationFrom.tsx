import {
  useCreateOfstedNotificationListMutation,
  useDeleteOfstedNotificationListMutation,
  useLazyGetOfstedNotificationListQueryByIdQuery,
  useUpdateOfstedNotificationListMutation,
} from "@root/services/foster-child/events-and-notification/ofsted-notification/OfstedNotificationApi";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { OFsedValue } from ".";
import {
  useCreateOfstedNotificationDocumentsListMutation,
  useDeleteOfstedNotificationDocumentsListMutation,
} from "@root/services/foster-child/events-and-notification/ofsted-notification/OfstedNotificationDocumentsApi";

const useOfstedNotificationFrom = (props: any) => {
  const { action, fosterChildId, OfstedNotificationID } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS
  const [createOfstedNotificationList] =
    useCreateOfstedNotificationListMutation();
  const [updateOfstedNotificationList] =
    useUpdateOfstedNotificationListMutation();
  const [GetOfstedNotificationListQueryById] =
    useLazyGetOfstedNotificationListQueryByIdQuery();
  const [deleteOfstedNotificationList] =
    useDeleteOfstedNotificationListMutation();
  //upload apis
  const [createOfstedNotificationDocumentsList] =
    useCreateOfstedNotificationDocumentsListMutation();
  const [deleteOfstedNotificationDocumentsList] =
    useDeleteOfstedNotificationDocumentsListMutation();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);

    const sendata: any = {};

    const keys = Object.keys(OFsedValue);
    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      createOfstedNotificationList({
        body: {
          fosterChildId: fosterChildId,
          status: "in progress",
          ...sendata,
        },
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/events-and-notification/ofsted-notification/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              OfstedNotificationID: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateOfstedNotificationList({
        params: {
          id: OfstedNotificationID,
        },
        body: {
          fosterChildId: fosterChildId,
          status: "in progress",
          ...sendata,
        },
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information update Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/events-and-notification/ofsted-notification/",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else {
      return null;
    }
  };
  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view" || action === "edit") {
      const { data, isError } = await GetOfstedNotificationListQueryById({
        params: {
          id: OfstedNotificationID,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return OFsedValue;
      }
      const responseData = { ...data?.data };
      for (const key in responseData) {
        if (key.includes("date") || key.includes("Date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }

      return responseData;
    } else {
      setisloading(false);
      return OFsedValue;
    }
  };
  const deleteHander = (id: any) => {
    deleteOfstedNotificationList(id)
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: { data: { message: any } }) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  //UPLOAD DOCUMENTS HANDLERS
  const onUploadSubmit = (data: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("formName", "OFSTED_NOTIFICATION");
    formData.append("recordId", OfstedNotificationID);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.documentFile);
    createOfstedNotificationDocumentsList({
      params: {
        fosterChildId: fosterChildId,
      },
      body: formData,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Add Successfully", {
          variant: "success",
        });
        setisFatching(false);
        setModelOpen(false);
      })
      .catch((error: any) => {
        setisFatching(false);
        setModelOpen(false);
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  //   const onUpdateSubmit = (data: any, id: any) => {
  //     setisFatching(true);
  //     const formData = new FormData();
  //     formData.append("documentType", data.documentType);
  //     formData.append("documentDate", data.documentDate);
  //     formData.append("password", data.password);
  //     formData.append("documentFile", data.documentFile);
  //     deletehospitalizationDocument({
  //       id: id,

  //       body: formData,
  //     })
  //       .unwrap()
  //       .then((res: any) => {
  //         enqueueSnackbar("Information Edit Successfully", {
  //           variant: "success",
  //         });
  //         setisFatching(false);
  //         setModelOpen(false);
  //       })
  //       .catch((error: any) => {
  //         setisFatching(false);
  //         setModelOpen(false);
  //         const errMsg = error?.data?.message;
  //         enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
  //       });
  //   };// no api for update
  const onDeleteHander = (id: any) => {
    deleteOfstedNotificationDocumentsList({ id: id })
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    onUploadSubmit,
    onDeleteHander,
    SubmitData,
    getDefaultValue,
    deleteHander,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useOfstedNotificationFrom;
