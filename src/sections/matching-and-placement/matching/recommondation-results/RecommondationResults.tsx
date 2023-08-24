import {
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRecommondationResults } from "./useRecommondationResults";
import RecommendationResultHeader from "./recommendationResultHeader/RecommendationResultHeader";

const RecommondationResults = () => {
  const {
    selectedCard,
    filteredViewCarerDetailData,
    handleChangeType,
    recommondationResultsCarerData,
    recommondationResultsChildData,
    router,
    queryValue,
    filteredViewChildCarerDetailData,
  } = useRecommondationResults();
  return (
    <>
      <RecommendationResultHeader />
      <Card
        sx={{
          p: 5,
          mt: 2,
          boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {(queryValue === "view carer"
              ? recommondationResultsCarerData
              : recommondationResultsChildData
            )?.map((item: any) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  sx={{ borderRadius: "5px 5px 0px 0px" }}
                >
                  <Card
                    sx={{
                      p: 2,
                      mb: 2,
                      cursor: "pointer",
                      backgroundColor:
                        item?.type === selectedCard
                          ? "rgba(196, 196, 196, 0.50)"
                          : "initial",
                    }}
                    onClick={() => handleChangeType(item?.type)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box sx={styles.progressContainer}>
                        <CircularProgress
                          variant="determinate"
                          value={item?.progress}
                          sx={{
                            ...styles.progress,
                            color: item?.progressColor,
                          }}
                        />
                        <Typography sx={styles.progressLabel} variant="body2">
                          {`${item?.progress}%`}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#343A40",
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: item?.progressColor,
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          {item?.subTitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {(queryValue === "view carer"
            ? filteredViewCarerDetailData
            : filteredViewChildCarerDetailData
          )?.map((item: any) => {
            return (
              <Grid key={item.id} item xs={12} md={12} lg={6}>
                <Card sx={{ p: 3, boxShadow: "rgba(0, 0, 0, 0.25)" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                      flexWrap: "wrap-reverse",
                    }}
                  >
                    <Box>
                      <Typography sx={(theme) => styles.personalInfo(theme)}>
                        {item?.name}
                      </Typography>
                      <Typography sx={(theme) => styles.personalInfo(theme)}>
                        {item?.age}
                      </Typography>
                      <Typography sx={(theme) => styles.personalInfo(theme)}>
                        {item?.cast}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "space-between" },
                        gap: { xs: "3px", xl: "15px" },
                        flexWrap: "wrap",
                      }}
                    >
                      <Image src={item?.image} alt={""} />
                      <Box sx={styles.progressContainer}>
                        <CircularProgress
                          variant="determinate"
                          value={item?.progress}
                          sx={{
                            ...styles.progressDetail,
                            color: item?.progressColor,
                          }}
                        />
                        <Typography sx={styles.progressLabel} variant="body2">
                          {`${item?.progress}%`}
                        </Typography>
                      </Box>
                      <Box sx={{ color: item?.progressColor }}>
                        {item?.icon}
                      </Box>
                    </Box>
                  </Box>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {item.recommondationResultsCheckbox.map((option: any) => (
                      <Grid key={option.id} item xs={12} md={6}>
                        <FormControlLabel
                          key={option.id}
                          control={
                            <Checkbox checked={option.value} color="primary" />
                          }
                          label={option.label}
                        />
                      </Grid>
                    ))}
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          type="button"
                          variant="contained"
                          sx={{ p: 1, cursor: "pointer" }}
                          //  onClick={() => router.push(`${router.pathname}/child-details`)}
                          onClick={() =>
                            router.push(
                              queryValue === "view carer"
                                ? `${router.pathname}/child-details`
                                : `/matching/carer-details`
                            )
                          }
                        >
                          {queryValue == "view carer"
                            ? "View Child Details"
                            : "View Carer Details"}
                        </Button>
                        <Button
                          type="button"
                          variant="contained"
                          sx={{ p: 1, cursor: "pointer" }}
                          onClick={() =>
                            router.push(`${router.pathname}/compare-match`)
                          }
                        >
                          Compare Match
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </>
  );
};

export default RecommondationResults;

//-----------Styles------------
const styles = {
  progress: {
    minHeight: "70px !important",
    minWidth: "70px !important",
  },
  progressDetail: {
    minHeight: "120px !important",
    minWidth: "120px !important",
  },
  progressContainer: {
    position: "relative",
    display: "inline-block",
  },
  progressLabel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontWeight: "bold",
  },
  // personalInfo: {
  //   fontSize: "16px", color: "rgba(14, 145, 140, 1)", fontWeight: "600", marginBottom: "16px"
  // },
  personalInfo: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "16px",
    color: theme.palette.primary.main,
  }),
};
