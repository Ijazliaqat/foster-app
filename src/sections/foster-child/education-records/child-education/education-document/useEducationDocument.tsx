import { useTheme } from "@mui/material";
import {  useState } from "react";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import {
  useGetChildEducationInfoDocumentDataQuery,
  usePostEducationInfoDocumentDataMutation,
  useDeleteEducationInfoDocumentDataByIdMutation
} from "@root/services/foster-child/education-records/child-education-info/documents";

export const useEducationDocument = () => {
  const theme: any = useTheme();
  const { user }: any = useAuth();
  const { query }: any = useRouter();
  // ----------------------------------------------------------------------
  const [
    postEducationInfoDocumentDataTrigger,
  ] = usePostEducationInfoDocumentDataMutation();

  const [
    deleteEducationInfoDocumentDataByIdTrigger,
  ] = useDeleteEducationInfoDocumentDataByIdMutation();

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };
  const pathParams = {
    educationInfoId: query?.educationInfoId,
  };
  const dataParameter = { params, pathParams };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetChildEducationInfoDocumentDataQuery(dataParameter, {
      skip: !!!query?.educationInfoId,
      refetchOnMountOrArgChange: true,
    });
  console.log("data", data);

  const submitEducationInfoDocument = async (data: any) => {
    if (!!!query?.educationInfoId) {
      enqueueSnackbar("Please submit the Education Info form first", { variant: "error" });
      return;
    }

    const documentFormData = new FormData();

    documentFormData.append("type", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("file", data.chosenFile);
    documentFormData.append("educationId", query?.educationInfoId);

    const putDataParameter = {
      body: documentFormData,
    };
    try {
      const res: any = await postEducationInfoDocumentDataTrigger(
        putDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: data?.id,
    };
    const apiDataParameter = { pathParams };
    try {
      const res: any = await deleteEducationInfoDocumentDataByIdTrigger(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    user,
    isFetching,
    submitEducationInfoDocument,
    query,
    onDeleteConfirm
  };
};
