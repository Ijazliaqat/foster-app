import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const absenceInfoFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfAbsence",
      label: "Date Of Absence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "label",
      label: "Date of Return from Absence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "schoolName",
      label: "School Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reasonOfAbsence",
      label: "Reason for Absence",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
// export const formatters: any = {};

// for (const formControl of absenceInfoFormData) {
//   if (formControl.format)
//     formatters[formControl.otherOptions.name] = formControl.format;
// }

export const absenceInfoDefaultValues = {
  schoolName: "",
  reasonOfAbsence: "",
  dateOfAbsence: new Date(),
  label: new Date(),
  comments: "",
};
export const formSchema = Yup.object().shape({
  schoolName: Yup.string().required("School Name Required"),
  reasonOfAbsence: Yup.string().required("Absence Reason Required"),
  dateOfAbsence: Yup.date(),
  label: Yup.date(),
  comments: Yup.string(),
});
