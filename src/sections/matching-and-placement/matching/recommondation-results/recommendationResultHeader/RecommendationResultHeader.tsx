import React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { matchingRecommendationsData } from ".";
import { FormProvider } from "@root/components/hook-form";
import useRecommendationResultHeader from "./useRecommendationResultHeader";
import { useRouter } from "next/router";

const RecommendationResultHeader = () => {
  const { handleExpand, expand, methods, onSubmit, handleSubmit, queryValue } =
    useRecommendationResultHeader();
  const route = useRouter();
  return (
    <Card
      sx={{
        py: 1.5,
        px: 1,
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          rowGap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            rowGap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                paddingRight: "10px",
                cursor: "pointer",
                marginTop: "8px",
              }}
              onClick={handleExpand}
            >
              {expand ? <ExpandLess /> : <ExpandMore />}
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              List of {queryValue == "view carer" ? "Children" : "Carer"}
              recommended for
              {queryValue == "view carer" ? "Carer" : "Children"}
            </Typography>
          </Box>
          <Typography sx={(theme) => styles.title(theme)}>
            {queryValue == "view carer" ? "Gloria Bell" : "John Doe"}
          </Typography>
        </Box>
        <Box>
          <Button
            sx={(theme) => styles.button(theme)}
            onClick={() =>
              route.push(
                queryValue == "view carer"
                  ? "/matching/carer-details"
                  : "/matching/recommondations-result/child-details"
              )
            }
            variant="contained"
          >
            {queryValue == "view carer"
              ? "View Carer Details"
              : "View Child Details"}
          </Button>
        </Box>
      </Box>

      {expand && (
        <Box sx={styles.mainContainer}>
          <Box sx={styles.header}>
            <Box sx={styles.headerBorderBefore}></Box>
            <Box sx={styles.headerTitle}>
              Select Criteria for Matching Recommendations
            </Box>

            <Box sx={styles.headerBorderAfter}></Box>
          </Box>
          <Box sx={styles.childrenContainer}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container columnSpacing={4}>
                {matchingRecommendationsData?.map((form: any, i: any) => (
                  <Grid item xs={12} md={form?.gridLength} key={i}>
                    {form.component && (
                      <form.component size="small" {...form.componentProps}>
                        {form?.heading}
                        {form.componentProps.select
                          ? form.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          : null}
                      </form.component>
                    )}
                  </Grid>
                ))}
              </Grid>
            </FormProvider>
          </Box>
        </Box>
      )}
    </Card>
  );
};

export default RecommendationResultHeader;

const styles = {
  title: (theme: any) => ({
    padding: "0 10px",
    fontSize: "24px",
    fontWeight: 500,
    color: theme.palette.primary.main,
  }),
  button: (theme: any) => ({
    padding: "5px 10px",
    fontSize: "16px",
    fontWeight: 600,
  }),

  mainContainer: (theme: any) => ({
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    borderLeft: "1px solid #000",
    borderBottom: "1px solid #000",
    borderRight: "1px solid #000",
    borderRadius: "5px",
    margin: "1em 0",
  }),
  header: (theme: any) => ({
    display: "flex",
    flexDirection: "row",
    width: "100% ",
  }),
  childrenContainer: (theme: any) => ({
    padding: "1em",
  }),
  headerBorderBefore: (theme: any) => ({
    borderTop: "1px solid #000",
    width: "3rem",
    borderTopLeftRadius: "5px",
  }),
  headerBorderAfter: (theme: any) => ({
    borderTop: "1px solid #000",
    width: "1em",
    flexGrow: 2,
    borderTopRightRadius: "5px",
  }),

  headerTitle: (theme: any) => ({
    margin: "-8px 0",
    fontWeight: 500,
    fontSize: "14px",
    padding: "0px 5px",
  }),
};
