import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  defaultValueEhcpInfoForm,
  ehcpInfoFormDataFunction,
  ehcpInfoFormSchema,
  ehcpInfoFormValues,
} from ".";
import {
  useGetSingleStatutoryMedicalTypeDataQuery,
  usePatchStatutoryMedicalTypeDataMutation,
  usePostStatutoryMedicalTypeDataMutation,
} from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";
import { useEffect } from "react";

export const useStatutoryMedicalTypeInfo = () => {
  const router = useRouter();
  const ehcpInfoFormData = ehcpInfoFormDataFunction(
    router.query?.action === "view"
  );
  const [
    postStatutoryMedicalTypeDataTrigger,
    postStatutoryMedicalTypeDataStatus,
  ] = usePostStatutoryMedicalTypeDataMutation();

  const [
    patchStatutoryMedicalTypeDataTrigger,
    patchStatutoryMedicalTypeDataStatus,
  ] = usePatchStatutoryMedicalTypeDataMutation();

  // get api params
  const pathParams = {
    id: router.query?.id,
  };
  const queryParams = {
    statutoryMedicalType: router.query?.type,
  };
  const apiDataParameter = { pathParams, queryParams };
  const { data, isLoading } = useGetSingleStatutoryMedicalTypeDataQuery(
    apiDataParameter,
    {
      skip: !!!router.query?.id,
      refetchOnMountOrArgChange: true,
    }
  );

  const methods: any = useForm({
    resolver: yupResolver(ehcpInfoFormSchema),
    defaultValues: defaultValueEhcpInfoForm(ehcpInfoFormValues),
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(() => defaultValueEhcpInfoForm(data?.data));
  }, [data, reset]);

  const submitStatutoryMedicalTypeDataForm = async (data: any) => {
    if (!!router.query?.id) {
      patchStatutoryMedicalTypeDataForm(data);
      return;
    }
    const queryParams = {
      statutoryMedicalType: router.query?.type,
      ...(router?.query?.fosterChildId && {
        fosterChildId: router?.query?.fosterChildId,
      }),
    };
    const apiDataParameter = { queryParams, body: data };
    try {
      const res: any = await postStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
        query: {
          id: res?.data?.id,
          type: router.query.type,
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

  const patchStatutoryMedicalTypeDataForm = async (data: any) => {
    const pathParams = {
      id: router.query?.id,
    };
    const queryParams = {
      statutoryMedicalType: router.query?.type,
    };
    const apiDataParameter = { queryParams, body: data, pathParams };
    try {
      const res: any = await patchStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
        query: {
          id: router.query.id,
          type: router.query.type,
          action: "edit",
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
    ehcpInfoFormData,
    methods,
    handleSubmit,
    submitStatutoryMedicalTypeDataForm,
    postStatutoryMedicalTypeDataStatus,
    patchStatutoryMedicalTypeDataStatus,
    router,
    isLoading,
  };
};
