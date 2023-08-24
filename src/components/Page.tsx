import { forwardRef } from "react";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: any, ref) => {
    return (
      <>
        <Head>
          <title>{`${title} | Foster-Carer`}</title>
          {meta}
        </Head>

        <Box ref={ref} sx={styles.backgroundStyles} {...other}>
          {children}
        </Box>
      </>
    );
  }
);

Page.displayName = "Page";

export default Page;

// ----------------------------------------------------------------------
// Styles
const styles = {
  backgroundStyles: (theme: any) => ({
    backgroundColor: theme.palette.background.default,
  }),
};
