import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");
export const CarerSectionADefultValue = {
  category: "",
  visitType: "",
  visitStatus: "",
  visitDate: new Date(todayDate),
  homeFileSeen: "",
  medicationSheetChecked: "",
  authorityFeedbackRequired: "",
  visitNature: "Text",
  namePresentMeeting: "Text",
};

export const CarerSectionAFromDate = [
  {
    gridLength: 12,
    heading: (
      <Typography sx={(theme) => style.heading(theme)}>
        Supervising Social Worker:
        <Typography sx={(theme) => style.headingBold(theme)}>
          Not Assigned
        </Typography>
      </Typography>
    ),
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "category",
      label: "Category",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Diasabeled", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "visitType",
      label: "Home Visit Type",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Diasabeled", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "visitStatus",
      label: "Home Visit Status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Diasabeled", label: "Diasabeled Choice" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Date of Visit",
      name: "referralDate",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "homeFileSeen",
      label: (
        <Typography sx={(theme) => style.checkboxText(theme)}>
          Home File Seen
        </Typography>
      ),
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "medicationSheetChecked",
      label: (
        <Typography sx={(theme) => style.checkboxText(theme)}>
          Medication Sheet Checked
        </Typography>
      ),
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "authorityFeedbackRequired",
      label: (
        <Typography sx={(theme) => style.checkboxText(theme)}>
          Local Authority Feedback Required
        </Typography>
      ),
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },

  {
    gridLength: 12,
    title: `Nature of Visit: `,
    componentProps: {
      name: "visitNature",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Name of all those present at the meeting.
     Details of any new placements since the last visit.
      Note if children were seen alone. If not seen at all, reason why?`,
    componentProps: {
      name: "namePresentMeeting",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

const style = {
  heading: (theme: any) => ({
    display: "flex",
    fontSize: "14px",
    fontWeight: 400,
    color: theme.palette.primary.main,
  }),
  headingBold: (theme: any) => ({
    fontWeight: 500,
    fontSize: "14px",
    paddingLeft: "2px",
    color: theme.palette.primary.main,
  }),
  checkboxText: (theme: any) => ({
    fontWeight: 500,
    fontSize: "14px",
    color: "#898989 "
  }),
};
