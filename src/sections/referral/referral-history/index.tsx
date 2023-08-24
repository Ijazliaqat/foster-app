import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
// utils


// Referral history table filters

export const SELECT_FILTERS = [
  {
    key: "status",
    label: "Status",
    options: [{ label: "test", value: "test-value" }],
  },
  {
    key: "availability",
    label: "Availability",
    options: [{ label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "InActive", value: "inActive" }],
  },
  {
    key: "refereeType ",
    label: "Referee Type",
    options: [{ label: "Foster Child", value: "fosterChild" }, { label: "Foster Carer", value: "fosterCarer" }, { label: "Social Worker", value: "socialWorker" }],
  },
];

//Referral history table data

export const data = [
  {
    photp: "CCE Template.pdf",
    refereeName: "Maryam",
    refereeType: "Foster Child",
    referralDate: "01/01/2020",
    referredBy: "Madiha",
    referrerRole: "Foster Carer",
    availability: "Active",
    refereeStatus: "Current Referral",
  },
  {
    photp: "CCE Template.pdf",
    refereeName: "Ali",
    refereeType: "Foster Carer",
    referralDate: "01/01/2020",
    referredBy: "John",
    referrerRole: "Foster Carer",
    availability: "Inactive",
    refereeStatus: "Placed",
  },
  {
    photp: "CCE Template.pdf",
    refereeName: "James",
    refereeType: "Foster Child",
    referralDate: "01/01/2020",
    referredBy: "Madiha",
    referrerRole: "Social Worker",
    availability: "Active",
    refereeStatus: "Review by IFA",
  },
]

//Referral history form default values

export const defaultValues = {
  templateName: "",
  // uploadDate: new Date(),
  description: "",
  authorRole: "",
  approverRole: "",
};

//Referee details form data

export const refereeDetailsFormData = [
  {
    gridLength: 6,
    otherOptions: { name: "parentAndChild", label: "Child Or Parent & Child", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Area Office", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Age", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Gender", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Ofstead Ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Special Needs", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Nationality", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Language", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Religion", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Legal Status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Immigration Status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Behaviour", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Is the Child Currently in Education?", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Are there any other Sibling?", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    head: "Referral Details",
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Referral Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Referral Date",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Reason",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Child Placing Authority", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "LA  Worker Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Local Authority", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Date LA Notified", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Language", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "How he/She become a foster child?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Other Details",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

];

//Referral personal details form data

export const referralPersonalDetailsFormData = [
  {
    gridLength: 6,
    otherOptions: { name: "parentAndChild", label: "Carer Code", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Carer Status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "No of Carer(s)", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Approval Date",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: { name: "areaOffice", label: "If Joint applicant, tick the Checkbox", fullWidth: true },
    component: RHFCheckbox,
  },
  {
    head: "Personal Details",
  },
  // {
  //   gridLength: 6,
  //   title: "Title",
  //   otherOptions: {
  //     name: "Title",
  //     fullWidth: true,
  //     select: true,
  //   },
  //   options: [
  //     { value: "Victor Krum (Safeguarding Officer)", label: "Victor Krum (Safeguarding Officer)" },
  //   ], component: RHFSelect,
  // },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Title", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { fileUpload: true, label: 'Upload image' },
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Local Authority", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Area Office", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "areaOffice", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Age", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Gender", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Ofstead Ethnicity", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Partnership status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Nationality", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Language", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Religion", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Age Range", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Immigration Status", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Behaviour", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Agency Social Worker", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Siblings group accepted?", fullWidth: true },
    component: RHFTextField,
  },
  {
    head: "Contact Details",
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Phone number", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "City/Town", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "County", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "County", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "age", label: "Postal code", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

];
