import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import { ChildDetailsForm } from '@root/sections/matching-and-placement/matching/recommondation-results/child-details';

const PAGE_TITLE = "Child Details";

ChildDetails.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "IFA",
                    href: "/recommondations-result",
                },
                {
                    name: "Matching",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function ChildDetails() {
    return (
        <Page title={PAGE_TITLE}>
            <Box>
                <ChildDetailsForm disabled />
            </Box>

        </Page>
    );
}