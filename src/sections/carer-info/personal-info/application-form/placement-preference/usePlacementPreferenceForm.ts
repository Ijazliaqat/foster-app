import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useUpdatePlacementPreferenceMutation } from "@root/services/carer-info/personal-info/application-form/PlacementPreferenceApi";

export const usePlacementPreferenceForm = (
  data: any,
  applicationFormid: any
) => {
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
  let [updatePlacementPreference, { isLoading }] =
    useUpdatePlacementPreferenceMutation();

  const onSubmit = async (data: any) => {
    try {
      const res: any = await updatePlacementPreference({
        formData: data,
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
