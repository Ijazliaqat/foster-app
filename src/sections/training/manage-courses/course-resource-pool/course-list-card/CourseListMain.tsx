import React from "react";
import CourseListCard from "./CourseListCard";
import { SELECT_FILTERS, courseList } from ".";
import { Box, Card, Grid, Typography } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useCourseListCard } from "./useCourseListCard";
const CourseListMain = ({ name }: any) => {
  const { handleCardClick } = useCourseListCard();

  return (
    <>
      {" "}
      <Box
        gap={4}
        sx={{ display: "flex", justifyContent: "end", margin: "5px 40px" }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>Home</Typography>
        <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
          Monitoring Dashboard
        </Typography>
      </Box>
      <Card sx={styles.box}>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Course List
        </Typography>
        <TableHeader
          title={""}
          showSelectFilters
          selectFilters={SELECT_FILTERS}
        />
        <Grid container spacing={2}>
          {courseList.map((item, i) => (
            <Grid xs={12} lg={6} xl={3} item key={i}>
              <CourseListCard
                desc={
                  item.desc.length > 90
                    ? `${item.desc.substring(0, 90)}...`
                    : item.desc
                }
                isStatus={item.isStatus}
                coverImage={item.coverImage}
                isMandatory={item.isMandatory}
                handleClick={() => handleCardClick(name)}
                maxWidth={"100%"}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default CourseListMain;

const styles = {
  box: {
    p: 2,
    "& .MuiStack-root": {
      backgroundColor: "transparent !important",
      p: "0px !important",
      mb: "10px",
      "& p.MuiTypography-root.MuiTypography-body1": {
        display: "none",
      },
    },
  },
};
