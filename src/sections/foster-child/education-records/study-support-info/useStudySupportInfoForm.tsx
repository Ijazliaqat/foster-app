import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { defaultValues, StudySupportInfoFormSchema } from ".";
import { useForm } from "react-hook-form";
import {
  useGetStudySupportInfoByIdQuery,
  usePostStudySupportInfoApiMutation,
  usePutStudySupportInfoByIdMutation,
} from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useStudySupportInfoForm = () => {
  const router = useRouter();

  const { data } = useGetStudySupportInfoByIdQuery(router?.query?.id, {
    skip: router?.query?.action === "add",
    refetchOnMountOrArgChange: true,
  });
  const [postData, { isError, isSuccess, isLoading }] =
    usePostStudySupportInfoApiMutation();

  const [putData] = usePutStudySupportInfoByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(StudySupportInfoFormSchema),
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
      fromDate: data ? new Date(data?.data?.fromDate) : new Date(),
      toDate: data ? new Date(data?.data?.toDate) : new Date(),
    }));
  }, [data, reset]);

  const onSubmit = async (data: any) => {
    try {
      if (router?.query?.action === "add") {
        const res: any = await postData({
          body: { ...data, fosterChildId: router?.query?.fosterChildId },
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Added Successfully!`, {
          variant: "success",
        });
        router.push({
          pathname: `/foster-child/education-records/study-support-info/edit-study-support-info`,
          query: {
            fosterChildId: router?.query?.fosterChildId,
            id: res?.data?.id,
            action: "edit",
          },
        });
      } else if (router?.query?.action === "edit") {
        const res: any = await putData({
          body: data,
          id: router?.query?.id,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Update Successfully!`, {
          variant: "success",
        });
        router.push(
          `/foster-child/education-records/study-support-info?fosterChildId=${router?.query?.fosterChildId}`
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
