import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useAdditionalNotesQuestions } from "./useAdditionalNotesQuestions";

const AdditionalNotesQuestions = () => {
  const { noteValue, handleChange, handleBack, disabled } =
    useAdditionalNotesQuestions();

  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={styles.title}>Additional notes or categories</Typography>
      <TextField
        label={
          "Please write here if you have any additional notes or questions"
        }
        fullWidth
        multiline
        minRows={20}
        value={noteValue}
        onChange={handleChange}
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"15px"}
        marginTop={"20px"}
      >
        {!disabled && (
          <LoadingButton
            type="submit"
            variant="contained"
            disabled={!noteValue}
          >
            Submit
          </LoadingButton>
        )}

        <Button
          sx={styles.btnStyle}
          type="button"
          variant="contained"
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>
    </Card>
  );
};

export default AdditionalNotesQuestions;

const styles = {
  title: {
    color: "#0E918C",
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
};
