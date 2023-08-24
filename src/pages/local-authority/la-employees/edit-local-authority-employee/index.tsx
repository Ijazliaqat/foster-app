import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import { AddLocalAuthorityEmployee } from "@root/sections/local-authority/la-employee-directory/add-local-authority-employee";

const PAGE_TILE = "Edit Local Authority Employee";

const dynamicTitle = (pageTitle: any) => {
    console.log("pageTitle", pageTitle);
};

EditLocalAuthorityEmployee.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Local Authority",
                    href: "/local-authority/la-employee",
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

export default function EditLocalAuthorityEmployee() {
    return (
        <Page title={PAGE_TILE}>
            <Card sx={{ p: 2 }}>
                <AddLocalAuthorityEmployee />
            </Card>
        </Page>
    );
}
