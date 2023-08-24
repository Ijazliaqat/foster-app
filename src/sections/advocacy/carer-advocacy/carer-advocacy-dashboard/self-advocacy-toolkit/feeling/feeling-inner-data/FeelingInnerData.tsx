import React from "react";
import { Box, ListItemAvatar, Typography } from "@mui/material";

interface PropsType {
  backgroundColor: string;
  feelingsArr: any;
  fontWeight?: string | number;
}

const FeelingInnerData = (props: PropsType) => {
  const { backgroundColor, feelingsArr, fontWeight } = props;
  console.log(backgroundColor);

  return (
    <Box>
      <Box sx={styles?.container}>
        <ul style={styles?.listContainer}>
          {feelingsArr.map((data: any, index: number) => (
            <Box key={index}>
              {data?.head && <Typography sx={{ fontSize: "16px", fontWeight: 600, paddingBlock: "25px" }}>{data?.head}</Typography>}
              {data?.title && (
                <li style={{ display: "flex", alignItems: "baseline" }}>
                  <ListItemAvatar sx={styles.listItemAvatar(backgroundColor)} />
                  <Typography sx={{ fontSize: "16px", paddingBlock: "10px", fontWeight }} component="p">
                    {data?.title}
                  </Typography>
                </li>
              )}
              {data.summary && <Typography sx={styles.summary}>{data.summary}</Typography>}
            </Box>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default FeelingInnerData;

// ----------------------------------------------------------------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  listContainer: { width: "100%" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  listItemAvatar: (background: any) => ({
    background: `${background} !important`,
    width: "12px",
    height: "12px",
    borderRadius: 1,
  }),
  summary: {
    fontSize: "16px !important",
    fontWeight: 600,
    paddingInline: "35px",
    paddingBlock: "20px",
  },
};
