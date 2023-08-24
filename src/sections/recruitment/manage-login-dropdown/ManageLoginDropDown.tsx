import React from "react";
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockIcon from "@mui/icons-material/Lock";
import { useManageLoginDropDown } from "./useManageLoginDropDown";
export const ManageLoginDropDown = () => {
  const {
    open,
    // setOpen,
    manageLoginData,
    // setManageLoginData,
    selectedIndex,
    // setSelectedIndex,
    anchorRef,
    handleClose,
    handleToggle,
    handleMenuItemClick,
  } = useManageLoginDropDown();
  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          startIcon={<LockIcon />}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleToggle}
        >
          {selectedIndex !== null
            ? manageLoginData[selectedIndex]?.buttonText
            : "Manage Login"}
        </Button>
        {/* <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button> */}
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
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
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {manageLoginData.map((option: any, index: any) => (
                    <MenuItem
                      key={option?.id}
                      sx={{
                        background: option?.backgroundColors,
                        margin: 0.8,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "white",
                        borderRadius: 1,
                        "&:hover": {
                          // color: "black",
                          opacity: 0.8,
                          background: option?.backgroundColors,
                        },
                        "&:focus": { background: option?.backgroundColors,opacity: 0.7 },
                      }}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option?.buttonText}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};
