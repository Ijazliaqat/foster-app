import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Dashboard from "@root/sections/local-authority/dashboard/Dashboard";

const PAGE_TILE = "Local Authority Dashboard";

LocalAuthority.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    // href: "/dashboard",
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

export default function LocalAuthority() {
    return (
        <Page title={PAGE_TILE}>
            <Dashboard />
        </Page>
    );
}
