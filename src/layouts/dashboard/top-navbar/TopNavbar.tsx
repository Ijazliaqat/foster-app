import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Popover,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { createGradient } from "@root/theme/palette";
import { AiFillMessage } from "react-icons/ai";
import MyAvatar from "@root/components/MyAvatar";
import { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
//======================================================================================
// ICONS
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import Generalsettings from "../general-settings/GeneralSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
//==========================================================================================
const Topnavbar = (props: any) => {
  // CONST VARIABLES AND USESTATES AND HANDLERS
  const { handleDrawer, leftopen } = props;
  const theme: any = useTheme();
  const [open, setopen] = React.useState(false);
  const { logout } = useAuth();
  const router = useRouter();

  const openHander = () => (open === true ? setopen(false) : setopen(true));

  const [profiledropdown, setprofiledropdown] =
    React.useState<HTMLButtonElement | null>(null);

  const profiledropdownHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setprofiledropdown(event.currentTarget);
  };

  const handleClose = () => {
    setprofiledropdown(null);
  };
  const poper = Boolean(profiledropdown);

  //===================================================================================================
  return (
    <Box
      className={"topnavbar"}
      sx={{
        width: {
          xs: "100%",
          md: leftopen ? "calc(100% - 300px)" : "calc(100% - 75.5px)",
        },
        position: { lg: "fixed", sm: "fixed", xs: "unset" },

        zIndex: 1000,
        transition: theme.transitions.create("width", {
          duration: 400,
        }),
      }}
    >
      <Grid container>
        <Grid xs={12} item>
          <Box
            sx={{
              px: theme.spacing(2),
              py: theme.spacing(1.5),
              boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.24)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              background: createGradient(
                theme.palette.primary.darker,
                theme.palette.primary.light
              ),
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
            >
              <MenuIcon sx={{ color: "white", fontSize: "24px" }} />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton color="inherit" aria-label="open drawer" edge="start">
                <AiFillMessage style={{ color: "white ", fontSize: "24px" }} />
              </IconButton>
              <StyledBadge badgeContent={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <EmailIcon sx={{ color: "white", fontSize: "24px" }} />
                </IconButton>
              </StyledBadge>

              <StyledBadge badgeContent={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <NotificationsIcon
                    sx={{ color: "white", fontSize: "24px" }}
                  />
                </IconButton>
              </StyledBadge>
              {/* <Generalsettings /> */}
              <IconButton
                onClick={openHander}
                color="inherit"
                aria-label="open drawer"
                edge="start"
              >
                <SettingsIcon sx={{ color: "white", fontSize: "24px" }} />
              </IconButton>
              <IconButton
                onClick={profiledropdownHandler}
                color="inherit"
                aria-label="open drawer"
                edge="start"
              >
                <MyAvatar sx={{ width: "30px", height: "30px" }} />
              </IconButton>
              <Popover
                open={poper}
                anchorEl={profiledropdown}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                sx={{
                  px: theme.spacing(6),
                  py: theme.spacing(6),
                }}
              >
                <Stack
                  sx={{
                    px: theme.spacing(1),
                    py: theme.spacing(0.5),
                  }}
                  spacing={2}
                >
                  <Button
                    onClick={() => {
                      handleClose();
                      router.push("/personal-details");
                    }}
                    startIcon={
                      <AccountBoxOutlinedIcon
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: "24px",
                        }}
                      />
                    }
                    sx={{
                      boxShadow: theme.shadows[0],
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.grey[600] }}
                    >
                      profile
                    </Typography>
                  </Button>
                  <Button
                    onClick={logout}
                    startIcon={
                      <LogoutIcon
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: "24px",
                        }}
                      />
                    }
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.grey[600] }}
                    >
                      logout
                    </Typography>
                  </Button>
                </Stack>
              </Popover>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* ///////////////////////////// */}
      <Generalsettings openHander={openHander} open={open} />
    </Box>
  );
};

export default Topnavbar;
//===============================================================================================
// TOPNAVBAR STYLE COMPONENTS
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 13,
    backgroundColor: "#FA7422",
    color: "white",
    padding: "0 4px",
  },
}));
