import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import * as Yup from "yup";

const todayDate = dayjs().format("MM/DD/YYYY");

export const ehcpInfoFormValues = {
  medicalDate: todayDate,
  dueDate: todayDate,
  onFile: "",
  result: "",
  comments: "",
};

export const defaultValueEhcpInfoForm = (data: any = ehcpInfoFormValues) => {
  return {
    medicalDate: new Date(data?.medicalDate),
    dueDate: new Date(data?.dueDate),
    onFile: data?.onFile,
    result: data?.result,
    comments: data?.comments,
  };
};

export const ehcpInfoFormSchema: any = Yup.object().shape({
  medicalDate: Yup.date()
    .typeError("Medical Date is required")
    .required("Medical Date is required"),
  dueDate: Yup.date()
    .typeError("Due Date  is required")
    .required("Due Date  is required"),
  onFile: Yup.string().required("on File is required"),
  result: Yup.string()
    .trim()
    .required("Result is required")
    .min(1, "Mininum 1 characters")
    .max(500, "Maximum 50 characters"),
  comments: Yup.string()
    .trim()
    .required("Comments is required")
    .min(1, "Mininum 1 characters")
    .max(500, "Maximum 50 characters"),
});

export const ehcpInfoFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    componentProps: {
      name: "medicalDate",
      label: "Medical Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 2,
    componentProps: {
      name: "dueDate",
      label: "Due Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    component: RHFSelect,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "onFile",
      label: "On File",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
    },
  },
  {
    id: 4,
    componentProps: {
      fullWidth: true,
      name: "result",
      label: "Result",

      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
