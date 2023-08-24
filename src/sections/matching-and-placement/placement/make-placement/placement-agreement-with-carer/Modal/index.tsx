import {  RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

import * as Yup from 'yup';

export const defaultValues  = {
    placementAgreementReceipts: '',
    updatePhoto:'',
    dateApproved: new Date(),
    ApprovedByRole:'',
    LaApprovedByRole:'',
    digitalSignature:''
}
export const PlacementSpecialNeedsformSchemaValidation = Yup.object().shape({
    placementAgreementReceipts: Yup.string().trim().required('Field is required'),
    updatePhoto: Yup.string().trim().required('Field is required'),
    dateApproved: Yup.date().required('Field is required'),
    ApprovedByRole: Yup.string().trim().required('Field is required'),
    LaApprovedByRole: Yup.string().trim().required('Field is required'),
    digitalSignature: Yup.string().trim().required('Field is required'),
})


export const PlacementSpecialNeedsMockData = [
    {
        id: 1,
        componentProps: {
            name: "placementAgreementReceipts",
            label: 'Placement Agreement/Receipts',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        md: 6,
        updatePhoto: true,
      },
    {
        id: 2,
        componentProps: {
            name: "dateApproved",
            label: 'Date Approved',
            fullWidth: true,
            sx: { mb: 1 },
        },
       
        component: RHFDatePicker,
        md: 6,
    },

      {
        id: 3,
        componentProps: {
            name: "ApprovedByRole",
            label: 'Approved By (Role)',
            fullWidth: true,
            select:true,
            sx: { mb: 1 },
        },
        options: [
            { value: "carer", label: "Carer" },
            { value: "child", label: "Child" },
          ],
          component: RHFSelect,
          md: 6,
    },
   

]
export { default as PlacementSpecialNeedsAddModal } from "./PlacementAgreementcarerAddModal";

