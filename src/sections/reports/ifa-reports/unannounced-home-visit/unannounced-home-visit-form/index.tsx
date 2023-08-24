import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");
export const UnannouncedHomeVisitDefaultValues = {
  persoName: "John Doe",
  visitDate: new Date(todayDate),
  purpose: "Text",
  present: "Text",
  carersWelcome: "Text",
  homeSatisfactory: "Text",
  observation: "Text",
  fosterCarer: "Text",
  issuesDiscussed: "Text",
  healthSafety: "Text",
  apperarSatisfactory: "Text",
  issueAction: "Text",
};

export const UnannouncedHomeVisitFromDate = [
  {
    gridLength: 12,
    heading: (
      <Typography sx={(theme)=>style.heading(theme)}>
        Supervising Social Worker:
        <Typography sx={(theme)=>style.headingBold(theme)}> Not Assigned</Typography>
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
      name: "persoName",
      label: "Employee Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "visitDate",
      label: "Date ",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Person name who carried out the visit`,
    componentProps: {
      name: "purpose",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Who was present?`,
    componentProps: {
      name: "present",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Were the carers welcoming into the home?`,
    componentProps: {
      name: "carersWelcome",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Is the condition of the foster home satisfactory?`,
    componentProps: {
      name: "homeSatisfactory",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Observation on the child/young people in placement.
   Was the child/ren integrated into the family home? How did the adults and children interact?
    Record positives and any concerns in relation to this:`,
    componentProps: {
      name: "observation",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Any issues discussed with the foster carer:`,
    componentProps: {
      name: "fosterCarer",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Any issues discussed with the child/young person:`,
    componentProps: {
      name: "issuesDiscussed",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Were there any health and safety issues in the home? 
    Did you have a around the home including the child's bedroom.
     Please comment and if not, Why not?`,
    componentProps: {
      name: "healthSafety",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Did the care to the child/young person apperar? `,
    componentProps: {
      name: " apperarSatisfactory",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: `Any issues/action to be taken forward: `,
    componentProps: {
      name: "issueAction",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

const style = {
  heading:(theme:any)=>({
    display:"flex",
    fontSize:"14px",
    fontWeight:400,
    color: theme.palette.primary.main,}),
  headingBold:(theme:any)=>({
    fontWeight:500,
    fontSize:"14px",
    paddingLeft:"2px",
    color: theme.palette.primary.main,
})
}

