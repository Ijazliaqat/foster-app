import { useState } from "react";
import { Box, Card, IconButton, Typography, useTheme } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import Image from "next/image";
import Link from "next/link";

const ExpandableCard = ({ img, title, color, subData }: any) => {
  const theme = useTheme();

  let [expand, setExpand] = useState(false);
  const dataArray = expand
    ? subData
    : title === "Recently Accessed Policy"
    ? subData?.slice(0, 2)
    : subData?.slice(0, 5);
  return (
    <Card sx={{ p: 1.5 }}>
      <Box display="flex" alignItems="center" gap="10px" mb="20px">
        <Image src={img} alt="icon" />
        <Typography color={color} fontWeight="600" fontSize="18px">
          {title}
        </Typography>
      </Box>
      <Box sx={{ maxHeight: expand ? "300px" : "250px", overflowY: "scroll" }}>
        {dataArray.map((card: any, index: number) => (
          <Box key={index}>
            <Typography
              textAlign="center"
              fontSize="16px"
              fontWeight="500"
              color={theme.palette.mode}
              marginY="20px"
            >
              {card.heading}
            </Typography>
            {card.list ? (
              card.list.map((item: any, index: number) => (
                <Box key={index}>
                  <Box display="flex" gap="15px" alignItems="center" mt="15px">
                    <Box style={styles.listBatch(color)}></Box>
                    <Typography
                      color="7A8DA0"
                      fontWeight="500"
                      marginRight="20px"
                    >
                      {item.time}
                    </Typography>
                    <Link href={item.href} style={{ all: "unset" }}>
                      <Typography
                        color={color}
                        fontWeight="500"
                        sx={{ cursor: "pointer" }}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              ))
            ) : (
              <Box display="flex" gap="15px" alignItems="center" mt="15px">
                <Box sx={styles.listBatch(color)}></Box>
                {card.time && (
                  <Typography color="#7A8DA0" fontWeight="500">
                    {card.time}
                  </Typography>
                )}
                {card.title && (
                  <Link href={card.href} style={{ all: "unset" }}>
                    <Typography
                      color={color}
                      fontWeight="500"
                      sx={{ cursor: "pointer" }}
                    >
                      {card.title}
                    </Typography>
                  </Link>
                )}
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        marginTop="10px"
      >
        {((title === "Recently Accessed Policy" && subData?.length > 2) ||
          subData?.length > 5) && (
          <IconButton
            onClick={() => {
              setExpand(!expand);
            }}
            sx={{
              background: "rgba(19,15,38,0.5)",
              color: "white",
              padding: "0",
              "&:hover": { background: "rgba(19,15,38,0.5)" },
            }}
          >
            {expand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </Box>
    </Card>
  );
};

const styles = {
  listBatch: (color: string) => ({
    flexShrink: 0,
    backgroundColor: color,
    height: "15px",
    width: "15px",
    borderRadius: "3px",
  }),
};
export default ExpandableCard;
