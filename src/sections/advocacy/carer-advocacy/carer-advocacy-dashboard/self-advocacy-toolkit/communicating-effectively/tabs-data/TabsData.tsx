import React from "react";
import { Box, ListItemAvatar, Typography } from "@mui/material";

interface PropsType {
  backgroundColor: string;
  communicatingList: any;
  fontWeight?: string | number;
}

const TabsData = (props: PropsType) => {
  const { backgroundColor, communicatingList, fontWeight } = props;
  return (
    <Box>
      <Box sx={styles?.container}>
        <ul style={styles?.listContainer}>
          {communicatingList.map((data: any, index: number) => (
            <Box key={index}>
              {data?.head && <Typography sx={{ fontSize: "14px", fontWeight: 600, paddingBlock: "10px" }}>{data?.head}</Typography>}
              {data?.title && (
                <li style={{ display: "flex", alignItems: "baseline" }}>
                  <ListItemAvatar sx={styles?.listItemAvatar(backgroundColor)} />
                  <Typography sx={{ fontSize: "14px", paddingBlock: "10px", fontWeight }} component="p">
                    {data.subTitle && <span style={styles.subTitle}>{data.subTitle}</span>}
                    {data?.title}
                  </Typography>
                </li>
              )}
              {data.summary && <Typography>{data.summary}</Typography>}
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
  sublistItemAvatar: (background: any) => ({
    background: background,
    width: "10px",
    height: "10px",
    borderRadius: 0.5,
  }),
  subTitle: {
    fontWeight: 600,
  },
};
