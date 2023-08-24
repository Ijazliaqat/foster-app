import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';

export const initialValues = {
  docType: '',
  docDate: new Date(),
  updatePhoto: null
}
export const addOtherDocumentFormSchema:any = Yup.object().shape({
  docType: Yup.string().required('Field is required'),
  docDate: Yup.date().required('Field is required'),
  updatePhoto: Yup.mixed().required('Field is required')
})

export const addOtherDocumentData = [
  {
    gridLength: 12,
    otherOptions: {
      label: 'Document Type',
      size: 'small',
      name: 'docType',
      fullWidth: true,
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    gridLength: 12,
    otherOptions: {
      label: 'Document Date',
      name: 'docDate',
      size: 'small',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
]