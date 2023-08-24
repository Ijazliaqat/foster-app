import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const wishesData = [
  {
    componentProps: {
      name: "ChildsName",
      label: "Child’s Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "dateCompleted",
      label: "Date Completed",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    heading: "What I think about being adopted",
    componentProps: {
     
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
    tooltip: true,
    disc: "Your social worker will have talked to you about adoption. They should have told you what this means. They should also have told you what they are going to do to findyour adoptive family.If you feel that you still do not understand what adoption means, you should ask to be told again until you feel that you understand.It is very important for the adults who are making decisions about this to understand what you think and feel about adoption.You may want to write what you think about adoption in your own words. You can do this below. You may want an adult to write this for you. You might have lots to say. You may have very little to say. It is up to you, but whether it is a lot or a little, it is always very important. You can use extra paper if you like.",
  },
  {
    id: 6,
    componentProps: {
      name: "address",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "What I think I want my adoptive family to be like",
    componentProps: {
     
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "adoptive",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "Do you go to a church, temple or mosque or say prayers ?",
    componentProps: {
     
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
    tooltip: true,
    disc: "Here are some other important things that you may want to say something about.You may go to a church, temple or mosque. You may say prayers. If this is so, it is important that social workers know about this so that your adoptive parents know about this too.",
  },
  {
    id: 6,
    componentProps: {
      name: "mosque",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "Do you want to say any more about this ?",
    componentProps: {
     
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "more",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "These are the important things I want people to know about me",
    componentProps: {
     
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
    tooltip: true,
    disc: "There are lots of important things about you. These might include the place where you were born or have lived, the festivals or celebrations you like, the clothes you wear, the kinds of people you like to be with, the food you like or the food you don’t like or don’t eat. It will be very important to make sure that your adoptive parents know these things about you. Ask somebody who knows you well to think about how you might write some of this down. ",
  },
  {
    id: 6,
    componentProps: {
      name: "people",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    heading: "These are the people I want to stay in touch with",
    componentProps: {
     
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
    tooltip: true,
    disc: "After you are adopted, it may be possible for you to stay in touch with people who are very important to you now. Your social worker can explain how this can happen.You may want to say something about each of these people and how you want to stay in touch with them. If you want somebody else to help you do this, you can ask them. ",
  },
  {
    id: 6,
    componentProps: {
      name: "peopleIWantToStay",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const wishesDataDataValues = {
  ChildsName: "",
  dateCompleted: null,
  address: "",
  adoptive: "",
  mosque: "",
  more: "",
  people: "",
  peopleIWantToStay: "",
};

export const wishesDataValidationSchema = Yup.object().shape({});
