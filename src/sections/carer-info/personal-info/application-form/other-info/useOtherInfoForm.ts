import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useUpdateOtherInfoMutation } from "@root/services/carer-info/personal-info/application-form/OtherInfoApi";

export const useOtherInfoForm = (data: any, applicationFormid: any) => {
  const theme: any = useTheme();

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: data,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  let [updateOtherInfo, { isLoading }] = useUpdateOtherInfoMutation();
  const onSubmit = async (data: any) => {
    try {
      const res: any = await updateOtherInfo({
        formData: {
          ...data,
          authorityOrAgency: data.authorityOrAgency == "Yes" ? true : false,
          haveApplied: data.haveApplied == "Yes" ? true : false,
        },
        id: applicationFormid,
      }).unwrap();
      if (res.data) {
        enqueueSnackbar("Record Updated Successfully", { variant: "success" });
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    isLoading,
  };
};
