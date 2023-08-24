import * as Yup from "yup";

export const defaultValues = {
  agree: true,
  workRight: "No",
  detail: "Provides Details",
  dba: "No",
  workTimeDirective: false,
  challengingBehaviour: true,
  confidentialAgrement: true,
  pension: true,
  dataPrivacy: false,
};

export const FormSchema = Yup.object().shape({
  agree: Yup.boolean(),
  workRight: Yup.string(),
  detail: Yup.string(),
  dba: Yup.string(),
  workTimeDirective: Yup.boolean(),
  challengingBehaviour: Yup.boolean(),
  confidentialAgrement: Yup.boolean(),
  pension: Yup.boolean(),
  dataPrivacy: Yup.boolean(),
});

// export const fieldsInfo = [
//   [
//     {
//       type: "TEXT",
//       name: "addressFirstLine",
//       label: "Address First Line",
//       fieldHeader: null,
//     },
//     {
//       type: "TEXT",
//       name: "addressSecondLine",
//       label: "Address Second Line",
//       fieldHeader: null,
//     },
//   ],
//   [
//     {
//       type: "TEXT",
//       name: "town",
//       label: "Town/City",
//       fieldHeader: null,
//     },
//     {
//       type: "TEXT",
//       name: "county",
//       label: "County",
//       fieldHeader: null,
//     },
//   ],
//   [
//     {
//       type: "TEXT",
//       name: "country",
//       label: "Country Name",
//       fieldHeader: null,
//     },
//     {
//       type: "TEXT",
//       name: "postcode",
//       label: "Post Code",
//       fieldHeader: null,
//     },
//   ],
// ];
