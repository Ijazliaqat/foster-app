import * as Yup from "yup";

export const defaultValues = {
  tetanus: false,
  hepatitis: false,
  polio: false,
  varicella: false,
  measure: false,
  annual: false,
  covid: false,
  bacilllus: false,
};

export const FormSchema = Yup.object().shape({
  tetanus: Yup.string(),
  hepatitis: Yup.string(),
  polio: Yup.string(),
  varicella: Yup.string(),
  measure: Yup.string(),
  annual: Yup.string(),
  covid: Yup.string(),
  bacilllus: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "SWITCH",
      name: "tetanus",
      label: "Tetanus",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "hepatitis",
      label: "Hepatitis B",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "polio",
      label: "Polio",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "varicella",
      label: "Varicella (Chickenpox)",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "measure",
      label: "Measure,mumps & rubella (MMR)",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "annual",
      label: "Annual influenza Vaccine",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "covid",
      label: "Covid Vaccination",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "bacilllus",
      label: "Bacillus Calmette-Guerin (BCG)",
      fieldHeader: null,
    },
  ],
];
