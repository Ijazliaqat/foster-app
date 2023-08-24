import { Avatar, Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import addNewResourceImg from "../../../../../assets/svg/training/addNewResource.svg";
import Link from "next/link";
import AddNewModal from "../add-new-modal/AddNewModal";
import useCourseResourcePoolList from "./useCourseResourcePoolList";

export default function CourseResourcePoolList() {
  const { addHandler, handleClose, handleOpen, open, resourcePoolListData } =
    useCourseResourcePoolList();

  const path = '/training/manage-courses/course-resource-pool/category';

  return (
    <>
      <Grid container spacing={4}>
        {resourcePoolListData.map((item: any, i: any) => {
          return (
            <Grid key={i} item xs={12} lg={6}>
              <Box sx={(theme) => styles.card(theme, item.backgroundColor)}>
                <Link href={`${path}`} style={{ textDecoration: "none" }}>
                  <Box sx={(theme) => styles.cardContent(theme)}>
                    <Box sx={(theme) => styles.cardImage(theme)}>
                      {item.image ? (
                        <Image
                          src={item.image}
                          width={57}
                          height={59}
                          alt="image"
                        />
                      ) : (
                        <Avatar sx={{ width: 56, height: 56 }}></Avatar>
                      )}
                    </Box>
                    <Typography sx={(theme) => styles.cardText(theme)}>
                      {item.categoryDescription}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
          );
        })}
        <Grid item xs={12} lg={6}>
          <Box onClick={handleOpen}
            sx={(theme) => styles.addcard(theme)}
          >
            <Box sx={(theme) => styles.cardContent(theme)}>
              <Typography sx={(theme) => styles.cardImage(theme)}>
                <Image
                  src={addNewResourceImg}
                  width={57}
                  height={59}
                  alt="image"
                />
              </Typography>
              <Typography sx={(theme) => styles.cardText(theme)}>
                Add new
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {
        open && (
          <AddNewModal
            open={open}
            handleClose={handleClose}
            addHandler={addHandler}
          />
        )
      }
    </>
  );
}

//style
const styles = {
  card: (theme: any, background: any) => ({
    background: background,
    borderRadius: "10px",
    display: "flex",
    height: "160px",
    cursor: "pointer",
    alignItems: "center",
  }),
  cardContent: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  cardText: (theme: any) => ({
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      fontSize: "20px",
      fontWeight: "600",
      margin: "0px",
      color:
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.grey[800],
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "24px",
      fontSize: "24px",
    },
  }),
  cardImage: (theme: any) => ({
    [theme.breakpoints.up("xs")]: {
      borderRadius: "50%",
      width: "88px",
      height: "88px",
      background:
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.grey[800],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      padding: "0px",
      cursor: "pointer",
      position: "",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "20px",
    },

    [theme.breakpoints.up("xl")]: {
      margin: "40px",
    },
  }),
  addcard: (theme: any) => ({
    background: "#EB9411",
    borderRadius: "10px",
    display: "flex",
    height: "160px",
    cursor: "pointer",
  }),
};
