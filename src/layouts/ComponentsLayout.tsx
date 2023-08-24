// @mui
import NextLink from "next/link";
import { Box, Link, Stack, styled } from "@mui/material";
import { PATH_PAGE } from "@root/routes/paths";

const LINKS = [
  {
    link: PATH_PAGE.components.root,
    label: "Functional Components",
  },
  {
    link: PATH_PAGE.components.textFields,
    label: "Text Fields",
  },
  {
    link: PATH_PAGE.components.tables,
    label: "Tables",
  },
  {
    link: PATH_PAGE.components.formTables,
    label: "Form Tables",
  },
];

// ----------------------------------------------------------------------
const StyledLink = styled("span")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "6px",
  padding: theme.spacing(0.6, 1),
  display: "block",
  textDecoration: "none",
}));

// ----------------------------------------------------------------------

export default function ComponentsLayout({ children }: any) {
  return (
    <Box sx={{ padding: 6 }}>
      <Stack sx={{ mb: 3 }} direction={{ xs: "column", md: "row" }} gap={2}>
        {LINKS.map(({ link, label }) => (
          <NextLink
            key={link}
            href={link}
            style={{ textDecoration: "none", display: "block" }}
            passHref
          >
            <StyledLink>{label}</StyledLink>
          </NextLink>
        ))}
      </Stack>
      {children}
    </Box>
  );
}
