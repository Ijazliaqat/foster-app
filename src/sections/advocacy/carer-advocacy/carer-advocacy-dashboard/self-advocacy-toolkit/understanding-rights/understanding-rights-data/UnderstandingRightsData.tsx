import React from "react";
import { Box, ListItemAvatar, Typography } from "@mui/material";

interface PropsType {
  backgroundColor: string;
  understandingRights: any;
}

const TabsData = (props: PropsType) => {
  const { backgroundColor, understandingRights } = props;
  return (
    <Box>
      <Box sx={styles?.container}>
        <ul style={styles?.listContainer}>
          {understandingRights.map((data: any, index: number) => (
            <Box key={index}>
              {data?.head && data.id === "1" && (
                <Typography sx={{ fontSize: "16px", fontWeight: 600, paddingBlock: "25px"}}>{data?.head}</Typography>
              )}
              {data?.title && (
                <li style={{ display: "flex", alignItems: "baseline" }}>
                  <ListItemAvatar sx={styles?.listItemAvatar(backgroundColor)} />
                  <Typography sx={{ fontSize: "16px", fontWeight: 600, paddingBlock: "10px" }} component="p">
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

export default TabsData;

// ----------------------------------------------------------------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  listContainer: { width: "100%" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  listItemAvatar: (background: any) => ({
    background: background,
    width: "12px",
    height: "12px",
    borderRadius: 1,
  }),
  summary: {
    fontSize: "16px !important",
    fontWeight: 400,
    paddingInline: "35px",
    paddingBlock: "20px",
  },
};
