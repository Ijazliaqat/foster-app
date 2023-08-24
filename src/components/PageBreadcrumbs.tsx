// next
import NextLink from "next/link";
// @mui
import {
  Box,
  Typography,
  Breadcrumbs as MUIBreadcrumbs,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";

//  @mui
import { useTheme } from "@emotion/react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------

export const TitleWithBreadcrumbLinks = ({
  title = "Page Title",
  ...other
}: any) => {
  const {
    hideBreadcrumbs = false,
    hidePageTitle = false,
    breadcrumbs: links = [],
    sx = {},
    activeLast = false,
  } = other;

  return (
    <Stack direction="row" alignItems="center" {...sx}>
      {!hidePageTitle && (
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      )}
      {!hidePageTitle && !hideBreadcrumbs && <Box sx={styles.separator} />}
      {!hideBreadcrumbs && (
        <Breadcrumbs links={links} activeLast={activeLast} />
      )}
    </Stack>
  );
};
// ----------------------------------------------------------------------

export const TitleWithBreadcrumbs = ({
  title = "Page Title",
  ...other
}: any) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Box sx={styles.separator} />
      <PageBreadcrumbs {...other} />
    </Stack>
  );
};

// ----------------------------------------------------------------------

export default function PageBreadcrumbs({ activeLast = false, ...other }: any) {
  const router = useRouter();
  const paths = router.pathname.split("/").slice(1);
  const pathsWithLinks: any = [];

  let runningPath = "";
  paths.forEach((path, index) => {
    runningPath += `/${path}`;
    pathsWithLinks[index] = { href: runningPath, name: path };
  });

  pathsWithLinks[0].icon = <HomeIcon />;

  const currentLink = pathsWithLinks[pathsWithLinks.length - 1].name;

  const listDefault = pathsWithLinks.map((link: any) => (
    <LinkItem key={link.name} link={link} />
  ));

  const listActiveLast = pathsWithLinks.map((link: any) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography variant="body2" sx={styles.inActiveLink}>
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs {...other}>
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------
export function Breadcrumbs({ links, activeLast = false, ...other }: any) {
  const currentLink = links[links.length - 1].name;
  const listDefault = links.map((link: any) => (
    <LinkItem key={link.name} link={link} />
  ));

  const listActiveLast = links.map((link: any) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography variant="body2" sx={styles.inActiveLink}>
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs {...other}>
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------

function LinkItem({ link }: any) {
  const { href = "", name, icon } = link;
  const theme = useTheme();
  return (
    <NextLink style={styles.link(theme)} href={href} passHref>
      {icon && <Box sx={styles.breadcrumbIcon}>{icon}</Box>}
      <Typography key={name} variant="body2" sx={styles.activeLink}>
        {name}
      </Typography>
    </NextLink>
  );
}

// ----------------------------------------------------------------------
// Styles
const styles = {
  separator: (theme: any) => ({
    mx: theme.spacing(1),
    width: "1px",
    height: "1.32rem",
    background: theme.palette.text.primary,
  }),
  inActiveLink: {
    maxWidth: 260,
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "text.disabled",
    textOverflow: "ellipsis",
    textTransform: "capitalize",
  },
  link: (theme: any) => ({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    lineHeight: 2,
    color: theme.palette.text.primary,
  }),
  activeLink: {
    lineHeight: 2,
    display: "flex",
    alignItems: "center",
    color: "text.primary",
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  breadcrumbIcon: {
    display: "flex",
    mr: 1,
    "& svg": {
      width: 20,
      height: 20,
    },
  },
};
