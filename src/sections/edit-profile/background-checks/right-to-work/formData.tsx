import * as Yup from "yup";

export const defaultValues = {
  rightToWork: "No",
  visaType: "visaType",
  BRP: "BRP",
  expiryDate: new Date(),
  code: "Share Code",
};

export const FormSchema = Yup.object().shape({
  rightToWork: Yup.string(),
  visaType: Yup.string(),
  BRP: Yup.string(),
  expiryDate: Yup.date(),
  code: Yup.string(),
});

// export const fieldsInfo = [
//   [
//     {
//       type: "SELECT",
//       name: "haveValidDBS",
//       fieldHeader: null,
//       options: ["Yes", "No"],
//     },
//     {
//       type: "TEXT",
//       name: "dbsNumber",
//       label: "DBS (PVG) Certificate Number",
//       fieldHeader: null,
//     },
//   ],
//   [
//     {
//       type: "DATE_PICKER",
//       name: "dbsIssueDate",
//       label: "DBS (PVG) issue Date",
//       fieldHeader: null,
//     },
//     {
//       type: "SELECT",
//       name: "isDbsOnline",
//       label: "Is DBS (PVG) online?",
//       fieldHeader: null,
//       options: ["Yes", "No"],
//     },
//   ],
//   [
//     {
//       type: "TEXT",
//       name: "dbsUpdatedServiceNo",
//       label: "DBS (PVG) Update Service No.",
//       fieldHeader: null,
//     },
//     {
//       type: null,
//     },
//   ],
// ];
