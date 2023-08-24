import React, { useState } from "react";
import { ChildHolidayPreferenceValue } from ".";
import {
  useCreateChildHolidayPrefrenceMutation,
  useDeleteChildHolidayPrefrenceMutation,
  useLazyGetChildHolidayPrefrenceQueryByIdQuery,
  useUpdateChildHolidayPrefrenceMutation,
} from "@root/services/foster-child/child-day-log/child-holiday-prefrence/childHolidayprefrence";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import {
  useCreateChildHolidayPrefrenceDocumentMutation,
  useDeleteChildHolidayPrefrenceDocumentMutation,
  useUpdateChildHolidayPrefrenceDocumentMutation,
} from "@root/services/foster-child/child-day-log/child-holiday-prefrence/childHolidayPrefrenceDocument";

const useChildholidayPrefrenceFrom = (props: any) => {
  const { action, fosterChildId, childHolidayPrefrence } = props;
  const router = useRouter();
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS
  const [createChildHolidayPrefrence] =
    useCreateChildHolidayPrefrenceMutation();
  const [updateChildHolidayPrefrence] =
    useUpdateChildHolidayPrefrenceMutation();
  const [GetChildHolidayPrefrenceQueryById] =
    useLazyGetChildHolidayPrefrenceQueryByIdQuery();
  const [deleteChildHolidayPrefrence] =
    useDeleteChildHolidayPrefrenceMutation();
  //UPLOAD API HANDLERS
  const [createChildHolidayPrefrenceDocument] =
    useCreateChildHolidayPrefrenceDocumentMutation();
  const [deleteChildHolidayPrefrenceDocument] =
    useDeleteChildHolidayPrefrenceDocumentMutation();
  const [updateChildHolidayPrefrenceDocument] =
    useUpdateChildHolidayPrefrenceDocumentMutation();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(ChildHolidayPreferenceValue);
    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      createChildHolidayPrefrence({
        params: {
          fosterChildId: fosterChildId,
        },
        body: data,
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/child-day-log/child-holiday-preference/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              childHolidayPrefrence: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateChildHolidayPrefrence({
        params: {
          id: childHolidayPrefrence,
        },
        body: sendata,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/child-day-log/child-holiday-preference",
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
      const { data, isError } = await GetChildHolidayPrefrenceQueryById({
        params: {
          id: childHolidayPrefrence,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return ChildHolidayPreferenceValue;
      }
      const responseData = { ...data?.data };
      console.log(responseData, "res");

      for (const key in responseData) {
        if (key.includes("date") || key.includes("Date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }

      return responseData;
    } else {
      setisloading(false);
      return ChildHolidayPreferenceValue;
    }
  };
  const deleteHander = (id: any) => {
    deleteChildHolidayPrefrence(id)
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
  //Upload docuemnts functions
  const onUploadSubmit = (data: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.documentFile);
    createChildHolidayPrefrenceDocument({
      params: {
        id: childHolidayPrefrence,
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
  const onDeleteHander = (id: any) => {
    deleteChildHolidayPrefrenceDocument({ id: id })
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
  const onUpdateSubmit = (data: any, id: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.documentFile);
    updateChildHolidayPrefrenceDocument({
      params: {
        id: id,
      },
      body: formData,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Edit Successfully", {
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
  return {
    onUploadSubmit,
    onUpdateSubmit,
    onDeleteHander,
    deleteHander,
    SubmitData,
    getDefaultValue,
    setModelOpen,
    isloading,
    isFatching,
    modelOpen,
  };
};
export default useChildholidayPrefrenceFrom;
