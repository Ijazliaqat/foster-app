import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
import { useState } from "react";
import {
  useDeleteAbsenceInfoUploadDocumentMutation,
  useGetAbsenceInfoDocumentQuery,
  usePostAbsenceInfoUploadDocumentMutation,
} from "@root/services/foster-child/education-records/absence-info/AbsenceInfoDocumentationAPI";

export const useAbsenceInfoDocument = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(undefined);
  const [page, setPage] = useState(0);

  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };
  const paramData = {
    params,
    childAbsenceInfoId: router?.query?.absence_info_id,
  };

  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetAbsenceInfoDocumentQuery(paramData, {
      refetchOnMountOrArgChange: true,
      // params,
    });

  const [postAbsenceInfoUploadDocument] =
    usePostAbsenceInfoUploadDocumentMutation();

  const submitAbsenceInfoDocumentData = async (data: any) => {
    if (!router?.query?.absence_info_id) {
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
      childAbsenceInfoId: router?.query?.absence_info_id,
      body: documentFormData,
    };
    try {
      const res: any = await postAbsenceInfoUploadDocument(
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

  const [deleteList] = useDeleteAbsenceInfoUploadDocumentMutation();

  const listDeleteHandler = (id: any) => {
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
    isLoading,
    isFetching,
    isError,
    isSuccess,
    setPage,
    submitAbsenceInfoDocumentData,
    setSearchValue,
    listDeleteHandler,
  };
};
