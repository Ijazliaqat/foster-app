import * as Yup from "yup";

export const defaultValues = {
  privacy: "",
  dress: "",
  language: "",
  touch: "",
  sortingOutDifferences: "",
  disciplineAndSanctions: "",
  manageSexualisedBehaviar: "",
  BedTimeRoutines: "",
  bathRoomRoutines: "",
  transportingChildren: "",
  babySitting: "",
  confidentiality: "",
  pets: "",
  computers: "",
  dayLogRecording: "",
  contactArrangements: "",
  offendingBehaviour: "",
  other: "",
  youngPersonComments: "",
};

export const FormSchema = Yup.object().shape({
  privacy: Yup.string().required("privacy is required"),
  dress: Yup.string().required("privacy is required"),
  language: Yup.string().required("privacy is required"),
  touch: Yup.string().required("privacy is required"),
  sortingOutDifferences: Yup.string().required("privacy is required"),
  disciplineAndSanctions: Yup.string().required("privacy is required"),
  manageSexualisedBehaviar: Yup.string().required("privacy is required"),
  BedTimeRoutines: Yup.string().required("privacy is required"),
  bathRoomRoutines: Yup.string().required("privacy is required"),
  transportingChildren: Yup.string().required("privacy is required"),
  babySitting: Yup.string().required("privacy is required"),
  confidentiality: Yup.string().required("privacy is required"),
  pets: Yup.string().required("privacy is required"),
  computers: Yup.string().required("privacy is required"),
  dayLogRecording: Yup.string().required("privacy is required"),
  contactArrangements: Yup.string().required("privacy is required"),
  offendingBehaviour: Yup.string().required("privacy is required"),
  other: Yup.string().required("privacy is required"),
  youngPersonComments: Yup.string().required("privacy is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "privacy",
      label: "Privacy",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "dress",
      label: "Dress",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "language",
      label: "Language",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "touch",
      label: "Touch",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "sortingOutDifferences",
      label: "Sorting out differences",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "disciplineAndSanctions",
      label: "Discipline and sanctions",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "manageSexualisedBehaviar",
      label: "managingSexBeh",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "BedTimeRoutines",
      label: "Bedtime routines",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "bathRoomRoutines",
      label: "Bathroom routines",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "transportingChildren",
      label: "Transporting Children",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "babySitting",
      label: "Baby sitting / Child Minding",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "confidentiality",
      label: "Confidentiality",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "pets",
      label: "Pets",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "computers",
      label: "Computers",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "dayLogRecording",
      label: "Day log recording",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "contactArrangements",
      label: "Contact Arrangements",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "offendingBehaviour",
      label: "Offending Behaviour",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "other",
      label: "Other",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "youngPersonComments",
      label: "Child / Young Person's Comments",
      fieldHeader: null,
    },
  ],
];
