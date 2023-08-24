import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { FormFDataArray } from "@root/sections/carer-info/personal-info/form-f/FormFDataArray";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants

const PAGE_TITLE = "Form F";

// ----------------------------------------------------------------------

FormF.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function FormF() {
  const theme: any = useTheme();
  const { makePath } = usePath();
  const router = useRouter();
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Form F List",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <Card sx={styles.tabPanelContainer(theme)}>
        <Typography
          variant="h5"
          component="div"
          color={"#ffffff"}
          sx={styles.tabPanelHeader}
        >
          Form F
        </Typography>
        <Box overflow={"auto"} px={2}>
          {FormFDataArray?.map((item) => (
            <List key={item?.id}>
              <Link
                href={makePath({
                  path: item?.link,
                })}
                style={{ textDecoration: "none", display: "block" }}
              >
                <ListItem
                  sx={{
                    ":hover": {
                      background:
                        theme.palette.mode === "light"
                          ? theme.palette.grey[300]
                          : theme.palette.grey[900],
                      borderRadius: 1,
                    },
                  }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      sx={{
                        "&:hover": { background: "transparent !important" },
                      }}
                    >
                      <RemoveRedEyeIcon
                        sx={{
                          color: theme.palette.primary.contrastText,
                          background: theme.palette.primary.main,
                          width: 30,
                          height: 30,
                          padding: "3px",
                          borderRadius: "50%",
                        }}
                      />
                    </IconButton>
                  }
                >
                  <ListItemAvatar
                    sx={{
                      background:
                        "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
                      width: "12px",
                      height: "12px",
                      borderRadius: 1,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color={theme.palette.grey[600]}
                  >
                    {item?.title}
                  </Typography>
                </ListItem>
              </Link>
            </List>
          ))}
        </Box>
      </Card>
    </Page>
  );
}

// ----------------------------------------------------------------------
// Styles
const styles = {
  tabPanelContainer: (theme: any) => ({
    borderRadius: 3,
    boxShadow: theme.shadows[10],
  }),

  tabPanelHeader: {
    background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    py: 1,
    pl: 3,
  },
};
