import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useDigitalSafeguardingInFostering } from "./useDigitalSafeguardingInFostering";

import { Box, Button, Checkbox, Chip, Typography } from "@mui/material";
import { PersonOptions } from ".";


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

export default function December2021FosterMeetup() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  useDigitalSafeguardingInFostering();

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
