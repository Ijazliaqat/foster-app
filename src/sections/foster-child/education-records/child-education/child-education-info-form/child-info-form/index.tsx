import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import { designatedAuthority } from "@root/dropdown-data/designatedAuthority";
import { educationStage } from "@root/dropdown-data/educationStage";
import { personalEducationPlan } from "@root/dropdown-data/personalEducationPlan";
import { SCHOOLTYPE } from "@root/dropdown-data/schoolType";
import { schoolYear } from "@root/dropdown-data/schoolYear";

export const educationInfoDefaultValues = {
  schoolPlacement: false,
  ifNotSchoolPlacement: "",
  school: "",
  schoolType: "",
  schoolAddress: {
    isChildCurrentSchool: false,
    isFosterPlacementChange: false,
    doesSpecialEducationalNeeds: false,
  },
  personalEducationPlan: "",
  schoolYear: "",
  classStudying: "",
  currentKeyStage: "",
  expectedKeyStage: "",
  attendance: "",
  schoolBusPhone: "",
  teacherName: "",
  teacherRole: "",
  teacherPhone: "",
  teacherEmail: "",
  designatedAuthority: "",
  educationStage: "",
  specialEducationNeeds: "",
  arrangementSpecialEducation: "",
  achievements: "",
  awardsAndRewards: "",
  notes: "",
};

export const educationInfoFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "schoolPlacement",
      label: "Does this child have a Placement?",
      disabled: isFieldDisable,
    },
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 12,
    title: "If no to above question, please give details",
    otherOptions: {
      name: "ifNotSchoolPlacement",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    title: "School:",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "school",
      select: true,
      disabled: isFieldDisable,
    },
    options: SCHOOLTYPE,
  },
  {
    id: 6,
    title: "School Type :",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "schoolType",
      select: true,
      disabled: isFieldDisable,
    },
    options: SCHOOLTYPE,
  },
  {
    id: 2,
    title: "School Address",
    otherOptions: {
      variant: "body2",
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "schoolAddress.isChildCurrentSchool",
      label: "Is this child's Current School?",
      disabled: isFieldDisable,
    },
    component: RHFCheckbox,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "schoolAddress.isFosterPlacementChange",
      label: "Is this School due to Foster Placement change?",
      disabled: isFieldDisable,
    },
    component: RHFCheckbox,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "schoolAddress.doesSpecialEducationalNeeds",
      label: "Does the child have a statement of special educational needs?",
      disabled: isFieldDisable,
    },
    component: RHFCheckbox,
  },
  {
    id: 6,
    title: "Personal Education Plan",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "personalEducationPlan",
      select: true,
      disabled: isFieldDisable,
    },
    options: personalEducationPlan,
  },
  {
    id: 6,
    title: "School Year",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "schoolYear",
      select: true,
      disabled: isFieldDisable,
    },
    options: schoolYear,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Class Studying",
    otherOptions: {
      name: "classStudying",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    title: "Current Key Stage",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "currentKeyStage",
      select: true,
      disabled: isFieldDisable,
    },
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
    ],
  },
  {
    id: 6,
    title: "Expected Key Stage",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "expectedKeyStage",
      select: true,
      disabled: isFieldDisable,
    },
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
    ],
  },
  {
    id: 3,
    gridLength: 6,
    title: "Attendance (%)",
    otherOptions: {
      name: "attendance",
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    title: "School Bus Phone",
    otherOptions: {
      name: "schoolBusPhone",
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    title: "Teacher's Name",
    otherOptions: {
      name: "teacherName",
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    title: "Teacher's Role",
    otherOptions: {
      name: "teacherRole",
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    title: "Teacher's Phone",
    otherOptions: {
      name: "teacherPhone",
      type: "number",
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    title: "Teacher's Email Address",
    otherOptions: {
      name: "teacherEmail",
      type: "email",
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    title: "Designated Authority",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "designatedAuthority",
      select: true,
      disabled: isFieldDisable,
    },
    options: designatedAuthority,
  },
  {
    id: 6,
    title: "Stage of Education",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "educationStage",
      select: true,
      disabled: isFieldDisable,
    },
    options: educationStage,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Special Education Needs",
    otherOptions: {
      name: "specialEducationNeeds",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    title: "ArrangementForSpecialEduNeeds",
    otherOptions: {
      name: "arrangementSpecialEducation",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Achievements",
    otherOptions: {
      name: "achievements",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Awards and Rewards",
    otherOptions: {
      name: "awardsAndRewards",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Notes",
    otherOptions: {
      name: "notes",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
];

export const defaultValueEducationInfoForm = (
  data: any = educationInfoDefaultValues
) => {
  return {
    schoolPlacement: data?.schoolPlacement,
    ifNotSchoolPlacement: data?.ifNotSchoolPlacement,
    school: data?.school,
    schoolType: data?.schoolType,
    schoolAddress: {
      isChildCurrentSchool: data?.schoolAddress?.isChildCurrentSchool ?? false,
      isFosterPlacementChange:
        data?.schoolAddress?.isFosterPlacementChange ?? false,
      doesSpecialEducationalNeeds:
        data?.schoolAddress?.doesSpecialEducationalNeeds ?? false,
    },
    personalEducationPlan: data?.personalEducationPlan,
    schoolYear: data?.schoolYear,
    classStudying: data?.classStudying,
    currentKeyStage: data?.currentKeyStage,
    expectedKeyStage: data?.expectedKeyStage,
    attendance: data?.attendance,
    schoolBusPhone: data?.schoolBusPhone,
    teacherName: data?.teacherName,
    teacherRole: data?.teacherRole,
    teacherPhone: data?.teacherPhone,
    teacherEmail: data?.teacherEmail,
    designatedAuthority: data?.designatedAuthority,
    educationStage: data?.educationStage,
    specialEducationNeeds: data?.specialEducationNeeds,
    arrangementSpecialEducation: data?.arrangementSpecialEducation,
    achievements: data?.achievements,
    awardsAndRewards: data?.awardsAndRewards,
    notes: data?.notes,
  };
};
