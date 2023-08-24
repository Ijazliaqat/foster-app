import { ReactNode, SyntheticEvent, useState } from "react";
import { Box } from "@mui/material";



import Cicon from "../../../../../assets/img/local authority/Cicon.png";
import Oicon from "../../../../../assets/img/local authority/Oicon.png";
import Licon from "../../../../../assets/img/local authority/Licon.png";
import Ficon from "../../../../../assets/img/local authority/Ficon.png";
import Aicon from "../../../../../assets/img/local authority/Aicon.png";

import PersonalInfo from "../personal-info/PersonalInfo";
import ChildInfoFeeling from "../child-wishes-feeling/ChildInfoFeeling";
import SupportingEvidence from "../supporting-evidence/SupportingEvidence";
import ChildBirthMother from "../child-brith-mother/ChildBirthMother";
import BirthMotherPartner from "../Birth-mother-partner/BirthMotherPartner";
import SocialHistoryBirthMother from "../social-history-of-birth-mother/SocialHistoryBirthMother";
import BirthFatherParentalResponsibility from "../birth-father-parental-responsibility/BirthFatherParentalResponsibility";
import WithoutParentalResponsibility from "../birth-father-without-parental-responsibility/WithoutParentalResponsibility";
import BirthMotherViews from "../Birth-mother-views/BirthMotherViews";
import ChildBithFather from "../child-birth-father/ChildBithFather";
import RelationshipBirthFatherMother from "../relationship-Between-birth-father-and-mother/RelationshipBirthFatherMother";
import BirthFatherPartner from "../details-of-birth-father’s-current-partner/BirthFatherPartner";
import BirthFatherView from "../birth-father-views/BirthFatherView";
import StatusOfChild from "../status-of-child/StatusOfChild";
import ChildFamilyRelatives from "../child-family-&-relatives/ChildFamilyRelatives";
import AdditionalDocuments from "../additional-documents/AdditionalDocuments";
import AgencyInfo from "../agency-info/AgencyInfo";
import Image from "next/image";
import SocialHistoryOfBirthFather from "../social-History-of-Birth-Father/SocialHistoryOfBirthFather";

export const useChildInfoTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  
  const TABSDATAARRY = [
    {
      index: 0,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Aicon} alt="Aicon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            About The Child
          </span>
        </Box>
      ),
      title: "Personal Info",
      component: <PersonalInfo handleNextTab={handleNextTab} />,
    },
    {
      index: 1,
      title: "Child Wishes & feeling",
      component: <ChildInfoFeeling handleNextTab={handleNextTab} handleBackTab={handlePreviousTab} />,
    },
    {
      index: 2,
      title: "Supporting Evidence ",
      component: <SupportingEvidence />,
    },
    {
      index: 3,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Cicon} alt="Cicon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Child’s Birth Mother
          </span>
        </Box>
      ),
      title: "Child’s Birth Mother",
      component: <ChildBirthMother handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 4,
      title: "Details of Birth Mother Partner",
      component: <BirthMotherPartner handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 5,
      title: "Social History of Birth Mother",
      component: <SocialHistoryBirthMother handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 6,
      title: "Birth Father - Parental Responsibility",
      component: <BirthFatherParentalResponsibility handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 7,
      title: "Birth Father-without Parental Responsibility",
      component: <WithoutParentalResponsibility handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },

    {
      index: 8,
      title: "Birth Mother Views",
      component: <BirthMotherViews handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 9,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Cicon} alt="Cicon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Child’s Birth Father
          </span>
        </Box>
      ),
      title: "Child’s Birth Father",
      component: <ChildBithFather handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 10,
      title: "Relationship Between Birth Father and Mother",
      component: <RelationshipBirthFatherMother handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 11,
      title: "Details of Birth Father’s Current Partner",
      component: <BirthFatherPartner handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 12,
      title: "Social History of Birth Father",
      component: <SocialHistoryOfBirthFather handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 13,
      title: "Birth Father Views",
      component: <BirthFatherView handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 14,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Licon} alt="Licon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Legal Status of Child
          </span>
        </Box>
      ),
      title: "Status of Child",
      component: <StatusOfChild handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
    {
      index: 15,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Ficon} alt="Ficon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Family Composition
          </span>
        </Box>
      ),
      title: "Child Family & Relatives",
      component: <ChildFamilyRelatives />,
    },
    {
      index: 16,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Oicon} alt="Oicon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Other Documents
          </span>
        </Box>
      ),
      title: "Additional Documents",
      component: <AdditionalDocuments />,
    },
    {
      index: 17,
      Label: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            mt: "5px",
            mb: "3px",
          }}
        >
          <Image src={Aicon} alt="Aicon" />
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Agency Detail
          </span>
        </Box>
      ),
      title: "Agency Information",
      component: <AgencyInfo handleNextTab={handleNextTab} handleBackTab={handlePreviousTab}/>,
    },
  ];
  return {
    currentTab,
    handleTabChange,
    TABSDATAARRY,
    handleNextTab,
    handlePreviousTab,
  };
};
