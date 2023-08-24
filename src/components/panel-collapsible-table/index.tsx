import {
  Box,
  Collapse,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import TableAction from "@root/components/TableAction";
import Link from "next/link";

const PanelCollapsibleTable = (props: any) => {
  const {
    handleAction = () => {},
    columns = [],
    tableData = [],
    requireAction = true,
    bordered = true,
    actionArray = ["edit", "delete", "view"],
  } = props;
  const [open, setOpen] = React.useState({ isOpen: false, id: "" });

  const isMatch = (id: any) => {
    return open.isOpen && id === open.id ? open.isOpen : false;
  };

  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ boxShadow: "none !important" }}></TableCell>
            {columns.map((head: any, i: number) => (
              <TableCell key={i}>{head.title}</TableCell>
            ))}
            {requireAction && (
              <TableCell sx={{ boxShadow: "none !important" }}>
                Actions
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row: any, i: number) => (
            <React.Fragment key={i}>
              <TableRow
                sx={{
                  "&:hover": { background: "#E9E9E9" },
                  borderTop: bordered ? "1px solid #DBDBDB" : " ",
                  backgroundColor: isMatch(row?._id) ? "#E9E9E9" : "",
                }}
              >
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() =>
                      setOpen({ isOpen: !open.isOpen, id: row?._id })
                    }
                  >
                    <ArrowDropDownCircleIcon
                      sx={{
                        transform: isMatch(row?._id)
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </IconButton>
                </TableCell>
                {columns.map((col: any, i: number) => (
                  <TableCell sx={{ textTransform: "capitalize" }} key={i}>
                    {col.render(row)}
                  </TableCell>
                ))}
                {requireAction && (
                  <TableCell sx={{ display: "flex", gap: 1 }}>
                    {actionArray?.map((action: string) => (
                      <TableAction
                        key={action}
                        type={action}
                        onClicked={() => handleAction(action, row)}
                      />
                    ))}
                  </TableCell>
                )}
              </TableRow>
              {isMatch(row?._id) && (
                <TableRow
                  sx={{ backgroundColor: isMatch(row?._id) ? "#E9E9E9" : "" }}
                >
                  <TableCell colSpan={12}>
                    <Collapse
                      in={isMatch(row?._id)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Container maxWidth="lg" sx={{ p: "0 !important" }}>
                        <Box display={"flex"} flexWrap={"wrap"} gap={3}>
                          {row?.subData?.map((sub: any, j: number) => (
                            <Box
                              key={j}
                              width={200}
                              height={50}
                              display={"flex"}
                              alignItems={"center"}
                              sx={styles.linkWrapper}
                            >
                              <Link href={sub?.href} style={styles.link}>
                                {sub?.title}
                              </Link>
                            </Box>
                          ))}
                        </Box>
                      </Container>
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PanelCollapsibleTable;

const styles = {
  linkWrapper: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    padding: "5px 15px",
    "&:hover": {
      boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.3)",
    },
  },
  link: {
    border: "none",
    fontSize: "14px",
    fontWeight: 600,
    color: "#2CB764",
    textDecoration: "none",
    lineHeight: "20px",
  },
};
