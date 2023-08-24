import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import ViewChildrenList from "@root/sections/local-authority/view-children-list/ViewChildrenList";

const PAGE_TILE = "Children List";

const dynamicTitle = (pageTitle: any) => {
    console.log("pageTitle", pageTitle);
};

ChildrenList.getLayout = function getLayout(page: any) {
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
                    name: "Children list under LA",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ChildrenList() {
    return (
        <Page title={PAGE_TILE}>
            <Card sx={{ p: 2 }}>
                <ViewChildrenList />
            </Card>
        </Page>
    );
}
