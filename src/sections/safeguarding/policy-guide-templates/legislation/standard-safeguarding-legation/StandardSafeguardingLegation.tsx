import React from "react";
import { Box, Grid } from "@mui/material";
import { LegationTableArray } from ".";

const StandardSafeguardingLegation = () => {

    return (
        <Box sx={{ overflowX: "scroll" }}>
            {LegationTableArray?.map((item: any, index: number) => (
                <Box key={index} sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            border: "1px solid",
                            paddingInline: "20px",
                            fontSize: "14px",
                            width: "15rem",
                            paddingTop: "10px",
                            fontWeight: 600,
                            textAlign: "center",
                        }}
                    >
                        {item?.title}
                    </Box>
                    <Box sx={{ border: "1px solid", borderLeft: "none", width: "100%", padding: "10px", fontSize: "14px", fontWeight: 400 }}>
                        {item.description}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default StandardSafeguardingLegation;
