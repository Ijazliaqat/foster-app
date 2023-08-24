import AdministrationIcon from "../../assets/svg/compliance-management/administrativeIcon.svg";
import DataProtectionIcon from "../../assets/svg/compliance-management/dataProtectionIcon.svg";
import CovidIcon from "../../assets/svg/compliance-management/covidIcon.svg";
import CareManagementIcon from "../../assets/svg/compliance-management/careManagementIcon.svg";
import CarePlanningIcon from "../../assets/svg/compliance-management/carePlainningIcon.svg";
import HealthIcon from "../../assets/svg/compliance-management/healthIcon.svg";
import HumanResourcesIcon from "../../assets/svg/compliance-management/humanResourceIcon.svg";
import MedicationMangementIcon from "../../assets/svg/compliance-management/medicationIcon.svg";
import QualityAssuranceIcon from "../../assets/svg/compliance-management/qualityAssuranceIcon.svg";
import SupportServicesIcon from "../../assets/svg/compliance-management/supportServicesIcon.svg";
import FundamentalStandardsIcon from "../../assets/svg/compliance-management/fundamentalServicesIcon.svg";
import MockInspectionIcon from "../../assets/svg/compliance-management/mockInspectionIcon.svg";
import StakeHoldersIcon from "../../assets/svg/compliance-management/stakeholderIcon.svg";

import pdfFile from "../../components/modal/PdfViewModal/dummy.pdf";

const pdfData = Array.from({ length: 10 }, (_, index) => ({
  title: "this is pdf " + (index + 1),
  file: pdfFile,
}));

export const ComplianceTabsData = [
  {
    index: 0,
    title: "Administration",
    icon: AdministrationIcon,
    color: "#0E918C",
    innerDataArray: [
      {
        id: 1,
        title: "Business Operations",
        data: pdfData,
      },
      {
        id: 2,
        title: "Communications",
        data: pdfData,
      },
      {
        id: 3,
        title: "Registration & Compliance-Administration",
        data: pdfData,
      },
      {
        id: 4,
        title: "Finance ",
        data: pdfData,
      },
    ],
  },
  {
    index: 1,
    title: "Data Protection",
    icon: DataProtectionIcon,
    color: "#465987",
    innerDataArray: [
      {
        id: 1,
        title: "Policies",
        data: pdfData,
      },
      {
        id: 2,
        title: "Forms",
        data: pdfData,
      },
    ],
  },
  {
    index: 2,
    title: "Covid-19 Hub",
    icon: CovidIcon,
    color: "#FF9900",
    innerDataArray: [
      {
        id: 1,
        title: "Health and Safety COVID-19",
        data: pdfData,
      },
      {
        id: 2,
        title: "Human Resources COVID-19",
        data: pdfData,
      },
      {
        id: 2,
        title: "Care Management COVID-19",
        data: pdfData,
      },
      {
        id: 2,
        title: "Business Admin COVID-19",
        data: pdfData,
      },
    ],
  },
  {
    index: 3,
    title: "Care Management",
    icon: CareManagementIcon,
    color: "#10B0C6",
    innerDataArray: [
      {
        id: 13,
        title: "Care Practice",
        data: pdfData,
      },
      {
        id: 2,
        title: "Rights and Abuse",
        data: pdfData,
      },
      {
        id: 3,
        title: "Risk Assessment and Personal Planning",
        data: pdfData,
      },
      {
        id: 4,
        title: "Clinical  governance",
        data: pdfData,
      },
    ],
  },
  {
    index: 4,
    title: "Care Planning",
    icon: CarePlanningIcon,
    color: "#F63D31",
    innerDataArray: [
      {
        id: 1,
        title: "Risk Assessment and Personal Planning",
        data: pdfData,
      },
      {
        id: 2,
        title: "Service Commencement",
        data: pdfData,
      },
      {
        id: 3,
        title: "Care Plans",
        data: pdfData,
      },
      {
        id: 4,
        title: "Assessments",
        data: pdfData,
      },
      {
        id: 5,
        title: "Supplementary Documents",
        data: pdfData,
      },
    ],
  },
  {
    index: 5,
    title: "Health & Saftey",
    icon: HealthIcon,
    color: "#0E918C",
    innerDataArray: [
      {
        id: 1,
        title: "Risk Assessments",
        data: pdfData,
      },
      {
        id: 2,
        title: "Health and  Safety ",
        data: pdfData,
      },
      {
        id: 3,
        title: "Residential Services ",
        data: pdfData,
      },
      {
        id: 4,
        title: "Building and Equipmen ",
        data: pdfData,
      },
    ],
  },
  {
    index: 6,
    title: "Human Resources",
    icon: HumanResourcesIcon,
    color: "#10B0C6",
    innerDataArray: [
      {
        id: 1,
        title: "Absence, Holidays and Sickness ",
        data: pdfData,
      },
      {
        id: 2,
        title: "Contract of  Employment",
        data: pdfData,
      },
      {
        id: 3,
        title: "Equality & human Rights",
        data: pdfData,
      },
      {
        id: 4,
        title: "Well Being",
        data: pdfData,
      },
      {
        id: 5,
        title: "Miscellaneous",
        data: pdfData,
      },
    ],
  },
  {
    index: 7,
    title: "Medications Management",
    icon: MedicationMangementIcon,
    color: "#23183D",
    innerDataArray: [
      {
        id: 1,
        title: "Medications Management",
        data: pdfData,
      },
    ],
  },
  {
    index: 8,
    title: "Quality Assurance",
    icon: QualityAssuranceIcon,
    color: "#20BE60",
    innerDataArray: [
      {
        id: 1,
        title: "Administration Quality  asssurance",
        data: pdfData,
      },
      {
        id: 2,
        title: "Human Resources Quality assurance",
        data: pdfData,
      },
      {
        id: 3,
        title: "Management of Quality assurance ",
        data: pdfData,
      },
      {
        id: 4,
        title: "Care Management  ",
        data: pdfData,
      },
    ],
  },
  {
    index: 9,
    title: "Support Services",
    icon: SupportServicesIcon,
    color: "#F63D31",
    innerDataArray: [
      {
        id: 1,
        title: "Hygiene",
        data: pdfData,
      },
      {
        id: 2,
        title: "Catering Services",
        data: pdfData,
      },
      {
        id: 3,
        title: "Risk Assessment & Safety",
        data: pdfData,
      },
    ],
  },
  {
    index: 10,
    title: "Fundamental Standards",
    icon: FundamentalStandardsIcon,
    color: "#23183D",
    innerDataArray: [
      {
        id: 1,
        title: "Policy",
        data: pdfData,
      },
    ],
  },
  {
    index: 11,
    title: "Mock Inspection Toolkit",
    icon: MockInspectionIcon,
    color: "#FE7E6D",
    innerDataArray: [
      {
        id: 1,
        title: "Safe",
        data: pdfData,
      },
      {
        id: 2,
        title: "Mock Inspection Toolkit",
        data: pdfData,
      },
      {
        id: 3,
        title: "Caring",
        data: pdfData,
      },
      {
        id: 4,
        title: "Responsive",
        data: pdfData,
      },
      {
        id: 5,
        title: "Well Led",
        data: pdfData,
      },
      {
        id: 6,
        title: "Effective",
        data: pdfData,
      },
    ],
  },
  {
    index: 12,
    title: "Stakeholder Surveys",
    icon: StakeHoldersIcon,
    color: "#544179",
    innerDataArray: [
      {
        id: 1,
        title: "Guidance Policy",
        data: pdfData,
      },
      {
        id: 2,
        title: "Service Users",
        data: pdfData,
      },
      {
        id: 3,
        title: "Relatives and Representatives",
        data: pdfData,
      },
      {
        id: 4,
        title: "Staff",
        data: pdfData,
      },
      {
        id: 5,
        title: "External Professionals",
        data: pdfData,
      },
    ],
  },
];
