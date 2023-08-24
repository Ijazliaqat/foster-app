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
import { cookiesTypes, listItems } from "./index";
import React from "react";
import Link from "next/link";

const CookiesPolicy = () => {
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
              Cookie Policy
            </Typography>
            <Box id="introduction">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                }}
              >
                Introduction
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 2,
                  lineHeight: "30px",
                  mb: 2,
                }}
              >
                {` This cookie policy ("Policy") describes what cookies are and how
                and they're being used by the `}{" "}
                <Link target="__blank" href="https://fosterapp.co.uk/">
                  fosterapp.co.uk{" "}
                </Link>{" "}
                {`website ("Website" or "Service") and any of its related products
                and services (collectively, "Services"). This Policy is a
                legally binding agreement between you ("User", "you" or "your")
                and this Website operator ("Operator", "we", "us" or "our"). You
                should read this Policy so you can understand the types of
                cookies we use, the information we collect using cookies and how
                that information is used. It also describes the choices
                available to you regarding accepting or declining the use of
                cookies. For further information on how we use, store and keep
                your personal data secure, see our privacy policy. This cookie
                policy was created with the help of the cookie policy generator.`}
              </Typography>
            </Box>
            <Box id="about-cookies">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                  mb: 2,
                }}
              >
                What are cookies?
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`Cookies are small pieces of data stored in text files that are
                saved on your computer or other devices when websites are loaded
                in a browser. They are widely used to remember you and your
                preferences, either for a single visit (through a "session
                cookie") or for multiple repeat visits (using a "persistent
                cookie").`}
                <br /> <br />
                {` Session cookies are temporary cookies that are used during the
                course of your visit to the Website, and they expire when you
                close the web browser.`}
                <br />
                <br />
                {`Persistent cookies are used to remember your preferences within
                our Website and remain on your desktop or mobile device even
                after you close your browser or restart your computer. They
                ensure a consistent and efficient experience for you while
                visiting the Website and Services.`}
                <br /> <br />
                {`Cookies may be set by the Website ("first-party cookies"), or by
                third parties, such as those who serve content or provide
                advertising or analytics services on the Website ("third party
                cookies"). These third parties can recognize you when you visit
                our website and also when you visit certain other websites.`}
              </Typography>
            </Box>
            {/* Data we collect section started */}
            <Box id="cookies-type">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 4,
                  mb: 2,
                }}
              >
                {`What type of cookies do we use?`}
              </Typography>
              {cookiesTypes.map((item: any) => (
                <div key={item.id}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.grey[800],
                      mt: 3,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    key={item.id}
                    variant="body1"
                    sx={{
                      color: theme.palette.grey[800],
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              ))}
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 3,
                  mb: 2,
                }}
              >
                {`What are your cookie options?`}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[800],
                  mb: 2,
                }}
              >
                {`If you don't like the idea of cookies or certain types of
                cookies, you can change your browser's settings to delete
                cookies that have already been set and to not accept new
                cookies. To learn more about how to do this, visit`}{" "}
                <Link href="https://www.internetcookies.com/" target="__blank">
                  internetcookies.com
                </Link>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 3,
                  mb: 2,
                }}
              >
                Contacting us
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                <li>
                  {" "}
                  {`If you would like to contact us to understand more about
                        this Policy or wish to contact us concerning any matter
                        relating to our use of cookies, you may send an email to
                        contact-us@fosterapp.co.uk or write a letter to`}{" "}
                  <Link
                    target="__blank"
                    href="https://www.google.co.uk/maps/place/4+Roundwood+Ave,+Hayes,+Uxbridge+UB11+1AF/@51.5107245,-0.4437493,17z/data=!3m1!4b1!4m5!3m4!1s0x487672769cbf4edb:0x3870d88dc26cc28!8m2!3d51.5107212!4d-0.4415606?shorturl=1"
                  >
                    {`Office 77, Spaces Heathrow Airport, 4 Roundwood
                          Avenue, Stockley Park, , UB11 1AF, United Kingdom.`}
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

export default CookiesPolicy;

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
  },
};
