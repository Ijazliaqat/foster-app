import { RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const initialValues = {
  categoryName: '',
  subCategoryName: '',
  uploadIcon: '',
}
export const formSchema = Yup.object().shape({
  categoryName: Yup.string().required('Field is required'),
  subCategoryName: Yup.string().required('Field is required'),
  uploadIcon: Yup.string().required('Field is required'),
})


export const complianceMangementModalData = [
  {
    id: 1,
    componentProps: {
      name: "categoryName",
      label: 'Category Name',
      sx: { mb: 1 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 2,
    componentProps: {
      name: "subCategoryName",
      label: 'Sub Category Name',
      sx: { mb: 1 },
    },
    component: RHFTextField,
    md: 10,
  },


]
