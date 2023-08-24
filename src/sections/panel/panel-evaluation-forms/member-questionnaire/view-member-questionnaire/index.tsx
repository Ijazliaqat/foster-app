import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
// utils

// ----------------------------------------------------------------------

export const MemberQuestionnaireData = [
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "My induction prepared me for my panel role at [-IFA-]",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "My training needs are identified and met",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Panel meetings I attend are quorate",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "The panel reports and meets regularly with [-IFA-] management team about the quality of assessments and other areas of practice",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "authorSignatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

];
