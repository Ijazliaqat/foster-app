import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useUpdateContactMutation } from "@root/services/carer-info/personal-info/application-form/ContactApi";
import { enqueueSnackbar } from "notistack";

export const useContactForm = (data: any, applicationFormid: any) => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: data,
  });
  const [updateContact, { isLoading }] = useUpdateContactMutation({});
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (formData: any) => {
    try {
      let res: any = await updateContact({
        id: applicationFormid,
        formData,
      }).unwrap();
      if (res.data) {
        reset({
          ...res?.data?.contact,
        });
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
