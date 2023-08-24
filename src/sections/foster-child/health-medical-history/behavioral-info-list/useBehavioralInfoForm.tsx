import {
  useBehaviorInfoDeleteBYbehaviouralInfoIdMutation,
  useBehaviorInfoPatchMutation,
  useBehaviorInfoPostAddMutation,
  useLazyBehaviorInfoGetBYbehaviouralInfoIdQuery,
} from "@root/services/foster-child/health-medical-history/behaviorInfoListApi/BehaviorInfoListApi";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { BehaviouralInfoDefultValue } from ".";
const useBehavioralInfoForm = (props: any) => {
  const { action, fosterChildId, behaviouralInfoId } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  //APIS HANDLERS
  const [behaviorInfoPostAdd] = useBehaviorInfoPostAddMutation();
  const [behaviorInfoGetBYbehaviouralInfoId] =
    useLazyBehaviorInfoGetBYbehaviouralInfoIdQuery();

  const [behaviorInfoDeleteBYbehaviouralInfoId] =
    useBehaviorInfoDeleteBYbehaviouralInfoIdMutation();
  const [behaviorInfoPatch] = useBehaviorInfoPatchMutation();
  const SubmitData = (data: any) => {
    setisFatching(true);
    if (action === "add") {
      behaviorInfoPostAdd({
        params: {
          fosterChildId: fosterChildId,
        },
        formdata: data,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/health-medical-history/behavioural-info/",
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
    } else if (action === "edit") {
      behaviorInfoPatch({
        params: {
          behaviouralInfoId: behaviouralInfoId,
        },
        formdata: data,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname: "/foster-child/health-medical-history/behavioural-info/",
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
      const { data, isError } = await behaviorInfoGetBYbehaviouralInfoId({
        behaviouralInfoId: behaviouralInfoId,
      });
      console.log(data, "behaviouralInfodata");

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return BehaviouralInfoDefultValue;
      }
      const responseData = { ...data.data };
      console.log(responseData, "responseData");
      return responseData;
    } else {
      setisloading(false);
      return BehaviouralInfoDefultValue;
    }
  };
  const deleteHander = (id: any) => {
    behaviorInfoDeleteBYbehaviouralInfoId({ behaviouralInfoId: id })
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
    isloading,
    isFatching,
  };
};

export default useBehavioralInfoForm;
