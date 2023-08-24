import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import * as Yup from "yup";

export const StudySupportInfoInfoFormData = [
  {
    id: 1,
    componentProps: { name: "studyType", label: "Study Type:", select: true },
    component: RHFSelect,
    md: 6,
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 2,
    componentProps: { name: "fromDate", label: "From Date:", multiline: false },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
    md: 6,
  },
  {
    id: 3,
    componentProps: { name: "toDate", label: "To Date:", multiline: false },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "comments",
      label: "Comments :",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
    md: 6,
  },
];
export const defaultValues = {
  studyType: "",
  fromDate: new Date(),
  toDate: new Date(),
  comments: "",
};
export const StudySupportInfoFormSchema = Yup.object().shape({
  studyType: Yup.string().trim().required("Study Type is Required"),
  fromDate: Yup.date().required("From Date is Required"),
  toDate: Yup.date().required("To Date is Required"),
  comments: Yup.string().trim().required("Comments are Required"),
});
