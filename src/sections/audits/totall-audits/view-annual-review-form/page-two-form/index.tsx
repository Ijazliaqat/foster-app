import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const pageTwoFormData = {
  formFields: [
    {
      gridLength: 6,
      otherOptions: {
        label: "Review Date",
        name: "reviewDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 12,
      otherOptions: {
        label:
          "Do the carer/s have any current medical issues that have not been noted since the last Review/Medical?",
        name: "medicalIssues",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
  ],
};
