import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import EditIcon from "../../../assets/svg/safeguarding/edit.svg";
import add from "../../../assets/svg/marketing/auditInfoIcon.svg";
import React, { useState } from "react";
import { SwotData } from ".";
import Image from "next/image";
import AuditInfoMarketingModal from "../audit-info-modal/AuditInfoModal";
import Link from "next/link";
import { useSwotCompetitor } from "./useSwotCompetitor";

const SwotCompetitor = (props: any) => {
  const { routerPath, title } = props;
  const { open, setopen, handleClose } = useSwotCompetitor();
  return (
    <Stack sx={{ overflowX: "auto" }}>
      <Box sx={style.box}>
        <Box sx={style.header}>
          <Typography component="p" variant="body1" fontWeight="600">
            {title}
          </Typography>
          <Box sx={{ display: "flex" }} gap={0.5}>
            <Image src={EditIcon} alt="icon" onClick={() => {}} style={{ cursor: "pointer" }} />
            <Image
              src={add}
              alt="icon"
              onClick={() => setopen(!open)}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Grid container rowSpacing={2} minHeight={"100px"} alignItems={"center"}>
          {SwotData.map((data: any, i: number) => {
            return (
              <Grid key={i} item xs={3} lg={3}>
                <Box key={i} sx={(theme) => style.swotCard(theme, data.bgColor)}>
                  <Box sx={style.swotTitle}>
                    <Image
                      src={data.titleIcon}
                      alt=""
                      onClick={() => {}}
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", paddingBottom: "10px" }} gap={1.5}>
                    <Typography sx={(theme) => style.subtitle(theme)}>{data.subTitle}</Typography>
                    <Image
                      src={data.icon}
                      alt=""
                      onClick={() => {}}
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                  {data?.subData.map((item: any, i: number) => {
                    return (
                      <ul key={i} style={{ margin: " 0 20px" }}>
                        <li style={{ margin: " 0 20px" }}>
                          <Typography sx={(theme) => style.content(theme)}>{item}</Typography>
                        </li>
                      </ul>
                    );
                  })}
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Link href={routerPath} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              margin: "20px 0px",
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
            type="button"
            variant="contained"
          >
            back
          </Button>
        </Link>
        <AuditInfoMarketingModal open={open} handleClose={handleClose} />
      </Box>
    </Stack>
  );
};

export default SwotCompetitor;

const style = {
  box: {
    minWidth: "1300px",
    margin: 0,
  },
  header: (theme: any) => ({
    height: "47px",
    background: "#E9E9E9",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: `8px 8px 0 0`,
    padding: theme.spacing(0, 1.8),
  }),
  iconStyles: (theme: any, iconColor: string) => ({
    color: iconColor,
    background: "#1A202E",
  }),
  swotCard: (theme: any, background: any) => ({
    background: background,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }),
  swotTitle: (theme: any) => ({
    padding: "15px",
  }),
  subtitle: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: 600,
    color: theme.palette.text.primary,
  }),

  content: (theme: any) => ({
    fontSize: "24px",
    display: "inline",
    fontWeight: 400,
    color: theme.palette.text.primary,
  }),
};
