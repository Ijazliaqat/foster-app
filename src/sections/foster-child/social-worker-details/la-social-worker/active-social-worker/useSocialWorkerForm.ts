import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  useGetSocialWorkerByIdQuery,
  usePostSocialWorkerApiMutation,
  usePutSocialWorkerByIdMutation,
} from "@root/services/foster-child/social-worker-details/la-social-worker/laSocialWorkerApi";
import { ActiveSocialWorkerFormSchema, defaultValues } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";

export const useSocialWorkerForm = () => {
  const router = useRouter();

  const { data } = useGetSocialWorkerByIdQuery(router?.query?.id, {
    refetchOnMountOrArgChange: true,
    skip: router?.query?.action === "add",
  });
  const [postData, { isError, isSuccess, isLoading }] =
    usePostSocialWorkerApiMutation();

  const [putData] = usePutSocialWorkerByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(ActiveSocialWorkerFormSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data?.data,
      startDateOfAssignment: new Date(data?.data?.startDateOfAssignment),
    }));
  }, [data, reset]);

  const onSubmit = async (data: any) => {
    try {
      if (router?.query?.action === "add") {
        const res: any = await postData({
          body: data,
          fosterChildId: router?.query?.fosterChildId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Added Successfully!`, {
          variant: "success",
        });
        router.push(
          `/foster-child/social-worker-details/la-social-worker?fosterChildId=${router?.query?.fosterChildId}`
        );
      } else if (router?.query?.action === "edit") {
        const res: any = await putData({
          body: data,
          id: router?.query?.id,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Update Successfully!`, {
          variant: "success",
        });
        router.push(
          `/foster-child/social-worker-details/la-social-worker?fosterChildId=${router?.query?.fosterChildId}`
        );
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isError,
    isSuccess,
    isLoading,
  };
};
