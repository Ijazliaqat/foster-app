import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MyAvatar from "@root/components/MyAvatar";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import Logo from "@root/components/Logo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LeftNavbarList from "./LeftNavbarList";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { LogoIcon } from "@root/assets/svg";
import useAuth from "@root/hooks/useAuth";
import ClearIcon from "@mui/icons-material/Clear";
import useMediaQuery from "@mui/material/useMediaQuery";

//=====================================================================================
// CONSTANTS

export const drawerWidth = 300;
//============================================================

const LeftNavbar = (props: any) => {
  const {
    user: { firstName, defaultRole, lastName },
  }: any = useAuth();

  const theme: any = useTheme();
  const { open, handleDrawer } = props;
  const AVATAR_SIZE = open ? { width: "75px", height: "75px" } : { width: "55px", height: "55px" };
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ maxHeight: "100vh" }}>
        <DrawerHeader>
          <Box sx={{ ml: screenSizeHandler ? "auto" : "unset" }}>
            {open && <Logo variant="light" iconWidth={160} />}
            {!open && <LogoIcon variant="light" />}
          </Box>

          {screenSizeHandler && (
            <IconButton onClick={handleDrawer} sx={{ ml: "auto" }}>
              <ClearIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <MyAvatar variant="square" sx={{ ...AVATAR_SIZE, borderRadius: "10px" }} />
        </Box>
        {open && (
          <Box sx={{ textAlign: "center", mt: 1.5 }}>
            <Typography variant="subtitle2" sx={{ color: theme.palette.grey[400] }}>
              {`${firstName ?? "-"} ${lastName ?? "-"}`}
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
              {defaultRole ?? "User"}
            </Typography>
          </Box>
        )}

        {open && (
          <Stack
            direction="row"
            justifyContent="center"
            spacing={3}
            sx={{
              mt: 2,
            }}
          >
            <Link href="#">
              <AccountBoxIcon
                sx={{
                  color: theme.palette.grey[400],
                  width: "24px",
                  height: "24px",
                }}
              />
            </Link>
            <Link href="#">
              <LocalPostOfficeIcon
                sx={{
                  color: theme.palette.grey[400],
                  width: "24px",
                  height: "24px",
                }}
              />
            </Link>
            <Link href="#">
              <CalendarMonthIcon
                sx={{
                  color: theme.palette.grey[400],
                  width: "24px",
                  height: "24px",
                }}
              />
            </Link>
            <Link href="#">
              <EnhancedEncryptionIcon
                sx={{
                  color: theme.palette.grey[400],
                  width: "24px",
                  height: "24px",
                }}
              />
            </Link>
          </Stack>
        )}
        {/* Left NavBar List Component  */}
        <LeftNavbarList open={open} />
      </Box>
    </Drawer>
  );
};

export default LeftNavbar;
//==================================================================
//LEFTNAVBAR STYLING COMPONENTS

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  overflowy: "auto",
  height: "100%",
  zIndex: 5,
  background: theme.palette.grey[800],
  "&::-webkit-scrollbar": {
    width: 4,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  height: "100%",
  zIndex: 5,
  overflowy: "auto",
  "&::-webkit-scrollbar": {
    width: 4.5,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
  background: theme.palette.grey[800],
  width: `calc(${theme.spacing(0)} + -2px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + -2px)`,
  },
});
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 0),
  marginTop: "9px",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "11px",
  [theme.breakpoints.down("sm")]: {
    flexShrink: 5,
  },

  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
