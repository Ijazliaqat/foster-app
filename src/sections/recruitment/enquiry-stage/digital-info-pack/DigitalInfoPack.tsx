import VericalTabs from "@root/components/VericalTabs";
// sections
//  @mui icons
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DoneIcon from "@mui/icons-material/Done";
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
import { Fragment } from "react";
import { digitalInfoPackData } from ".";

const DigitalInfoPack = () => {
  const theme: any = useTheme();
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
  return (
    <VericalTabs tabsDataArray={digitalInfoPackData}>
      {digitalInfoPackData?.map((item) => (
        <Fragment key={item?.index}>
          {item?.innerDataArray?.map((innerItem) => (
            <Box key={innerItem?.id} sx={styles?.container}>
              <List sx={styles?.listContainer}>
                <NextLink
                  href={innerItem?.link}
                  style={styles?.nextLinkContainer}>
                  <ListItem
                    sx={styles?.listItemContainer(theme)}
                    secondaryAction={
                      <IconButton edge="end" sx={styles?.listIconButton(theme)}>
                        P
                        <DoneIcon sx={{ color: "#0E918C", fontSize: "14px" }} />
                        A
                        <FiberManualRecordIcon
                          sx={{ color: "#F6830F", fontSize: "14px" }}
                        />
                      </IconButton>
                    }>
                    <ListItemAvatar
                      sx={styles?.listItemAvatar(item?.background)}
                    />
                    <Typography
                      variant="subtitle1"
                      component="p"
                      color={theme.palette.grey[600]}>
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
};

export default DigitalInfoPack;
