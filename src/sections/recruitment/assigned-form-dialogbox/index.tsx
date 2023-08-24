import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import * as Yup from "yup";
const todayDate = dayjs().format("MM/DD/YYYY");
export const defaultValues = {
  auditBy: "",
  roleOfAuditor: "",
  auditDate: new Date(todayDate),
  approvalName: "",
  approverRole: "",
  approvedDate: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  auditBy: Yup.string().required("Required"), //1
  roleOfAuditor: Yup.string().required("Required"), //2
  auditDate: Yup.date().required("Required"), //3
  approvalName: Yup.string().required("Required"), //4
  approverRole: Yup.string().required("Required"), //5
  approvedDate: Yup.date().required("Required"), //6
});

export const ENQUIRYFORMDATA = [
  {
    id: 1,
    gridLength: 6,

    otherOptions: {
      label: "Audit By",
      name: "auditBy",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Role of Auditor",
      name: "roleOfAuditor",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Audit Date",
      name: "auditDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Approval Name",
      name: "approvalName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Approver Role",
      name: "approverRole",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Approved Date",
      name: "approvedDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
