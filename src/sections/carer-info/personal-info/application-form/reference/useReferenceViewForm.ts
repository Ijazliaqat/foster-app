import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, defaultValues, formData } from ".";
import {
  usePostReferenceDetailMutation,
  useUpdateReferenceMutation,
} from "@root/services/carer-info/personal-info/application-form/ReferenceApi";
import { enqueueSnackbar } from "notistack";

export const useReferenceViewForm = (props: any) => {
  const { refData, viewData, applicationFormid, changeView } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: viewData == "add" ? defaultValues : refData,
  });
  let [postReferenceDetail, { isLoading: postLoading }] =
    usePostReferenceDetailMutation();
  let [updateReference, { isLoading: editLoading }] =
    useUpdateReferenceMutation();
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const ApiCall = async (data: any, Formtype: any) => {
    let { firstName, lastName, email, address, middleName, phoneNum } = data;
    let formData = {
      firstName,
      middleName,
      lastName,
      address,
      email,
      phoneNum,
    };
    if (Formtype == "add") {
      try {
        const res: any = await postReferenceDetail({
          id: applicationFormid,
          formData,
        }).unwrap();
        if (res.data) {
          changeView(null);
          enqueueSnackbar("Record added Successfully", {
            variant: "success",
          });
          reset();
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    }
    if (Formtype == "edit") {
      try {
        const res: any = await updateReference({
          id: data?.id,
          formData,
        }).unwrap();
        if (res.data) {
          enqueueSnackbar("Record Updated Successfully", {
            variant: "success",
          });
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    }
  };

  const onSubmit = async (data: any) => {
    ApiCall(data, viewData);
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    postLoading,
    editLoading,
  };
};
