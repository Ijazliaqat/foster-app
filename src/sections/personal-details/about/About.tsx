import CustomCard from "@root/components/CustomCard";
import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SkeletonMap } from "@root/components/skeleton";
import { useAbout } from "./useAbout";

const About = () => {
  const { formattedData, isLoading, arrayItems, toggleList, handleDropDown } =
    useAbout();
  return (
    <CustomCard
      title="About"
      titleTypographyProps={{ variant: "subtitle1" }}
      divider
    >
      {isLoading ? (
        <SkeletonMap spacing={1.5} sx={{ height: 40 }} />
      ) : (
        <>
          {Object?.entries(formattedData)
            .slice(0, arrayItems)
            .map(([key, val]: any, index: any) => (
              <div key={index}>
                <Box sx={styles.keysWrapper}>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    sx={styles.keysText}
                  >
                    {key ?? "-"}
                  </Typography>
                  <Typography
                    variant="body2"
                    component={"p"}
                    sx={styles.keyValues}
                  >
                    {Array.isArray(val) ? (
                      <>
                        {val.length === 0 && "-"}
                        {val.map((val: any, i: any) => (
                          <Typography
                            variant="body2"
                            component={"span"}
                            sx={styles.keyValues}
                            key={i}
                          >
                            {val}
                          </Typography>
                        ))}
                      </>
                    ) : (
                      <Typography
                        variant="body2"
                        component={"span"}
                        sx={styles.keyValues}
                      >
                        {val ?? "-"}
                      </Typography>
                    )}
                  </Typography>
                  <Divider sx={styles.divider} />
                </Box>
              </div>
            ))}
        </>
      )}
      <Box
        sx={styles.dropDownWrapper}
        onClick={() => {
          handleDropDown();
        }}
      >
        <Typography component={"p"} variant="caption" sx={styles.toggleList}>
          {toggleList ? "less" : "more"}
        </Typography>
        <Avatar alt="drop-down" src="" sx={styles.toggleButton}>
          {toggleList ? (
            <KeyboardArrowUpIcon sx={styles.keyDownIcon} />
          ) : (
            <KeyboardArrowDownIcon sx={styles.keyUpIcon} />
          )}
        </Avatar>
      </Box>
    </CustomCard>
  );
};

export default About;

//Styling
const styles: any = {
  keysWrapper: () => ({
    p: "10px 0 0 0",
  }),
  keysText: (theme: any) => ({
    color: theme.palette.grey[600],
    textTransform: "capitalize",
  }),
  keyValues: (theme: any) => ({
    color: theme.palette.grey[600],
    fontWeight: 400,
    textTransform: "unset",
  }),
  dropDownWrapper: () => ({
    display: "flex",
    float: "right",
    mt: { xs: 1, sm: 1 },
  }),
  toggleList: () => ({
    marginRight: "5px",
    cursor: "pointer",
    fontWeight: 700,
  }),
  toggleButton: (theme: any) => ({
    width: "17px",
    height: "17px",
    cursor: "pointer",
    background: theme.palette.grey[700],
    opacity: 0.4,
  }),
  keyDownIcon: (theme: any) => ({
    fontSize: "18px",
    color: theme.palette.grey[0],
  }),
  keyUpIcon: (theme: any) => ({
    fontSize: "18px",
    color: theme.palette.grey[0],
  }),
  divider: () => ({
    mt: 1,
  }),
};
