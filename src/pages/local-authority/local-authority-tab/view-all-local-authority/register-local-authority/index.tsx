import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import RegisterNewLocalAuthority from "@root/sections/local-authority/view-all-local-authority/register-new-local-authority/RegisterNewLocalAuthority";

const PAGE_TILE = "Register new Local Authority";

const dynamicTitle = (pageTitle: any) => {
    console.log("pageTitle", pageTitle);
};

RegisterLocalAuthority.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Dashboard",
                    href: "/local-authority",
                },
                {
                    name: "Register new Local Authority",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function RegisterLocalAuthority() {
    return (
        <Page title={PAGE_TILE}>
            <RegisterNewLocalAuthority />
        </Page>
    );
}
