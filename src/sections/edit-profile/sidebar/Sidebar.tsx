import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Card, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import SidebarHeader from "./SidebarHeader";
import { Stepper, StepperItem } from "../sidebar-stepper-links/SidebarStepper";

const Sidebar: React.FC<any> = (props) => {
  const {
    tabs,
    expanded,
    setExpanded,
    itemClickHand,
    tabsItems,
    diffInfoHandler,
  } = props;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme: any = useTheme();
  return (
    <Card
      sx={{
        boxShadow: theme.shadows[10],
        p: 1,
      }}
    >
      <SidebarHeader />
      {tabs.map(
        ({ name, limit }: { name: string; limit: any }, index: number) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === name}
              onChange={handleChange(name)}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Grid
                  container
                  sx={{
                    backgroundColor: `${
                      theme.palette?.mode !== "dark" ? "#EBEBEB" : "transparent"
                    }`,
                    padding: "10px",
                  }}
                  alignItems="center"
                >
                  <Grid item sm={1} container>
                    {expanded === name ? <RemoveIcon /> : <AddIcon />}
                  </Grid>
                  <Grid item sm={11}>
                    <Typography>{name}</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Stepper>
                  {tabsItems
                    .slice(limit[0], limit[1])
                    .map((item: any, index: number) => {
                      const { name, status } = item;
                      return (
                        <StepperItem
                          onClick={() => itemClickHand(name)}
                          key={index}
                          active={diffInfoHandler.activeFormName === name}
                          status={status}
                        >
                          <p style={{ whiteSpace: "nowrap" }}>{name}</p>
                        </StepperItem>
                      );
                    })}
                </Stepper>
              </AccordionDetails>
            </Accordion>
          );
        }
      )}
    </Card>
  );
};

export default Sidebar;
