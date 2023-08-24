import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import DeregistrationManagement from "@root/sections/de-registration/deregistration-management/DeregistrationManagement";

const PAGE_TILE = "Deregistration Management";

DeregistrationManagements.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    href: "/de-registration",
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

export default function DeregistrationManagements() {
    return (
        <Page title={PAGE_TILE}>
            <DeregistrationManagement />
        </Page>
    );
}
