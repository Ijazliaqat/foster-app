import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NAVITEMS } from "./index";
import Link from "next/link";
import Logo from "@root/components/Logo";
import { useTheme } from "@mui/material";
import { createGradient } from "@root/theme/palette";

const drawerWidth = 240;

export default function TopNavbar() {
  const theme: any = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  /* Drawer For Mobile View */
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box sx={{ py: 1.5, textAlign: "start" }}>
        <Logo {...styles.mobLogo} />
      </Box>
      <Divider />
      <List>
        {NAVITEMS.map((item: any) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Link href={item.link} style={styles.linkStyle}>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={styles.listItems}>
                      {item.title}
                    </Typography>
                  }
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Link href="#" style={styles.mobContactButton}>
          <Typography variant="subtitle2" sx={styles.contactButton}>
            Contact Us
          </Typography>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          py: 1,
          background: theme.palette.grey[0],
          position: "sticky",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon sx={{ color: theme.palette.grey[700] }} />
          </IconButton>
          <Box sx={styles.mainWrapper}>
            <div>
              <Logo {...styles.logo} />
            </div>
            <div>
              {NAVITEMS.map((item: any, index: any) => (
                <Link
                  href={item.link}
                  key={item.id}
                  style={{
                    textDecoration: "none",
                    marginRight: index !== item.length - 1 ? "20px" : "0",
                  }}
                >
                  <Button sx={styles.listItems}>{item.title}</Button>
                </Link>
              ))}
            </div>
            <div>
              <Link href="" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle2" sx={styles.contactButton}>
                  Contact Us
                </Typography>
              </Link>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={styles.mobileDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

/* Styling is Here */

const styles: any = {
  logo: {
    iconHeight: 40,
    iconWidth: 250,
    variant: "theme",
    margin: { md: "10px 0", lg: 0 },
  },
  mainWrapper: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: { xs: "row", md: "column", lg: "row" },
  },
  listItems: (theme: any) => ({
    color: theme.palette.grey[700],
    fontWeight: 500,
    fontSize: "15px",
    "&:hover": {
      backgroundColor: theme.palette.grey[0],
      color: theme.palette.primary.main,
    },
  }),
  contactButton: (theme: any) => ({
    fontWeight: 500,
    color: theme.palette.grey[0],
    background: createGradient(
      theme.palette.primary.dark,
      theme.palette.primary.light
    ),
    padding: "10px 30px",
    borderRadius: "4px",
    margin: { md: "10px 0 0 0", lg: 0 },
  }),
  mobileDrawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
  linkStyle: {
    textDecoration: "none",
  },
  mobContactButton: {
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
    justifyContent: "start",
    marginLeft: "15px",
  },
  mobLogo: {
    iconHeight: 35,
    iconWidth: 180,
    variant: "theme",
  },
};
