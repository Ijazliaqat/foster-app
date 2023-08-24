import * as Yup from "yup";

export const defaultValues = {
  bronchities1: false,
  rhematism2: false,
  blood3: false,
  fits4: false,
  chronic5: false,
  anyInf6: false,
  enlarge7: false,
  mental8: false,
  diabetes9: false,
  accident10: false,
  have11: false,
  anyIll12: false,
  doYouSu13: false,
  areYouCur14: false,
  covid15: false,
  haveSustained16: false,
  haveSur17: false,
  haveAllergic18: false,
  haveSus19: false,
  haveClaimed20: false,
  detials: "",
};

export const FormSchema = Yup.object().shape({
  bronchities1: Yup.boolean(),
  rhematism2: Yup.boolean(),
  blood3: Yup.boolean(),
  fits4: Yup.boolean(),
  chronic5: Yup.boolean(),
  anyInf6: Yup.boolean(),
  enlarge7: Yup.boolean(),
  mental8: Yup.boolean(),
  diabetes9: Yup.boolean(),
  accident10: Yup.boolean(),
  have11: Yup.boolean(),
  anyIll12: Yup.boolean(),
  doYouSu13: Yup.boolean(),
  areYouCur14: Yup.boolean(),
  covid15: Yup.boolean(),
  haveSustained16: Yup.boolean(),
  haveSur17: Yup.boolean(),
  haveAllergic18: Yup.boolean(),
  haveSus19: Yup.boolean(),
  haveClaimed20: Yup.boolean(),
  detials: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "SWITCH",
      name: "bronchities1",
      label:
        "Bronchitis, Asthma, Persistent Cough, TB, Pleurisy, Infection of the lungs or Throat",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "rhematism2",
      label: "Rheumatism, Arthritis, Gout, Rheumatic Fever",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "blood3",
      label:
        "Blood Pressure, Palpitations, Shortness of Breath, Chest Pains, Infection of the Heart",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "fits4",
      label: "Fits, Fainting, Blackouts, Any disease of the nervous system?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "chronic5",
      label:
        "Chronic or persistent indigestion, Gastric or duodenal ulcer, Any other infection of the abdominal organs?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "anyInf6",
      label:
        "Any infection of the liver, Prostate, Kidneys, Urinary system, Reproductive system?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "enlarge7",
      label: "Enlarged glands, Tumours?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "mental8",
      label: "Mental breakdown, Anxiety, Depression?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "diabetes9",
      label: "Diabetes, Thyroid disease, Any other glandular disturbance?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "accident10",
      label: "Any accident, Physical defect, Disc or back trouble, Hernia?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "have11",
      label: "Have you ever suffered from AIDS, An AIDS related virus?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "anyIll12",
      label: "Any illness or condition not already mentioned?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "doYouSu13",
      label:
        "Do you or have you suffered from dermatitis, Skin allergies, Other skin diseases (eczema, psoriasis, etc.)?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "areYouCur14",
      label:
        "Are you currently receiving any medical treatment or taking any medication?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "covid15",
      label: "Covid Vaccination",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "haveSustained16",
      label: "Have you ever been refused employment because of your health?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "haveSur17",
      label: "Have you ever had a surgical operation?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "haveAllergic18",
      label: "Are you allergic to any drugs?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "haveSus19",
      label: "Have you ever sustained an industrial injury?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "haveClaimed20",
      label: "Have you ever claimed against your employer?",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "detials",
      label: "Drovide Details",
      fieldHeader: (
        <p style={{ marginBottom: "10px" }}>
          Approximately how many days absences have you had from work,school or
          university for health reasons during last 5 years? No of days and
          please give details of periods of absence due to sickness of five days
          or more
        </p>
      ),
    },
  ],
];
