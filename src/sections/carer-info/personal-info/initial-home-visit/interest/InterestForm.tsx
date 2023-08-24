import FormGenerator from "../form-generator/FormGenerator";
import {
  defaultValueInterestForm,
  interestFormSchema,
  interestFormValues,
} from ".";
import { useInterestForm } from "./useInterestForm";

const InterestForm = () => {
  const {
    submitInterestForm,
    postInitialHomeInterestDataStatus,
    interestFormFieldsInfo,
    user,
    data,
    isLoading,
  } = useInterestForm();
  return (
    <FormGenerator
      FormSchema={interestFormSchema}
      defaultValues={defaultValueInterestForm(interestFormValues)}
      resetDefaultValues={defaultValueInterestForm(data)}
      fieldsInfo={interestFormFieldsInfo}
      submitClickHand={submitInterestForm}
      isFormSubmitting={postInitialHomeInterestDataStatus.isLoading}
      isSkeletonVisible={isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default InterestForm;
