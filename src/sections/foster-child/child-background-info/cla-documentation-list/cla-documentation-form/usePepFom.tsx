import { enqueueSnackbar } from "notistack";
import { PEPFormValidation,  } from "..";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  usePatchPepClaDocumentationListMutation,
  usePostPepClaDocumentationListMutation,
} from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";

export const usePepFom = (props: any) => {
  const router = useRouter();
  console.log(router, "my router dfssgdfgdsgsdfg")

  const { disabled, defaultValues } = props;


  const methods: any = useForm({
    resolver: yupResolver(PEPFormValidation),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const [postPepClaDocumentationList] =
    usePostPepClaDocumentationListMutation();
  const [patchPepClaDocumentationList] =
    usePatchPepClaDocumentationListMutation();

  const onSubmit = async (data: any) => {

    if (!!router?.query?.cla_document_id) {
      return patchPEPHanlder(data);
    }

    const updatedData = { ...data, document: "PEP Personal Educational Plan" };
    
    // Post EHCP API of CLA Documentation
    try {
      const res: any = await postPepClaDocumentationList(updatedData).unwrap();
      console.log(res);
      router.push(`/foster-child/child-background-info/cla-documentation?fosterChildId=${router?.query?.fosterChildId}`);
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  // Patch PEP API CLA of Documentation
  const patchPEPHanlder = async (data: any) => {
    const patchData = { body: data, id: router?.query?.cla_document_id };
    console.log(patchData);

    try {
      const res: any = await patchPepClaDocumentationList(patchData).unwrap();
      console.log(res);
      router.push(`/foster-child/child-background-info/cla-documentation?fosterChildId=${router?.query?.fosterChildId}`);
      enqueueSnackbar(res?.message ?? `Details UPdated Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    disabled,
    router,
    isSubmitting,
  };
};
