import { RHFTextField } from '@root/components/hook-form';
import SignaturePad from "@root/components/hook-form/SignaturePad";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';

export const initialValues = {
  fosterCarer: 'foster carer',
  supervisingSocialWorker: 'supervising social worker',
  childrenAndYoungPeople: 'children and young people',
  providingIndividualAntiDiscriminatoryPractice: 'Providing individual anti discriminatory practice',
  birthFamily: 'birth Family',
  healthyPhysicalEmotionalCare: 'healthy Physical Emotional Care',
  managerBehaviour: 'manager Behaviour',
  communicatingWithChildren: 'communicating With Children',
  education: 'education',
  playAndLeisure: 'play And Leisure',
  keepingChildrenSafe: 'keeping Children Safe',
  signatureCarer1: null,
  date1: new Date(),
  signatureCarer2: null,
  date2: new Date(),
}
export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required('This field is required'),
  supervisingSocialWorker: Yup.string().required('This field is required'),
  childrenAndYoungPeople: Yup.string().required('This field is required'),
  providingIndividualAntiDiscriminatoryPractice: Yup.string().required('This field is required'),
  birthFamily: Yup.string().required('This field is required'),
  healthyPhysicalEmotionalCare: Yup.string().required('This field is required'),
  managerBehaviour: Yup.string().required('This field is required'),
  communicatingWithChildren: Yup.string().required('This field is required'),
  education: Yup.string().required('This field is required'),
  playAndLeisure: Yup.string().required('This field is required'),
  keepingChildrenSafe: Yup.string().required('This field is required'),
  signatureCarer1: Yup.mixed().nullable().required("This field is required"),
  date1: Yup.date().required('This field is required'),
  signatureCarer2: Yup.mixed().nullable().required("This field is required"),
  date2: Yup.date().required('This field is required'),
})
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Foster carer(s)",
      name: 'fosterCarer',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Supervising social worker",
      name: 'supervisingSocialWorker',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Children and young people",
    tooltip: true,
    tooltipMsg: 'Please think about the children or young people you have fostered since your last review and give a few examples to show how you meet the TSD standards as set out below. If you need assistance with this, please speak with your supervising social worker. Some fostering services prefer that you use initials rather than names of the children; your supervising social worker should be able to advise you on this',
    otherOptions: {
      name: 'childrenAndYoungPeople',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'TSD 1 – PRINCIPLES AND VALUES'
  },
  {
    gridLength: 12,
    title: "Providing individual care/promoting anti-discriminatory practice",
    tooltip: true,
    tooltipMsg: 'Please think about the children or young people you have fostered since your last review and give a few examples to show how you meet the TSD standards as set out below. If you need assistance with this, please speak with your supervising social worker. Some fostering services prefer that you use initials rather than names of the children; your supervising social worker should be able to advise you on this',
    otherOptions: {
      name: 'providingIndividualAntiDiscriminatoryPractice',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'TSD 2 – ROLE AS A FOSTER CARER'
  },
  {
    gridLength: 12,
    title: "Working with birth family",
    tooltip: true,
    tooltipMsg: 'Please give examples to show how you have taken account of the experiences, preferences, wishes and needs of the child or young person. [TSD 1.3(b)], taking into account the child or young person’s ethnic, religious, cultural and linguistic background; and how you have helped him or her to deal with prejudice or discrimination. [TSD 1.2(a)(b)(c)] Give examples to show how you have taken specific action to meet needs arising from the child or young person’s disability or special educational needs (if relevant). [TSD5.8(a)(b)(c)(d)].',
    otherOptions: {
      name: 'birthFamily',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'TSD 3 – HEALTHY CARE'
  },
  {
    gridLength: 12,
    title: "Healthy physical and emotional care",
    tooltip: true,
    tooltipMsg: 'Please give examples to show how you have promoted the healthy physical care of the child or young person, including giving advice and information about health and hygiene, including sexual health and sexual identity. Please give examples to show how you have promoted the healthy emotional care of the child or young person, taking into account any attachment difficulties, trauma, separation and loss. Describe how you have supported the child or young person through significant milestones, life changes and challenges, and how you have promoted self-confidence, self-esteem, and independence skills.',
    otherOptions: {
      name: 'healthyPhysicalEmotionalCare',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Manager Behaviour",
    tooltip: true,
    tooltipMsg: 'Please give examples to show how you have promoted positive behaviour and managed the behaviour of the child or young person safely and appropriately, taking account of the needs of all your household members.',
    otherOptions: {
      name: 'managerBehaviour',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'TSD 4 – COMMUNICATING EFFECTIVELY'
  },
  {
    gridLength: 12,
    title: "Communicating with children",
    tooltip: true,
    tooltipMsg: 'Please give examples of how you have communicated with the child or young person according to their age and stage of development, and how you have encouraged the child or young person to make his or her own decisions as appropriate..',
    otherOptions: {
      name: 'communicatingWithChildren',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'TSD 5 – UNDERSTANDING DEVELOPMENT'
  },
  {
    gridLength: 12,
    title: "Education",
    tooltip: true,
    tooltipMsg: 'Please give examples of how you have supported the child or young person in relation to education, training and employment, including advocating that their educational needs are met. ',
    otherOptions: {
      name: 'education',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Play and leisure ",
    tooltip: true,
    tooltipMsg: 'Please give examples of how you have supported the child or young person in relation to education, training and employment, including advocating that their educational needs are met. ',
    otherOptions: {
      name: 'playAndLeisure',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'TSD 6 – Keeping children safe'
  },
  {
    gridLength: 12,
    title: "Keeping children safe",
    tooltip: true,
    tooltipMsg: 'Please give examples of how you have kept the child or young person safe, and feeling safe. Describe how you have helped the child or young person keep themselves safe, including communicating with them about risk and safety.',
    otherOptions: {
      name: 'keepingChildrenSafe',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: 'Signature carer 1',
    otherOptions: {
      name: "signatureCarer1",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Date',
      fullWidth: true,
      name: "date1",
      sx:{mt:2}
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Signature carer 2',
    otherOptions: {
      name: "signatureCarer2",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Date',
      fullWidth: true,
      name: "date2",
      sx:{mt:2}
    },
    component: RHFDatePicker
  }
];