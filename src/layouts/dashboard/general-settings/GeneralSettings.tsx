import React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/system";
import useSettings from "@root/hooks/useSettings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import useLocales from "@root/hooks/useLocales";
import { AnyAction } from "@reduxjs/toolkit";

// -------------------------------------------------------------
// CONSTANTS
const DRAWER_WIDTH = "min(90vw, 450px)";

const Generalsettings = (props: any) => {
  const { open, openHander } = props;
  const theme: any = useTheme();
  const {
    themeMode,
    themeDirection,
    themeColorPresets,
    onResetSetting,
    onChangeDirection,
    onChangeMode,
    colorOption,
    onChangeColor,
  } = useSettings();
  const { allLang, onChangeLocale, currentLocale } = useLocales();
  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[600]
      : theme.palette.grey[900];

  const btnBgColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[600];

  return (
    <div>
      <Drawer variant="permanent" anchor="right" open={open}>
        {open && (
          <Grid container>
            <Grid item xs={12} sx={{ px: 2 }}>
              <Box sx={Styles.topBox(theme)}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={Styles.typographystyles(theme)}
                >
                  General settings
                </Typography>
                <Box>
                  <IconButton onClick={onResetSetting}>
                    <RestartAltIcon />
                  </IconButton>
                  <IconButton onClick={openHander}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* color all  */}
              <Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={Styles.typographystylesTwo(theme)}
                >
                  PRIMARY COLOR
                </Typography>
              </Box>
              <RadioGroup
                name="themeColorPresets"
                value={themeColorPresets}
                onChange={onChangeColor}
              >
                <Grid container gap={1.5} mt={2}>
                  {colorOption.map((color: { name: string; value: string }) => {
                    const colorName: any = color.name;
                    const colorValue = color.value;
                    const isSelected = themeColorPresets === colorName;
                    console.log(colorName);

                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Grid item>
                        <FormControlLabel
                          sx={Styles.formControlLabelStyles(
                            theme,
                            isSelected,
                            colorValue,
                            btnBgColor
                          )}
                          label={
                            <Typography
                              variant="body1"
                              color="initial"
                              sx={Styles.typogaphyInFrom(
                                theme,
                                isSelected,
                                textColor
                              )}
                            >
                              <Box
                                component={"span"}
                                sx={Styles.colorNameStyle(
                                  theme,
                                  isSelected,
                                  colorValue
                                )}
                              ></Box>
                              {colorName}
                            </Typography>
                          }
                          value={colorName}
                          control={
                            <Radio sx={{ opacity: 0, position: "absolute" }} />
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </RadioGroup>
              {/* color all  */}
              {/* mode all  */}
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={Styles.typographystylesTwo(theme)}
                >
                  COLOR SCHEME
                </Typography>
              </Box>
              <RadioGroup
                name="themeMode"
                value={themeMode}
                onChange={onChangeMode}
                sx={{}}
              >
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: "15px", mt: 1 }}
                >
                  {["light", "dark"].map((mode: any) => {
                    const isSelected = themeMode === mode;
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Grid key={mode} item>
                        <FormControlLabel
                          sx={Styles.darkLightFromStyles(
                            theme,
                            isSelected,
                            btnBgColor
                          )}
                          label={
                            <Typography
                              variant="body1"
                              color="initial"
                              sx={Styles.darkLightFromStylesTwo(
                                theme,
                                isSelected,
                                textColor
                              )}
                            >
                              {mode === "light" ? (
                                <LightModeIcon />
                              ) : (
                                <DarkModeIcon />
                              )}
                              {mode}
                            </Typography>
                          }
                          value={mode}
                          control={
                            <Radio
                              sx={{
                                opacity: 0,
                                position: "absolute",
                                fontWeight: 800,
                              }}
                            />
                          }
                        />
                      </Grid>
                    );
                  })}
                </Box>
              </RadioGroup>
              {/* mode all  */}
              {/* orientation all  */}
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.primary,
                    fontSize: "13px",
                  }}
                >
                  ORIENTATION
                </Typography>
              </Box>
              <RadioGroup
                name="themeDirection"
                value={themeDirection}
                onChange={onChangeDirection}
              >
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: "15px", mt: 1 }}
                >
                  {["ltr", "rtl"].map((ori: any) => {
                    const isSelected = themeDirection === ori;
                    return (
                      // eslint-disable-next-line react/jsx-key
                      // "left-to-right", "right-to-left"
                      <Grid key={ori} item>
                        <FormControlLabel
                          sx={Styles.oritarionFromStyles(
                            theme,
                            isSelected,
                            btnBgColor
                          )}
                          label={
                            <Typography
                              variant="body1"
                              color="initial"
                              sx={Styles.oritariontypographyStyles(
                                theme,
                                isSelected,
                                textColor
                              )}
                            >
                              {ori === "ltr" ? (
                                <AlignHorizontalLeftIcon />
                              ) : (
                                <AlignHorizontalRightIcon />
                              )}
                              {ori === "ltr"
                                ? "left-to-right"
                                : "right-to-left"}
                            </Typography>
                          }
                          value={ori}
                          control={
                            <Radio
                              sx={{
                                opacity: 0,
                                position: "absolute",
                                fontWeight: 800,
                              }}
                            />
                          }
                        />
                      </Grid>
                    );
                  })}
                </Box>
              </RadioGroup>
              {/* orientation all  */}
              {/* Language all  */}
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.primary,
                    fontSize: "13px",
                    mb: 3,
                  }}
                >
                  Language
                </Typography>
              </Box>

              <Box sx={{ zIndex: "22222", position: "relative" }}>
                <FormControl fullWidth>
                  <InputLabel id="lang-select">Lang</InputLabel>
                  <Select
                    labelId="lang-select"
                    value={currentLocale}
                    label="Lnag"
                    onChange={onChangeLocale}
                  >
                    {allLang.map((lang) => {
                      console.log("current lang", lang);

                      return (
                        <MenuItem value={lang.value} key={lang.value}>
                          {lang.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>

              {/* Language all  */}
            </Grid>
          </Grid>
        )}
      </Drawer>
    </div>
  );
};

export default Generalsettings;

// -------------------------------------------------------------
// styles
const Styles = {
  topBox: (theme: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    py: 1,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  typographystyles: (theme: any) => ({
    fontWeight: "600",
    color: theme.palette.text.primary,
  }),
  typographystylesTwo: (theme: any) => ({
    fontWeight: "600",
    color: theme.palette.text.primary,
    fontSize: "13px",
  }),
  formControlLabelStyles: (
    theme: any,
    isSelected: any,
    colorValue: any,
    btnBgColor: any
  ) => ({
    position: "relative",
    backgroundColor: isSelected ? colorValue : btnBgColor,
    borderRadius: 100,
    outline: 1,
    outlineStyle: "solid",
    outlineColor: isSelected ? theme.palette.primary.main : "transparent",
    minWidth: 100,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
    textTransform: "capitalize",
  }),
  typogaphyInFrom: (theme: any, isSelected: any, textColor: any) => ({
    fontWeight: "700",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: isSelected ? theme.palette.common.white : textColor,
  }),
  colorNameStyle: (theme: any, isSelected: any, colorValue: any) => ({
    background: isSelected ? theme.palette.common.white : colorValue,
    width: 15,
    height: 15,
    borderRadius: "50%",
  }),
  darkLightFromStyles: (theme: any, isSelected: any, btnBgColor: any) => ({
    position: "relative",
    background: btnBgColor,
    borderRadius: 100,
    Height: 30,
    minWidth: 100,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
    outline: 1,
    outlineStyle: "solid",
    outlineColor: isSelected ? theme.palette.primary.main : "transparent",
    textTransform: "capitalize",
    "&.MuiFormControlLabel-label": {
      fontWeight: "800",
    },
  }),
  darkLightFromStylesTwo: (theme: any, isSelected: any, textColor: any) => ({
    fontWeight: "700",
    color: isSelected ? theme.palette.primary.main : textColor,
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }),
  oritarionFromStyles: (theme: any, isSelected: any, btnBgColor: any) => ({
    position: "relative",
    background: btnBgColor,
    borderRadius: 100,
    Height: 30,
    minWidth: 100,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
    outline: 1,
    outlineStyle: "solid",
    outlineColor: isSelected ? theme.palette.primary.main : "transparent",
    textTransform: "capitalize",
    "&.MuiFormControlLabel-label": {
      fontWeight: "800",
    },
  }),
  oritariontypographyStyles: (theme: any, isSelected: any, textColor: any) => ({
    fontWeight: "700",
    color: isSelected ? theme.palette.primary.main : textColor,
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }),
};
// -------------------------------------------------------------
// Current Page styled components
const openedMixintwo = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderRadius: "10px 0px 0px 10px",
  overflowX: "hidden",
  backgroundColor: theme.palette.background.default,
  zIndex: 300,
  boxShadow: "0px 9px 46px rgba(0, 0, 0, 0.08)",
});

const closedMixintwo = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  backgroundColor: theme.palette.background.default,
  zIndex: 300,
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(-1)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 5,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixintwo(theme),
    "& .MuiDrawer-paper": openedMixintwo(theme),
  }),
  ...(!open && {
    ...closedMixintwo(theme),
    "& .MuiDrawer-paper": closedMixintwo(theme),
  }),
}));
// -------------------------------------------------------------
