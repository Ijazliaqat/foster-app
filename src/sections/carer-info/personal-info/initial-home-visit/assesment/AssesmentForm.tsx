import FormGenerator from "../form-generator/FormGenerator";
import {
  assesmentFormValues,
  assessmentFormSchema,
  defaultValuesAssesmentForm,
} from ".";
import { useAssesmentForm } from "./useAssesmentForm";

const AssesmentForm = () => {
  const {
    submitAssesmentForm,
    data,
    isLoading,
    postInitialHomeAssessmentDataStatus,
    assesmentFormFieldsInfo,
    user,
  } = useAssesmentForm();
  return (
    <FormGenerator
      FormSchema={assessmentFormSchema}
      defaultValues={defaultValuesAssesmentForm(assesmentFormValues)}
      resetDefaultValues={defaultValuesAssesmentForm(data)}
      fieldsInfo={assesmentFormFieldsInfo}
      submitClickHand={submitAssesmentForm}
      isFormSubmitting={postInitialHomeAssessmentDataStatus?.isLoading}
      isSkeletonVisible={isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default AssesmentForm;
