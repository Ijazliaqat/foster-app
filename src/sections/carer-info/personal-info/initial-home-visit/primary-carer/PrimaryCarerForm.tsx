import FormGenerator from "../form-generator/FormGenerator";
import {
  defaultValuesPrimaryCarer,
  primaryCarerFormSchema,
  primaryCarerFormValues,
} from ".";
import { usePrimaryCarerForm } from "./usePrimaryCarerForm";

const PrimaryCarerForm = () => {
  const {
    submitPrimaryCarerForm,
    postPrimaryCarerDataStatus,
    user,
    primaryCarerFieldsInfo,
    data,
    isLoading,
  } = usePrimaryCarerForm();
  return (
    <FormGenerator
      FormSchema={primaryCarerFormSchema}
      defaultValues={defaultValuesPrimaryCarer(primaryCarerFormValues)}
      resetDefaultValues={defaultValuesPrimaryCarer(data)}
      fieldsInfo={primaryCarerFieldsInfo}
      submitClickHand={submitPrimaryCarerForm}
      isFormSubmitting={postPrimaryCarerDataStatus.isLoading}
      isSkeletonVisible={isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default PrimaryCarerForm;
