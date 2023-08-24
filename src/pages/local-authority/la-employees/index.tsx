import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import LaEmployeeDirectory from "@root/sections/local-authority/la-employee-directory/LaEmployeeDirectory";

const PAGE_TILE = "Local Authority";

const dynamicTitle = (pageTitle: any) => {
    console.log("pageTitle", pageTitle);
};

LaEmployee.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Local Authority",
                    href: "/local-authority",
                },
                {
                    name: "LA Employee Directory",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function LaEmployee() {
    return (
        <Page title={PAGE_TILE}>
            <Card sx={{ p: 2 }}>
                <LaEmployeeDirectory />
            </Card>
        </Page>
    );
}
