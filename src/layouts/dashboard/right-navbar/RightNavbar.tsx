import React, { useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import useSettings from "@root/hooks/useSettings";
import Calendar from "react-calendar";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import onlineSafty from "@root/assets/svg/onlineSafety.svg";
import Image from "next/image";
import StickyNotes from "./sticky-notes/StickyNotes";
//=================================================================
// CONSTANTS
const drawerWidth = 290;

const Rightnavbar = (props: any) => {
  const theme: any = useTheme();

  const [date, setDate] = useState(new Date());

  const Media = useMediaQuery(theme.breakpoints.down("lg"));
  const SvgRapper = styled("svg")`
    & path {
      fill: ${theme.palette.primary.main} !important;
    }
    ,
    & ellipse {
      fill: ${theme.palette.primary.main} !important;
    }
  `;
  const { rightnavbars, handleDrawerright } = props;

  const { themeDirection } = useSettings();
  return (
    <Drawer variant="permanent" anchor="right" open={rightnavbars}>
      <Box sx={{}}>
        <IconButton
          onClick={handleDrawerright}
          sx={{
            position: "fixed",
            right: rightnavbars ? { xs: "266px" } : { xs: "-4px", lg: "56px" },
            top: "115px",
            transform: themeDirection === "rtl" ? "rotateY(180deg)" : "unset",
            transition: theme.transitions.create("right", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            "&:hover": {
              backgroundColor: "unset",
            },
          }}
        >
          {rightnavbars ? (
            <SvgRapper
              width="30"
              height="51"
              viewBox="0 0 30 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="15"
                cy="25.5"
                rx="15"
                ry="14.5"
                transform="rotate(180 15 25.5)"
                fill="#0E918C"
              />
              <path
                d="M6 37C12 40.6 14 47.5 14 51L21 48.5L18 29L6 37Z"
                fill="#0E918C"
              />
              <path
                d="M6 14C12 10.4 14 3.5 14 -7.42853e-07L21 2.5L18 22L6 14Z"
                fill="#0E918C"
              />
              <path
                d="M13.4398 20.923L18.0027 26.2189L12.8223 30.9038"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SvgRapper>
          ) : (
            <>
              {Media ? (
                <SvgRapper
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="15"
                    cy="14.5"
                    rx="15"
                    ry="14.5"
                    transform="rotate(180 15 14.5)"
                    fill="#0E918C"
                  />
                  <path
                    d="M17.2298 9.11548L12.1156 13.9986L16.9987 19.1128"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SvgRapper>
              ) : (
                <SvgRapper
                  width="30"
                  height="51"
                  viewBox="0 0 30 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="15"
                    cy="25.5"
                    rx="15"
                    ry="14.5"
                    transform="rotate(180 15 25.5)"
                    fill="#0E918C"
                  />
                  <path
                    d="M6 37C12 40.6 14 47.5 14 51L21 48.5L18 29L6 37Z"
                    fill="#0E918C"
                  />
                  <path
                    d="M6 14C12 10.4 14 3.5 14 -7.42853e-07L21 2.5L18 22L6 14Z"
                    fill="#0E918C"
                  />
                  <path
                    d="M16.9286 30.9999L12.0657 25.978L16.9651 21"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SvgRapper>
              )}
            </>
          )}
        </IconButton>

        {!rightnavbars && (
          <Box sx={{ px: 1, py: 2 }}>
            <Grid container>
              <Grid xs={12} item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    mt: theme.spacing(2),
                  }}
                >
                  <IconButton>
                    <Box
                      sx={styles.iconbtnsstyles(theme, "#F6830F")}
                      component={"div"}
                    >
                      <AddIcCallIcon sx={styles.svgiconsstyles} />
                    </Box>
                  </IconButton>
                  <IconButton>
                    <Box
                      sx={styles.iconbtnsstyles(theme, "#23183D", true)}
                      component={"div"}
                    >
                      <Image
                        style={styles.svgiconsstyles}
                        src={onlineSafty}
                        alt=""
                      />
                    </Box>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        {rightnavbars && (
          <Box sx={{ px: 2, py: 2 }}>
            <Grid container>
              <Grid xs={12} item>
                <NewCalender
                  onChange={setDate}
                  value={date}
                  iconsStyles={{
                    fontSize: "25px",
                    color: theme.palette.primary.main,
                  }}
                />

                <Box>
                  <StickyNotes date={date} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    mt: theme.spacing(2),
                  }}
                >
                  <Button
                    startIcon={
                      <Box
                        sx={styles.iconbtnsstyles(theme, "#F6830F")}
                        component={"div"}
                      >
                        <AddIcCallIcon sx={styles.svgiconsstyles} />
                      </Box>
                    }
                  >
                    <Typography
                      sx={{ color: theme.palette.primary.contrastText }}
                      variant="body1"
                    >
                      EMERGENCY CONTACT
                    </Typography>
                  </Button>
                  <Button
                    startIcon={
                      <Box
                        sx={styles.iconbtnsstyles(theme, "#23183D", true)}
                        component={"div"}
                      >
                        <Image
                          style={styles.svgiconsstyles}
                          src={onlineSafty}
                          alt=""
                        />
                      </Box>
                    }
                  >
                    <Typography
                      sx={{ color: theme.palette.primary.contrastText }}
                      variant="body1"
                    >
                      ONLINE SAFETY
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Rightnavbar;
//===================================================================
// STYLES
const styles: any = {
  iconbtnsstyles: (theme: any, color: any, online: any) => ({
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: color,
    p: 1.1,
  }),
  svgiconsstyles: (theme: any) => ({
    fontSize: "30px",
    color: theme.palette.primary.contrastText,
  }),
};
//=====================================================================
// CURRENT PAGE STYLES COMPONENTS
const NewCalender = styled(({ iconsStyles, ...props }: any) => (
  <Calendar
    {...props}
    nextLabel={<ArrowRightIcon sx={iconsStyles} />}
    next2Label={<SkipNextIcon sx={iconsStyles} />}
    prevLabel={<ArrowLeftIcon sx={iconsStyles} />}
    prev2Label={<SkipPreviousIcon sx={iconsStyles} />}
  />
))(({ theme }: any) => ({
  color: theme.palette.grey[700],
  boxShadow: theme.shadows[5],
  borderRadius: 7,

  "& .react-calendar__tile--active": {
    background: `${theme.palette.primary.main} !important `,
    borderRadius: "8%",
  },
  "& .react-calendar__tile--now": {
    background: `${theme.palette.primary.light} !important `,
    color: theme.palette.primary.contrastText,
    borderRadius: "8%",
  },
  "&.react-calendar button:enabled:hover": {
    borderRadius: "8%",
  },
  "& .react-calendar__tile--hasActive": {
    background: "unset !important",
  },
  "& .react-calendar__navigation__label": {
    borderRadius: "8% !important",
    maxWidth: "110px",
  },
  "& .react-calendar__navigation": {
    "& button": {
      minWidth: "35px",
      color: theme.palette.grey[700],
      fontWeight: 650,
    },
    "& button span": {
      fontFamily: theme.typography.fontFamily,
    },
  },
}));
const openedMixintwo = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  height: "calc(100% - 200px)",
  top: "100px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px 0px 0px 10px",
  zIndex: 200,
});

const closedMixintwo = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  zIndex: 200,
  height: "calc(100% - 200px)",
  borderRadius: "10px 0px 0px 10px",
  backgroundColor: theme.palette.primary.main,
  top: "100px",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("lg")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "fixed",
  right: "0px",
  ...(open && {
    ...openedMixintwo(theme),
    "& .MuiDrawer-paper": openedMixintwo(theme),
  }),
  ...(!open && {
    ...closedMixintwo(theme),
    "& .MuiDrawer-paper": closedMixintwo(theme),
  }),
}));
//========================================================================================
