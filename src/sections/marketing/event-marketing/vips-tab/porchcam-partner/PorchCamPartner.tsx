import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { usePorchCamPartner } from "./usePorchCamPartner";
import { Box, Chip,  } from "@mui/material";
import { InvitedToOption, LocationOption, TypeOption } from ".";


const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "name",
    defaultValue: "Belinda Chen",
    label: "name",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
 
  {
    inputType: "select",
    key: "type",
    fullWidth:true,
    label: "type",
    options: TypeOption,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
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
        key={selectedUserType && selectedUserType.value}
        label={selectedUserType && selectedUserType.label}
      />
    },
  },

  {
    inputType: "select",
    key: "location",
    fullWidth:true,
    label: "location",
    options: LocationOption,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
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
        key={selectedUserType && selectedUserType.value}
        label={selectedUserType && selectedUserType.label}
      />
    },
  },
  
  {
    inputType: "textField",
    type: "text",
    key: "homeAddress",
    defaultValue: "10 Cedar Drive San Francisco, CA 94301",
    label: "Home Address",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "email",
    defaultValue: "belinda@email.com",
    label: "email",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "multi-select",
    type: "select",
    key: "invitedTo",
    defaultValue: [],
    label: "invitedTo",
    options: InvitedToOption,
    validation: (Yup: any) => {
      return Yup.array()
        .of(
          Yup.object().shape({
            label: Yup.string(),
            value: Yup.string(),
            bgColor: Yup.string(),
            textColor: Yup.string(),
          })
        )
        .test(
          "required",
          "Platform is required.",
          (arr: any) => arr.length > 0
        );
    },
    format: (selectedValues = []) => {
      return <DataChips options={selectedValues} />;
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "noEventsAttended",
    defaultValue: 45,
    label: "No. Events Attended",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "notes",
    defaultValue: "NOTES",
    label: "notes",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  }
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

export default function PorchCamPartner() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  usePorchCamPartner();

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
