import React, { Fragment } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import VericalTabs from "@root/components/VericalTabs";
import { REPORTTABSDATAARRY } from ".";

export default function Reports() {
  const theme: any = useTheme();
  return (
    <VericalTabs
      tabsDataArray={REPORTTABSDATAARRY}
      customStyle={{ maxHeight: 700, overflowY: "auto" }}
    >
      {REPORTTABSDATAARRY?.map((item) => (
        <Fragment key={item?.index}>
          {item?.innerDataArray?.map((innerItem) => (
            <Box key={innerItem?.id} sx={styles?.container}>
              <List sx={styles?.listContainer}>
                <NextLink
                  href={innerItem?.link}
                  style={styles?.nextLinkContainer}
                >
                  <ListItem sx={styles?.listItemContainer(theme)}>
                    <ListItemAvatar
                      sx={styles?.listItemAvatar(item?.background)}
                    />
                    <Typography
                      variant="subtitle1"
                      component="p"
                      color={theme.palette.grey[600]}
                      sx={{ textTransform: "uppercase" }}
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
  );
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
  listItemAvatar: (background: any) => ({
    background: `${background}`,
    width: "12px",
    height: "12px",
    borderRadius: 1,
  }),
};
