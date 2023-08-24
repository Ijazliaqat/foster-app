import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, defaultValues, formData } from ".";
import { enqueueSnackbar } from "notistack";
import {
  usePostFamilyDetailMutation,
  useUpdateFamilyDetailMutation,
} from "@root/services/carer-info/personal-info/application-form/FamilyApi";

export const useFamilyViewForm = (props: any) => {
  const { familyData, viewData, applicationFormid, changeView } = props;

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues:
      viewData == "add"
        ? defaultValues
        : { ...familyData, dob: new Date(familyData.dob) },
  });
  let [postFamilyDetail, { isLoading }] = usePostFamilyDetailMutation();
  let [updateFamilyDetail] = useUpdateFamilyDetailMutation();
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const ApiCall = async (data: any, Formtype: any) => {
    let { memberName, dob, relation, subject, isLivingAtHome } = data;
    let formData = {
      memberName,
      dob,
      relation,
      subject,
      isLivingAtHome,
    };
    if (Formtype == "add") {
      try {
        const res: any = await postFamilyDetail({
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
        const res: any = await updateFamilyDetail({
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
  };
};
