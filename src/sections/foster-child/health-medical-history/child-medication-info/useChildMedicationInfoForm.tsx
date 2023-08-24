import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { ChildMedicationInfoListValue } from ".";
import {
  useCreateChildMedicationInfoMutation,
  useDeleteChildMedicationInfoByIdMutation,
  useLazyGetChildMedicationInfoByIdQuery,
  useUpdateChildMedicationInfoByIdMutation,
} from "@root/services/foster-child/health-medical-history/child-medication-info/ChildMedicationInfo";

const useChildMedicationInfoForm = (props: any) => {
  const { action, fosterChildId, ChildMedicationInfoId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  //ApiHandler
  const [createChildMedicationInfo] = useCreateChildMedicationInfoMutation();
  const [getChildMedicationInfoById] = useLazyGetChildMedicationInfoByIdQuery();
  const [updateChildMedicationInfoById] =
    useUpdateChildMedicationInfoByIdMutation();
  const [deleteChildMedicationInfoById] =
    useDeleteChildMedicationInfoByIdMutation();

  //Functions
  const SubmitData = (data: any) => {
    setisFatching(true);
    const sendata: any = {};
    const keys = Object.keys(ChildMedicationInfoListValue);

    for (const key of keys) {
      if (data[key] !== undefined) {
        sendata[key] = data[key];
      }
    }

    if (action === "add") {
      createChildMedicationInfo({
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
              "/foster-child/health-medical-history/child-medication-info/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              ChildMedicationInfoId: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updateChildMedicationInfoById({
        id: ChildMedicationInfoId,
        params: {
          childMedicationInfoId: ChildMedicationInfoId,
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
            pathname:
              "/foster-child/health-medical-history/child-medication-info/",
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
      const { data, isError } = await getChildMedicationInfoById({
        id: ChildMedicationInfoId,
        params: {
          id: ChildMedicationInfoId,
          fosterCarerId: fosterChildId,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return ChildMedicationInfoListValue;
      }
      const responseData = { ...data?.data?.getChildMedicationInfo };
      for (const key in responseData) {
        if (key.includes("Date") || key.includes("date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }
      return responseData;
    } else {
      setisloading(false);
      return ChildMedicationInfoListValue;
    }
  };
  const deleteHander = (id: any, fosterChildId: any) => {
    deleteChildMedicationInfoById({
      id: id,
      params: {
        id: id,
        fosterChildId: fosterChildId,
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

  return {
    SubmitData,
    getDefaultValue,
    deleteHander,
    setModelOpen,
    setisloading,
    // onUploadSubmit,
    // onUpdateSubmit,
    // onDeleteHander,
    isloading,
    isFatching,
    modelOpen,
  };
};

export default useChildMedicationInfoForm;
