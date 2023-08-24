import { RHFSelect } from "@root/components/hook-form";
import * as Yup from "yup";

// Styles
const styles = {
    marginBottom: {
        marginBottom: "34px !important",
    },
    marginTop: {
        marginTop: "25px !important",
    },
};

export const AddChildForm = [
    {
        id: 1,
        componentProps: {
            name: "localAuthority",
            label: "Local Authority",
            select: true,
            sx: styles
        },
        options: [{ label: "Bexley Council", value: "Bexley_Council" }, { label: "Manchester Council", value: "Manchester_Council" }, { label: "Greenwich Council", value: "Greenwich_Council" }, { label: "Liverpool Council", value: "Liverpool_Council" }],
        component: RHFSelect,
        md: 12,
    },
    {
        id: 2,
        componentProps: {
            name: "childrenName",
            label: "Children Name",
            select: true,
            sx: styles
        },
        options: [{ label: "Olivia", value: "Olivia" }, { label: "Sophia", value: "Sophia" }, { label: "Lily", value: "Lily" }, { label: "Oliver", value: "Oliver" }],
        component: RHFSelect,
        md: 12,
    },

];

export const defaultValues = {
    localAuthority: "",
    childrenName: "",
};

export const AddChildValidationSchema = Yup.object().shape({
    localAuthority: Yup.string().trim().required("Field is Required"),
    childrenName: Yup.string().trim().required("Field is Required"),
});

export { default as AddChildModal } from "./AddChildModal";



