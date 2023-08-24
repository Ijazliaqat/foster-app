import {  RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const defaultValues  = {
    specialNeedsAgreement: '',
    description: '',
    assignedTo:'',
    comments:''
}
export const PlacementSpecialNeedsformSchemaValidation = Yup.object().shape({
    specialNeedsAgreement: Yup.string().trim().required('Field is required'),
    description: Yup.string().trim().required('Field is required'),
    assignedTo: Yup.string().trim().required('Field is required'),
    comments: Yup.string().trim().required('Field is required'),
})


export const PlacementSpecialNeedsMockData = [
    {
        id: 1,
        componentProps: {
            name: "specialNeedsAgreement",
            label: 'Special Needs Agreement',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "description",
            label: 'Description',
            fullWidth: true,
            sx: { mb: 1 },
        },
       
        component: RHFTextField,
        md: 6,
    },

      {
        id: 3,
        componentProps: {
            name: "assignedTo",
            label: 'Assigned To (Role)',
            fullWidth: true,
            select:true,
            sx: { mb: 1 },
        },
        options: [
            { value: "carer", label: "Carer" },
            { value: "child", label: "Child" },
          ],
          component: RHFSelect,
          md: 12,
    },

    {
        id: 4,
        componentProps: {
            name: "comments",
            label: 'Comments',
            fullWidth: true,
            multiline: true,
            minRows: 3,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 12,
    },
    

]
export { default as PlacementSpecialNeedsAddModal } from "./PlacementSpecialNeedsAgreementModal";

