import * as Yup from "yup";

export const defaultValues = {
  firstName: "",
  lastName: "",
  dob: new Date(),
  gender: "",
  phoneNumber: "",
  email: "",
  nationality: "",
  jobApplyingFor: "",
  linkedin: "",
  validDrivingLicence: "",
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("fname is required"),
  lastName: Yup.string().required("lname is required"),
  dob: Yup.date().typeError("date is required").required("date is required"),
  gender: Yup.string().required("fname is required"),
  phoneNumber: Yup.string().required("phone is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  nationality: Yup.string().required("nationality is required"),
  jobApplyingFor: Yup.string().required("applyingFor is required"),
  linkedin: Yup.string().required("linkedId is required"),
  validDrivingLicence: Yup.string().required("linkedId is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "firstName",
      label: "First Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "lastName",
      label: "Last Name",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "DATE_PICKER",
      name: "dob",
      label: "Date of Birth",
      fieldHeader: null,
    },
    {
      type: "SELECT",
      name: "gender",
      label: "Gender",
      fieldHeader: null,
      options: ["Male", "Female"],
    },
  ],
  [
    {
      type: "TEXT",
      name: "phoneNumber",
      label: "Phone Number",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "email",
      label: "Email",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "nationality",
      label: "Nationality",
      fieldHeader: null,
      options: ["Pakistani", "Indiani"],
    },
    {
      type: "SELECT",
      name: "jobApplyingFor",
      label: "Job Applying For",
      fieldHeader: null,
      options: ["Senior Software Developer", "Senior Software Developer 2"],
    },
  ],
  [
    {
      type: "TEXT",
      name: "linkedin",
      label: "LinkedIn ID",
      fieldHeader: null,
    },
    {
      type: "SELECT",
      name: "validDrivingLicence",
      label: "Valid Driving Licence?",
      fieldHeader: null,
      options: ["LTV", "HTV"],
    },
  ],
];
