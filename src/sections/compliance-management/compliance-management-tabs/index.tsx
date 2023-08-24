import { ButtonProps, styled, Button, Box, Typography,useTheme } from "@mui/material";
import Image from "next/image";


export interface VerticalTabsProps {
  tabsData: any;
}
export interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}
export interface CustomButtonProps extends ButtonProps {
  hoverBackgroundColor: string;
  hoverColor: string;
  isSelected: boolean,
  selectedTabColor: string;

}


export const StyledLeftTab = styled(({ hoverBackgroundColor, hoverColor, isSelected, selectedTabColor, ...rest }: CustomButtonProps) => (
  <Button {...rest} />
))(({ hoverBackgroundColor, hoverColor, isSelected, selectedTabColor }) => ({

  // filter: isSelected ? 'brightness(0) invert(1)' : selectedTabColor,
  ':hover': {
    backgroundColor: hoverBackgroundColor,
    color: hoverColor,

    '& img': {
      filter: ' brightness(0) invert(1);', // Set the background color of the image to white on hover
    },
    'Typography': {
      color: '#fff !important'
    }
  },

  backgroundColor: isSelected ? selectedTabColor : 'inherit',
  '& img': {
    filter: isSelected ? 'brightness(0) invert(1)' : selectedTabColor,
  },
  marginBottom: "15px !important",
  borderRadius: "10px",
  width: "120px !important",
  height: "120px !important",
  boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
  cursor: 'pointer',
}));


export const StyledImage = styled(Image)`
  transition: filter 0.3s;
  &:hover {
    // filter: brightness(0) invert(1);
  }
`;
export const StyledBox = styled(Box)`
  transition: filter 0.3s;
  &:hover {
    // filter: brightness(0) invert(1);
  }
`;

export const StyledTypography = styled(Typography)(({ color }: any) => ({
  color: color,
  "& hover" :{
   color:'#fff !important'
  }
}));
export const styles = {
  
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter, 
    width:'auto'
  }),

  tabIndicator: (theme: any) => ({
    // sx: { background: theme.palette.primary.main },
  }),


  tabLabel: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 3,
    padding: "12px",
    gap: "15px",
  },

  innerTabs: (theme: any) => ({
    // background: theme.palette.primary.main,
    // background: '#fff',
    mb: "15px",
    borderRadius: "10px",
    width: "120px !important",
    height: "120px !important",
    boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',


  }),
  GridWrapper: {
    p: "3px",
    m: "0",
  },
  tabsIcon: {
    width: "52px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  tabsTitle: {
    fontSize: "12px !important",
    lineHeight: "14.4px !important",
    fontWeight: 600,
    letterSpacing: '0.005em',
    textAlign: 'center !important'
  },
  // addMoreButton: {
  //   borderRadius: "10px",
  //   width: "120px !important",
  //   height: "120px !important",
  //   boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
  //   cursor: 'pointer',
  // },
  addMoreButton: (theme: any) => ({
    backgroundColor:'#fff !important',
    borderRadius: "10px",
    width: "120px !important",
    height: "120px !important",
    boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
    cursor: 'pointer',
    color: '#F6830F',
    "&:hover": {  backgroundColor:'#F6830F !important',color:'#fff' },
}),
addMoreIcon: (theme: any) => ({
  backgroundColor:'#F6830F !important',
  width: "50px !important",
  height: "50px !important",
  borderRadius:'50%',
  color: '#fff',
  "&:hover": {  backgroundColor:'#fff !important',color:'#F6830F' },
}),
addMoreIconTop: (theme: any) => ({
  backgroundColor:'#F6830F !important',
  width: "23px !important",
  height: "23px !important",
  borderRadius:'50%',
  color: '#fff',
  cursor: 'pointer',
  display:'flex !important',
  justifyContent:'space-between !important',
  alignItems:'center !important',
}),
tabsWrap: {
  display:'flex !important',
  justifyContent:'space-between !important',
  alignItems:'center !important',
},
};
