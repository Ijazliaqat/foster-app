import React from "react";
import Link from "next/link";
import Image from "next/image";
import FosterTalkCard from "./FosterTalkCard";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Helpline from "../../../../../assets/svg/safeguarding/helpline.svg";
import Services from "../../../../../assets/svg/safeguarding/services.svg";
import SocialMedia from "../../../../../assets/svg/safeguarding/socialMedia.svg";
import { fosterTalkData, memberShipData, shortLink, socialMediaData } from ".";
import ThirdParty from "../../../../../assets/svg/safeguarding/third-parties.svg";
import FosterTalkIcon from "../../../../../assets/svg/advocacy/FosterTalkIcon.svg";

// ===================================================================================================

const FosterTalk = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container alignItems={"center"} sx={{ mb: 4 }}>
        <Grid item sm={11} xs={12}>
          <Box display={"flex"} alignItems={"center"} sx={{ gap: 0.5 }}>
            <Typography sx={styles.companyTitle(theme.palette.primary.main)}>Foster Talk</Typography>
            {shortLink.map((link) => (
              <Image key={link.type} src={link.icon} alt={link.type} style={styles.img} onClick={() => alert(link.type)} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Image src={FosterTalkIcon} alt="icon" style={styles.img} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <FosterTalkCard title="Helpline" icon={Helpline} background="linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)">
            <Box display="flex" flexDirection="column" gap={4} sx={{ p: "40px 30px" }}>
              {fosterTalkData?.helpline?.map((obj: any) => (
                <Box sx={styles.flex} key={obj.text}>
                  <Image src={obj?.icon} alt="icon" />
                  <Typography sx={styles.title(theme.palette.mode)}>
                    {obj.text}
                    <Typography sx={{ color: "#FB363E", fontWeight: 700 }} component={"span"}>
                      {obj.subText}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>
          </FosterTalkCard>
        </Grid>
        <Grid item lg={6}>
          <FosterTalkCard title="Services Offered" icon={Services} background="linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)">
            <ul style={{ paddingBottom: "25px ", marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "30px" }}>
              {fosterTalkData?.services?.map((obj: any, index: number) => (
                <Box key={index}>
                  <Typography component={"li"} key={obj.text} sx={styles.flex}>
                    <Typography sx={styles.box}></Typography>
                    <Typography>{obj.text}</Typography>
                  </Typography>
                </Box>
              ))}
            </ul>
          </FosterTalkCard>
        </Grid>
        <Grid item lg={6}>
          <FosterTalkCard title="Social Media" icon={SocialMedia} background="linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)">
            <Grid container spacing={3} sx={{ p: "50px 20px", fontWeight: "500" }}>
              {socialMediaData.map((obj: any, index: number) => (
                <Grid item key={index} lg={3} display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ my: "20px" }}>
                  <Link href={obj.link}>
                    <Image src={obj.icon} alt="icon" />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </FosterTalkCard>
        </Grid>
        <Grid item lg={6}>
          <FosterTalkCard title="Contracts & Memberships" icon={ThirdParty} background="linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)">
            <Grid container sx={{ p: "20px 40px", display: "flex", alignItems: "center", height: "100%" }}>
              {memberShipData.map((obj: any) => (
                <Grid
                  item
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  key={obj.title}
                  sx={{ textAlign: "center" }}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Image src={obj.icon} alt="icon" style={{ margin: "0 auto" }} />
                  <Typography>{obj.title}</Typography>
                </Grid>
              ))}
            </Grid>
          </FosterTalkCard>
        </Grid>
      </Grid>
    </>
  );
};

export default FosterTalk;

const styles: any = {
  flex: { display: "flex", alignItems: "center", gap: 3 },
  companyTitle: (color: any) => ({ mr: 3, fontWeight: 600, fontSize: 24, color }),
  title: (mode: any) => ({ fontWeight: 700, color: mode === "light" ? "#343A40" : mode }),
  box: { background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)", height: "15px", width: "15px" },
  media: { display: "flex", alignItems: "center", flexWrap: "wrap", justyifyContent: "space-between" },
  img: { cursor: "pointer" },
};
