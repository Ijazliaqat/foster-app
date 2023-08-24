import * as Yup from "yup";


export const carerSelectionSchema = Yup.object().shape({
    selectCarer: Yup.string().trim().required("Field is Required"),
});

export const carerSelectionData = [
    {
        id: 1,
        listFosterChild: 'Draco Malfoy',
        childUnderConsideration: 'Alberto Delrio'
    }
]