import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from "@mui/material/Grid";
import { Icon, useTheme } from "@mui/material";
import { Logo } from "@root/assets/svg";
import { addressItems, socialLinks, endListItems } from "./index";

import Link from "next/link";

const Footer = () => {
  const theme: any = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box component="footer" sx={styles.footerWrapper}>
      <Grid container sx={{ padding: { xs: "30px 0 0 0 ", md: "80px 0 0 0" } }}>
        <Grid item xs={12} lg={5} sx={{ px: { xs: 1, sm: 2, lg: 10, xl: 20 } }}>
          <Box sx={{ textAlign: { xs: "start" } }}>
            <Logo
              variant="theme"
              iconWidth={200}
              iconHeight={50}
              sx={{ mb: 2 }}
            />
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.grey[600] }}
            >
              Foster App Limited <strong>(ORCALO)</strong> is a Register <br />
              Company in England with company number <br /> 12125945.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", mt: 3 }}>
            {socialLinks.map((item: any) => (
              <Link key={item.id} href={item.link}>
                <Icon sx={styles.socialIcons}>{item.icon}</Icon>
              </Link>
            ))}
          </Box>
        </Grid>
        {/* Address Column Started */}
        <Grid item xs={12} lg={5} sx={{ px: { xs: 1, lg: 0 } }}>
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Address
            </Typography>
            {addressItems.map((item: any) => (
              <Box key={item.id} sx={styles.addressColumnStyling}>
                <div>
                  <Icon sx={{ color: theme.palette.primary.main }}>
                    {item.icon}
                  </Icon>
                </div>
                <div>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      whiteSpace: "pre-line",
                      color: theme.palette.grey[600],
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      {/* End Footer List Started */}
      <Grid container sx={styles.endListWrapper}>
        <Grid item xs={12} lg={6} sx={{ px: { xs: 1, lg: 10, xl: 20 } }}>
          <Typography variant="subtitle2" sx={styles.copyRightText}>
            Copyright © 2023 All rights reserved by{" "}
            <span style={{ color: theme.palette.primary.main }}>FosterApp</span>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} sx={styles.endList}>
          {endListItems.map((item: any) => (
            <Link
              href={item.link}
              key={item.id}
              style={{ textDecoration: "none", textAlign: "start" }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600] }}
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
      {/* Scroll To Top Code Started */}
      <IconButton
        sx={styles.iconButton}
        className={`${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;

const styles: any = {
  footerWrapper: {
    backgroundColor: "#F1F1F1",
    position: "relative",
  },
  socialIcons: (theme: any) => ({
    background: theme.palette.primary.main,
    width: "32px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    color: theme.palette.grey[0],
    mb: { xs: "40px", sm: "30px", lg: 10 },
  }),
  endListWrapper: {
    boxShadow: "0px -1px 3px rgba(50, 50, 50, 0.15)",
    py: 2,
    mt: { xs: 2, sm: 0 },
  },
  copyRightText: (theme: any) => ({
    textAlign: { xs: "start", sm: "center", lg: "start" },
    color: theme.palette.grey[600],
  }),
  endList: (theme: any) => ({
    display: "flex",
    gap: "20px",
    flexDirection: { xs: "column", sm: "row" },
    px: { xs: 1, lg: 0 },
    mt: { xs: 2, lg: 0 },
    justifyContent: { xs: "start", sm: "center", lg: "start" },
  }),
  addressColumnStyling: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
    mb: 1.5,
  },
  iconButton: (theme: any) => ({
    position: "fixed",
    bottom: { xs: "30px", md: "80px" },
    right: { xs: "20px", sm: "30px" },
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    opacity: 0,
    visibility: "hidden",
    "&.show": {
      opacity: 1,
      visibility: "visible",
    },
    color: theme.palette.grey[0],
    background: theme.palette.primary.main,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  }),
};
