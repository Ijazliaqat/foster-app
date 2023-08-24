export const tabs = [
  {
    name: "ABOUT THE CANDIDATE",
    limit: [0, 4],
  },
  { name: "REFERENCES", limit: [4, 5] },
  {
    name: "TRAINING & WORK HISTORY",
    limit: [5, 9],
  },
  {
    name: "BACKGROUND CHECKS",
    limit: [9, 11],
  },
  {
    name: "OTHER INFORMATION",
    limit: [11, 17],
  },
  {
    name: "MEDICAL HISTORY",
    limit: [17, 19],
  },
  {
    name: "DECLARATION",
    limit: [19, 20],
  },
];

export const tabsItems = [
  { name: "Personal Info", status: "Done" },
  { name: "Address Details", status: "Done" },
  { name: "Photo for ID Badge", status: " Pending" },
  { name: "ID Upload (Passport/DL)", status: "Pending" },
  { name: "Add Reference", status: "Pending" },
  { name: "Training Certificates", status: "Pending" },
  { name: "Additional Training Details", status: "Pending" },
  { name: "Work Experience", status: "Pending" },
  { name: "Specialities", status: "Pending" },
  { name: "DBS", status: "Pending" },
  { name: "Right to work", status: "Pending" },
  { name: "Next Of kin", status: "Pending" },
  { name: "Contact Preference", status: "Pending" },
  { name: "Employment Status", status: "Pending" },
  { name: "Opportunity Declaration", status: "Pending" },
  { name: "Additional Docs", status: "Pending" },
  { name: "Bank Details", status: "Pending" },
  { name: "Immunisation", status: "Pending" },
  { name: "Medical Questionnaire", status: "Pending" },
  { name: "Add Declaration", status: "Pending" },
];

export const localFormNames = [
  "Personal Info",
  "personalInfo",
  "Address Details",
  "addressdetail",
  "Photo for ID Badge",
  "badgeId",
  "ID Upload (Passport/DL)",
  "passport",
  "Add Reference",
  "reference",
  "Training Certificates",
  "trainingCertificate",
  "Additional Training Details",
  "trainingDetail",
  "Work Experience",
  "workExperience",
  "Specialities",
  "specialities",
  "DBS",
  "dbs",
  "Right to work",
  "workRight",
  "Next Of kin",
  "nextOfKim",
  "Contact Preference",
  "contactPreferance",
  "Employment Status",
  "employmentStatus",
  "Opportunity Declaration",
  "opportunityDeclaration",
  "Additional Docs",
  "documents",
  "Bank Details",
  "bankDetail",
  "Immunisation",
  "immunisation",
  "Medical Questionnaire",
  "questionair",
  "Add Declaration",
  "declaration",
];

export const generateLocalFormsStatuses = (formName: string) => {
  let fromNowItIsPending = false;
  const localFormName = localFormNames[localFormNames.indexOf(formName) - 1];
  return tabsItems.map(({ name }: any) => {
    if (name === localFormName) {
      fromNowItIsPending = true;
      return { name, status: "Pending" };
    } else {
      return fromNowItIsPending
        ? { name, status: "Pending" }
        : { name, status: "Done" };
    }
  });
};
