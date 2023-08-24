import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useUpdateBasicInformationMutation } from "@root/services/carer-info/personal-info/application-form/BasicInformationApi";

export const useBasicInformationForm = (data: any, id: any) => {
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
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  useEffect(() => {
    const subscription = watch((values: any) => {
      const dateOfBirth = values["dateOfBirth"];
      if (dateOfBirth && dayjs(dateOfBirth).isValid()) {
        const newAge = dayjs().diff(dayjs(dateOfBirth), "y");
        values.age !== newAge &&
          setValue("age", dayjs().diff(dayjs(dateOfBirth), "y"));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const [updateBasicInformation, { isLoading }] =
    useUpdateBasicInformationMutation();
  const onSubmit = async (data: any) => {
    let form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }

    try {
      const res: any = await updateBasicInformation({
        formData: form_data,
        id: id,
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
  };
};
