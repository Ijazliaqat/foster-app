import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchoolDetailInfoFormSchema, defaultValues } from ".";
import {
  usePostSchoolDetailInfoApiMutation,
  useGetSchoolDetailInfoByIdQuery,
  usePutSchoolDetailInfoByIdMutation,
} from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSchoolDetailInfoForm = () => {
  const router: any = useRouter();
  const { action, schoolInfoId, fosterChildId } = router.query;

  const { data } = useGetSchoolDetailInfoByIdQuery(schoolInfoId, {
    refetchOnMountOrArgChange: true,
    skip: action === "add",
  });
  const [postData, { isError, isSuccess, isLoading }] =
    usePostSchoolDetailInfoApiMutation();

  const [putData] = usePutSchoolDetailInfoByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(SchoolDetailInfoFormSchema),
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
    }));
  }, [data, reset]);

  const onSubmit = async (data: any) => {
    try {
      if (action === "add") {
        const res: any = await postData({
          body: data,
          fosterChildId: fosterChildId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Added Successfully!`, {
          variant: "success",
        });
        router.push({
          pathname: `/foster-child/education-records/school-detail-info/edit-school-detail`,
          query: {
            action: "edit",
            fosterChildId: fosterChildId,
            schoolInfoId: res?.data?.id,
          },
        });
      } else if (action === "edit") {
        const res: any = await putData({
          body: data,
          schoolInfoId: schoolInfoId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Update Successfully!`, {
          variant: "success",
        });
        router.push(
          `/foster-child/education-records/school-detail-info?fosterChildId=${fosterChildId}`
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
