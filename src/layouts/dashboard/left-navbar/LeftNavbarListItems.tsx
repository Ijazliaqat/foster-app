import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import List from "@mui/material/List";
import { NAV_LINKS } from "./LeftNavBarData";
import { useRouter } from "next/router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
const LeftNavbarListItems = (props: any) => {
  const { open, pathname, expandcollapse, ...text } = props;
  const theme: any = useTheme();
  return (
    <ListItem
      sx={{
        padding: open ? "2px" : "5px",
        px: 1,
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          width: "100%",
        }}
        href={text.link}
      >
        <ListItemButton
          sx={{
            padding: "6px 22px",
            justifyContent: open ? "initial" : "center",
            px: 2.1,
            py: 1,
            borderRadius: "6px",
            backgroundColor:
              pathname === text.link ? theme.palette.grey[900] : "",
            "&:hover": {
              bgcolor: pathname === text.link ? theme.palette.grey[900] : "",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
              color: theme.palette.grey[400],
            }}
          >
            {text.img}
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={text.text}
            sx={{
              opacity: open ? 1 : 0,
              color: theme.palette.grey[400],
              fontSize: "14px",
            }}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default LeftNavbarListItems;
