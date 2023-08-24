
import demoImage from "../../../../../assets/svg/training/courseList.svg";

export const courseList = [
  {
    desc: " 2 Day Verbal and Physical De-Escalation Fostering Face to Face Course",
    isStatus: true,
    coverImage: demoImage
  },
  {
    desc: " Child Protection and Safeguarding Fostering Face to Face Course",
    isMandatory: true,
    coverImage: demoImage
  },
  {
    desc: " Child Sexual Exploitation Advanced Level Fostering Face to Face Course",
    isMandatory: true,
    isStatus: true,
    coverImage: demoImage
  },
  {
    desc: "Child Sexual Exploitation Fostering Face to Face Course",
    coverImage: demoImage
  },
  {
    desc: "Fire Safety Fostering Face to Face Course",
    coverImage: demoImage
  },
  {
    desc: "First Aid Refresher Fostering Face to Face Course",
    coverImage: demoImage
  },
];
export const SELECT_FILTERS = [
  {
    key: "SelectCategory",
    label: "Select Category",
    options: [
      { label: "Current Referral", value: "currentReferral" },
      { label: "Onhold", value: "onHold" },
      { label: "Rejected", value: "rejected" },
    ],
  },
  {
    key: "SelectCourse",
    label: "Select Course",
    options: [
      { label: "Foster Carer", value: "fosterCarer" },
      { label: "Foster Child", value: "fosterChild" },
      { label: "Social Worker", value: "socialWorker" },
      { label: "Other", value: "other" },
    ],
  },
];