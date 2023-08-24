import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup'

export const initialValues = {
  childName: 'abcdef',
  dateOfReporting: new Date(),
  signsAndIndicators: 'signs and indicators',
  whoIsRisk: 'who is risk',
  persistently: 'No',
  unexplained: 'No',
  excessive: 'No',
  relationships: 'No',
  leavingHome: 'No',
  suspicion: 'No',
  parental: 'No',
  carrying: 'No',
  significant: 'No',
  gang: 'No',
  others: 'No',
  evidence: 'No',
  locations: 'No',
  help: 'No',
  riskAssessment: 'No',
  earlyInformation: 'early Information',
  workOnChildren: 'abc',
  socialWorker: 'abc',
  furtherActions: 'abc',
}

export const formSchema = Yup.object().shape({
  childName: Yup.string().required('Field is required'),
  dateOfReporting: Yup.string().required('Field is required'),
  signsAndIndicators: Yup.string().required('Field is required'),
  whoIsRisk: Yup.string().required('Field is required'),
  persistently: Yup.string().required('Field is required'),
  unexplained: Yup.string().required('Field is required'),
  excessive: Yup.string().required('Field is required'),
  relationships: Yup.string().required('Field is required'),
  leavingHome: Yup.string().required('Field is required'),
  suspicion: Yup.string().required('Field is required'),
  parental: Yup.string().required('Field is required'),
  carrying: Yup.string().required('Field is required'),
  significant: Yup.string().required('Field is required'),
  gang: Yup.string().required('Field is required'),
  others: Yup.string().required('Field is required'),
  evidence: Yup.string().required('Field is required'),
  locations: Yup.string().required('Field is required'),
  help: Yup.string().required('Field is required'),
  riskAssessment: Yup.string().required('Field is required'),
  earlyInformation: Yup.string().required('Field is required'),
  workOnChildren: Yup.string().required('Field is required'),
  socialWorker: Yup.string().required('Field is required'),
  furtherActions: Yup.string().required('Field is required'),
})

export const childCrimialExploitation = [
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: {
      label: 'Child Name',
      name: 'childName',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: {
      label: 'Date of Reporting',
      name: 'dateOfReporting',
      fullWidth: true
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: {
      label: 'Signs and Indicators',
      name: 'signsAndIndicators',
      fullWidth: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    fontWeight: 600,
    otherOptions: {
      label: 'Who is Risk? Name and Role',
      name: 'whoIsRisk',
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    head: 'Signs and Indicators',
    title: 'Persistently going missing from school or home and / or being found out-of area',
    fontWeight: 500,
    otherOptions: {
      name: "persistently",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    head: <br />,
    title: 'Unexplained acquisition of money, clothes, or mobile phones',
    fontWeight: 500,
    otherOptions: {
      name: "unexplained",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Excessive receipt of texts / phone calls and/or having multiple handsets',
    fontWeight: 500,
    otherOptions: {
      name: "excessive",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Relationships with controlling / older individuals or groups',
    fontWeight: 500,
    otherOptions: {
      name: "relationships",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Leaving home / care without explanation',
    fontWeight: 500,
    otherOptions: {
      name: "leavingHome",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Suspicion of physical assault / unexplained injuries',
    fontWeight: 500,
    otherOptions: {
      name: "suspicion",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Parental concerns',
    fontWeight: 500,
    otherOptions: {
      name: "parental",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Carrying weapons',
    fontWeight: 500,
    otherOptions: {
      name: "carrying",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Significant decline in school results / performance',
    fontWeight: 500,
    otherOptions: {
      name: "significant",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Gang association or isolation from peers or social networks',
    fontWeight: 500,
    otherOptions: {
      name: "gang",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: 'Others',
    fontWeight: 500,
    otherOptions: {
      name: "others",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    head: 'Agency Responses',
    title: 'Provide evidence in applications to the court for civil and criminal orders',
    fontWeight: 500,
    otherOptions: {
      name: "evidence",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    head: <br />,
    title: 'Identify locations being used for the purposes of exploitation',
    fontWeight: 500,
    otherOptions: {
      name: "locations",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Help identify and understand links between different forms of exploitation and hidden, or related, crimes',
    fontWeight: 500,
    otherOptions: {
      name: "help",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    title: 'Enable quicker risk assessment of a potential victim of trafficking and development of an effective safety paln.',
    fontWeight: 500,
    otherOptions: {
      name: "riskAssessment",
      options: ["Yes", "No"],
      sx: { ml: '0 !important' },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    fontWeight: 600,
    otherOptions: {
      label: 'Early information and intelligence gathering',
      name: 'earlyInformation',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    fontWeight: 600,
    otherOptions: {
      label: 'Working on Children',
      name: 'workOnChildren',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: {
      label: 'Social Worker',
      name: 'socialWorker',
      fullWidth: true,
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 12,
    fontWeight: 600,
    otherOptions: {
      label: 'Further Actions',
      name: 'furtherActions',
      value: 'abc',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]