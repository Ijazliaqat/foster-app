import React from "react";
import Link from "next/link";
import { Grid, Button, Box, } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { fosterCarerSwitchdata } from ".";
import { LoadingButton } from "@mui/lab";
import { useMatching } from "./useMatching";
import { ExpandMore } from "@mui/icons-material";
import router from "next/router";


const MatchingSwitchToggle = ({ selectValueFosterCarerOrChild }: any) => {
  const { onSubmit, methods, handleSubmit } = useMatching();

  

  return (
    <Grid lg={12} xs={12}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.styledSwitch}>
          <Box sx={{ display: "flex", justifyContent: "end " }} mt={0.5} mr={0.5}>
            <Button >More<ExpandMore /> </Button>
          </Box>
          <Grid container columnSpacing={2} p={1.6}>
            {fosterCarerSwitchdata?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={item?.id}>

                <item.component
                  value={item.value}
                  {...item.componentProps}
                  size={"small"}
                >
                  {selectValueFosterCarerOrChild === 'fosterCarer' && item?.heading}
                </item.component>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid item xs={12} mt={2}>
          <Box sx={styles.buttonBox}>
        
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              // onClick={() => router.push(`${router.pathname}/recommondations-result`)}
              onClick={() => router.push({
                pathname: `${router.pathname}/recommondations-result`,
                query: { viewParam:`${selectValueFosterCarerOrChild === 'fosterCarer' ? "view carer" : "view child"}`}
              })}
            >
                Find Match
            </LoadingButton>

          </Box>
        </Grid>
      </FormProvider>
    </Grid>
  )
}

export default MatchingSwitchToggle

// Styled
const styles = {
  styledSwitch: {
    border: "1px solid #000",
    borderRadius: "5px",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
  },
};
