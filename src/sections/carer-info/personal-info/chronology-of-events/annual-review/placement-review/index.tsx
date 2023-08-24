import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const placementReviewData = [
  {
    id: 2,
    otherOptions: {
      name: "childCode",
      label: "Child Code",
      select: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
  {
    id: 2,
    title: "Identity Religion",
    gridLength: 12,
    otherOptions: {
      name: "identityReligion",
      label:
        "(If a trans-racial placement, how is the child's needs being met)",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "independenceSeldCareSkills",
      label: "Independence Self-Care Skills",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "socialPresentationLeisureSkills",
      label: "Social Presentation Leisure Skills",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "contact",
      label: "Contact",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "otherIssuesOrConcerns",
      label: "Other issues or Concerns",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "statementFromChild",
      label: "Statement from Child/Young Person",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as PlacementReview } from "./PlacementReview";

export const defaultValues = {
  childCode: "",
  identityReligion: "",
  independenceSeldCareSkills: "",
  socialPresentationLeisureSkills: "",
  contact: "",
  otherIssuesOrConcerns: "",
  statementFromChild: "",
};

export const formSchema = Yup.object().shape({
  childCode: Yup.string().required("required"),
  identityReligion: Yup.string().required("required"),
  independenceSeldCareSkills: Yup.string().required("required"),
  socialPresentationLeisureSkills: Yup.string().required("required"),
  contact: Yup.string().required("required"),
  otherIssuesOrConcerns: Yup.string().required("required"),
  statementFromChild: Yup.string().required("required"),
});
