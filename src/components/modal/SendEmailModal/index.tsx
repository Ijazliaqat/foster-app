import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------
export const defaultValues = {
    email: "",
    subject: "",
    message: "",
};

export const FormSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    subject: Yup.string().required("Field is required"),
    message: Yup.string().required("Field is required"),
});

//////////////////
const style: any = {
    inputField: {
        "& fieldset": { borderTop: 'none', borderLeft: "none", borderRight: "none", borderRadius: "0 !important" },
        mb: 1.5,
        '.MuiInputBase-input': { fontSize: 14, fontWeight: 400 },
    },
}


// Name of Refferer And Agency
export const formData = [
    {
        gridLength: 12,
        otherOptions: { name: "email", fullWidth: true, placeholder: 'namexame@email.com', sx: style.inputField },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: { name: "subject", fullWidth: true, placeholder: 'Subject', sx: style.inputField },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "message",
            multiline: true,
            minRows: 9,
            fullWidth: true,
            size: "small",
            placeholder: 'Write something here ....',
            sx: style.inputField
        },
        component: RHFTextField,
    },
];

