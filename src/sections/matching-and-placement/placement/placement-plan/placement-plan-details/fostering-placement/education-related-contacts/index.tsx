import { Divider } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  childPersonName: '',
  childPersonAddress: '',
  childPersonContactNumber: '',
  childPersonEmail: '',
  designatedTeacherName: '',
  designatedTeacherAddress: '',
  designatedTeacherContactNumber: '',
  designatedTeacherEmail: '',
  classTeacherName: '',
  classTeacherAddress: '',
  classTeacherContactNumber: '',
  classTeacherEmail: '',
  personName: '',
  personAddress: '',
  personContactNumber: '',
  personEmail: '',
  provisionName: '',
  provisionAddress: '',
  provisionContactNumber: '',
  provisionEmail: '',
  eduTrainingName: '',
  eduTrainingAddress: '',
  eduTrainingContactNumber: '',
  eduTrainingEmail: '',
  hasLookedPlacementName: '',
  hasLookedPlacementAddress: '',
  hasLookedPlacementContactNumber: '',
  hasLookedPlacementEmail: '',
};

export const validationSchema = Yup.object().shape({
  childPersonName: Yup.string().required('Field is required'),
  childPersonAddress: Yup.string().required('Field is required'),
  childPersonContactNumber: Yup.string().required('Field is required'),
  childPersonEmail: Yup.string().required('Field is required'),
  designatedTeacherName: Yup.string().required('Field is required'),
  designatedTeacherAddress: Yup.string().required('Field is required'),
  designatedTeacherContactNumber: Yup.string().required('Field is required'),
  designatedTeacherEmail: Yup.string().required('Field is required'),
  classTeacherName: Yup.string().required('Field is required'),
  classTeacherAddress: Yup.string().required('Field is required'),
  classTeacherContactNumber: Yup.string().required('Field is required'),
  classTeacherEmail: Yup.string().required('Field is required'),
  personName: Yup.string().required('Field is required'),
  personAddress: Yup.string().required('Field is required'),
  personContactNumber: Yup.string().required('Field is required'),
  personEmail: Yup.string().required('Field is required'),
  provisionName: Yup.string().required('Field is required'),
  provisionAddress: Yup.string().required('Field is required'),
  provisionContactNumber: Yup.string().required('Field is required'),
  provisionEmail: Yup.string().required('Field is required'),
  eduTrainingName: Yup.string().required('Field is required'),
  eduTrainingAddress: Yup.string().required('Field is required'),
  eduTrainingContactNumber: Yup.string().required('Field is required'),
  eduTrainingEmail: Yup.string().required('Field is required'),
  hasLookedPlacementName: Yup.string().required('Field is required'),
  hasLookedPlacementAddress: Yup.string().required('Field is required'),
  hasLookedPlacementContactNumber: Yup.string().required('Field is required'),
  hasLookedPlacementEmail: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'childPerson',
      label: 'Institution/Role',
      value: "Child/young person's nursery, school or college",
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'childPersonName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'childPersonAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'childPersonContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'childPersonEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'designatedTeacher',
      label: 'Institution/Role',
      value: 'Designated teacher',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'designatedTeacherName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'designatedTeacherAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'designatedTeacherContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'designatedTeacherEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'classTeacher',
      label: 'Insitution/Role',
      value: 'Class teacher/tutor',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'classTeacherName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'classTeacherAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'classTeacherContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'classTeacherEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personRole',
      label: 'Insitution/Role',
      value: 'Person at school/college to be used as contact point for carer',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'provisionRole',
      label: 'Institution/Role',
      disabled: true,
      value: 'Any other educational provision'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'provisionName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'provisionAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'provisionContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'provisionEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'eduTrainingRole',
      label: 'Insitution/Role',
      disabled: true,
      value: 'Any other person providing education or training'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'eduTrainingName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'eduTrainingAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'eduTrainingContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'eduTrainingEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'hasLookedPlacementRole',
      label: 'Insitution/Role',
      disabled: true,
      value: 'Has the nursery, school or college been informed that the child/young person has become looked after/changed placement? Who will do this?'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'hasLookedPlacementName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'hasLookedPlacementAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'hasLookedPlacementContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'hasLookedPlacementEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
]