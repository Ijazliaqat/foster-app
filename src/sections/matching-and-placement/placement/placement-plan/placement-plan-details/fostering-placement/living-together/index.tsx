import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  writtenVerbalInformation: '',
  furtherInformation: '',
  childrenGuideGiven: '',
  UnderstandingsCarerChildYoungPerson: '',
  mealTime: '',
  bedTime: ''
};

export const validationSchema = Yup.object().shape({
  writtenVerbalInformation: Yup.string().required('Field is required'),
  furtherInformation: Yup.string().required('Field is required'),
  childrenGuideGiven: Yup.string().required('Field is required'),
  UnderstandingsCarerChildYoungPerson: Yup.string().required('Field is required'),
  mealTime: Yup.string().required('Field is required'),
  bedTime: Yup.string().required('Field is required')
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'writtenVerbalInformation',
      multiline: true,
      minRows: 3,
      label: 'What written/verbal information has the child/young person received about the foster care household, e.g. welcome book, foster carer profile?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'furtherInformation',
      multiline: true,
      minRows: 3,
      label: 'What further information is needed?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'childrenGuideGiven',
      multiline: true,
      minRows: 3,
      label: 'Has the Children’s Guide been given?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'UnderstandingsCarerChildYoungPerson',
      multiline: true,
      minRows: 3,
      label: 'Understandings of carer and child/young person in the following areas: Routines in the household, including living together safely and comfortably'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'mealTime',
      multiline: true,
      minRows: 3,
      label: 'Meal Times'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'bedTime',
      multiline: true,
      minRows: 3,
      label: 'Bed Times'
    },
    component: RHFTextField
  },

]