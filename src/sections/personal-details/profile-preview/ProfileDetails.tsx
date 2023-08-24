import { Avatar, Box, Rating, Skeleton, Typography } from "@mui/material";
import { PROFILE_DATA } from "./ProfilePreviewData";
import { useTheme } from "@emotion/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import MyAvatar from "@root/components/MyAvatar";
import { useGetUserProfileQuery } from "@root/services/userApi";

const ProfileDetails = () => {
  const theme: any = useTheme();
  const { data, isLoading }: any = useGetUserProfileQuery();
  return (
    <>
      <Box sx={{ display: "grid", placeItems: "center", mb: 10 }}>
        {isLoading ? (
          <Skeleton
            variant="circular"
            animation="wave"
            width={100}
            height={100}
            sx={{ mt: 6 }}
          />
        ) : (
          <MyAvatar
            alt="profile-pic"
            variant="circular"
            sx={{
              width: "100px",
              height: "100px",
              mt: 6,
            }}
          />
        )}
        <Typography
          component={"p"}
          variant="subtitle1"
          sx={{
            mt: 2,
            mb: 2,
            color: theme.palette.grey[600],
          }}
        >
          {isLoading ? (
            <Skeleton variant="text" animation="wave" width={100} />
          ) : (
            `${data?.data?.firstName ?? "-"} ${data?.data.lastName ?? "-"}`
          )}
        </Typography>
        <Rating name="read-only" defaultValue={4} readOnly sx={{ mb: 3 }} />
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, gap: 1 }}>
          <Avatar
            sx={{
              width: "20px",
              height: "20px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <LocationOnIcon
              sx={{ fontSize: "14px", color: theme.palette.grey[0] }}
            />
          </Avatar>
          <Typography
            component={"p"}
            variant="body2"
            sx={{ color: theme.palette.grey[600] }}
          >
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              data?.data?.phoneNumber ?? "-"
            )}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            sx={{
              width: "20px",
              height: "20px",
              backgroundColor: theme.palette.grey[600],
            }}
          >
            <EmailIcon
              sx={{ fontSize: "11px", color: theme.palette.grey[0] }}
            />
          </Avatar>
          <Typography
            component={"p"}
            variant="body2"
            sx={{ color: theme.palette.grey[600] }}
          >
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              data?.data?.email ?? "-"
            )}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProfileDetails;
