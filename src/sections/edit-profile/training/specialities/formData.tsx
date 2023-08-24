import * as Yup from "yup";

export const defaultValues = {
  followInstruction: false,
  teamWork: false,
  caring: false,
  communication: false,
  moving: false,
  observationSkill: false,
  organisingSkill: false,
  orgSkills: false,
  handsOn: false,
  personalCare: false,
  others: "Put Your Opinion Here",
};

export const FormSchema = Yup.object().shape({
  followInstruction: Yup.boolean(),
  teamWork: Yup.boolean(),
  caring: Yup.boolean(),
  communication: Yup.boolean(),
  moving: Yup.boolean(),
  observationSkill: Yup.boolean(),
  organisingSkill: Yup.boolean(),
  handsOn: Yup.boolean(),
  personalCare: Yup.boolean(),
  others: Yup.string().required("Am I Optional?"),
});

export const fieldsInfo = [
  [
    {
      type: "SWITCH",
      name: "followInstruction",
      label: "Able to follow instructions & procedures",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "teamWork",
      label: "Able to work in a team but use own initiative",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "caring",
      label: "Caring and kind",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "communication",
      label: "Communication skills, including listening",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "moving",
      label: "Moving and handling",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "observationSkill",
      label: "Observational skills",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "organisingSkill",
      label: "Organising skills",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "handsOn",
      label: "Willing to be hands-on with patients",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "personalCare",
      label: "Willing to do personal care tasks",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "others",
      label: "Others",
      fieldHeader: null,
    },
  ],
];
