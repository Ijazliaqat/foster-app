import React, { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { educationInfoDefaultValues, educationInfoFormDataFunction } from ".";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import {
  usePatchEducationInfoDataMutation,
  usePostEducationInfoDataMutation,
  useGetSingleEducationInfoDataQuery,
} from "@root/services/foster-child/education-records/child-education-info/ChildEducationInfoList";

export const useChildEducationForm = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const childEducationInfoFormData = educationInfoFormDataFunction(
    router?.query?.action === "view"
  );

  const [postEducationInfoDataTrigger, postEducationInfoDataStatus] =
    usePostEducationInfoDataMutation();

  const [patchEducationInfoDataTrigger, patchEducationInfoDataStatus] =
    usePatchEducationInfoDataMutation();

  const methods: any = useForm({
    // resolver: yupResolver(SchoolDetailInfoFormSchema),
    defaultValues: educationInfoDefaultValues,
  });
  const { data, isLoading } = useGetSingleEducationInfoDataQuery(
    {
      educationInfoId: router?.query?.educationInfoId,
    },
    {
      skip: !!!router?.query?.educationInfoId,
      refetchOnMountOrArgChange: true,
    }
  );
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => ({ ...formValues, ...data?.data }));
  }, [data]);

  const onSubmitHandler = async (data: any) => {
    const formData = {
      ...data,
      teacherPhone: Number(data?.teacherPhone),
      schoolBusPhone: Number(data?.schoolBusPhone),
    };
    console.log(formData);
    const apiDataParameter = {
      body: formData,
      fosterChildId: router?.query?.fosterChildId,
    };
    if (!!router.query?.educationInfoId) {
      patchEducationInfoForm(data);
      return;
    }

    try {
      const res: any = await postEducationInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/education-records/child-education/child-education-info`,
        query: {
          educationInfoId: res?.data?.id,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });

      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const patchEducationInfoForm = async (data: any) => {
    const pathParams = {
      educationInfoId: router?.query?.educationInfoId,
    };
    const formData = {
      ...data,
      teacherPhone: Number(data?.teacherPhone),
      schoolBusPhone: Number(data?.schoolBusPhone),
    };
    const apiDataParameter = { body: formData, pathParams };
    try {
      const res: any = await patchEducationInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/education-records/child-education/child-education-info`,
        query: {
          educationInfoId: router.query?.educationInfoId,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
        },
      });
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    childEducationInfoFormData,
    methods,
    isSubmitting,
    theme,
    handleSubmit,
    onSubmitHandler,
    isLoading,
    router,
    postEducationInfoDataStatus,
    patchEducationInfoDataStatus,
  };
};
