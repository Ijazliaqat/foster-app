import { Avatar, Box, CardMedia, ThemeProvider, Typography, createTheme, List, ListItem } from "@mui/material";
import React from "react";
import logo from '@root/assets/img/logo.png'
import Image from "@root/components/Image";

const theme = createTheme({
  typography: {
    fontSize: 14, // default font size
    // Customize the desired variant's font size
    h1: {
      fontSize: 32, // change the font size for h1 variant
    },
  },
});

const TermsOfApproval = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Image src={logo} alt="Foster App" width="180" />
        <Typography variant="body2" sx={{ fontWeight: '700' }}>Fostering Service</Typography>
        <Typography variant="h6" sx={{ fontWeight: '700', lineHeight: '30px' }}>
          Foster Carer Terms and Conditions (July 2014)
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: '700' , lineHeight: '30px'}}>INTRODUCTION</Typography>
        <Typography variant="body2">
          The leeds Fostering Service employs a Payment for Skills (PFS) model
          for its foster carers, includin tasks, skills and competency
          requirements, post approval training and development expectations
          (including CWDC / TSD Standards, certification requirements) support
          group attendance and a framework of financial support.
          <br/><br/>
          The payment for skills modal has four levels (1 lowest - 4 highest
          with weekly fees paid to PFS Level 2, 3 and 4) This document details
          the Terms and Conditions relevent to approved foster carers who
          operate on Level&#39;s 2, 3 &amp; 4 of the modal.
          <br/>
          <br/>
          Payment for Skills is central to the leeds Fostering Service
          commitment to provide the best possible outcomes for fostered
          children. supported by skilled, motivated and rewarded foster carers,
          There Terms and Conditions provide a detailed framework for agreed
          practice but also recognise that they should not exclude the need at
          times for flexibility and negotiation to help achieve the best
          possible placement provision.

          These terms and conditions should be read in conjunction with:
        <List>
          <ListItem>
            1: The tasks, skills, competences (TSG) Framework document with
            identifies key competences and skills requirements for each level
            of the PFS nodel.
          </ListItem>
          <ListItem>
            2: The tasks, skills, competences (TSG) Framework document with
            identifies key competences and skills requirements for each level
            of the PFS nodel.
          </ListItem>
        </List>
        Terms and Conditions and the signed Foster Carer Agreement form the
        basis of a formal agreement between the Leeds City council Fostering
        Service and Its approved Foster Carers.
        <br/><br/>
        Terms and Conditions are normally reviewed at 2 yaerly intervals. This
        Terms and Condition document incorporates agreed changes following a
        review and foster carer consultation process completed in June 2014.
      </Typography>
    </ThemeProvider>
    </div >
  );
};

export default TermsOfApproval;
