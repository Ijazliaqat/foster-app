import {
  useIncidentAddPostMutation,
  useLazyIncidentByIdQuery,
  usePatchIncidentByIdMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentApi";
import router, { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

import { usePostIncidentDocumentsMutation } from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentUploadDocumentsApi";
import { defaultValues, formatters } from ".";

const useIncidentFrom = (action: any, id: any) => {
  // API,STATES,API,HANDERS
  const router = useRouter();
  const { fosterCarerId } = router.query;
  // FORM GLOBAL ISLOADING HANDER STATE
  const [isLoading, setIsLoading] = useState(true);
  const [modelOpen, setmodelOpen] = useState(false);
  const [isfatching, setisfatching] = useState(false);

  //UPLOADING MODEL HANDLER
  const modelHander = () =>
    modelOpen === true ? setmodelOpen(false) : setmodelOpen(true);
  //------------------------------------------------

  //---API HANDLERS
  const [incidentAddPostById] = useIncidentAddPostMutation();
  const [patchAllegationList] = usePatchIncidentByIdMutation();
  const [incidentById] = useLazyIncidentByIdQuery();

  const [
    postIncidentDocuments,
    {
      isLoading: uploadingDocumentisLoading,
      isSuccess: uploadingDocumentisSuccess,
    },
  ] = usePostIncidentDocumentsMutation();
  //FUNCTIONS

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await incidentById(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };

      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }

      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };
  // FORM SUBMIT HANDER FOR ADD AND EDIT ACTIONS
  const onSubmitHandler = (data: any) => {
    if (action === "add") {
      setisfatching(true);
      incidentAddPostById({
        params: {
          fosterCarerId: fosterCarerId,
        },
        body: data,
      })
        .unwrap()
        .then((res: any) => {
          setisfatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/personal-info/carer-chronology-of-events/incident",
            query: {
              action: "edit",
              id: `${res?.data.id}`,
              fosterCarerId: fosterCarerId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisfatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else if (action === "edit") {
      setisfatching(true);
      const payload = {
        id,
        ...data,
      };
      patchAllegationList(payload)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edit Successfully", {
            variant: "success",
          });
          setisfatching(false);
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          setisfatching(false);
          router.push({
            pathname: "/carer-info/personal-info/carer-chronology-of-events",
            query: { fosterCarerId: fosterCarerId },
          });
        });
    } else {
      return null;
    }
  };
  // UPLOAD DOCUMENTS
  const onUploadSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.file);
    formData.append("incidentId", id);
    postIncidentDocuments(formData)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Edit Successfully", {
          variant: "success",
        });
        setmodelOpen(false);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    incidentById,
    onSubmitHandler,
    getDefaultValue,
    onUploadSubmit,
    modelHander,
    isfatching,
    modelOpen,
    isLoading,
    uploadingDocumentisSuccess,
    uploadingDocumentisLoading,
    fosterCarerId,
  };
};

export default useIncidentFrom;
