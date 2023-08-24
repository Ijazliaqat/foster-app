import InvolvingCommunities from "./involving-your-communities/InvolvingCommunitiesTable";
import ManagementResponsibilities from "./management-responsibilities/ManagementResponsibilitiesTable";
import SafeguardingEssentials from "./safeguarding-essentials/SafeguardingEssentialsTable";
import SaferRecruitment from "./safer-recruitment/SaferRecruitmentTable";
import SupportingFamilies from "./supporting-families/SupportingFamiliesTable";
import WiderSafeguardingIssues from "./wider-safeguarding-issues/WiderSafeguardingIssuesTable";

//Accordian Data
export const safeGuardingCheckListData = [
  {
    title: "Section 1 : Safeguarding Essentials ",
    component:<SafeguardingEssentials/>,
  },
  {
    title: "Section 2 : Safer recruitment",
    component: <SaferRecruitment/>,
  },
  {
    title: "Section 3 : Involving your communities",
    component: <InvolvingCommunities/>,
  },
  {
    title: "Section 4 : Supporting families",
    component: <SupportingFamilies/>,
  },
  {
    title: "Section 5 : Wider safeguarding issues",
    component: <WiderSafeguardingIssues/>
  },
  {
    title: "Section 6 : Management responsibilities around  safeguarding",
    component: <ManagementResponsibilities/>,
  },
  
];

//Carer Type Mock Data
export const carerTypeData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
//Carer Name Mock Data
export const carerNameData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
