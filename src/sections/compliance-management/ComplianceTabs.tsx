import * as React from "react";
import { Tabs, Tab, Typography, Grid, Box } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Image from "next/image";
import { useComplianceManagement } from "./useComplianceMangement";
import CategoryModal from "./Modals/category-modal/CategoryModal";
import AddIcon from "../../assets/svg/compliance-management/addIcon.svg";
import PdfIcon from "../../assets/svg/compliance-management/pdfIcon.svg";
import PdfViewModal from "@root/components/modal/PdfViewModal/PdfViewModal";

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
}

export default function ComplianceTabs({
  tabsDataArray,
  ...other
}: IVERTICALTABSPROPS) {
  const {
    currentTab,
    categoryModal,
    categoryData,
    pdfModal,
    categoryIcon,
    handleChange,
    handleCategoryModal,
    handleSubCategory,
    handlePdf,
    file,
  } = useComplianceManagement();

  return (
    <>
      <Grid container spacing={2} sx={styles.container}>
        <Grid item xl={3} lg={4} xs={12}>
          <Tabs
            selectionFollowsFocus
            orientation="horizontal"
            variant="scrollable"
            sx={styles.tabRoot}
            TabIndicatorProps={styles.tabIndicator}
            value={currentTab}
            onChange={handleChange}
          >
            {tabsDataArray?.map((item: any) => (
              <Tab
                key={item?.index}
                sx={{ overflow: "hidden" }}
                label={
                  <TitleWithIcon
                    currentTab={currentTab}
                    currentIndex={item?.index}
                    title={item?.title}
                    icon={item?.icon}
                    color={item?.color}
                  />
                }
              />
            ))}
          </Tabs>
          <Box sx={{ mt: 1, cursor: "pointer" }}>
            <TitleWithIcon
              title={"Add More"}
              icon={AddIcon}
              color={"#F6830F"}
              onClick={handleCategoryModal}
            />
          </Box>
        </Grid>
        <Grid item xl={9} lg={8} xs={12}>
          {tabsDataArray?.map((item: any) => (
            <div
              role="tabpanel"
              key={item?.title}
              hidden={currentTab !== item?.index}
              id={`vertical-tabpanel-${item?.index}`}
              aria-labelledby={`vertical-tab-${item?.index}`}
              {...other}
            >
              <Box sx={styles.horizontalTab}>
                <Image
                  src={AddIcon}
                  style={styles.addNewIcon}
                  alt="icon"
                  onClick={() => handleSubCategory(item)}
                />
                <HorizaontalTabs
                  tabsDataArray={item?.innerDataArray?.map(
                    (obj: any) => obj.title
                  )}
                >
                  {item?.innerDataArray?.map(
                    (innerData: any, index: number) => (
                      <PDF
                        key={index}
                        data={innerData.data}
                        onClick={handlePdf}
                      />
                    )
                  )}
                </HorizaontalTabs>
              </Box>
            </div>
          ))}
        </Grid>
      </Grid>
      {categoryModal && (
        <CategoryModal
          requireIcon={categoryIcon}
          open={categoryModal}
          onClose={handleCategoryModal}
          categoryName={categoryData?.title}
        />
      )}
      {pdfModal && (
        <PdfViewModal fileUrl={file} open={pdfModal} onClose={handlePdf} />
      )}
    </>
  );
}

const TitleWithIcon = ({
  title,
  icon,
  color,
  currentTab,
  currentIndex,
  ...rest
}: any) => {
  return (
    <Box
      sx={styles.titleWithIcon(color, title, currentTab, currentIndex)}
      {...rest}
    >
      <Image
        src={icon}
        alt="icon"
        style={{ margin: "0px auto" }}
        height={50}
        width={50}
      />
      <Typography className="title">{title}</Typography>
    </Box>
  );
};

const PDF = ({ data, onClick }: any) => {
  return (
    <>
      {data?.map((obj: any, i: number) => (
        <Box key={i} sx={styles.pdf}>
          <Image src={PdfIcon} alt="icon" height={30} width={30} />
          <Typography onClick={() => onClick(obj.file)}>
            {obj?.title}
          </Typography>
        </Box>
      ))}
    </>
  );
};
const styles: any = {
  container: {
    display: { xs: "block", md: "flex" },
  },
  tabRoot: {
    flexWrap: "wrap",
    height: "600px",
    overflow: "auto",
    "& .MuiTab-root": {
      marginRight: "0px !important",
      maxWidth: "unset !important",
      width: "auto !important",
    },
    "& .MuiTabs-flexContainer": {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "10px",
      "& button.MuiButtonBase-root": {
        borderRadius: "10px",
        flexBasis: {
          lg: "48% !important",
          md: "49% !important",
          xs: "100% !important",
        },
      },
    },
  },
  tabIndicator: {
    sx: { display: "none" },
  },
  tabsIcon: {
    width: "52px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  tabsTitle: {
    fontSize: "12px !important",
    lineHeight: "14.4px !important",
    fontWeight: 600,
    letterSpacing: "0.005em",
    textAlign: "center !important",
  },
  tabLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    padding: "12px",
    gap: "15px",
  },
  titleWithIcon: (
    backgroundColor: string,
    title: string,
    currentTab: number,
    currentIndex: number
  ) => ({
    height: "120px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor:
      currentTab === currentIndex && title !== "Add More"
        ? backgroundColor
        : "#fff",
    gap: "5px",
    p: "12px 9px",
    "& .title": {
      color:
        currentTab === currentIndex && title !== "Add More"
          ? "#fff"
          : backgroundColor,
      fontWeight: 600,
      fontSize: "12px",
      marginTop: "20px",
    },
    "& img": {
      filter:
        currentTab === currentIndex && title !== "Add More"
          ? `brightness(${
              title === "Stakeholder Surveys" ? "1" : "0"
            }) invert(${title === "Stakeholder Surveys" ? "0" : "1"})`
          : `brightness(1) invert(0)`,
    },
    ":hover": {
      backgroundColor,
      "& img": {
        filter: `brightness(${
          title === "Stakeholder Surveys" || title === "Add More" ? 1 : 0
        }) 
                invert(${
                  title === "Stakeholder Surveys" || title === "Add More"
                    ? 0
                    : 1
                })`,
        path: { fill: "#fff" },
      },
      "& .title": {
        color: "#fff",
      },
    },
  }),
  addNewIcon: {
    position: "absolute",
    top: 13,
    right: 10,
    zIndex: 10,
    cursor: "pointer",
  },
  horizontalTab: {
    height: "730px",
    position: "relative",
    overflow: "auto",
    "& .MuiPaper-root": {
      height: "100%",
      "& .MuiBox-root": {
        maxHeight: "95%",
        overflow: "auto",
      },
    },
  },
  pdf: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    my: 1,
  },
};
