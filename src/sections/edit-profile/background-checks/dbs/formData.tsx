import * as Yup from "yup";

export const defaultValues = {
  validDBS: "Yes",
  certificateName: "Essex",
  issueDate: new Date(),
  online: "Yes",
  updateService: "Essex",
};

export const FormSchema = Yup.object().shape({
  validDBS: Yup.string(),
  certificateName: Yup.string(),
  issueDate: Yup.date(),
  online: Yup.string(),
  updateService: Yup.string(),
});

// export const fieldsInfo = [
//   [
//     {
//       type: "SELECT",
//       name: "validDBS",
//       fieldHeader: null,
//       options: ["Yes", "No"],
//     },
//     {
//       type: "TEXT",
//       name: "certificateName",
//       label: "DBS (PVG) Certificate Number",
//       fieldHeader: null,
//     },
//   ],
//   [
//     {
//       type: "DATE_PICKER",
//       name: "issueDate",
//       label: "DBS (PVG) issue Date",
//       fieldHeader: null,
//     },
//     {
//       type: "SELECT",
//       name: "online",
//       label: "Is DBS (PVG) online?",
//       fieldHeader: null,
//       options: ["Yes", "No"],
//     },
//   ],
//   [
//     {
//       type: "TEXT",
//       name: "updateService",
//       label: "DBS (PVG) Update Service No.",
//       fieldHeader: null,
//     },
//     {
//       type: null,
//     },
//   ],
// ];
