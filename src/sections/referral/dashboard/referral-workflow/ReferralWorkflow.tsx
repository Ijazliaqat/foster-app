import React from "react";
import Image from "next/image";
import { Box, Card, Typography, useTheme } from "@mui/material";

import workFlowIcon from "../../../../assets/img/referral-dashobard/work-flow.png";
import WorkFlowModal from "@root/components/modal/workFlowModal";

const ReferralWorkflow = () => {
  const [workFlowModal, setWorkFlowModal] = React.useState(false);

  const theme = useTheme();

  return (
    <>
      <Card sx={{ ...styles.cardStyles, px: 3, py: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "600",
              fontSize: "24px",
            }}
          >
            For better understanding of Referral Work Flow
          </Typography>
          <Image
            onClick={() => setWorkFlowModal(true)}
            style={{ cursor: "pointer" }}
            src={workFlowIcon}
            alt="work flow"
          />
        </Box>
      </Card>
      <WorkFlowModal open={workFlowModal} handleClose={() => setWorkFlowModal(false)} />
    </>
  );
};

export default ReferralWorkflow;

const styles = {
  cardStyles: {
    position: "relative",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
};
