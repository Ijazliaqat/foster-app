import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export default function FormSubmitButtons(props: any) {
  const { isSubmitting, isDirty } = props;
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", mb: "1rem" }}>
      <LoadingButton
        sx={{ marginRight: "1rem" }}
        type="submit"
        variant="contained"
        loading={isSubmitting}
        disabled={!isDirty}
      >
        Submit
      </LoadingButton>
      {/* <LoadingButton
        type="button"
        sx={{ marginRight: "1rem", backgroundColor: "#23183D" }}
        variant="contained"
        disabled={!isDirty}
      >
        Save as draft
      </LoadingButton> */}
      <LoadingButton
        onClick={() => router.back()}
        type="button"
        sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
        variant="contained"
      >
        back
      </LoadingButton>
    </Box>
  );
}
