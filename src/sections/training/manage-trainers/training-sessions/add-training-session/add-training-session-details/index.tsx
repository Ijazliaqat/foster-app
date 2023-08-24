import { RHFCheckbox, RHFMultiCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSelect } from "@root/components/hook-form";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from "yup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { FormHelperText, Typography } from "@mui/material";

export const BForm = [
  {
    id:1,
    componentProps: {
      name: "title",
      label: "Title",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "date",
      label: "Date",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "time",
      label: "Time",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "duration",
      label: "Duration",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "timeZone",
      label: "Time Zone",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "venue",
      label: "Venue",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "trainingSessionAgenda",
      label: "Training Session Agenda",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 7,
    componentProps: {
      name: "multiCheck",
      sx: { mb: 4 },
      value:"Permanant",
      options: ["Q&A, Participants Questions", "Training session: Presentation Mode"]
    },
    component: RHFMultiCheckbox,
    md: 6,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
    md: 6,
  },
];

export const defaultValues = {
  title: "",
  date: null,
  time: "",
  duration: "",
  timeZone: "",
  venue: "",
  trainingSessionAgenda: "",
  multiCheck: "",
  uploadImage: "",
};

export const BFormValidationSchema = Yup.object().shape({
  title: Yup.string().trim().required("Field is Required"),
  Date: Yup.date().required("Field is Required"),
  time: Yup.string().trim().required("Field is Required"),
  duration: Yup.string().trim().required("Field is Required"),
  timeZone: Yup.string().trim().required("Field is Required"),
  venue: Yup.string().trim().required("Field is Required"),
  trainingSessionAgenda: Yup.string().trim().required("Field is Required"),
  multiCheck: Yup.string().trim().required("Field is Required"),
  uploadImage: Yup.string().trim().required("Field is Required"),
});

export { default as AddTrainingSessionDetails } from "./AddTrainingSessionDetails";

function RHFUploadFile(props: any) {
  const { disabled, name, ...other } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;
        return (
          <>
            <label
              htmlFor={name}
              style={{
                height: "40px",
                borderRadius: "4px",
                // border: `1px solid #A3A6BB`,
                border: `1px solid ${
                  other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
                }`,
                width: "100% !important",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: `${disabled ? "" : "pointer"}`,
              }}
            >
              <div style={{ paddingLeft: "10px", color: "#A3A6BB" }}>
                {field?.value?.name || "Upload Image"}
              </div>
              <FileUploadIcon
                sx={{
                  color: "#A3A6BB",
                  marginRight: "10px",
                }}
              />
            </label>
            <input
              type="file"
              disabled={disabled}
              name={name}
              id={name}
              onChange={(e: any) => {
                const file: any = e.target.files?.[0];
                field.onChange({ target: { value: file, name: field.name } });
              }}
              style={{ display: "none" }}
            />
            {checkError && (
              <FormHelperText error sx={{ px: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
}
