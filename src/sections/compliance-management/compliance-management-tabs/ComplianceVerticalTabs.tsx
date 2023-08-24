import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";

import {
  StyledLeftTab,
  VerticalTabsProps,
  styles,
  StyledBox,
  StyledImage,
  StyledTypography,
} from ".";

import AddIcon from "@mui/icons-material/Add";
import AddCategoryModal from "../Modals/category-modal/CategoryModal";


const ComplianceVerticalTabs = ({
  tabsArray,
  verticalTab,
  SelectedTabColor,
  handleTabChange,
  IsOpenAddCategory,
  setIsOpenAddCategory,
  handleAddCategory,

}:any) => {


  return (
    <Grid container>
        <Box sx={styles.GridWrapper}>
        <Box sx={{ maxHeight: "76vh", overflowY: "auto" }}>
          <Grid container>
            {tabsArray?.map((item: any, index: any) => (
              <Grid lg={6} md={6} sm={6} xs={12} key={index}>
                <StyledLeftTab
                  key={index}
                  variant="contained"
                  onClick={() => {
                    handleTabChange(index, item.color);
                  }}
                  isSelected={verticalTab === index}
                  hoverBackgroundColor={item.color}
                  hoverColor={item.color}
                  selectedTabColor={SelectedTabColor}
                >
                  <StyledBox sx={styles.tabLabel}>
                    <StyledBox sx={styles.tabsIcon}>
                      <Image src={item.img} alt="" width={52} height={52} />
                    </StyledBox>
                    <StyledTypography
                      variant="h5"
                      sx={styles.tabsTitle}
                      color={verticalTab === index ? "#fff !important" : item.color}
                    >
                      {item?.title.length > 46
                        ? `${item.title.slice(0, 46)}...`
                        : item.title}
                    </StyledTypography>
                  </StyledBox>
                </StyledLeftTab>
              </Grid>
            ))}
            <Button
              sx={styles.addMoreButton}
              type="button"
              variant="contained"
              onClick={() =>{
                setIsOpenAddCategory({
                  ...setIsOpenAddCategory,
                  value: "",
                  type: "verticalTab",
                });
               {()=> handleAddCategory()};
              }
              }
            >
              <StyledBox sx={styles.tabsIcon}>
                <AddIcon sx={styles.addMoreIcon} />
              </StyledBox>
              <Typography variant="h5" sx={styles.tabsTitle}>
                Add More
              </Typography>
            </Button>
          </Grid>
          <AddCategoryModal
        open={IsOpenAddCategory.type}
        onSubmit={(data: any) => handleAddCategory(data)}
        handleClose={() => setIsOpenAddCategory({ value: "", type: "" })}
      />
        </Box>
      </Box>
     
    </Grid>
  );
};

export default ComplianceVerticalTabs;
