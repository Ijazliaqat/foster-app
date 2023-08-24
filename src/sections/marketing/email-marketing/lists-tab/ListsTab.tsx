// components
import EmailMarketingTable from '../EmailMarketingTable';
import { useListsTab } from './useListsTab';
// form react hook
import { FormProvider } from "@root/components/hook-form";


const ListsTab = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useListsTab();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EmailMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Remus Lupin (Foster Carer)",
            label: "name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "description",
            defaultValue: "256",
            label: "description",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "link",
            defaultValue: "Reporting and Recording Fostering",
            label: "link",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "email",
            defaultValue: "Devplan.PDF",
            label: "email",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
        ]}
      />

    </FormProvider>
  );
}

export default ListsTab
