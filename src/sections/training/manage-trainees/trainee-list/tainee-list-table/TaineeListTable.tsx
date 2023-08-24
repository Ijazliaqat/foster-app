import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useTraineeTable } from "./useTraineeTable";

const TaineeListTable = () => {
  const { methods, handleSubmit, onSubmit } = useTraineeTable();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        view
        share
        print
        disabled
        setShareModal
        handleShare
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "traineeName",
            defaultValue: "Jon",
            label: "Trainee Name",
            validation: (Yup: any) => {
              // return Yup.string().required("Email is required").min(3);
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "role",
            defaultValue: "256",
            label: "Role",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "trainingNeed",
            defaultValue: "Reporting",
            label: "Training Need",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "developmentPlan",
            defaultValue: "Devplan",
            label: "Development Plan",
            validation: (Yup: any) => {},
          },
        ]}
      />
    </FormProvider>
  );
};

export default TaineeListTable;
