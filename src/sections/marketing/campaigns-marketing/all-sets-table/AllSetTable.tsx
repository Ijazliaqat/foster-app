import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { Box, Card, Chip } from "@mui/material";
import { useAllSetTable } from "./useAllSetTable";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { CampaignsOptions, PlatformOptions } from ".";


const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "adSet",
    fullWidth: true,
    defaultValue: "John",
    label: "Ad Set",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "file",
    type: "file",
    key: "image",
    label: "Creative",
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
    inputType: "textField",
    type: "text",
    key: "copy",
    fullWidth: true,
    defaultValue: "There's an easier way to keep your home and family safe. ",
    label: "Copy",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },


  {
    inputType: "multi-select",
    type: "select",
    key: "platform",
    fullWidth: true,
    defaultValue: [],
    label: "Platform",
    options: PlatformOptions,
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
    inputType: "multi-select",
    type: "select",
    key: "campaigns",
    fullWidth:true,
    defaultValue: [],
    label: "Campaigns",
    options: CampaignsOptions,
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


const AllSetTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route, uploadImage } =
    useAllSetTable();



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

export default AllSetTable;