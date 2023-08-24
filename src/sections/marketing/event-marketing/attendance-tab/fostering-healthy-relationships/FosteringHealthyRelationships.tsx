import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useFosteringHealthyRelationships } from "./useFosteringHealthyRelationships";
import dayjs from "dayjs";
import { Box, Button, Checkbox, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { PersonOptions } from ".";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

///---------------------------------
// Constants
const OPTIONS = [
  {
    label: "Oliver Hansen",
    value: "Oliver Hansen",
    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Van Henry",
    value: "Van Henry",

    bgColor: "blue",
    textColor: "white",
  },
  {
    label: "April Tucker",
    value: "April Tucker",

    bgColor: "grey",
    textColor: "white",
  },
  {
    label: "Ralph Hubbard",
    value: "Ralph Hubbard",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Omar Alexander",
    value: "Omar Alexander",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Carlos Abbott",
    value: "Carlos Abbott",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Miriam Wagner",
    value: "Miriam Wagner",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Bradley Wilkerson",
    value: "Bradley Wilkerson",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Virginia Andrews",
    value: "Virginia Andrews",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Kelly Snyder",
    value: "Kelly Snyder",

    bgColor: "green",
    textColor: "white",
  },
];

const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "name",
    defaultValue: "November 2021 Foster Carers Meetup, Fostering",
    label: "name",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required");
    },
  },
  
  {
    inputType: "select",
    key: "person",
    label: "person",
    options: PersonOptions,
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
    inputType: "checkbox",
    key: "showedUp",
    defaultValue: false,
    label: "Showed up?",
    format: (shouldContinue: boolean) => {
      return <Checkbox  disabled checked={shouldContinue} />;
    },
  },
  {
    inputType: "checkbox",
    key: "rsvPed",
    defaultValue: false,
    label: "RSVPed",
    format: (shouldContinue: boolean) => {
      return <Checkbox  disabled checked={shouldContinue} />;
    },
  },
  {
    inputType: "checkbox",
    key: "invited",
    defaultValue: false,
    label: "Invited",
    format: (shouldContinue: boolean) => {
      return <Checkbox  disabled checked={shouldContinue} />;
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "date",
    defaultValue: "12/12/2021",
    label: "Date",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required");
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "notes",
    defaultValue:
      "Deepa was really excited about this small event and wants to be invited to any in the future.",
    label: "notes",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required");
    },
  },
];

///---------------------------------
// This component is here for testing purposes only
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

///---------------------------------

export default function FosteringHealthyRelationships() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  useFosteringHealthyRelationships();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        beforeAdd={(methods: any) => uploadImage("image", methods)}
        beforeUpdate={(methods: any) => uploadImage("image", methods)}
        columns={COLUMNS}
      />
    </FormProvider>
  );
}
