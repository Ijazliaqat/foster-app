import {
  useIncidentListQuery,
  useDeleteIncidentByIdMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentApi";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteIncidentDocumentsMutation,
  useIncidentUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentUploadDocumentsApi";
import React from "react";
import { useRouter } from "next/router";
const useIncidentTable = () => {
  const Router: any = useRouter();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler, params } =
    useTableParams();
  const { action, id, fosterCarerId } = Router.query;
  const [search, setsearch] = React.useState("");
  const {
    data: incidentlist,
    isError: incidentListError,
    isLoading: incidentListIsloading,
    isFetching: incidentlistIsfetching,
    isSuccess: incidentListIsSuccess,
  } = useIncidentListQuery({
    params: {
      fosterCarerId: fosterCarerId,
      search: search,
      ...params,
    },
  });

  const {
    data: incidentUploadlist,
    isError: incidentUploadListError,
    isLoading: incidentUploadListIsloading,
    isFetching: incidentUploadlistIsfetching,
    isSuccess: incidentUploadListIsSuccess,
  } = useIncidentUploadDocumentListQuery({
    params: {
      incidentId: id,
      search: search,
    },
  });

  const [deleteIncidentByID] = useDeleteIncidentByIdMutation({});
  const [deleteIncidentDocuments] = useDeleteIncidentDocumentsMutation({});

  const deleteHander = (id: any) => {
    deleteIncidentByID(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  // UPLOAD DELETE DOCUMENTS
  const uploadDeleteHandler = (id: any) => {
    deleteIncidentDocuments({ id: id })
      .unwrap()
      .then((res) => {
        console.log(res);

        enqueueSnackbar("Information deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return {
    incidentlist,
    incidentListError,
    incidentListIsloading,
    incidentlistIsfetching,
    incidentListIsSuccess,
    incidentUploadlist,
    incidentUploadListError,
    incidentUploadListIsloading,
    incidentUploadlistIsfetching,
    incidentUploadListIsSuccess,
    setsearch,
    deleteHander,
    pageChangeHandler,
    sortChangeHandler,
    uploadDeleteHandler,
    fosterCarerId,
  };
};

export default useIncidentTable;
