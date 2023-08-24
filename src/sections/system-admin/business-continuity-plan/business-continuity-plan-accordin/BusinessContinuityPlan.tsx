import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Box, Chip } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { useBusinessContinuityPlan } from "./useBusinessContinuityPlan";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ApprovedByOPTIONS, BcpManagerOPTIONS } from ".";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "BCP_Type",
    defaultValue: "Crisis Management Plan",
    label: "BCP Type",
    validation: (Yup: any) => {
      return Yup.string().required("BCP_Type is required").min(3);
    },
  },
  {
    inputType: "file",
    type: "file",
    key: "image",
    label: "Marketing Plan",
    size: { xs: 12, md: 6 },
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
          // <MyAvatar
          //   src={String(`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`)}
          //   sx={{
          //     mx: "auto",
          //   }}
          // />
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><PictureAsPdfIcon sx={{ color: "red", fontSize: "30px", }} /><span>Crisis Management Plan_12112021.pdf</span></Box>
        );

      return (<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><PictureAsPdfIcon sx={{ color: "red", fontSize: "30px", }} /><span>Crisis Management Plan_12112021.pdf</span></Box>);
    },
  },

  {
    inputType: "select",
    key: "Approved_By",
    label: "Approved By",
    options: ApprovedByOPTIONS,
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
    key: "Approved_Date",
    defaultValue: new Date(),
    label: "Approved Date",
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
    inputType: "select",
    key: "BCP_Manager",
    label: "BCP Manager (Role)",
    options: BcpManagerOPTIONS,
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
      return selectedUserType && selectedUserType.label;
    },
  }
];

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

export default function BusinessContinuityPlan() {
  const { methods, handleSubmit, uploadImage, onSubmit, onClear } =
    useBusinessContinuityPlan();

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
