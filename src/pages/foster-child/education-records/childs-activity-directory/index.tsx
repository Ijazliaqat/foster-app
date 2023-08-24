import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, Grid, Paper } from "@mui/material";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";
import backGround from "../../../../assets/img/background.png";
import { FormProvider, RHFSelect } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import ChildActivityDirectory from "@root/sections/foster-child/education-records/childs-activity-directory/ChildActivityDirectory";
ChildsActivityDirectory.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ChildsActivityDirectory() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child’s Activity Directory",
      href: "/carer-info",
    },
    {
      name: "child Info",
      href: {
        pathname: "/foster-child",
        query: { fosterChildId: fosterChildId },
      },
    },
  ];
  const PAGE_TITLE = "Child’s Activity Directory";
  const methods: any = useForm({
    // mode: "onTouched",

    defaultValues: {
      location: "",
      childAge: "",
      childInterest: "",
    },
  });
  const {
    trigger,
    setValue,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = methods;
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{
          mb: 2,
        }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <Box
        sx={(theme) => ({
          background: `url(${backGround.src})`,
          minHeight: { xs: "unset", sm: 250 },
          backgroundRepeat: "no-repeat",
          borderRadius: theme.spacing(0.5),
          backgroundSize: "cover",
          px: theme.spacing(2),
          py: theme.spacing(1),
          mt: { xs: 2, sm: 0 },
        })}
      >
        <Box
          sx={{
            mt: { xs: 0, sm: 19 },
          }}
        >
          <FormProvider methods={methods} onSubmit={handleSubmit()}>
            <Grid
              gap={0.5}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              container
            >
              <Grid xs={12} sm={2.5} item>
                <Paper variant="elevation" elevation={1}>
                  <RHFSelect
                    name={"location"}
                    label={"Location / Postcode"}
                    fullWidth={true}
                    size={"small"}
                  />
                </Paper>
              </Grid>
              <Grid xs={12} sm={2.5} item>
                <Paper variant="elevation" elevation={1}>
                  <RHFSelect
                    name={"location"}
                    label={"Child’s Age"}
                    fullWidth={true}
                    size={"small"}
                  />
                </Paper>
              </Grid>
              <Grid xs={12} sm={2.5} item>
                <Paper variant="elevation" elevation={1}>
                  <RHFSelect
                    name={"location"}
                    label={"Child’s Interest"}
                    fullWidth={true}
                    size={"small"}
                  />
                </Paper>
              </Grid>
              <Grid xs={12} sm={1} item>
                <Button variant="contained">Search</Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Box>
      </Box>
      <ChildActivityDirectory />
    </Box>
  );
}
