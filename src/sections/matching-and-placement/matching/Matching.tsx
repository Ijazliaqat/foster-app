import React from "react";
import { Grid, Typography, Box, MenuItem, Select } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useMatching } from "./useMatching";
import { MatchingAndPlacementData } from ".";
import { LoadingButton } from "@mui/lab";
import HowItWorkModal from "./modal/HowItWorkModal";
import MatchingSwitchToggle from "./MatchingSwitchToggle";
import router from "next/router";

const Matching = () => {
  const {
    onSubmit,
    methods,
    handleSubmit,
    selectValueFosterCarerOrChild,
    fosterOptionsArray,
    isSecondFieldSelected,
    selectValueName,
    onSelectCarerChildHandleChange,
    onSelectNameHandleChange,
    onClickNameHandleChange,
    isOpenHowItWorkModal,
    setIsOpenHowItWorkModal,
    handleGetFosterOptions,
    buttonLabel,
    buttonPath,
  } = useMatching();
  return (
    <Grid container sx={styles.box}>
      <Grid lg={12} xs={12} mb={2}>
        <Box sx={styles.topHeadingBox} mt={1} mb={2}>
          <Typography sx={styles.topHeading}>Matching & Placement</Typography>
          {selectValueFosterCarerOrChild === "fosterCarer" ? (
            <Typography
              sx={styles.howItWorkStyle}
              onClick={() => {
                setIsOpenHowItWorkModal(true);
              }}
            >
              How it Works
            </Typography>
          ) : null}
        </Box>
        <HowItWorkModal
          title="Matching & Placment Algrothim"
          open={isOpenHowItWorkModal}
          handleClose={() => setIsOpenHowItWorkModal(false)}
        />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container columnSpacing={4}>
            <Grid item lg={6} xs={12}>
              <label style={styles.selectLabel}>
                Select the Foster Carer or Foster Child (Pending Placement)
              </label>
              <Select
                value={selectValueFosterCarerOrChild}
                onChange={onSelectCarerChildHandleChange}
                fullWidth
                sx={{ height: 42 }}
              >
                {MatchingAndPlacementData.map((item: any) => {
                  return (
                    <MenuItem
                      value={item.value}
                      key={item.id}
                      onClick={() => handleGetFosterOptions(item.childOptions)}
                    >
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>

            <Grid item lg={6} xs={12}>
              {selectValueFosterCarerOrChild === "fosterCarer" ? (
                <label style={styles.selectLabel}>Select the Carer Name</label>
              ) : selectValueFosterCarerOrChild === "fosterChild" ? (
                <label style={styles.selectLabel}>Select the Child Name</label>
              ) : (
                <label style={styles.selectLabel}>Select the Name</label>
              )}

              <Select
                value={selectValueName}
                onChange={onSelectNameHandleChange}
                fullWidth
                disabled={!isSecondFieldSelected}
                sx={{ height: 42 }}
              >
                {fosterOptionsArray.map((item: any) => {
                  return (
                    <MenuItem
                      value={item.value}
                      key={item.id}
                      onClick={(event) =>
                        onClickNameHandleChange(event, item.id)
                      }
                    >
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>

            {selectValueFosterCarerOrChild && selectValueName && (
              <Grid item xs={12} mt={2.5}>
                <Box sx={styles.buttonBox}>
                  <LoadingButton
                    sx={{ marginRight: "1rem" }}
                    variant="contained"
                    onClick={() => router.push(buttonPath)}
                  >
                    {buttonLabel}
                  </LoadingButton>
                </Box>
              </Grid>
            )}
          </Grid>
        </FormProvider>
      </Grid>
      {/* foster carer */}
      {selectValueFosterCarerOrChild && selectValueName && (
        <MatchingSwitchToggle
          selectValueFosterCarerOrChild={selectValueFosterCarerOrChild}
        />
      )}
    </Grid>
  );
};
export default Matching;
// styled
const styles = {
  topHeading: {
    color: "#343A40",
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: " 120%",
    letterSpacing: " 0.07px",
  },
  howItWorkStyle: {
    color: "#F6830F",
    fontSize: "12px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    cursor: "pointer",
  },
  selectLabel: {
    color: "#343A40",
    fontSize: "16px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: " 120%",
    letterSpacing: " 0.08px",
  },
  topHeadingBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  box: {
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.20)",
    padding: "10px 22px",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
  },
  styledSwitch: {
    border: "1px solid #000",
    borderRadius: "5px",
  },
};
