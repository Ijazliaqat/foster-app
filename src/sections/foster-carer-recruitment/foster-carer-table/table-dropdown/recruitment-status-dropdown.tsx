import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const RecruitmentStatusDropdown = ({ status }: any) => {
  const options = [
    "Enquiry stage",
    "Assessment stage 1",
    "Assessment stage 2",
    "Contract & Declaration",
    "Ready for Placement",
  ];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const optionsColor: any = {
    "Enquiry stage": "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    "Assessment stage 1":
      "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    "Assessment stage 2":
      "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)",
    "Contract & Declaration":
      "linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)",
    "Ready for Placement":
      "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)",
  };

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button
          sx={{
            background: optionsColor[status],
            width: 200,
            fontSize: 14,
            fontWeight: 600,
          }}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          {status}
        </Button>
        <Button
          size="small"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          sx={{ background: optionsColor[status] }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList>
                  {options.map((option: any, index: any) => (
                    <MenuItem sx={menuStyle(option, optionsColor)} key={index}>
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  );
};

const menuStyle = (option: any, optionsColor: any) => {
  return {
    background: optionsColor[option],
    color: "white",
    width: 190,
    fontSize: 14,
    margin: 0.8,
    fontWeight: 600,
    borderRadius: 1,
  };
};
