import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const InitialContactFormData = [
    {
        id: 1,
        gridLength: 6,
        otherOptions: {
            name: "fosterCarer",
            label: "Prospective Foster Carer",
            fullWidth: true,
        },
        component: RHFTextField,
    },
    {
        id: 2,
        gridLength: 6,
        otherOptions: {
            name: "Date",
            label: "Date",
            fullWidth: true,
        },
        component: RHFDatePicker,
    },
    {
        id: 3,
        gridLength: 6,
        otherOptions: {
            name: "attending",
            label: "Who Attending ? ( Name & Role)",
            fullWidth: true,
        },
        component: RHFTextField,
    },
    {
        id: 4,
        gridLength: 6,
        otherOptions: {
            name: "phoneNo",
            label: "Mobile Phone",
            fullWidth: true,
        },
        component: RHFTextField,
    },
    {
        id: 5,
        gridLength: 12,
        otherOptions: {
            name: "response",
            label: "Return response",
            multiline: true,
            minRows: 3,
            fullWidth: true,
        },
        component: RHFTextField,
    },
];

export const defaultValues = {
    fosterCarer: "",
    Date: new Date(),
    attending: "",
    phoneNo:"",
    response:"",
};
export const formSchema = Yup.object().shape({
    fosterCarer: Yup.string().required("Error"),
    attending: Yup.string().required("Error"),
    Date: Yup.date().required("required"),
    phoneNo: Yup.string().required("required"),
    response: Yup.string().required("required"),
});

