import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { HospitalizationListValue } from ".";
import {
  useCreatehospitalisationinfoListMutation,
  useDeleteHospitalisationInfoListMutation,
  useLazyGetHospitalisationInfoListQueryByIdQuery,
  useUpdateHospitalisationinfoListMutation,
} from "@root/services/foster-child/health-medical-history/hospitalization/HospitalizationApi";
import {
  useCreatehospitalizationDocumentMutation,
  useDeletehospitalizationDocumentMutation,
  useUpdatehospitalizationDocumentMutation,
} from "@root/services/foster-child/health-medical-history/hospitalization/hospitalizationDocuments";
const useHospitalizationForm = (props: any) => {
  const { action, fosterChildId, hospitalizationId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //API HANDLERS
  const [createhospitalisationinfoList] =
    useCreatehospitalisationinfoListMutation();
  const [updateHospitalisationinfoList] =
    useUpdateHospitalisationinfoListMutation();
  const [GetHospitalisationInfoListQueryById] =
    useLazyGetHospitalisationInfoListQueryByIdQuery();
  const [deleteHospitalisationInfoList] =
    useDeleteHospitalisationInfoListMutation();
  //UPLOAD API HANDLERS
  const [createhospitalizationDocument] =
    useCreatehospitalizationDocumentMutation();
  const [deletehospitalizationDocument] =
    useDeletehospitalizationDocumentMutation();
  const [updatehospitalizationDocument] =
    useUpdatehospitalizationDocumentMutation();
  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(HospitalizationListValue);
    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }
    if (action === "add") {
      createhospitalisationinfoList({
        body: { fosterChildId: fosterChildId, ...data },
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/health-medical-history/hospitalisation/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              hospitalizationId: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateHospitalisationinfoList({
        params: {
          id: hospitalizationId,
        },
        body: { fosterChildId: fosterChildId, ...sendata },
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/health-medical-history/hospitalisation/",
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
      const { data, isError } = await GetHospitalisationInfoListQueryById({
        params: {
          id: hospitalizationId,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return HospitalizationListValue;
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
      return HospitalizationListValue;
    }
  };
  const deleteHander = (id: any) => {
    deleteHospitalisationInfoList(id)
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
    formData.append("formName", "HOSPITALSATION_INFO");
    formData.append("recordId", hospitalizationId);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.documentFile);
    createhospitalizationDocument({
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
  // const onUpdateSubmit = (data: any, id: any) => {
  //   setisFatching(true);
  //   const formData = new FormData();
  //   formData.append("documentType", data.documentType);
  //   formData.append("documentDate", data.documentDate);
  //   formData.append("password", data.password);
  //   formData.append("documentFile", data.documentFile);
  //   deletehospitalizationDocument({
  //     id: id,

  //     body: formData,
  //   })
  //     .unwrap()
  //     .then((res: any) => {
  //       enqueueSnackbar("Information Edit Successfully", {
  //         variant: "success",
  //       });
  //       setisFatching(false);
  //       setModelOpen(false);
  //     })
  //     .catch((error: any) => {
  //       setisFatching(false);
  //       setModelOpen(false);
  //       const errMsg = error?.data?.message;
  //       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
  //     });
  // };// no api for update
  const onDeleteHander = (id: any) => {
    deletehospitalizationDocument({ id: id })
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

export default useHospitalizationForm;
