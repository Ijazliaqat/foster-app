import {
  Box,
  List,
  ListItem,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Fragment } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const FosterCarerRecruitmentDetailsModal = ({
  details: modalDetails,
  setDetails,
}: any) => {
  const theme = useTheme();

  return (
    <Modal
      open={!!modalDetails}
      onClose={() => {
        setDetails(false);
      }}
    >
      <Box sx={style}>
        <Typography
          variant="h5"
          bgcolor={theme.palette.primary.main}
          borderRadius={"7px 7px 0px 0px"}
        >
          {modalDetails?.caption}
        </Typography>
        <List>
          {modalDetails?.details?.map((item: any) => (
            <Fragment key={item?.title}>
              {item?.title ? (
                <Typography
                  variant="h6"
                  color={theme.palette.primary.main}
                  textAlign={"start"}
                  ml={2}
                >
                  {item?.title}
                </Typography>
              ) : item?.para ? (
                <Typography variant="body2" textAlign={"start"} ml={2}>
                  {item?.para}
                </Typography>
              ) : (
                <ListItem
                  sx={{
                    dispaly: "flex",
                    alignItems: "flex-start",
                    whiteSpace: "pre-line",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: "12px",
                      marginRight: "10px",
                      marginTop: "6px",
                      color: theme.palette.primary.main,
                    }}
                  />
                  {item?.bullet}
                </ListItem>
              )}
              {item?.subBullet?.map((item: any) => (
                <ListItem
                  sx={{
                    dispaly: "flex",
                    alignItems: "flex-start",
                    whiteSpace: "pre-line",
                  }}
                  key={item}
                >
                  <HorizontalRuleIcon
                    sx={{
                      marginTop: "8px",
                      fontSize: "7px",
                      marginInline: "15px",
                      color: theme.palette.primary.main,
                    }}
                  />
                  {item}
                </ListItem>
              ))}
            </Fragment>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default FosterCarerRecruitmentDetailsModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: { xs: 280, md: 700 },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "7px",
  textAlign: "center",
  maxHeight: "70vh",
  overflow: "auto",
};
