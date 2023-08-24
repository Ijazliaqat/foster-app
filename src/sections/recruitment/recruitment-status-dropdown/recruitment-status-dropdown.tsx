import {
  Button,
  ButtonGroup,
  CircularProgress,
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
import { useRecruitmentStatusDropdown } from "./useRecruitmentStatusDropdown";
export const RecruitmentStatusDropdown = (props: any) => {
  const { id, status, textForApi, component, setMockData, mockData } = props;

  const {
    open,
    setOpen,
    anchorRef,
    handleMenuItemClick,
    handleClose,
    selectedIndex,
    optionData,
    isUpdatingEnquiryStage,
    isUpdatingAssessmentStageOne,
    isUpdatingAssessmentStageTwo,
    isUpdatingReadyForPlacement,
  } = useRecruitmentStatusDropdown({
    id,
    status,
    textForApi,
    component,
    setMockData,
    mockData,
  });

  return (
    <>
      {(isUpdatingEnquiryStage ||
        isUpdatingAssessmentStageOne ||
        isUpdatingAssessmentStageTwo ||
        isUpdatingReadyForPlacement) && (
        <CircularProgress sx={{ animationDuration: "400ms" }} />
      )}
      {!isUpdatingEnquiryStage &&
        !isUpdatingAssessmentStageOne &&
        !isUpdatingAssessmentStageTwo &&
        !isUpdatingReadyForPlacement && (
          <Grid
            item
            xs={2.3}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ButtonGroup variant="contained" ref={anchorRef}>
              <Button
                sx={{
                  background: optionData[selectedIndex]?.bgColor,
                  width: 200,
                  border: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "space-between",
                }}
                onClick={() => setOpen((prevOpen) => !prevOpen)}
              >
                {status}
                <ArrowDropDownIcon />
              </Button>
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
                      <MenuList
                        sx={{
                          boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
                        }}
                        id="split-button-menu"
                        autoFocusItem
                      >
                        {optionData.map((option: any, index: any) => (
                          <MenuItem
                            // sx={menuStyle(selectedIndex, optionsColor)}
                            sx={{
                              background: option.bgColor,
                              color: "white",
                              width: 190,
                              fontSize: 14,
                              margin: 0.8,
                              fontWeight: 600,
                              borderRadius: 1,
                            }}
                            key={option?.id}
                            // selected={index === selectedIndex}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option?.text}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        )}
    </>
  );
};
