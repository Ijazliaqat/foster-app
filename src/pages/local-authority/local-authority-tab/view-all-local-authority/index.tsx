import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import ViewAllLocalAuthority from "@root/sections/local-authority/view-all-local-authority/ViewAllLocalAuthority";

const PAGE_TILE = "Local Authority List";

const dynamicTitle = (pageTitle: any) => {
    console.log("pageTitle", pageTitle);
};

ViewAllAuthority.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    href: "/local-authority",
                },
                {
                    name: "Local Authority",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ViewAllAuthority() {
    return (
        <Page title={PAGE_TILE}>
            <ViewAllLocalAuthority />
        </Page>
    );
}
