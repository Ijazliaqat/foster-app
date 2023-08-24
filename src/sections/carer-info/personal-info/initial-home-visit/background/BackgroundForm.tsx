import FormGenerator from "../form-generator/FormGenerator";
import {
  backgroundFormSchema,
  backgroundFormValues,
  defaultValuesBackgroundForm,
} from ".";
import { useBackgroundForm } from "./useBackgroundForm";

const BackgroundForm = () => {
  const {
    submitBackgroundForm,
    data,
    isLoading,
    postInitialHomeBackgroundDataStatus,
    backgroundFormFieldsInfo,
    user,
  } = useBackgroundForm();
  return (
    <FormGenerator
      FormSchema={backgroundFormSchema}
      defaultValues={defaultValuesBackgroundForm(backgroundFormValues)}
      resetDefaultValues={defaultValuesBackgroundForm(data)}
      fieldsInfo={backgroundFormFieldsInfo}
      submitClickHand={submitBackgroundForm}
      isFormSubmitting={postInitialHomeBackgroundDataStatus.isLoading}
      isSkeletonVisible={isLoading}
      defaultRole={user?.defaultRole}
    />
  );
};

export default BackgroundForm;
