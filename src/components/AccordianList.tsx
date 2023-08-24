import {
  AccordionSummary,
  Avatar,
  useTheme,
  Accordion,
  AccordionDetails,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const AccordianList = ({ title, component }: any) => {
  const theme: any = useTheme();
  const [accordianExpanded, setAccordianExpanded] = React.useState(false);
  return (
    <Accordion
      disableGutters
      sx={{
        marginTop: "20px",
        borderRadius: "5px",
        "&:not(:last-child)": {
          borderBottom: 0,
        },
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: "20px",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[700]
              : alpha(theme.palette.primary.main, 0.12),
          borderRadius: "5px",
        }}
        aria-controls="panel1d-content"
        id="panel1d-header"
        expandIcon={
          <Avatar
            sx={{
              width: "22px",
              height: "22px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            {accordianExpanded ? (
              <ArrowDropUpIcon sx={{ color: theme.palette.grey[0] }} />
            ) : (
              <ArrowDropDownIcon sx={{ color: theme.palette.grey[0] }} />
            )}
          </Avatar>
        }
      >
        <Typography
          variant="subtitle1"
          className="title"
          sx={{
            padding: "5px 10px",
            color:
              theme.palette.mode === "dark"
                ? theme.palette.grey[500]
                : theme.palette.grey[700],
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{component}</AccordionDetails>
    </Accordion>
  );
};

export default AccordianList;
