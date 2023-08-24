import { useEffect, useState } from "react";
// @mui
import { Box, useMediaQuery, useTheme } from "@mui/material";
// components
import LeftNavbar from "./left-navbar/LeftNavbar";
import Topnavbar from "./top-navbar/TopNavbar";
import Rightnavbar from "./right-navbar/RightNavbar";
import Footer from "./footer/Footer";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

export default function DashboardLayout({ children, ...other }: any) {
  const { showTitleWithBreadcrumbs = false } = other;
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("lg"));
  
  const screenSizeHandler = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(screenSizeHandler?true:false);
  const [rightnavbars, setrightbars] = useState(false);

  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));
  const handleDrawerright = () =>
    rightnavbars ? setrightbars(false) : setrightbars(true);
  
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={styles.mainBoxStyles}>
        {/* leftnavabr */}
        <LeftNavbar handleDrawer={handleDrawer} open={open} />
        {/* topnavbar */}

        <Box
          className="parenttop"
          sx={styles.parentChildrenStyles(theme, rightnavbars, open)}
        
        >
          <Topnavbar leftopen={open} handleDrawer={handleDrawer} />
          <Box
            className="allset"
            sx={styles.childrenStyles(theme, rightnavbars)}
          >
            {showTitleWithBreadcrumbs && (
              <TitleWithBreadcrumbLinks sx={{ mb: 2 }} {...other} />
            )}
            <Rightnavbar
              rightnavbars={rightnavbars}
              handleDrawerright={handleDrawerright}
            />
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

// Styles
const styles = {
  mainBoxStyles: {
    display: "flex",
    position: "relative",
    width: "100%",
  },
  parentChildrenStyles: (theme: any, rightnavbars: boolean, open: boolean) => ({
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      transition: theme.transitions.create("width", {
        duration: "0.4s",
      }),
      width: open === true ? "calc(100% - 290px)" : "calc(100% - 80px)",
    },
  }),

  childrenStyles: (theme: any, rightnavbars: boolean) => ({
    minHeight: "100vh",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      px: theme.spacing(2),
      pb: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      transition: "0.4s",
      overflowY: "auto",
      pt: theme.spacing(10),
      pl: theme.spacing(2.5),
      pr: theme.spacing(3.5),
      pb: theme.spacing(15),
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "calc(100% - 0px)",
      transition: "0.4s",
      overflowY: "auto",
      pt: theme.spacing(10),
      pl: theme.spacing(2.5),
      pr: theme.spacing(3.5),
      pb: theme.spacing(15),
    },
    [theme.breakpoints.up("lg")]: {
      transition: "0.4s",
      overflowY: "auto",
      maxWidth: "calc(100% - 80px)",
      pt: theme.spacing(10),
      pl: theme.spacing(2.5),
      pr: theme.spacing(3.5),
      pb: theme.spacing(6),
    },
    [theme.breakpoints.up("xl")]: {
      transition: "0.4s",
      overflowY: "auto",

      maxWidth: "calc(100% - 100px)",
      pt: theme.spacing(10),
      pl: theme.spacing(2.5),
      pr: theme.spacing(3.5),
      pb: theme.spacing(6),
    },
  }),
};
