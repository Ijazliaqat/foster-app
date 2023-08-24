import wordIcon from "@root/assets/svg/word-icon.svg";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";

//Background Checks Data
export const BACKGROUND_CHECKS = [
  {
    id: 1,
    label: "Does the candidate have a valid Enhanced DBS?",
    title: "Yes",
  },
  {
    id: 2,
    label: "DBS (PVG) Certificate",
    title: "155345645354",
  },
  {
    id: 3,
    label: "DBS (PVG) Issue Date",
    title: "09/04/2007",
  },
  {
    id: 4,
    label: "Is DBS (PVG) online?",
    title: "Yes",
  },
  {
    id: 5,
    label: "DBS (PVG) UPdate Service No",
    title: "123456799",
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
];

//Background Checks Data
export const RIGHT_WORD = [
  {
    id: 1,
    label: "Does the candidate have the right to work in UK",
    title: "Yes",
  },
  {
    id: 2,
    label: "Visa Type",
    title: "155345645354",
  },
  {
    id: 3,
    label: "Visa / BRP Number",
    title: "15312545643",
  },
  {
    id: 4,
    label: "Visa / BRP Expiry Date",
    title: "03/04/2023",
  },
  {
    id: 5,
    label: "Share Code",
    title: "123456799",
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
];

//ID Upload Data
export const ID_DATA = [
  {
    id: 1,
    label: "ID Proof Upload",
    icon: pdfIcon,
    title: "Doc.pdf",
  },
];
