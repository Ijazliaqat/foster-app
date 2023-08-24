import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useRouter } from "next/router";

const FinalDeRegistrationDialogbox = (props: any) => {
  const { isSuccessfullyModalOpen, setIsSuccessfullyModalOpen, route } = props;

  const { carer_name } = route.query;

  return (
    <>
      <Dialog open={isSuccessfullyModalOpen} onClose={() => setIsSuccessfullyModalOpen(false)} aria-labelledby="responsive-dialog-title"  PaperProps={{ sx: { width: "100%", maxWidth: "700px", m: "0 auto" } }}>
        <DialogTitle sx={styles.heading}>{`${carer_name} De-registeration Done Successfully`}</DialogTitle>
      </Dialog>
    </>
  );
};
export default FinalDeRegistrationDialogbox;

const styles = {
    heading: { background: "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)", width: "100%", py: 2, color: "#fff", textAlign: "center" },
}
