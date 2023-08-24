// components
import FormTable from "@root/components/Table/FormTable";
import { useDelegateCertificatesTable } from './useDelegateCertificatesTable';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { Box } from "@mui/material";


const DelegateCertificatesTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, } = useDelegateCertificatesTable();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable print share view certificate
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "attendee",
            defaultValue: "Remus Lupin (Foster Carer)",
            label: "Attendee",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "courseId",
            defaultValue: "256",
            label: "Course ID",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "courseName",
            defaultValue: "Reporting and Recording Fostering",
            label: "Course Name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "courseType",
            defaultValue: "Devplan.PDF",
            label: "Course Type",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "status",
            defaultValue: "Certificate Pending ",
            label: "Status ",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          // {
          //   inputType: "textField",
          //   type: "certificate",
          //   key: "manageCertifiacte",
          //   // defaultValue: "Delegate Certificate",
          //   label: "Manage Certificate",
          //   validation: (Yup: any) => {
          //     return Yup.string().required("Field is required")
          //   },
          // },
          {
            inputType: "textField",
            type: "text",
            key: "trainer",
            defaultValue: "Draco Malfoy ",
            label: "Trainer (If Applicable)",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },

        ]}
      />

    </FormProvider>
  );
}

export default DelegateCertificatesTable