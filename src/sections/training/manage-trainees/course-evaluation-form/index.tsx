import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initialValues = {
  courseNumber: "",
  instructor: "",
  fieldOfStudy: "",
  question1: "",
};
export const formSchema = Yup.object().shape({
  courseNumber: Yup.string().required("Field is required"),
  instructor: Yup.string().required("Field is required"),
});

let hideLabel = {
  "& .MuiFormControlLabel-label": {
    display: { xl: "none", xs: "inline" },
  },
};

export const courseEvaluation = [
  {
    gridLength: 6,
    title: "Course Number",
    fontWeight: 600,
    otherOptions: {
      name: "courseNumber",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Instructor",
    fontWeight: 600,
    otherOptions: {
      name: "instructor",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    gridSX: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 },
    title: "For your field of study, was this a required course or an elective?",
    fontWeight: 500,
    otherOptions: {
      name: "fieldOfStudy",
      options: ["Required Course", "Elective"],
      sx: { mx: { xl: "50px !important" } },
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    head: "Please choose the best answer for each of the following.",
    labels: [
      { title: "strongly agree", ml: "-38px", mr: "0" },
      { title: "agree", ml: "18px", mr: "0" },
      { title: "neutral", ml: "48px", mr: "0" },
      { title: "disagree", ml: "40px", mr: "0" },
      { title: "strongly disagree", ml: "0", mr: "20px" },
    ],
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: "1. I have c clear idea of what is expected of me in this course",
    otherOptions: {
      name: "question1",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        width: { xl: "45rem", xs: "auto" },
        paddingInline: { md: "10px", xs: "0" },
        py: 0.5,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title:
      "2. The ways in which I was taught provided me with oppoetunities to pursue my own learning",
    otherOptions: {
      name: "question2",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        paddingInline: { md: "10px", xs: "0" },
        py: 1.8,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title:
      "3. The course enabled me to develop and/or strengthen a number of the qualities of a University of South Australia graduate",
    otherOptions: {
      name: "question3",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        paddingInline: { md: "10px", xs: "0" },
        py: 1.8,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title: "4. I felt there was a genuine interest in my learning needs and progress",
    otherOptions: {
      name: "question4",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      hiddenLabel: true,
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        paddingInline: { md: "10px", xs: "0" },
        py: 0.5,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title: "5. The course developed my understanding of concepts and principles",
    otherOptions: {
      name: "question5",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      hiddenLabel: true,
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        paddingInline: { md: "10px", xs: "0" },
        py: 0.5,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title: "6. The workload for this course was reasonable given my other study commitments",
    otherOptions: {
      name: "question6",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      hiddenLabel: true,
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        px: { md: "10px", xs: "0" },
        py: 1.8,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title: "7. I have recieved feedback that is constructive and helpful",
    otherOptions: {
      name: "question7",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      hiddenLabel: true,
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        borderBottom: { xl: "none" },
        px: { md: "10px", xs: "0" },
        py: 0.5,
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    gridSX: {
      display: { xl: "flex", xs: "block" },
      alignItems: "center",
      pt: "0 !important",
      justifyContent: "space-between",
    },
    title:
      "8. The assessment tasks were related to the qualities of a University of South Australia graduate",
    otherOptions: {
      name: "question8",
      options: ["strongly agree", "agree", "netural", "disagree", "strongly disagree"],
      hiddenLabel: true,
      sx: {
        justifyContent: { xl: "space-around", xs: "space-between" },
        display: "flex",
        width: { xl: "45rem", xs: "auto" },
        border: { lg: "1px solid #DBDBDB", xs: "none" },
        py: 1.8,
        paddingInline: { md: "10px", xs: "0" },
        ...hideLabel,
      },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "9. Overall, what are the strengths of this course?",
    otherOptions: {
      name: "desc1",
      fullWidth:true,
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "10. Are there any ways this course could be improved?",
    otherOptions: {
      name: "desc2",
      fullWidth:true,
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
  },
];
