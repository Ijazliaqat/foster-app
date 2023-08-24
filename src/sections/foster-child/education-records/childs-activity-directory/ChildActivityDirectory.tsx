import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import TuneIcon from "@mui/icons-material/Tune";
import { ActivityBaseCards, AgeGroupCards, cardData } from ".";
import Link from "next/link";
import ChildPoper from "./ChildPoper";
import CancelIcon from "@mui/icons-material/Cancel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const ChildActivityDirectory = () => {
  const [filter, setFilter] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [anchorElTwo, setAnchorElTwo] = React.useState<HTMLElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClickTwo = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTwo(anchorElTwo ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const openTwo = Boolean(anchorElTwo);
  const ID = open ? "simple-popper" : undefined;
  const IdTwo = openTwo ? "simple-popper-2" : undefined;

  return (
    <Box mt={2}>
      <Paper variant="elevation" elevation={1} sx={{ borderRadius: 2.5 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={1}
          pt={1.5}
        >
          <IconButton disableRipple onClick={handleClick}>
            <InfoIcon sx={(theme) => Styles.iconButton(theme)} />
          </IconButton>
          <Typography
            variant="body1"
            fontSize={25}
            color={(theme) => theme.palette.primary.main}
            fontWeight={700}
          >
            Hand picked Kids Activities & Things To Do With Kids
          </Typography>
          <IconButton disableRipple onClick={handleClickTwo}>
            <TuneIcon sx={(theme) => Styles.iconButton(theme)} />
          </IconButton>
        </Box>
        <Grid
          p={2}
          gap={1.2}
          container
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems={"center"}
          sx={{
            "& a": {
              textDecoration: "none",
            },
          }}
        >
          {filter === 0 && (
            <>
              {cardData.map((items: any, index: any) => (
                <Grid key={index} item>
                  <Link href={items.link}>
                    <Box sx={Styles.MainWapper(items.bgcolor)}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={"white"}
                        fontWeight={700}
                      >
                        {items.text}
                      </Typography>
                      <Box sx={Styles.iconWapper(items.bgcolor)}>
                        {items.icon}
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </>
          )}
          {filter === 1 && (
            <>
              {AgeGroupCards.map((items: any, index: any) => (
                <Grid key={index} item>
                  <Link href={items.link}>
                    <Box sx={Styles.MainWapper(items.bgcolor)}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={"white"}
                        fontWeight={700}
                      >
                        {items.text}
                      </Typography>
                      <Box sx={Styles.iconWapper(items.bgcolor)}>
                        {items.icon}
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </>
          )}
          {filter === 2 && (
            <>
              {ActivityBaseCards.map((items: any, index: any) => (
                <Grid key={index} item>
                  <Link href={items.link}>
                    <Box sx={Styles.MainWapper(items.bgcolor)}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={"white"}
                        fontWeight={700}
                      >
                        {items.text}
                      </Typography>
                      <Box sx={Styles.iconWapper(items.bgcolor)}>
                        {items.icon}
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </>
          )}
        </Grid>
        <ChildPoper
          BoxProps={{ sx: (theme) => Styles.informationStyles(theme) }}
          PopperProps={{
            anchorEl: anchorEl,
            id: ID,
            open: open,
            placement: "bottom-start",
          }}
        >
          <Box mb={"auto"}>
            <IconButton disableRipple onClick={handleClick}>
              <CancelIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          <Typography variant="body2" color="white" p={1} px={0}>
            Take a look at our fantastic featured kids activities, kids clubs,
            holiday clubs, baby classes and things to do with Kids his week.
            Want to be featured ? Check out Club Owner Page for out extra
            publicity packages.
          </Typography>
        </ChildPoper>
        <ChildPoper
          BoxProps={{ sx: (theme) => Styles.settingStyles(theme) }}
          PopperProps={{
            anchorEl: anchorElTwo,
            id: IdTwo,
            open: openTwo,
            placement: "bottom-start",
          }}
        >
          <Box>
            <FormControlLabel
              checked={filter === 1 ? true : false}
              onChange={(props: any) => {
                console.log(props.target.checked);
                if (props.target.checked) {
                  setFilter(1);
                } else {
                  setFilter(0);
                }
              }}
              control={<Switch />}
              label={
                <Typography
                  variant="body2"
                  color={"#343A40"}
                  fontSize={15}
                  fontWeight={700}
                >
                  Show Based on Age Group
                </Typography>
              }
            />

            <FormControlLabel
              checked={filter === 2 ? true : false}
              onChange={(props: any) => {
                if (props.target.checked) {
                  setFilter(2);
                } else {
                  setFilter(0);
                }
              }}
              control={<Switch />}
              label={
                <Typography
                  variant="body2"
                  color={"#343A40"}
                  fontSize={15}
                  fontWeight={700}
                >
                  Show Based on Activity Type
                </Typography>
              }
            />
          </Box>

          <Box ml={"auto"}>
            <IconButton disableRipple onClick={handleClickTwo}>
              <CancelIcon
                sx={(theme) => ({ color: theme.palette.primary.main })}
              />
            </IconButton>
          </Box>
        </ChildPoper>
      </Paper>
    </Box>
  );
};

export default ChildActivityDirectory;
// STYLES
const Styles = {
  iconButton: (theme: Theme) => ({
    color: theme.palette.primary.main,
  }),
  MainWapper: (color: string) => ({
    backgroundColor: `${color}`,
    display: "flex",
    alignItems: "flex-end",
    minWidth: "191px",
    borderRadius: 2,
    height: "82px",
    padding: "10px 8px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  }),
  iconWapper: (color: string) => ({
    padding: "11px 8px",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    borderRadius: 32,
    width: "38px",
    height: "38px",
    boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25) inset",
    marginBottom: 2.5,
     color: `${color}`,
    "& svg": {
      fontSize: 21,
    },
  }),
  informationStyles: (theme: Theme) => ({
    top: "-10px",
    backgroundColor: theme.palette.primary.main,
    textColor: "#fff",
    borderRadius: 4,
    boxShadow: "2px 4px 7px 0px rgba(14, 145, 140, 0.20)",
    width: 500,
    display: "flex",
  }),
  settingStyles: (theme: Theme) => ({
    top: "-10px",
    backgroundColor: "white",
    textColor: "#fff",
    borderRadius: 4,
    boxShadow: "2px 4px 7px 0px rgba(14, 145, 140, 0.20)",
    width: 500,
    display: "flex",
    padding: "14px 20px",
  }),
};
