import {
  useLazyNextofkinListBYIDQuery,
  useNextofkinDeleteMutation,
  useNextofkinPatchMutation,
  useNextofkinPostMutation,
} from "@root/services/carer-info/other-information/nextOfKinApi";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { formatters, nextofkinFormValues } from ".";
import dayjs from "dayjs";
import router from "next/router";

const useNextOfKinForm = (props: any) => {
  const { action, id } = props;
  //STATES
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  //APIS HANDLERS
  const [nextofkinPost] = useNextofkinPostMutation();
  const [nextofkinPatch] = useNextofkinPatchMutation();
  const [nextofkinListBYID] = useLazyNextofkinListBYIDQuery();
  const [nextofkinDelete] = useNextofkinDeleteMutation();
  //FUNCTIONS
  const SubmitData = (data: any) => {
    let formData = new FormData();
    for (var key in data) {
      if (data[key] === data["date"]) {
        formData.append(key, new Date(data[key]).toISOString());
      } else {
        formData.append(key, data[key]);
      }
    }
    setisFatching(true);
    if (action === "add") {
      nextofkinPost(formData)
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push("/carer-info/other-information/next-of-kin/");
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      const payload = {
        id,
        formData,
      };
      nextofkinPatch(payload)
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Updated Successfully", {
            variant: "success",
          });
          router.push("/carer-info/other-information/next-of-kin/");
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
  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view" || action === "edit") {
      const { data, isError } = await nextofkinListBYID(id);
      console.log(data, "data");

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return nextofkinFormValues;
      }
      const responseData = { ...data.data };

      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }

      return responseData;
    } else {
      setisloading(false);
      return nextofkinFormValues;
    }
  };
  //deletehander
  const deleteHander = (id: any) => {
    nextofkinDelete({ id: id })
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
    isFatching,
    isloading,
  };
};

export default useNextOfKinForm;
