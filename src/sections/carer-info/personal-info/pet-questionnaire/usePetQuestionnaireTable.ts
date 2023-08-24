import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetPetQuestionnaireTableApiQuery } from "@root/services/carer-info/personal-info/pet-questionnaire/petQuestionnaireApi";
import { useRef } from "react";
import { petQuestionnaireTable } from "./";

export const usePetQuestionnaireTable = () => {
  const tableHeaderRef = useRef<any>();

  const { makePath } = usePath()

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = petQuestionnaireTable(makePath)

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetPetQuestionnaireTableApiQuery({ params });
  const petQuestionnaire = data?.questionnaire_list;
  const meta = data?.meta;

  return {
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    petQuestionnaire,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    makePath,
    columns
  };
};
