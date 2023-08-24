import React from "react";
import { Box, ListItemAvatar, Typography, useTheme } from "@mui/material";

interface PropsType {
    backgroundColor: string;
    safeguadingList: any;
}

const IndependentSafeguardingLegation = (props: PropsType) => {
    const { backgroundColor, safeguadingList } = props;
    return (
        <Box>
            <Box sx={styles?.container}>
                <ul style={styles?.listContainer}>
                    {safeguadingList.map((data: any, index: number) => (
                        <Box key={index}>
                            {data?.head && data.id === "1" && (
                                <Typography sx={{ fontSize: "14px", fontWeight: 600, paddingBottom: "10px" }}>{data?.head}</Typography>
                            )}
                            <li style={{ display: "flex", alignItems: "baseline" }}>
                                <ListItemAvatar sx={styles?.listItemAvatar(backgroundColor)} />
                                <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }} component="p">
                                    {data?.title}
                                </Typography>
                            </li>
                            {data?.list && (
                                <ol style={{ marginLeft: "3rem", listStyleType: "lower-alpha" }}>
                                    {data?.list.map((listItem: any, listIndex: number) => (
                                        <li key={listIndex}>
                                            <Typography sx={{ fontSize: "14px", paddingBlock: "3px" }} component="p">
                                                {listItem.title}
                                            </Typography>
                                            {listItem.subList && (
                                                <ul>
                                                    {listItem.subList?.map((subItem: any, subListIndex: number) => (
                                                        <li key={subListIndex} style={{ display: "flex", alignItems: "baseline" }}>
                                                            {subListIndex !== 2 && <ListItemAvatar sx={styles?.sublistItemAvatar(backgroundColor)} />}
                                                            <Typography sx={{ fontSize: "14px", paddingBlock: "3px" }} component="p">
                                                                {subItem.title}
                                                            </Typography>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </Box>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default IndependentSafeguardingLegation;

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
};
