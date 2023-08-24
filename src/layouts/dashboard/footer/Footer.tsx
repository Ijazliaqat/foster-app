import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { createGradient } from "@root/theme/palette";
//==========================================================
const Footer = () => {
  // CONSTANTS
  const theme: any = useTheme();
  const date = new Date();
  let year = date.getFullYear();
  //====================================================================================================
  return (
    <Box
      sx={{
        background: createGradient(
          theme.palette.primary.darker,
          theme.palette.primary.light
        ),
        display: "flex",
        position: { sm: "fixed", xs: "unset" },
        width: "100%",
        zIndex: 700,
        bottom: "0px",
        justifyContent: { sm: "center", lg: "space-between" },
        flexWrap: "wrap",
        gap: "10px",
        p: 1,
        px: { xs: 1, sm: 2 },
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.contrastText,
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Copyrights © {`${year}`} All rights reserved FosterApp
        </Typography>
      </Box>
      <Box
        sx={{
          // display: { xs: "none", sm: "flex" },
          display: "flex",
          gap: "18px",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          (+44) - 750028 - 7504
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          contact-us@fosterapp.co.uk
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          Help
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          OOH
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: "10px", sm: "25px" },
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
        }}
      >
        <Link href="/cookie-policy">
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Cookie Policy
          </Typography>
        </Link>
        <Link href="/privacy-policy">
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </Typography>
        </Link>
        <Link href="/terms-conditions">
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Terms & Conditions
          </Typography>
        </Link>
        <Link href="/data-security">
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Data Security
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
