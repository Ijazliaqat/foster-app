/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  acceptableUseData,
  assignmentData,
  breachesData,
  contentLicence,
  contentRules,
  copyRightNotice,
  detailsData,
  entireAgreement,
  introductionData,
  jurisdictionData,
  licenceUseData,
  limitationsData,
  limitedWarrant,
  listItems,
  partyRights,
  severabilityData,
  variationData,
} from "./index";
import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={2} sx={{ position: "relative" }}>
          <Grid item xs={12} lg={12} sx={styles.mainGrid}>
            {listItems.map((item: any) => (
              <Link
                href={`${item.link}`}
                key={item.id}
                style={{
                  color: theme.palette.grey[700],
                  scrollBehavior: "smooth",
                  transition: "all 0.5s ease-out",
                }}
              >
                <List
                  sx={{
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                    p: 0,
                  }}
                >
                  <ListItem sx={{ p: "0 0 15px 20px" }}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle2"
                          sx={{
                            cursor: "pointer",
                            display: "inline-block",
                          }}
                        >
                          {item.title}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Link>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <Card
            sx={{ p: { xs: 2, sm: 3 }, height: "100vh", overflowY: "auto" }}
          >
            <Typography variant="h3" sx={styles.mainTitle}>
              Terms & Conditions of use
            </Typography>
            <Box id="introduction">
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                }}
              >
                1. Introduction
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {introductionData.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
            </Box>
            <Box id="copy-right">
              <Typography variant="h5" sx={styles.subTitle}>
                2. Copyright notice
              </Typography>
              {/* Copy Right Notice Section Started */}
              <Box component="ul" sx={styles.unorderedList}>
                {copyRightNotice.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item.list.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Licence to use website section started */}
            <Box id="license-website">
              <Typography variant="h5" sx={styles.subTitle}>
                3. Licence to use website
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {licenceUseData.map((item: any) => (
                  <div key={item.id}>
                    <li style={{ marginTop: "20px" }}>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item?.list?.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Acceptable Use website section started */}
            <Box id="acceptable-use">
              <Typography variant="h5" sx={styles.subTitle}>
                4. Acceptable use
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {acceptableUseData.map((item: any) => (
                  <div key={item.id}>
                    <li style={{ marginTop: "20px" }}>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item?.list?.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Content Licence section started */}
            <Box id="content-licence">
              <Typography variant="h5" sx={styles.subTitle}>
                5. Your content: licence
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {contentLicence.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Your content: rules section started */}
            <Box id="content-rules">
              <Typography variant="h5" sx={styles.subTitle}>
                6. Your content: rules
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {contentRules.map((item: any) => (
                  <div key={item.id}>
                    <li style={{ marginTop: "20px" }}>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item?.list?.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Limited warranties  section started */}
            <Box id="warranties">
              <Typography variant="h5" sx={styles.subTitle}>
                7. Limited warranties
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {limitedWarrant.map((item: any) => (
                  <div key={item.id}>
                    <li style={{ marginTop: "20px" }}>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item?.list?.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Limitations and exclusions section started */}
            <Box id="limitations">
              <Typography variant="h5" sx={styles.subTitle}>
                8. Limitations and exclusions of liability
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {limitationsData.map((item: any) => (
                  <div key={item.id}>
                    <li style={{ marginTop: "20px" }}>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item?.list?.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Breaches of these terms section started */}
            <Box id="terms-breach">
              <Typography variant="h5" sx={styles.subTitle}>
                9. Breaches of these terms and conditions
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {breachesData.map((item: any) => (
                  <div key={item.id}>
                    <li style={{ marginTop: "20px" }}>{item.title}</li>
                    <Box component="ol" sx={styles.orderedList}>
                      {item?.list?.map((item: any) => (
                        <li key={item.title}>{item.title}</li>
                      ))}
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Variation section started */}
            <Box id="variation">
              <Typography variant="h5" sx={styles.subTitle}>
                10. Variation
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {variationData.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Assignment section started */}
            <Box id="assignment">
              <Typography variant="h5" sx={styles.subTitle}>
                11. Assignment
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {assignmentData.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Severability section started */}
            <Box id="severability">
              <Typography variant="h5" sx={styles.subTitle}>
                12. Severability
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {severabilityData.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Party Rights section started */}
            <Box id="party-rights">
              <Typography variant="h5" sx={styles.subTitle}>
                13. Third party rights
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {partyRights.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Entire agreement section started */}
            <Box id="agreement">
              <Typography variant="h5" sx={styles.subTitle}>
                14. Entire agreement
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {entireAgreement.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Law and jurisdiction section started */}
            <Box id="jurisdiction">
              <Typography variant="h5" sx={styles.subTitle}>
                15. Law and jurisdiction
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {jurisdictionData.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
            </Box>
            {/* Our details section started */}
            <Box id="our-details">
              <Typography variant="h5" sx={styles.subTitle}>
                16. Our details
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {detailsData.map((item: any) => (
                  <div key={item.id}>
                    <li>{item.title}</li>
                  </div>
                ))}
              </Box>
              <Box
                component="ul"
                sx={{ marginLeft: "10px", paddingLeft: "10px" }}
              >
                <li>
                  {`We are registered in England and Wales under registration
                  number­­­­­ 12125945 and our registered office is at`}{" "}
                  <Link
                    target="__blank"
                    href="https://www.google.co.uk/maps/place/4+Roundwood+Ave,+Hayes,+Uxbridge+UB11+1AF/@51.5107245,-0.4437493,17z/data=!3m1!4b1!4m5!3m4!1s0x487672769cbf4edb:0x3870d88dc26cc28!8m2!3d51.5107212!4d-0.4415606?shorturl=1"
                  >
                    {`Office 77, Spaces Heathrow Airport, 4 Roundwood Avenue,
                    Stockley Park, Uxbridge, UB11 1AF, United Kingdom.`}
                  </Link>
                </li>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TermsAndConditions;

const styles: any = {
  mainWrapper: {
    px: { xs: 1, sm: 5, md: 3, lg: 10 },
    mb: { xs: 5, sm: 10 },
    mt: { xs: 4, sm: 5, lg: 8 },
  },
  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: 700,
  }),
  subTitle: (theme: any) => ({
    color: theme.palette.grey[800],
    mt: 4,
    mb: 2,
  }),
  mainGrid: {
    mb: { xs: 3, md: 0 },
    position: "sticky",
    top: "10%",
    left: "8%",
    zIndex: 112,
  },
  paragraphStyling: {
    lineHeight: "30px",
  },
  unorderedList: {
    listStyleType: "disc",
    marginLeft: "10px",
    paddingLeft: "10px",
    lineHeight: "30px",
    mt: 2,
  },
  orderedList: {
    listStyleType: "lower-alpha",
    listStylePosition: "outside",
    marginLeft: "10px",
    paddingLeft: "10px",
    lineHeight: "30px",
    mt: 1,
  },
};
