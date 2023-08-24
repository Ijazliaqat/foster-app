import wordIcon from "@root/assets/svg/word-icon.svg";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";

//Employement Status Data
export const EMPLOYEMENT_STATUS = [
  {
    id: 1,
    label: "Select Candidate's Employement Status",
    title: "Paye",
  },
  {
    id: 2,
    label: "Pay Tax Code",
    title: "155345645354",
  },
  {
    id: 3,
    label:
      "Do you have a P45 from a previuos employer within the current tax year",
    title: "No",
  },
  {
    id: 4,
    label: "National Insurance No",
    title: "1531156655",
  },
  {
    id: 5,
    label: "Do you have one of the student loans",
    title: "No",
  },
  {
    id: 6,
    label: "Document",
    sublist: [
      {
        id: 1,
        title: "doc.pdf",
        icon: wordIcon,
      },
    ],
  },
  {
    id: 7,
    label:
      "Are you repaying your student loan directly to the student loan company",
    title: "No",
  },
  {
    id: 8,
    label: "Do you have a post graduate loan which is fully repaid?",
    title: "No",
  },
];

//Addtional Documents Data
export const ADDITIONAL_DOCS = [
  {
    id: 1,
    label: "DOCUMENT NAME",
    title: "Xyz",
  },
  {
    id: 2,
    label: "DOCUMENT",
    sublist: [
      {
        id: 1,
        title: "doc.pdf",
        icon: wordIcon,
      },
    ],
  },
];

//ID Upload Data
export const UPLOADID_DATA = [
  {
    id: 1,
    label: "ID Proof Upload",
    icon: pdfIcon,
    title: "Doc.pdf",
  },
];
