import React from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  Typography,
  linearProgressClasses,
  styled,
  useTheme,
} from "@mui/material";
import SignaturePad from "@root/components/SignaturePad";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormProvider } from "@root/components/hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { fData } from "@root/utils/formatNumber";
import { useRouter } from "next/router";

const ConsentFormComp = () => {
  const router = useRouter();
  const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
  const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
  const theme = useTheme();

  const methods: any = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        eSignature: Yup.mixed()
          .nullable()
          .required("Field is Required")
          .test(
            "fileFormat",
            "Unsupported Format",
            (value: any) => value && FILE_FORMATS.includes(value.type)
          )
          .test(
            "fileSize",
            `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
            (value: any) => value && value.size <= MAX_FILE_SIZE
          ),
      })
    ),
    defaultValues: { eSignature: '' },
  });

  const points = [
    { title: "The following Consent ststements are asked to candidates." },
    {
      title: `I (Name of carer) `,
      component: <CustomTextField value={"umar malik"} />,
      title1: " agree to care for ",
      component1: <CustomTextField value={"child"} />,
      title2: " in a fostering arrangement",
    },
    {
      title: "I consent to FOSTER APP undertaking Visits to ",
      component: <CustomTextField value={"carer"} />,
      title1: " in my home.",
    },
    {
      title:
        "I agree to notify FOSTER APP services of any changes in my circumstances or of these arrangements.",
    },
  ];

  return (
    <Card sx={styles.card}>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"120px"}
        flexWrap={"wrap"}
      >
        <Typography sx={styles.userName}>Susan Smith</Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"30px"}
          flexWrap={"wrap"}
        >
          <Typography sx={styles.userStatus(theme)}>
            User Status: <span>Active</span>
          </Typography>
          <Typography sx={styles.userStatus(theme)}>
            User Type: <span>Prospective Foster carer</span>
          </Typography>
        </Box>
      </Box>
      <Grid container>
        <Grid item md={9} xs={12}>
          <Box marginTop={"20px"}>
            <Typography sx={styles.progress(theme)}>
              Here you can see the progress of Susan Smith ‘s application.
            </Typography>
            <Box position={"relative"}>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                placeholder={"50"}
              />
              <Typography component={"span"} sx={styles.progressCount}>
                50%
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ mt: "30px" }} />
          <Typography sx={styles.consent}>
            Consent of Prospective Foster carer
          </Typography>
          <List>
            {points.map(
              ({ title, component, title1, component1, title2 }, i) => (
                <ListItem key={i} sx={styles.listItem(theme)}>
                  {title}
                  {component}
                  {title1}
                  {component1}
                  {title2}
                </ListItem>
              )
            )}
          </List>
          <Grid container spacing={2}>
            <Grid item md={5} xs={12}>
              <FormProvider methods={methods}>
                <SignaturePad name="eSignature" disabled label="Signature" />
              </FormProvider>
            </Grid>
            <Grid item md={5} xs={12} sx={{ mt: 2 }}>
              <DatePicker
                sx={{ width: "90%" }}
                disabled
                label={"Approved Date"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={styles.btn}
        onClick={() => router.push("/de-registration/deregister-foster-carer")}
      >
        Back
      </Button>
    </Card>
  );
};

export default ConsentFormComp;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EBEBEB",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary,
  },
}));

const CustomTextField = ({ ...rest }) => (
  <input disabled style={styles.customTextField} maxLength={50} {...rest} />
);

const styles: any = {
  card: { p: 2, boxShadow: "0px 0px 7px 3px #0E918C33", overflowX: "auto" },
  userName: { fontSize: "24px", fontWeight: 600, color: "#0E918C" },
  userStatus: (theme: any) => ({
    fontWeight: 600,
    fontSize: "16px",
    color: theme.palette.mode === "light" ? "#000" : theme.palette.primary,
    "& > span": { color: "#0E918C" },
  }),
  progress: (theme: any) => ({
    color: theme.palette.mode === "light" ? "#10131C" : theme.palette.primary,
    fontWeight: 500,
    fontSize: "18px",
    mb: "7px",
  }),
  progressCount: {
    position: "absolute",
    top: "0px",
    left: "30%",
    fontSize: "12px",
    fontWeight: 600,
    color: "#fff",
  },
  consent: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#0E918C",
    mt: "15px",
    mb: "15px",
  },
  listItem: (theme: any) => ({
    p: 0,
    color: theme.palette.mode === "light" ? "#000" : theme.palette.primary,
    fontSize: "16px",
    fontWeight: 400,
    mb: "15px",
    textWrap: "noWrap",
    wordBreak: "break-all",
  }),
  customTextField: {
    all: "unset",
    borderBottom: "1px solid",
    margin: "0px 5px",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#F6830F",
    mt: "30px",
    "&:hover": { backgroundColor: "#F6830F" },
  },
};
