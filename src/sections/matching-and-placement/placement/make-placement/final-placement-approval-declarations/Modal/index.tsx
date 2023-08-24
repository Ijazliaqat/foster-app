import {  RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

import * as Yup from 'yup';

export const defaultValues  = {
    name: '',
    role:'',
    dateApproved: new Date(),

}
export const PlacementSpecialNeedsformSchemaValidation = Yup.object().shape({
    name: Yup.string().trim().required('Field is required'),
    role: Yup.string().trim().required('Field is required'),
    dateApproved: Yup.date().required('Field is required'),
})


export const PlacementSpecialNeedsMockData = [
    {
        id: 1,
        componentProps: {
            name: "name",
            label: 'Name',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "role",
            label: 'Role',
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
    {
        id: 3,
        componentProps: {
            name: "dateApproved",
            label: 'Date Approved',
            fullWidth: true,
            sx: { mb: 1 },
        },
       
        component: RHFDatePicker,
        md: 6,
    },

     

    // {
    //     id: 4,
    //     componentProps: {
    //         name: "comments",
    //         label: 'Comments',
    //         fullWidth: true,
    //         multiline: true,
    //         minRows: 3,
    //         sx: { mb: 1 },
    //     },
    //     component: RHFTextField,
    //     md: 12,
    // },
    

]
export { default as PlacementSpecialNeedsAddModal } from "./FinalPlacementApprovalAddModal";

