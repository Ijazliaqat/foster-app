import * as Yup from "yup";


export const childSelectionSchema = Yup.object().shape({
    selectFosterCarerPendingPayment: Yup.string().trim().required("Field is Required"),
});

export const childSelectionData = [
    {
        id: 1,
        listFosterChild: 'Draco Malfoy',
        childUnderConsideration: 'Alberto Delrio'
    }
]