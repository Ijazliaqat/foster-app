import {
  useCreateHospitalInfoMutation,
  useDeleteHospitalInfoMutation,
  useLazyGetHospitalInfoByIdQuery,
  useUpdateHospitalInfoMutation,
} from "@root/services/foster-child/health-medical-history/hospital-info-list/HospitalInfoList";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { HospitalInfoListValue } from ".";
import {
  useCreateHospitalInfoListDocumentMutation,
  useDeleteHospitalInfoListDocumentMutation,
  useLazyGetHospitalInfoListDocumentBYIDQuery,
  useUpdateHospitalInfoListDocumentMutation,
} from "@root/services/foster-child/health-medical-history/hospital-info-list/hospitalInfoListDocument";

const useHospitalinfoListForms = (props: any) => {
  const { action, fosterChildId, hospitalinfoId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //ApiHandler
  const [createHospitalInfo] = useCreateHospitalInfoMutation();
  const [getHospitalInfoById] = useLazyGetHospitalInfoByIdQuery();
  const [updateHospitalInfo] = useUpdateHospitalInfoMutation();
  const [deleteHospitalInfo] = useDeleteHospitalInfoMutation();
  //UPLOAD DOCUMENT API HANDLERS
  const [createHospitalInfoListDocument] =
    useCreateHospitalInfoListDocumentMutation();
  const [updateHospitalInfoListDocument] =
    useUpdateHospitalInfoListDocumentMutation();
  const [deleteHospitalInfoListDocument] =
    useDeleteHospitalInfoListDocumentMutation();

  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    if (action === "add") {
      createHospitalInfo({
        params: {
          fosterCarerId: fosterChildId,
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
              "/foster-child/health-medical-history/hospital-info-list/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              hospitalinfoId: data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateHospitalInfo({
        id: hospitalinfoId,
        params: {
          id: hospitalinfoId,
          fosterCarerId: fosterChildId,
        },
        body: data,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/health-medical-history/hospital-info-list/",
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
      const { data, isError } = await getHospitalInfoById({
        id: hospitalinfoId,
        params: {
          id: hospitalinfoId,
          fosterCarerId: fosterChildId,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return HospitalInfoListValue;
      }
      const responseData = { ...data };

      return responseData;
    } else {
      setisloading(false);
      return HospitalInfoListValue;
    }
  };
  const deleteHander = (id: any, fosterCarerId: any) => {
    deleteHospitalInfo({
      id: id,
      params: {
        id: id,
        fosterCarerId: fosterCarerId,
      },
    })
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
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("documentFile", data.documentFile);
    createHospitalInfoListDocument({
      hospitalInfoFormId: hospitalinfoId,
      params: {
        fosterCarerId: fosterChildId,
        hospitalInfoFormId: hospitalinfoId,
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
  const onUpdateSubmit = (data: any, id: any) => {
    setisFatching(true);
    const formData = new FormData();
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("documentFile", data.documentFile);
    updateHospitalInfoListDocument({
      id: id,

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
  const onDeleteHander = (id: any) => {
    deleteHospitalInfoListDocument({ id: id })
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
    SubmitData,
    getDefaultValue,
    deleteHander,
    onUploadSubmit,
    setModelOpen,
    setisloading,
    onUpdateSubmit,
    onDeleteHander,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useHospitalinfoListForms;
