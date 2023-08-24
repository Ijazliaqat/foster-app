import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import ConsiderationList from "@root/sections/matching-and-placement/matching/recommondation-results/compare-match/consideration-list/ConsiderationList";
const PAGE_TILE = "Recommendation Results";

ConsiderationListPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "IFA",
                    href: "/",
                },
                {
                    name: "Matching",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ConsiderationListPage() {
    return (
        <Page title={PAGE_TILE}>
            <ConsiderationList />
        </Page>
    );
}

