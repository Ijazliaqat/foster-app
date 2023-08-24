import { Box, Card, Icon, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import MyAvatar from "@root/components/MyAvatar";
import PhoneIcon from "@mui/icons-material/Phone";
import { useViewProfile } from "./useViewProfile";

const ViewProfile = () => {
  const { theme, data, isLoading } = useViewProfile();
  console.log("data", data);
  return (
    <Card sx={styles.rootCard}>
      <Box sx={styles.profileDetailsWrapper}>
        <Box sx={styles.profileData}>
          <Typography variant="subtitle1" component={"p"}>
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              `${data?.data?.firstName ?? "-"} ${data?.data?.lastName ?? "-"}`
            )}
          </Typography>
          <Typography variant="caption" component={"p"}>
            {isLoading ? (
              <Skeleton variant="text" animation="wave" width={100} />
            ) : (
              data?.data.defaultRole ?? "-"
            )}
          </Typography>
        </Box>
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rounded"
            width={112}
            height={112}
            sx={{ position: "absolute", bottom: "-20%" }}
          />
        ) : (
          <MyAvatar sx={styles.avatar} />
        )}
      </Box>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Skeleton animation="wave" variant="text" width={350} />
        </Box>
      ) : (
        <Typography
          variant="subtitle2"
          sx={styles.locationText}
          component={"p"}
        >
          {data?.data?.location ?? "-"}
        </Typography>
      )}
      <Box sx={styles.phoneWrapper}>
        {isLoading ? (
          <Skeleton variant="text" animation="wave" width={100} />
        ) : (
          <>
            <Icon>
              <PhoneIcon />
            </Icon>
            <Typography variant="caption" component={"p"}>
              {data?.data?.phoneNumber ?? "-"}
            </Typography>
          </>
        )}
      </Box>
      <Box sx={styles.linksWrapper}>
        {isLoading ? (
          <Skeleton variant="text" animation="wave" width={100} />
        ) : (
          <Link
            href="/personal-details/update-profile"
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.primary.main }}
              component={"p"}
            >
              Edit Full Profile
            </Typography>
          </Link>
        )}
        {isLoading ? (
          <Skeleton variant="text" animation="wave" width={100} />
        ) : (
          <Link
            href="/personal-details/profile"
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.primary.main }}
              component={"p"}
            >
              View Profile
            </Typography>
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default ViewProfile;

//Styles

const styles: any = {
  rootCard: (theme: any) => ({
    boxShadow: theme.shadows[5],
    pb: 1.5,
    borderRadius: "10px",
  }),
  profileDetailsWrapper: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    height: "150px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  }),
  profileData: (theme: any) => ({
    textAlign: "center",
    mt: 0.5,
    color: theme.palette.grey[0],
  }),
  locationText: (theme: any) => ({
    whiteSpace: "pre",
    mt: 5.5,
    mb: 1,
    textAlign: "center",
    color: theme.palette.grey[600],
  }),
  phoneWrapper: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 0.5,
    color: theme.palette.grey[600],
  }),
  linksWrapper: (theme: any) => ({
    display: "flex",
    mt: { xs: 2, sm: "none" },
    justifyContent: "space-between",
    padding: {
      xs: "10px 20px 0 20px",
      sm: "30px 50px 0 50px",
      xl: "30px 30px 0 30px",
    },
  }),
  avatar: {
    width: "112px",
    height: "112px",
    position: "absolute",
    borderRadius: "10px",
    textAlign: "center",
    bottom: "-20%",
    boxShadow: "0px 0.5px 3px 0px rgba(0, 0, 0, 0.5)",
  },
};
