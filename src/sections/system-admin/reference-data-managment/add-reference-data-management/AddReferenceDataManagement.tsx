import FormTable from "@root/components/Table/FormTable";
import { useAddReferenceDataManagement } from "./useAddReferenceDataManagement";
import { FormProvider } from "@root/components/hook-form";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";

const AddReferenceDataManagement = () => {
  const { methods, handleSubmit, onSubmit, route } =
    useAddReferenceDataManagement();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 2 }}>
        <TableHeader title={route?.query?.name} />
        <FormTable
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "code",
              defaultValue: "RD01",
              label: "Code",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "name",
              defaultValue: "RD02",
              label: "Name",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "description",
              defaultValue: "Reporting and Recording Fostering",
              label: "Description",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "extraInformation",
              defaultValue: "Extra Information",
              label: "Extra Information",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
          ]}
        />
      </Card>
    </FormProvider>
  );
};

export default AddReferenceDataManagement;
