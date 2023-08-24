// components
import FormTable from "@root/components/Table/FormTable";
import { useCertificateManagement } from "./useCertificateManagement";
// form react hook
import { FormProvider } from "@root/components/hook-form";
import TableHeader from "@root/components/TableHeader";
import { Card } from "@mui/material";

const CertificateManagement = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear } =
    useCertificateManagement();
  return (
    <Card sx={{ p: 2 }}>
      <TableHeader title="Child Education Info" />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "courseID",
              defaultValue: "66",
              label: "Course ID",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "courseName",
              defaultValue: "Child Protection",
              label: "Course Name",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "certificateRequired",
              defaultValue: "Yes",
              label: "Certificate Required",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "approver",
              defaultValue: "Draco ( Director)",
              label: "Approver",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "useDigitalSignature",
              defaultValue: "Yes",
              label: "Use Digital Signature",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "pushNotification",
              defaultValue: "Social Worker",
              label: "Social Worker",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
          ]}
        />
      </FormProvider>
    </Card>
  );
};

export default CertificateManagement;
