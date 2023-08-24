import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useSuspectedTable } from "./useSuspectedTable";
import dayjs from "dayjs";
import { Box, Button, Typography } from "@mui/material";

const SuspectedTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
    useSuspectedTable();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        route={route}
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            defaultValue: "Remus corner",
            label: "Name",
            validation: (Yup: any) => {},
          },
          {
            inputType: "datePicker",
            type: "dob",
            key: "dob",
            defaultValue: new Date(),
            label: "DOB",
            validation: (Yup: any) => {
              return Yup.date()
                .typeError("End date is required")
                .required("End date is required");
            },
            format: (date: any) => {
              return dayjs(date).format("DD/MM/YYYY");
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "ethnicity",
            defaultValue: "Reporting ",
            label: "Ethnicity",
            validation: (Yup: any) => {},
          },
          {
            inputType: "textField",
            type: "text",
            key: "address",
            defaultValue: "Once upon a time",
            label: "Address",
            validation: (Yup: any) => {},
          },
        ]}
      />
    </FormProvider>
  );
};

export default SuspectedTable;
