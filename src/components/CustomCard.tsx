import * as React from "react";
import Card from "@mui/material/Card";
import { Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import CardHeader from "@mui/material/CardHeader";

const CustomCard = ({
  title,
  children,
  titleTypographyProps,
  divider,
}: any) => {
  const theme: any = useTheme();
  return (
    <Card
      sx={{
        boxShadow: theme.shadows[5],
        color: theme.palette.primary.main,
        p: 1.5,
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={titleTypographyProps}
        sx={{ p: 0, fontSize: "14px", fontWeight: 600 }}
      />
      {divider && (
        <Divider
          sx={{
            mt: 0.5,
            backgroundColor: theme.palette.primary.main,
            opacity: 0.31,
          }}
        />
      )}
      {children}
    </Card>
  );
};

export default CustomCard;
