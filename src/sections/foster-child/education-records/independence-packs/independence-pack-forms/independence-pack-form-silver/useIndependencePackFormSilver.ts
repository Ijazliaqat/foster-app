import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  usePostIndependencePacksMutation,
  useUpdateIndependencePackMutation,
} from "@root/services/foster-child/education-records/independence-packs/IndependencePacks";
import dayjs from "dayjs";

export const useIndependencePackFormSilver = ({
  action,
  inedependencePackData,
}: any) => {
  let theme = useTheme();
  let router = useRouter();
  let { fosterChildId } = router.query;

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: action == "add" ? defaultValues : inedependencePackData,
  });
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  const [postIndependencePacks, { isLoading }] =
    usePostIndependencePacksMutation();
  const [updateIndependencePack, { isLoading: isLoadingUpdate }] =
    useUpdateIndependencePackMutation();

  const onSubmit = async (data: any) => {
    let form_data: any = new FormData();

    for (var key in data) {
      form_data.append(key, data[key]);
    }
    if (action == "add") {
      try {
        const res: any = await postIndependencePacks({
          formData: form_data,
          id: fosterChildId,
        }).unwrap();
        if (res.data) {
          enqueueSnackbar("Record Added Successfully", { variant: "success" });
        }
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    } else if (action == "edit") {
      try {
        const res: any = await updateIndependencePack({
          formData: form_data,
          id: router?.query?.id,
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

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
  };
};
