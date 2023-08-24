import dayjs from "dayjs";
import { useState } from "react";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteFamilyPersonUploadDocumentMutation,
  useGetFamilyPersonUploadDocumentQuery,
  usePostFamilyPersonUploadDocumentMutation,
} from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonDocumentsAPI";

export const useFamilyPersonDocument = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(undefined);
  const [page, setPage] = useState(0);
  console.log(router?.asPath.split("/").pop());

  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };

  const paramData = {
    params,
    childFamilyOrgInfoId: router?.query?.family_person_id,
  };

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetFamilyPersonUploadDocumentQuery(paramData, {
      refetchOnMountOrArgChange: true,
    });
  const [postFamilyPersonUploadDocument] =
    usePostFamilyPersonUploadDocumentMutation();

  console.log(data);

  const submitFamilyPersonDocumentData = async (data: any) => {
    if (!router?.query?.family_person_id) {
      return enqueueSnackbar("Please Fill the Form First", {
        variant: "error",
      });
    }
    const documentFormData = new FormData();

    documentFormData.append("documentType", data.documentType);
    documentFormData.append(
      "documentDate",
      dayjs(data.documentDate).format("DD/MM/YYYY")
    );
    documentFormData.append("password", data.password);
    documentFormData.append("chooseFiles", data.chosenFile);

    const apiDataParameter = {
      childFamilyOrgInfoId: router?.query?.family_person_id,
      body: documentFormData,
    };
    try {
      const res: any = await postFamilyPersonUploadDocument(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? "Details Submitted Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const [deleteList] = useDeleteFamilyPersonUploadDocumentMutation();

  const listDeleteHandler = (id: any) => {
    console.log(id);

    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    data,
    router,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    setPage,
    setSearchValue,
    listDeleteHandler,
    submitFamilyPersonDocumentData,
  };
};
