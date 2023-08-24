import { Box, IconButton, darken } from "@mui/material";

// @mui icons
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";
import DiagreamIcon from "../assets/svg/Referrals/diagram.svg";
import Image from "next/image";
import PrintIcon from "@mui/icons-material/Print";
import { FaShareSquare } from "react-icons/fa";
import MicIcon from '@mui/icons-material/Mic';
// ----------------------------------------------------------------------

const TableAction = ({
  type = "edit",
  onClicked = () => { },
  ...other
}: any) => {
  return (
    <IconButton
      onClick={onClicked}
      sx={(theme) => styles.btnStyle(theme, type)}
      {...other}
      size="small"
    >
      {icons[type]}
    </IconButton>
  );
};

export default TableAction;

// ----------------------------------------------------------------------
// Styles
const styles = {
  btnStyle: (theme: any, type: string) => {
    let backgroundColor = theme.palette.grey[500];

    switch (type) {
      case "add":
        backgroundColor = theme.palette.orange.main;
        break;
      case "delete":
        backgroundColor = theme.palette.error.main;
        break;
      case "view":
        backgroundColor = theme.palette.primary.main;
        break;
      case "download":
        backgroundColor = theme.palette.success.dark;
        break;
      case "refresh":
        backgroundColor = theme.palette.grey[600];
        break;
      // share icon
      case "share":
        backgroundColor = theme.palette.grey[600];
        break;
      case "diagram":
        backgroundColor = theme.palette.orange.main;
        break;
      //  print icon
      case "print":
        backgroundColor = theme.palette.orange.main;
        break;

      // header share icon
      case "headerShare":
        backgroundColor = theme.palette.grey[600];
        break;

      case "recording":
        backgroundColor = "#23183D";
        break;
    }
    return {
      backgroundColor,
      ":hover": {
        backgroundColor: darken(backgroundColor, 0.15),
      },
    };
  },
  iconStyles: (theme: any, iconColor: string) => ({
    color: iconColor,
  }),
};

// ----------------------------------------------------------------------
// Icons Object
const icons: any = {
  edit: (
    <ModeEditIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  add: (
    <AddIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  delete: (
    <DeleteIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  view: (
    <VisibilityIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  download: (
    <DownloadIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  refresh: (
    <RefreshIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  diagram: (
    <Box fontSize="small" sx={(theme) => styles.iconStyles(theme, "#fff")}>
      <Image src={DiagreamIcon} alt="diagramicon" height={25} width={25} />
    </Box>
  ),
  // share icon
  share: (
    <ShareIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  // print icon
  print: (
    <PrintIcon
      fontSize="medium"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  // header share icon
  headerShare: (
    <FaShareSquare
      style={{ color: "#fff", padding: "1px", fontSize: "25px" }}
    />
  ),
  recording: (
    <MicIcon sx={{ fontSize: "19px", color: '#DEBC0A' }} />
  )
};
