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
const LeftNavbarCollapse = (props: any) => {
  const theme: any = useTheme();
  const { index, expandedhander, expandcollapse, pathname, expanded, ...text } =
    props;

    return (
    <Box sx={{ px: 1 }}>
      <ListItemButton
        onClick={() => expandedhander(`open${index}`)}
        sx={{
          color: theme.palette.grey[400],
          px: 2.1,
          py: 1,
          borderRadius: "6px",
          bgcolor:
            expanded === `open${index}` 
              ? theme.palette.grey[900]
              : "",
          "&:hover": {
            bgcolor:
              expanded === `open${index}` 
                ? theme.palette.grey[900]
                : "",
          },
        }}
      >
        <ListItemIcon>{text.img}</ListItemIcon>
        <ListItemText
          primary={text.text}
          disableTypography
          sx={{ fontSize: "14px" }}
        />
        {expanded === `open${index}` ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={expanded === `open${index}` ? true : false}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.grey[400],
        }}
      >
        <List component="div" disablePadding>
          {text.sublist?.map((item: any, index: any) => (
            <div key={index}>
              <Link
                style={{
                  textDecoration: "none",
                  width: "100%",
                }}
                href={item.sublistlink}
              >
                <ListItemButton
                  sx={{
                    pl: 7,
                    py: 1,
                    mt: 1,
                    borderRadius: "6px",
                    color: theme.palette.grey[400],
                    backgroundColor:
                      pathname === item.sublistlink
                        ? theme.palette.grey[900]
                        : "",
                  }}
                >
                  <ListItemText
                    disableTypography
                    sx={{ fontSize: "14px" }}
                    primary={item.list}
                  />
                </ListItemButton>
              </Link>
            </div>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default LeftNavbarCollapse;
