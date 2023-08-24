
import * as Yup from "yup";

export const defaultValues = {
    otherInformation: ''
}

export const checklistFormSchema = Yup.object().shape({
    otherInformation: Yup.string().required("Email is required"),
});

export const editPanelChecklist = [
    {
        id: '1',
        title: "List of central list members (with brief details and phone numbers)",
        status: 'not provided'
    },
    {
        id: '2',
        title: "Name job title and telephone number of the professional advisor, if any",
        status: 'in review'
    },
    {
        id: '3',
        title: "Name and job title agency decision-makers",
        status: 'approved'
    },
    {
        id: '4',
        title: "Central list and panel member agreement for members",
        status: 'not provided'
    },
    {
        id: '5',
        title: "Format for undertaking the annual review of central list and panel member",
        status: 'in review'
    },
    {
        id: '6',
        title: "Statement of purpose for the fostering service",
        status: 'in review'
    },
]