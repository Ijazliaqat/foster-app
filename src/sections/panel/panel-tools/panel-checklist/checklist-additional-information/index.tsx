
import * as Yup from "yup";

export const defaultValues = {
    title: ''
}

export const ChecklistAdditionalFormSchema = Yup.object().shape({
    title: Yup.string().required("Field is required"),
});

export const additionalInformation = [
    {
        id: '1',
        title: "List of central list members (with brief details and phone numbers)"
    },
    {
        id: '2',
        title: "Name job title and telephone number of the professional advisor, if any"
    },
    {
        id: '3',
        title: "Name and job title agency decision-makers"
    },
    {
        id: '4',
        title: "Central list and panel member agreement for members"
    },
    {
        id: '5',
        title: "Format for undertaking the annual review of central list and panel member"
    },
    {
        id: '6',
        title: "Statement of purpose for the fostering service"
    },
]