import { forwardRef } from "react";
import NextLink from "next/link";
// @mui
import { Box } from "@mui/material";
// assets
import { Logo } from "@root/assets/svg";

// ----------------------------------------------------------------------

const AppLogo = forwardRef(
  (
    {
      disabledLink = false,
      variant = "black",
      onlyIcon = false,
      sx,
      ...other
    }: any,
    ref
  ) => {
    const logo = (
      <Box ref={ref} sx={{ cursor: "pointer", position: "relative", ...sx }}>
        <Logo {...other} variant={variant} />
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <NextLink href="/">{logo}</NextLink>;
  }
);

AppLogo.displayName = "AppLogo";

export default AppLogo;
