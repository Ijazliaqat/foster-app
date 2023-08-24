import CyberAccordionTable from "./cyber-accordan-data/CyberAccordionTable";
import GeneralDataProtectionChecklistIcon from "../../../assets/svg/policy-guidelines/GeneralDataProtectionChecklist.svg";

// ===================================================================================================

export const accordionData = [
  {
    id: "1",
    title: "Appendix A ( GDPR )",
    component: <CyberAccordionTable name={"Appendix A"} />,
  },
  {
    id: "2",
    title: "Appendix B ( Job Description of Data Protection officer  )",
    component: <CyberAccordionTable name={"Appendix B"} />,
  },
  {
    id: "3",
    title: "Appendix C ( GDPR specific Privacy Notice  )",
    component: <CyberAccordionTable name={"Appendix C"} />,
  },
  {
    id: "4",
    title: "Appendix D ( Privacy Notice  for Foster Carer’s Network )",
    component: <CyberAccordionTable name={"Appendix D"} />,
  },
  {
    id: "5",
    title: "Appendix E ( Privacy Notice  - Letter to Personal Referee )",
    component: <CyberAccordionTable name={"Appendix E"} />,
  },
  {
    id: "6",
    title: "Appendix F ( Info to include in GDPR )",
    component: <CyberAccordionTable name={"Appendix F"} />,
  },
  {
    id: "7",
    title: "DPO and 6 Core Principles",
    component: <CyberAccordionTable name={"DPO and 6 Core Principles"} />,
  },
  {
    id: "8",
    title: "Cyber Essentials",
    component: <CyberAccordionTable name={"Cyber Essentials"} />,
  },
  {
    id: "9",
    title: "Cyber Essentials Checklist",
    component: <CyberAccordionTable name={"Cyber Essentials Checklist"} />,
  },
];

// ===================================================================================================

export const CyberEssentialsData = [
  {
    index: 0,
    title: "General Data Protectection Regulation",
    img: GeneralDataProtectionChecklistIcon,
  },
];
