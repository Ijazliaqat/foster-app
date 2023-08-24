import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

export const unannouncedhomeVisitData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "personVisited",
      label: "Person name who carried out the visit:",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "dateOfVisit",
      label: "Date of Visit:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "purposeOfUnannouncedVisit",
      label: "Purpose of Unannounced Visit:",
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
      name: "whoWasPresent",
      label: "Who was present:",
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
      name: "wereTheCarersWelcoming",
      label: "Were the carers welcoming into the home?",
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
      name: "isFosterHomeSatisfactory",
      label: "Is the condition of the foster home satisfactory:",
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
      name: "observationOnTheChild",
      label:
        "Observation on the child/young people in placement. Was the child/ren integrated into the family home? How did the adults and children interact? Record positives and any concerns in relation to this:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "anyIssuesDiscussedCarer",
      label: "Any issues discussed with the foster carer:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "anyIssuesDiscussedChild",
      label: "Any issues discussed with the child/young person:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "anyHealthAndSafetyIssues",
      label:
        "Were there any health and safety issues in the home? Did you have a look around the home including the child's bedroom. Please comment and if not,why not?:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "didChildAppearedSatisfactory",
      label: "Did the care to the child/young person apperar satisfactory?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "anyActionOrIssues",
      label: "Any issues/action to be taken forward:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const formatters: any = {};

for (const formControl of unannouncedhomeVisitData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export { default as UnannouncedHomeVisitForm } from "./UnannouncedHomeVisitForm";

export const defaultValues = {
  personVisited: "",
  dateOfVisit: new Date(),
  purposeOfUnannouncedVisit: "",
  whoWasPresent: "",
  wereTheCarersWelcoming: "",
  isFosterHomeSatisfactory: "",
  observationOnTheChild: "",
  anyIssuesDiscussedCarer: "",
  anyIssuesDiscussedChild: "",
  anyHealthAndSafetyIssues: "",
  didChildAppearedSatisfactory: "",
  anyActionOrIssues: "",
};

export const formSchema = Yup.object().shape({
  personVisited: Yup.string().required("required"),
  dateOfVisit: Yup.date().required("required"),
  purposeOfUnannouncedVisit: Yup.string().required("required"),
  whoWasPresent: Yup.string().required("required"),
  wereTheCarersWelcoming: Yup.string().required("required"),
  isFosterHomeSatisfactory: Yup.string().required("required"),
  observationOnTheChild: Yup.string().required("required"),
  anyIssuesDiscussedCarer: Yup.string().required("required"),
  anyIssuesDiscussedChild: Yup.string().required("required"),
  anyHealthAndSafetyIssues: Yup.string().required("required"),
  didChildAppearedSatisfactory: Yup.string().required("required"),
  anyActionOrIssues: Yup.string().required("required"),
});
