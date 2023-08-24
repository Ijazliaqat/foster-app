import { Box, Grid, Skeleton, useTheme } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import edit from "@root/assets/img/edit.png";
import SocialMediaModal from "./SocialMediaModal";
import Link from "next/link";
import Error from "@root/components/Error";
import facebook from "@root/assets/img/facebook.png";
import instagram from "@root/assets/img/instagram.png";
import twitter from "@root/assets/img/twitter.png";
import { useGetSocialMediaAccountsQuery } from "@root/services/carer-info/personal-info/social-media-links/socialMedia";
import { SkeltonSocialLinks } from "@root/components/skeleton";

export default function SocialMediaLinksSection() {
  const {
    data,
    isLoading: dataLoding,
    isError,
  } = useGetSocialMediaAccountsQuery<any>();

  const [open, setOpen] = React.useState(false);
  let theme = useTheme();
  let [link, setLink]: any = useState({});
  let imageData = [
    { name: "facebook", img: facebook },
    { name: "instagram", img: instagram },
    { name: "twitter", img: twitter },
  ];
  let [accountDetail, setAccountDetail] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAccountDetail(null);
  };

  let imageSource = (name: any) => {
    const result = imageData.find((dt: any) => dt.name === name);
    return result?.img as any;
  };

  if (dataLoding) {
    return <SkeltonSocialLinks />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <Box sx={{ p: 7 }}>
      <Grid container spacing={4}>
        {data?.data?.map((account: any, i: any) => {
          return (
            <Grid key={i} item md={6} lg={4} xl={2}>
              <Box
                sx={{
                  borderRadius: "50%",
                  width: "124px",
                  height: "auto",
                  position: "relative",
                  // border: "1px solid black",
                }}
              >
                <Box>
                  <Link href={`${account.accountLink}`} target="_blank">
                    <Image
                      src={imageSource(account.accountType)}
                      alt="icon"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "8px",
                    right: "5px",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    onClick={() => {
                      setAccountDetail(account);
                      handleOpen();
                    }}
                    src={edit}
                    alt="edit_icon"
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>
            </Grid>
          );
        })}
        <Grid item md={6} lg={4} xl={2}>
          <Box
            onClick={() => {
              handleOpen();
            }}
            sx={{
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              borderStyle: "dashed",
              borderColor: "#898989",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "60px",
              color: "#898989",
              cursor: "pointer",
            }}
          >
            +
          </Box>
        </Grid>
      </Grid>
      {open && (
        <SocialMediaModal
          open={open}
          accountDetail={accountDetail}
          dataArr={data}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
}
