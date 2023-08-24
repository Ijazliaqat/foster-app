import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HandbookPoliciesTabs from "@root/sections/policies-and-guidelines/handbooks-policies/handbooks-policies-tabs/HandbookPoliciesTabs";

const PAGE_TILE = "Policies and Guidelines";

HandbookPoliciesAdd.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "IFA",
                    href: "/policies-and-guidelines/handbooks",
                },
                {
                    name: "Handbooks",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function HandbookPoliciesAdd() {
    return (
        <Page title={PAGE_TILE}>
            <HandbookPoliciesTabs />
        </Page>
    );
}

