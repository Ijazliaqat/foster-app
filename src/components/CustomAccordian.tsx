import * as React from "react";
import TableAction from "./TableAction";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar, Box, alpha, useTheme, Stack } from "@mui/material";

interface CUSTOMACCORDIAN {
  handleRowDelete?: any;
  handleTitleEdit?: any;
  showBtn?: any;
  addIcon?: any;
  handleAdd?: any;
  subTitle?: any;
  data: any;
  className?: any;
  firstAccStyle?: any;
  addShowBtn?: any;
  handleRowAdd?: any;
}
const CustomAccordian = (props: CUSTOMACCORDIAN) => {
  const {
    handleRowDelete,
    handleTitleEdit,
    addShowBtn,
    handleRowAdd,
    showBtn,
    addIcon,
    handleAdd,
    subTitle,
    data,
    className,
    firstAccStyle,
    ...rest
  } = props;
  const [accordianExpanded, setAccordianExpanded] = React.useState<
    null | number
  >();
  const [cancelDelete, setCancelDelete] = React.useState(false);
  const theme: any = useTheme();

  const handleAccordionChange = (index: any) => {
    if (accordianExpanded === index) {
      setAccordianExpanded(null);
    } else {
      setAccordianExpanded(index);
    }
  };

  return (
    <>
      {data?.map((item: any, index: any) => (
        <Accordion
          key={item.title}
          disableGutters
          sx={{
            marginTop: firstAccStyle && index === 0 ? "0px" : "20px",
            borderRadius: "5px",
            "&:not(:last-child)": {
              borderBottom: 0,
            },
            "&:before": {
              display: "none",
            },
          }}
          expanded={accordianExpanded === index}
          onChange={() => handleAccordionChange(index)}
        >
          <AccordionSummary
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[700]
                  : alpha(theme.palette.primary.main, 0.12),
              borderRadius: "5px",
            }}
            className="summary-Icon"
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
            expandIcon={
              <Avatar
                sx={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                {accordianExpanded ? (
                  <ArrowDropUpIcon sx={{ color: theme.palette.grey[0] }} />
                ) : (
                  <ArrowDropDownIcon sx={{ color: theme.palette.grey[0] }} />
                )}
              </Avatar>
            }
          >
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
              flexWrap={"wrap"}
            >
              <Typography
                variant="subtitle1"
                className="title"
                sx={{
                  padding: "5px 10px",
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[500]
                      : theme.palette.grey[700],
                }}
              >
                {item.title}
              </Typography>
              {showBtn && (
                <Stack direction="row" spacing={1}>
                  <TableAction
                    size="small"
                    type="edit"
                    onClicked={(event: any) => {
                      event.stopPropagation();
                      event.nativeEvent.preventDefault();
                      handleTitleEdit(item);
                    }}
                  />
                  <TableAction
                    size="small"
                    type="delete"
                    onClicked={(event: any) => {
                      event.stopPropagation();
                      event.nativeEvent.preventDefault();
                      handleRowDelete(item);
                    }}
                  />
                </Stack>
              )}
              {addShowBtn && accordianExpanded === index && (
                <TableAction
                  size="small"
                  type="add"
                  onClicked={(event: any) => {
                    event.stopPropagation();
                    event.nativeEvent.preventDefault();
                    handleRowAdd(item);
                  }}
                />
              )}

              {subTitle && (
                <Typography
                  variant="subtitle2"
                  className="title"
                  sx={{ pr: "5px" }}
                >
                  {item?.lectures?.length} lectuers - {item?.minutes} min
                </Typography>
              )}
              {addIcon && accordianExpanded === index && (
                <TableAction
                  size="small"
                  type="add"
                  onClick={() => handleAdd(item.title)}
                />
              )}
              {item.countValue && (
                <Box
                  sx={{
                    marginRight: 1,
                    bgcolor: theme.palette.primary.main,
                    width:"30px",
                    height:"30px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems: "center",
                    color:'#fff',
                    borderRadius: "50%",
                    textAlign:'center'
                  }}
                >
                  {item.countValue}
                </Box>
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>{item.component}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CustomAccordian;
