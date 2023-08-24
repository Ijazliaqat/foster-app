
import SingleChildDataExchange from "./single-child-data-exchange/SingleChildDataExchange";
import AddLaEmployee from "./add-la-employee/AddLaEmployee";
import AnyOtherDocument from "./any-other-document/AnyOtherDocument";
import LaBankDetails from "./la-bank-details/LaBankDetails";
import LaBasicInformation from "./la-basic-information/LaBasicInformation";
import LaPoliciesAgreement from "./la-policies-agreement/LaPoliciesAgreement";
import LaSocialMedia from "./la-social-media/LaSocialMedia";
import MeetingRecording from "./meeting-recording/MeetingRecording";
import SecureChildrenDataExchange from "./secure-children-data-exchange/SecureChildrenDataExchange";

export const registerLocalAuthorityTabs = [
    {
        index: 0,
        title: "LA Basic Information",
        background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
        innerData: <LaBasicInformation />,
    },
    {
        index: 1,
        title: "Add Local Authority Employee",
        background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
        innerData: <AddLaEmployee />,
    },
    {
        index: 2,
        title: "Request Single Child Data Exchange",
        background: "linear-gradient(106.35deg, #0E918C 0%, #23E0D9 100%)",
        innerData: <SingleChildDataExchange />,
    },
    {
        index: 3,
        title: "Request Bulk Secure Children Data Exchange",
        background: "linear-gradient(209.21deg, #CB236D -26.52%, #4C246D 543.68%);",
        innerData: <SecureChildrenDataExchange />,
    },
    {
        index: 4,
        title: "LA Bank Details",
        background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%);",
        innerData: <LaBankDetails />,
    },
    {
        index: 5,
        title: "Local Authority Policies & Agreement",
        background: "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%);",
        innerData: <LaPoliciesAgreement />,
    },
    {
        index: 6,
        title: "Any Other Document",
        background: "linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%);",
        innerData: <AnyOtherDocument />,
    },
    {
        index: 7,
        title: "Meeting & Recording",
        background: "linear-gradient(106.35deg, #4B79A1 0%, #283E51 100%);",
        innerData: <MeetingRecording />,
    },
    {
        index: 8,
        title: "LA Social Media",
        background: "linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%);",
        innerData: <LaSocialMedia />,
    },
];