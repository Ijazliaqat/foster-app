import {
  Avatar,
  Box,
  CardMedia,
  ThemeProvider,
  Typography,
  createTheme,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import logo from "@root/assets/img/logo.png";
import Image from "@root/components/Image";
import SignaturePad from "@root/components/hook-form/SignaturePad";

const theme = createTheme({
  typography: {
    fontSize: 14, // default font size
    body2: {
      lineHeight: "25px",
    },
  },
}); 

const WritenNoticeOfProposal = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="body2">
          <u>Your address here</u>
        </Typography>
        <Typography variant="body2">
          1 Workingham Street
          <br />
          Workingham
          <br />
          Berkshire
          <br />
          RG40 12Z
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          The date:
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontWeight: "500" }}>
          Dear (Foster Carer Name)
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "700" }}>
          {/* RE: Child's Name(Date of birth) */}
        </Typography>
        <Box sx={{ padding: 1 }}>
          <Typography variant="body2">
            After carefull consideration, we have decided to withdrow the child
            {/* "Child Name" from your Fostering, in order to take personal */}
            responsibility for his/her education, care, safeguarding. Also,
            panel members have decided to de-register you from our agency.
          </Typography>
          <br />
          <Typography variant="body2">
            Please will you confirm receipt of this latter and inform us your
            concerns and clarification.
          </Typography>
          <br />
          <Typography variant="body2">Your Sincerely,</Typography>
        </Box>
      </ThemeProvider> 
    </div> 
  );    
};     
 
export default WritenNoticeOfProposal;
  