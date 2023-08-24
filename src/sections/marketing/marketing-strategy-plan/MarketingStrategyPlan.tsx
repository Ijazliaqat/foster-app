import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { useMarketingStrategyPlan } from "./useMarketingStrategyPlan";
import { Box, Card, Chip } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

// Constants
const OPTIONS = [

  {
    label: "Market Development Strategy",
    value: "1",

    bgColor: "#C4CE4C",
    textColor: "#1D1D1D",
  },
  {
    label: "Product Development Strategy",
    value: "2",

    bgColor: "#73F2A6",
    textColor: "#1D1D1D",
  },
  {
    label: "Diversification Strategy",
    value: "3",

    bgColor: "#F29973",
    textColor: "#1D1D1D",
  },
];


const COLUMNS = [
  {
    inputType: "select",
    key: "strategyType",
    label: "Strategy Type",
    options: OPTIONS,
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
          <Box sx={{display:"flex",alignItems:"center",gap:"8px"}}><PictureAsPdfIcon sx={{color:"red",fontSize:"30px",}} /><span>ABC.PDF</span></Box>
        );

      return (<Box sx={{display:"flex",alignItems:"center",gap:"8px"}}><PictureAsPdfIcon sx={{color:"red",fontSize:"30px",}} /><span>ABC.PDF</span></Box>);
    },
  },

  {
    inputType: "textField",
    type: "text",
    key: "author",
    fullWidth:true,
    defaultValue: "Drive traffic to site, CPC >$2.25",
    label: "Authors",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "approvedByRole",
    fullWidth:true,
    defaultValue: "$2,500.00",
    label: "Approved By (Role)",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "datePicker",
    type: "dob",
    key: "approvalDate",
    fullWidth:true,
    defaultValue: new Date(),
    label: "Approval Date",
    validation: (Yup: any) => {
      return Yup.date()
        .typeError("End date is required")
        .required("End date is required");
    },
    format: (date: any) => {
      return dayjs(date).format("DD/MM/YYYY");
    },
  },
  


]

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

const MarketingStrategyPlan = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, uploadImage } =
    useMarketingStrategyPlan();
  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          beforeAdd={(methods: any) => uploadImage("image", methods)}
          beforeUpdate={(methods: any) => uploadImage("image", methods)}
          columns={COLUMNS}
        />
      </FormProvider>
    </Card>

  );
};

export default MarketingStrategyPlan;