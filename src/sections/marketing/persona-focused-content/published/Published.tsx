// components
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { usePublished } from "./usePublished";
import FormTable from "@root/components/Table/FormTable";
import dayjs from "dayjs";
import { Box, Chip } from "@mui/material";
import { ARTICLEOPTIONS } from ".";

function DataChips({ options }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "unwrap",
        gap: 1,
      }}
    >
      {options
        .slice(0, 3)
        .map(
          ({
            value,
            label,
            bgColor = "#e4e7eb",
            textColor = "#212b36",
          }: any) => (
            <Chip
              sx={{
                backgroundColor: bgColor,
                color: textColor,
                fontSize: "10px !important",
                p: "5px 10px",
                maxHeight: "22px",

                "& .MuiChip-label": {
                  p: 0,
                },
              }}
              key={value}
              label={label}
            />
          )
        )}
    </Box>
  );
}
const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "title",
    defaultValue: "John",
    label: "Tilte",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "select",
    key: "article",
    label: "Article",
    options: ARTICLEOPTIONS,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      console.log("selectedUserType", selectedUserType)
      // return selectedUserType && selectedUserType.label;
      return <Chip
        sx={{
          backgroundColor: selectedUserType.bgColor,
          color: selectedUserType.textColor,
          fontSize: "10px !important",
          p: "5px 10px",
          maxHeight: "22px",

          "& .MuiChip-label": {
            p: 0,
          },
        }}
        // key={value}
        label={selectedUserType.label}
      />
    },
  },
  {
    inputType: "datePicker",
    type: "dob",
    key: "firstWeekTraffic",
    defaultValue: new Date(),
    label: "FirstWeek Traffic",
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
    key: "feedbeck",
    defaultValue: "",
    label: "Feedbeck",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },


];
const Published = () => {
  const { methods, handleSubmit, onSubmit, onClear } = usePublished();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <FormTable tableKey="exampleTable" columns={COLUMNS} />
  </FormProvider>
   
  );
};

export default Published;
