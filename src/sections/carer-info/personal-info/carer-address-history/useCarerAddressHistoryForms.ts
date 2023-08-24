import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import {
  usePostAddressHistoryMutation,
  useUpdateAddressHistoryMutation,
} from "@root/services/carer-info/personal-info/carer-address-history/CarerAddressHistoryApi";
import { enqueueSnackbar } from "notistack";

export const useCarerAddressHistoryForms = (
  formType: any,
  historyData: any
) => {
  let theme = useTheme();
  let router = useRouter();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: historyData,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  let [postAddressHistory, { isLoading: isLoadingPost }] =
    usePostAddressHistoryMutation();
  let [updateAddressHistory, { isLoading: isLoadingEdit }] =
    useUpdateAddressHistoryMutation();

  const onSubmit = async (data: any) => {
    if (formType == "add") {
      postAddressHistory({ formData: data })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Record Added Successfully", {
            variant: "success",
          });
          router.push("/carer-info/personal-info/carer-address-history");
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (formType == "edit") {
      updateAddressHistory({ formData: data, id: router.query?.id })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Record Updated Successfully", {
            variant: "success",
          });
          // router.push("/carer-info/personal-info/carer-address-history");
        })
        .catch((error) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
    isLoadingEdit,
    isLoadingPost,
  };
};
