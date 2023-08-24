
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

import * as Yup from 'yup';

export const defaultValues  = {
    carerName: '',
    courseAttended: '',
    attendedDate: new Date(),
}
export const MandatoryformSchemaValidation = Yup.object().shape({
    carerName: Yup.string().trim().required('Field is required'),
    courseAttended: Yup.string().trim().required('Field is required'),
    attendedDate: Yup.date().required('Field is required'),
})


export const MandatoryModalData = [
    {
        id: 1,
        componentProps: {
            name: "carerName",
            label: 'Carer Name',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "courseAttended",
            label: 'Course Attended',
            fullWidth: true,
            sx: { mb: 1 },
        },
       
        component: RHFTextField,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "attendedDate",
            label: 'Attended Date',
            fullWidth: true,
            sx: { mb: 2 },
        },
        component: RHFDatePicker,
        md: 6,
    },


]
export { default as MandatoryModal } from "./MandatoryModal";
