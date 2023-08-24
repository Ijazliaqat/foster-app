import { RHFRadioGroup } from "@root/components/hook-form";

// ===================================================================================

export const carerAdvocacyData = [
  {
    otherOptions: {
      defaultValue: "Explaining what rights other people have under the Mental Health Review Tribunal",
      name: "approval",
      options: [
        "Explaining what rights other people have under the Mental Health Review Tribunal",
        "Helping them understand their rights and how to exercise them",
        "Supporting individuals to voice their views, wishes and feelings abouth their mental health care and treatment",
        "Talking to people about how the Mental Health Act affects them, including any conditions and restrictions",
        "Making a complaint or raising a concern about someone’s care and treatment",
        "Accessing free legal support to help people appeal to a Mental Health Review Tribunal",
        "Attending meetings(for example ward reviews, multidiscipilinary reviews, discharge planning meetings)",
        "Accessing records about care and treatment",
        "If people can’t tell their advocate what they want,it’s not aproblem. Our advocates will find different ways of working to help establish people’s views and wishes as far as possible so that their rights can be upheld. we call this ‘non-instructed’ advocacy",
        "Others",
      ],
      sx: { "& .MuiFormControlLabel-root": { md: { flexBasis: "45%" }, xs: { flexBasis: "100%" } } },
    },
    component: RHFRadioGroup,
  },
];
