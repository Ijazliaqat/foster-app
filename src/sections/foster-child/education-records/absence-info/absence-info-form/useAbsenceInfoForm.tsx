import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { absenceInfoDefaultValues, formSchema } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useGetAbsenceInfoByIdQuery,
  usePatchAbsenceInfoMutation,
  usePostAbsenceInfoMutation,
} from "@root/services/foster-child/education-records/absence-info/AbsenceInfoAPI";
import { useEffect } from "react";

export const useAbsenceInfoForm = (props: any) => {
  const router = useRouter();
  const { disabled, defaultValues } = props;

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: defaultValues ?? absenceInfoDefaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const [postAbsenceInfoList] = usePostAbsenceInfoMutation();
  const [patchAbsenceInfoList] = usePatchAbsenceInfoMutation();

  const onSubmit = async (data: any) => {
    if (!!router?.query?.absence_info_id) {
      return patchAbsenceInfoFormHanlder(data);
    }

    // Post API of Absence Info
    try {
      const res: any = await postAbsenceInfoList(data).unwrap();

      router.push(
        `/foster-child/education-records/absence-info/add-absence-info?fosterChildId=${router?.query?.fosterChildId}&absence_info_id=${res?.id}`
      );
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch API of Absence Info
  const patchAbsenceInfoFormHanlder = async (data: any) => {
    const patchData = { body: data, id: router?.query?.absence_info_id };
    try {
      const res: any = await patchAbsenceInfoList(patchData).unwrap();
      if (
        router?.asPath.split("/").pop() === "view" ||
        router?.asPath.split("/").pop() === "edit"
      ) {
        router.push(
          `/foster-child/education-records/absence-info?fosterChildId=${router?.query?.fosterChildId}`
        );
      } else {
        router.push(
          `/foster-child/education-records/absence-info/add-absence-info?fosterChildId=${router?.query?.fosterChildId}&absence_info_id=${router?.query?.absence_info_id}`
        );
      }
      enqueueSnackbar(res?.message ?? `Details Updated Successfully`, {
        variant: "success",
      });
      router.push(
        `/foster-child/education-records/absence-info?fosterChildId=${router?.query?.fosterChildId}`
      );
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
    router,
    disabled,
  };
};
