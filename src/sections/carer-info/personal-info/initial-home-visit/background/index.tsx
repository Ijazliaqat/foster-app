import * as Yup from "yup";

export const backgroundFormValues = {
  knowledgeOfSexualHarmful: "",
  availability: "",
  supportNetwork: "",
  interestAndHobby: "",
  health: "",
  conviction: "",
};

export const defaultValuesBackgroundForm = (data = backgroundFormValues) => {
  return {
    knowledgeOfSexualHarmful: data.knowledgeOfSexualHarmful,
    availability: data.availability,
    supportNetwork: data.supportNetwork,
    interestAndHobby: data.interestAndHobby,
    health: data.health,
    conviction: data.conviction,
  };
};

export const backgroundFormSchema = Yup.object().shape({
  knowledgeOfSexualHarmful: Yup.string()
    .trim()
    .required("Knowledge of sexual harmful is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  availability: Yup.string()
    .trim()
    .required("Availability is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  supportNetwork: Yup.string()
    .trim()
    .required("Support network is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  interestAndHobby: Yup.string()
    .trim()
    .required("Interest and hobby is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  health: Yup.string()
    .trim()
    .required("Health is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  conviction: Yup.string()
    .trim()
    .required("Conviction knowledge is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
});

export const backgroundFormFieldsInfoFunction = (isFieldDisable = false) => [
  {
    type: "textarea",
    fullWidth: true,
    name: "knowledgeOfSexualHarmful",
    label: "",
    title:
      "Knowledge of Sexual harmful behaviour (What knowledge does the applicant/s have this?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "availability",
    label: "",
    title:
      "Availability (At least one carer needs to be available at all times):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "supportNetwork",
    label: "",
    title:
      "Support Network (The applicant/s will need to describe their support network and its reliability):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "interestAndHobby",
    label: "",
    title:
      "Interest, Hobbies, Talents (What are these? Where? When? With whom? Are they pursued individually or with others or both?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "health",
    label: "",
    title:
      "Health /Recent loss (How do they describe their health; any recent operations ; are they taking medication? Have they experienced any recent loss or bereavement?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
  {
    type: "textarea",
    fullWidth: true,
    name: "conviction",
    label: "",
    title:
      "Conviction (Do the applicant/s have any post, pending or currrent convictions?):",
    gridSize: { xs: 12 },
    disabled: isFieldDisable,
  },
];
