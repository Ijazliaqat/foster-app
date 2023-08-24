import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useSessionSettings } from "./useSessionSettings";
import { sessionSettingData } from ".";

const SessionSettings = () => {
  const { methods, handleSubmit, onSubmit, route, theme } =
    useSessionSettings();

  return (
    <Card sx={{ px: 2, py: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {sessionSettingData.map((form: any, i: number) => (
          <Box sx={styles.formWrapper(theme.palette)} key={i}>
            <Typography component={"p"} sx={styles.title(theme.palette)}>
              {form.title}
            </Typography>
            <form.component {...form.otherOptions}>
              {form.otherOptions.select
                ? form?.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : null}
            </form.component>
          </Box>
        ))}
        <Box sx={{ display: "flex", gap: "1rem", pt: "38px" }}>
          <LoadingButton
            sx={styles.loadingButton(theme)}
            type="submit"
            variant="contained"
          >
            Save
          </LoadingButton>
          <Button
            sx={{
              backgroundColor: "#E0E0E0",
              color: "#000",
              "&:hover": { backgroundColor: "#c5c1c1" },
            }}
            type="button"
            variant="contained"
            onClick={() => route.push("/system-admin")}
          >
            Cancel
          </Button>
        </Box>
      </FormProvider>
    </Card>
  );
};

export default SessionSettings;

const styles = {
  formWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid #DBDBDB`,
    py: 1.8,
  }),
  title: (theme: any) => ({
    fontWeight: 600,
    fontSize: "20px",
    color: `${theme.mode === "light" ? "#343A40" : "#d1d1d1"}`,
    textTransform: "capitalize",
  }),
  loadingButton: (theme: any) => ({
    backgroundColor: theme.palette.primary,
    "&:hover": { backgroundColor: theme.palette.primary },
  }),
};
