import { Box, Typography, Modal, useTheme, Card, Grid } from "@mui/material";
import React, { useState } from "react";
import FosterCarerRecruitmentHeaderImage from "@root/assets/img/foster-carer-recruitment/FosterCarerRecruitmentHead.png";
import Arrow from "@root/assets/img/foster-carer-recruitment/Arrow.png";
import Image from "next/image";
import FosterCarerRecruitmentDetailsModal from "./FosterCarerRecruitmentDetailsModal";
import { FosterCarerRecruitmentModal } from "./";

const FosterCarerRecruitmentHeader = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<any>(false);

  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={"10px 10px 0px 0px"}
      p={1}
      sx={{
        background: "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)",
      }}
    >
      <Typography variant="h4">Prospective Foster Carer</Typography>
      <Image
        src={FosterCarerRecruitmentHeaderImage}
        alt={"Image"}
        width={0}
        height={0}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <Typography
            variant="h4"
            bgcolor={theme.palette.primary.main}
            textAlign={"center"}
            borderRadius={"32px 32px 0px 0px"}
            p={1}
            mb={3}
          >
            Foster Carer Recuritment
          </Typography>
          {FosterCarerRecruitmentModal.map((item: any) => (
            <Box px={2} key={item?.title} pb={!item?.arrow ? 5 : 0}>
              <Card>
                <Typography variant="h5" bgcolor={theme.palette.primary.main}>
                  {item?.title}
                </Typography>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  p={2}
                >
                  {item?.subDetails?.map((subItem: any) => (
                    <Grid
                      item
                      xs={6}
                      md={3}
                      display={"flex"}
                      key={subItem?.caption}
                      flexDirection={"column"}
                      alignItems={"center"}
                      sx={{ cursor: "pointer" }}
                      onClick={() => setDetails(subItem)}
                    >
                      <Image
                        src={subItem?.src}
                        alt={"Image"}
                        width={0}
                        height={0}
                      />
                      <Typography variant="body1">
                        {subItem?.caption}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Card>
              {item?.arrow && (
                <Box display={"flex"} justifyContent={"center"}>
                  <Image src={Arrow} alt={"Arrow"} width={0} height={0} />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Modal>
      <FosterCarerRecruitmentDetailsModal
        details={details}
        setDetails={setDetails}
      />
    </Box>
  );
};

export default FosterCarerRecruitmentHeader;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: { xs: 300, md: 800 },
  height: "80vh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "32px",
  textAlign: "center",
  overflow: "auto",
};
