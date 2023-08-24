import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
// import {
//   childDetailsdefaultValues,
//   childDetailsformSchema,
//   formatters,
// } from "./RiskAssessmentData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazyGetChildChronologyOfEventsRiskAssessmentByIdQuery,
  usePatchChildChronologyOfEventsRiskAssessmentByIdMutation,
  usePostChildChronologyOfEventsRiskAssessmentMutation,
} from "@root/services/foster-child/child-background-info/child-chronology-of-events/RiskAssessmentAPI";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
import { childDetailsdefaultValues, childDetailsformSchema, formatters } from ".";

export const useChildRAChildDetailsForm = () => {
  const router = useRouter();
  const { action, id, fosterChildId } = router.query;
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const [getRiskAssessmentList] = useLazyGetChildChronologyOfEventsRiskAssessmentByIdQuery();
  const [postRiskAssessmentData] = usePostChildChronologyOfEventsRiskAssessmentMutation({});
  const [editRiskAssessmentList] = usePatchChildChronologyOfEventsRiskAssessmentByIdMutation();

  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getRiskAssessmentList({ id });
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return childDetailsdefaultValues;
      }
      const responseData = { ...data.data.raChildDetails };

      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }
      parseDatesToTimeStampByKey(responseData);
      return responseData;
    } else {
      setIsLoading(false);
      return childDetailsdefaultValues;
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(childDetailsformSchema),
    defaultValues: getDefaultValue,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //OnSubmit Function
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postRiskAssessmentData({
        raChildDetails: { ...data },
        fosterChildId,
        childName: "child",
        gender: "male",
        notes: "notes",
      })
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/child-background-info/child-chronology-of-events/risk-assessment",
            query: { action: "edit", id: `${res?.data.id}`, fosterChildId },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      setIsFetching(true);

      editRiskAssessmentList({
        addRiskAssessmentRequestDto: {
          raChildDetails: { ...data },
          fosterChildId,
          childName: "child",
          gender: "male",
          notes: "notes",
        },
        id: id,
      })
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          setIsFetching(false);
        });
    } else {
      return null;
    }
  };
  return {
    router,
    onSubmit,
    isLoading,
    getDefaultValue,
    theme,
    handleSubmit,
    methods,
    isFetching,
    isSubmitting,
    action,
    id,
    fosterChildId,
  };
};
