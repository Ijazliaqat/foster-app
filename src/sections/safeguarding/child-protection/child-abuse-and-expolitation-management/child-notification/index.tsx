import { RHFCheckbox } from "@root/components/hook-form";
import * as Yup from 'yup';
export const initialValues = {
  liaiseAgency: true,
  visitingSchedule: false,
  professionalMeeting: false,
  referChild: false,
  carePlan: false,
  homeInterview: false,
  discussionMeeting: false
};
export const formSchema = Yup.object().shape({
  liaiseAgency: Yup.boolean().required('Field is required'),
  visitingSchedule: Yup.boolean(),
  professionalMeeting: Yup.boolean() ,
  referChild: Yup.boolean(),
  carePlan: Yup.boolean(),
  homeInterview: Yup.boolean(),
  discussionMeeting: Yup.boolean()
})
export const childNotificationForm = [
  {
    gridLength: 6,
    otherOptions: {
      name: "liaiseAgency",
      label: "To Liaise with the Agency Supervising Social Worker and Foster Carer/s",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "visitingSchedule",
      label: "To review the visiting schedule / support for the child / young person",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "professionalMeeting",
      label: "To arrange a Professional Meeting",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "referChild",
      label: "To refer the child / young person to the CSE / CCE Team",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "carePlan",
      label: "To update the Care Plan",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "homeInterview",
      label: "Conduct a Return Home Interview",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "discussionMeeting",
      label: "To hold a Strategy Discussion / Meeting",
    },
    component: RHFCheckbox,
  },
]