import React, { Fragment } from "react";
import {
  Box,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
// layout
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
import VericalTabs from "@root/components/VericalTabs";
// sections
import { TABSDATAARRY } from "@root/sections/carer-info/CarerInfoData";
//  @mui icons
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DoneIcon from "@mui/icons-material/Done";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------
// Constants
const PAGE_TITLE = "Carer Info";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/",
  },
  {
    name: PAGE_TITLE,
    href: "",
  },
];

// ----------------------------------------------------------------------

CarerInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function CarerInfo() {
  const theme: any = useTheme();
  const router: any = useRouter();
  const { fosterCarerId } = router.query;
  const { makePath } = usePath();

  if (!fosterCarerId) {
    router.push("/dashboard");
    enqueueSnackbar("Foster Carer Id Not Provided", { variant: "error" });
  } else {
    return (
      <Page title={PAGE_TITLE}>
        <VericalTabs tabsDataArray={TABSDATAARRY}>
          {TABSDATAARRY?.map((item) => (
            <Fragment key={item?.index}>
              {item?.innerDataArray?.map((innerItem) => (
                <Box key={innerItem?.id} sx={styles?.container}>
                  <List sx={styles?.listContainer}>
                    <NextLink
                      href={makePath({
                        path: innerItem?.link,
                        passOldQuery: true,
                      })}
                      style={styles?.nextLinkContainer}
                    >
                      <ListItem
                        sx={styles?.listItemContainer(theme)}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            sx={styles?.listIconButton(theme)}
                          >
                            P
                            <DoneIcon
                              sx={{ color: "#0E918C", fontSize: "14px" }}
                            />
                            A
                            <FiberManualRecordIcon
                              sx={{ color: "#F6830F", fontSize: "14px" }}
                            />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar
                          sx={styles?.listItemAvatar(item?.background)}
                        />
                        <Typography
                          variant="subtitle1"
                          component="p"
                          color={theme.palette.grey[600]}
                        >
                          {innerItem?.title}
                        </Typography>
                      </ListItem>
                    </NextLink>
                  </List>
                </Box>
              ))}
            </Fragment>
          ))}
        </VericalTabs>
      </Page>
    );
  }
}

// ----------------------------------------------------------------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  listContainer: { width: "100%" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  listItemContainer: (theme: any) => ({
    ":hover": {
      background:
        theme.palette.mode === "light"
          ? theme.palette.grey[300]
          : theme.palette.grey[900],
      borderRadius: 1,
    },
  }),
  listIconButton: (theme: any) => ({
    "&:hover": { background: "transparent !important" },
    color: theme.palette.grey[600],
    fontWeight: 500,
    fontSize: "14px",
  }),
  listItemAvatar: (background: any) => ({
    background: `${background}`,
    width: "12px",
    height: "12px",
    borderRadius: 1,
  }),
};
