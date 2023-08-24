import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Dashboard from "@root/sections/de-registration/dashboard/Dashboard";

const PAGE_TILE = "De-Registration";

DeregistrationDashboard.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    // href: "/dashboard",
                },
                {
                    name: "Dashboard",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function DeregistrationDashboard() {
    return (
        <Page title={PAGE_TILE}>
            <Dashboard />
        </Page>
    );
}
