import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useCrudFormTable } from "./useCrudFormTable";
import dayjs from "dayjs";
import { Box, Button, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";

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

const OPTIONS2 = [
  {
    label: "Oliver Hansen",
    value: 1,
    bgColor: "green",
    textColor: "white",
  },
  {
    label: "John Doe",
    value: 2,
    bgColor: "green",
    textColor: "white",
  },
];

const COLUMNS = [
  {
    inputType: "file",
    type: "file",
    key: "image",
    label: "Image",
    size: { xs: 12, md: 12 },
    // Use this validation for images
    validation: (Yup: any) => {
      return Yup.mixed()
        .test("required", "Image is required", (value: any) => {
          if (!value) return false;
          if (typeof value === "string") return !!value;
          return value.type;
        })
        .test("fileFormat", "Unsupported Format", (value: any) => {
          if (!value) return false;
          if (typeof value === "string") return !!value;
          return value && FILE_FORMATS.includes(value.type);
        })
        .test(
          "fileSize",
          `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
          (value: any) => {
            if (!value) return false;
            if (typeof value === "string") return !!value;
            return value && value.size <= MAX_FILE_SIZE;
          }
        );
    },
    format: (imgUrl: any) => {
      if (!!imgUrl)
        return (
          <MyAvatar
            src={String(`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`)}
            sx={{
              mx: "auto",
            }}
          />
        );

      return "-";
    },
  },
  {
    inputType: "multi-select",
    type: "select",
    key: "platforms",
    defaultValue: [],
    label: "Platforms",
    options: OPTIONS,
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
    key: "name",
    defaultValue: "John",
    label: "Name",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "select",
    key: "user-type",
    label: "User Type",
    options: OPTIONS2,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      return selectedUserType && selectedUserType.label;
    },
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
    inputType: "checkbox",
    key: "continue",
    defaultValue: false,
    label: "Should Continue?",
    format: (shouldContinue: boolean) => {
      return shouldContinue ? "Yes" : "No";
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

export default function CrudFormTable() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
    useCrudFormTable();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        beforeAdd={(methods: any) => uploadImage("image", methods)}
        beforeUpdate={(methods: any) => uploadImage("image", methods)}
        columns={COLUMNS}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Button variant="outlined" sx={{ ml: 2 }} onClick={onClear}>
        Clear
      </Button>
      <Box>
        <Typography component="h4" variant="h4">
          Table data:
        </Typography>
        {tableData}
      </Box>
    </FormProvider>
  );
}
