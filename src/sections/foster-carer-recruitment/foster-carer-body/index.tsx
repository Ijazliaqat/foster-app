import Caution from "@root/assets/img/foster-carer-recruitment/Caution.png";
import Circle from "@root/assets/img/foster-carer-recruitment/Circle.png";
import Cancel from "@root/assets/img/foster-carer-recruitment/Cancel.png";
import Exclamation from "@root/assets/img/foster-carer-recruitment/Exclamation.png";

export const REMINDERSANDNOTIFICATIONS = [
  {
    id: 1,
    background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)",
    border: "none",
    src: Caution,
    title: "Approval Pending",
    caption: "Rita needs approval from RM",
    textDecoration: "none",
  },
  {
    id: 2,
    background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    border: "none",
    src: Circle,
    title: "Assessment Pending",
    caption: "from Social Worker",
    textDecoration: "none",
  },
  {
    id: 3,
    background: "none",
    border: (theme: any) => `1px solid ${theme.palette.primary.main}`,
    src: Cancel,
    title: "Assessment Rejected",
    caption: "by Social Worker",
    textDecoration: "none",
  },
  {
    id: 4,
    background: "none",
    border: (theme: any) => `1px solid ${theme.palette.primary.main}`,
    src: Exclamation,
    title: "Approval Done",
    caption: "View Details",
    textDecoration: "underline",
  },
  {
    id: 5,
    background: "none",
    border: (theme: any) => `1px solid ${theme.palette.primary.main}`,
    src: Exclamation,
    title: "Audit Done",
    caption: "View Details",
    textDecoration: "underline",
  },
  {
    id: 6,
    background: "none",
    border: (theme: any) => `1px solid ${theme.palette.primary.main}`,
    src: Caution,
    title: "Review Pending",
    caption: "View Details",
    textDecoration: "underline",
  },
];

export { default as FosterCarerBody } from "./FosterCarerBody";
