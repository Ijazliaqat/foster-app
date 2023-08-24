import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  reasonForlookedAfter: '',
  detailsOfPreviousPlacement: '',
  currentPlacementDate: new Date(),
  permanencePlanning: '',
  placementFitWithPlan: '',
  anticipatedPlacement: '',
  assessmentBeenCompleted: '',
  assessmentManagement: '',
  unaccompaniedAsylumSeeking: '',
  informationFosterCarerReceived: '',
  informationParentReceived: '',
};

export const validationSchema = Yup.object().shape({
  reasonForlookedAfter: Yup.string().required('Field is required'),
  detailsOfPreviousPlacement: Yup.string().required('Field is required'),
  currentPlacementDate: Yup.date().required('Field is required'),
  permanencePlanning: Yup.string().required('Field is required'),
  placementFitWithPlan: Yup.string().required('Field is required'),
  anticipatedPlacement: Yup.string().required('Field is required'),
  assessmentBeenCompleted: Yup.string().required('Field is required'),
  assessmentManagement: Yup.string().required('Field is required'),
  unaccompaniedAsylumSeeking: Yup.string().required('Field is required'),
  informationFosterCarerReceived: Yup.string().required('Field is required'),
  informationParentReceived: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'reasonForlookedAfter',
      multiline: true,
      minRows: 3,
      label: 'Reason for child/young person being looked after'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'detailsOfPreviousPlacement',
      multiline: true,
      minRows: 3,
      label: 'Details of any previous placements: dates, details and reson for move'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'currentPlacementDate',
      multiline: true,
      minRows: 3,
      label: 'Date of current placement'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'permanencePlanning',
      multiline: true,
      minRows: 3,
      label: 'What is the plan for the child, including permanence planning?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'placementFitWithPlan',
      multiline: true,
      minRows: 3,
      label: 'How does this placement fit within the plan?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'anticipatedPlacement',
      multiline: true,
      minRows: 3,
      label: 'How long is the placement anticipated to last?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'assessmentBeenCompleted',
      multiline: true,
      minRows: 3,
      label: 'Has a risk assessment been completed for this child/young person? Are there any issues arising from this?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'assessmentManagement',
      multiline: true,
      minRows: 3,
      label: 'If so, has a risk assessment management plan been developed and shared with the carer?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'unaccompaniedAsylumSeeking',
      multiline: true,
      minRows: 3,
      label: 'Is the child/young person an unaccompanied asylum-seeking or refugee child? Is the foster carer aware of specific needs issues arising from this? '
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'informationFosterCarerReceived',
      multiline: true,
      minRows: 3,
      label: 'What information has the foster carer already received about the child? What further information is needed? How will this be provided?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'informationParentReceived',
      multiline: true,
      minRows: 3,
      label: 'What information has the parent/s received about the placement? Is any further information needed?'
    },
    component: RHFTextField
  },

]