import Link from 'next/link';
import img1 from '../../../../assets/svg/referral/referralListImg1.svg';
export const TableData = [
    {
        Sr_No: "01",
        Image: img1,
        Carer_Code: "PFC-10vfgdfgd1",
        Carer_Name: "Susan",
        Gender: "Female",
        Area_Locality: "Bexleyhealth",
        Area_Office: "Boxhill",
        Dereg_Status: "Boxhill",
    },
    {
        Sr_No: "02",
        Image: img1,
        Carer_Code: "PFC-10vfgdfgd1",
        Carer_Name: "Susan Smith",
        Gender: "Female",
        Area_Locality: "Bexleyhealth",
        Area_Office: "Boxhill",
        Dereg_Status: "Boxhill",
    },
]

export const menuItems = [
    { id: 'DeRegInitialRequest', value: 'DeRegInitialRequest', label: 'DeReg Initial Request', background: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)', color: "#fff !important" },
    { id: 'DeRegAssessmentStage1', value: 'DeRegAssessmentStage1', label: 'DeReg Assessment Stage 1', background: 'linear-gradient(106.35deg, #4B79A1 0%, #283E51 100%)', color: "#fff !important" },
    { id: 'DeRegAssessmentStage2', value: 'DeRegAssessmentStage2', label: 'DeReg Assessment Stage 2', background: 'linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)', color: "#fff !important" },
    { id: 'DeRegContractsandAgreements', value: 'DeRegContractsandAgreements', label: 'DeReg Contracts and Agreements', background: 'linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)', color: "#fff !important" },
    { id: 'FinalDeRegistration', value: 'FinalDeRegistration', label: 'Final De-Registration', background: 'linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)', color: "#fff !important" },
];



// ///////////////// filters array start here ////////////////////////
export const SELECT_FILTERS = [

    {
        key: "status",
        label: "Status",
        options: [{ label: "Scot Fostering", value: "Scot_Fostering" }, { label: "Gofal Fostering", value: "Gofal_Fostering" }],

    },

];
// ///////////////// filters array end here ////////////////////////