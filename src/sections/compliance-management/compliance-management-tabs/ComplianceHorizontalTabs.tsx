import React from "react";
import { Grid, Box, Typography, Tab, Tabs } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PdfViewModal from "../Modals/pdf-modal/PdfModal";
import AddCategoryModal from "../Modals/category-modal/CategoryModal";
import { TabPanelProps, styles } from ".";



const ComplianceHorizontalTabs = ({
  tabsArray,
  verticalTab,
  horizontalTabValue,
  IsOpenPdfModal,
  setIsOpenPdfModal,
  IsOpenAddCategory,
  setIsOpenAddCategory,
  handleAddCategory,
  handleHorizontalTabChange,
  theme
}: any) => {
  const TabPanel = ({ children, value, index }: TabPanelProps) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  return (
    <Grid
      sx={{
        background: "fff",
        boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
        height: "715px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {tabsArray.map((tab: any, index: any) => (
          <TabPanel key={index} value={verticalTab} index={index}>
            <Box sx={styles.tabsWrap}>
              <Tabs
                value={horizontalTabValue}
                aria-label="Horizontal tabs example"
                sx={styles.tabRoot(theme)}
                TabIndicatorProps={styles.tabIndicator(theme)}
                onChange={handleHorizontalTabChange}
              >
                {tab.innerData &&
                  tab.innerData.map((data: any, subIndex: any) => (
                    <Tab key={subIndex} label={data.tabTitle} />
                  ))}
              </Tabs>
              <AddIcon
                sx={styles.addMoreIconTop}
                onClick={() => {
                  setIsOpenAddCategory({
                    ...setIsOpenAddCategory,
                    value: "",
                    type: "horizontalTab",
                  });
                }}
              />
            </Box>
            {tab.innerData &&
              tab.innerData[horizontalTabValue]?.tabsDocuments?.map(
                (item: any) => (
                  <Typography key={item.id} sx={{ color: "#000 !important" }}>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpenPdfModal(true)}
                    >
                      {item.title}
                    </a>
                  </Typography>
                )
              )}
          </TabPanel>
        ))}
      </Box>
      <PdfViewModal
        open={IsOpenPdfModal}
        handleClose={() => setIsOpenPdfModal(false)}
      />
      <AddCategoryModal
        open={IsOpenAddCategory.type}
        onSubmit={(data: any) => handleAddCategory(data)}
        handleClose={() => setIsOpenAddCategory({ value: "", type: "" })}
      />
    </Grid>
  );
};

export default ComplianceHorizontalTabs;
