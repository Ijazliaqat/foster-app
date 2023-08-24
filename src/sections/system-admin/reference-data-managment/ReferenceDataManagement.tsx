import FormTable from "@root/components/Table/FormTable";
import { useReferenceDataManagement } from "./useReferenceDataManagement";
import { FormProvider } from "@root/components/hook-form";
import TableHeader from "@root/components/TableHeader";
import { Box, Card } from "@mui/material";
import RefData from "../../../assets/svg/ref-data.svg";
import Image from "next/image";
import dayjs from "dayjs";

const ReferenceDataManagement = () => {
  const { methods, handleSubmit, onSubmit, handlerAddRow } =
    useReferenceDataManagement();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 2 }}>
        <TableHeader title={"Reference Data Management"} />
        <FormTable
          tableKey="exampleTable"
          add
          onAddRowHandler={handlerAddRow}
          columns={[
            {
              inputType: "textField",
              type: "text",
              key: "refDataCode",
              defaultValue: "RD01",
              label: "Ref. Data Code",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "refDataName",
              defaultValue: "RD02",
              label: "Ref. Data Name",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            // {
            //   inputType: "textField",
            //   type: "text",
            //   key: "refDataValue",
            //   defaultValue: "Reporting and Recording Fostering",
            //   label: "Ref, Data Value",
            //   validation: (Yup: any) => {
            //     return Yup.string().required("Field is required")
            //   },
            // },
            {
              // inputType: "file",
              // type: "file",
              key: "refDataValue",
              label: "Ref, Data Value",
              // size: { xs: 12, md: 6 },
              hideInForm: true,
              format: (imgUrl: any) => {
                if (!!imgUrl) return "";

                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      onClick={handlerAddRow}
                      src={RefData}
                      alt="ref-data-val"
                    />
                  </Box>
                );
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "description",
              defaultValue:
                "categorize groups of people according to their cultural expression and identification",
              label: "Description",
              validation: (Yup: any) => {
                return Yup.string().required("Field is required");
              },
            },
            {
              inputType: "datePicker",
              type: "lastUpdatedDate",
              key: "lastUpdatedDate",
              defaultValue: new Date(),
              label: "Last Updated Date ",
              validation: (Yup: any) => {
                return Yup.date()
                  .typeError("Last updated date is required")
                  .required("Last updated date is required");
              },
              format: (date: any) => {
                return dayjs(date).format("DD/MM/YYYY");
              },
            },
          ]}
        />
      </Card>
    </FormProvider>
  );
};

export default ReferenceDataManagement;
