import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const childPersonalGoalListViewData = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Personal Goals`,
  },
  {
    id: 1,
    componentProps: (value:any) => ({
      name: "goalName",
      fullWidth: true,
      label: "Goal Name",
      multiline: true,
      InputLabelProps:{ shrink: value("goalName")?.length > 0 }
      //   minRows: 3,
    }),
    gridLength: 6,

    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: (value:any) => ({
      name: "status",
      label: "Status",
      multiline: true,
      fullWidth: true,
      InputLabelProps:{ shrink: value("status")?.length > 0 }
      //   minRows: 3,
    }),
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: (value:any) => ({
      fullWidth: true,
      name: "date",
      label: "Date",
      InputLabelProps:{ shrink: value("date")?.length > 0 }
    }),
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    componentProps: (value:any) => ({
      fullWidth: true,
      name: "comments",
      label: "Comments",
      InputLabelProps:{ shrink: value("comments")?.length > 0 }
    }),
    component: RHFTextField,
  },
];

// export const defaultValues = {
//   goalName: "",
//   status: "",
//   date: new Date(),
//   comments: "",
// };
