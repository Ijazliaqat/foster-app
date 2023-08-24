import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import { ChildDetailsForm } from '@root/sections/matching-and-placement/matching/recommondation-results/child-details';
// import ChildDetailsForm from '@root/sections/recommondation-results/child-details/ChildDetailsForm';

const PAGE_TITLE = "Carer Details";

CarerDetails.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "IFA",
                    href: "/matching-and-placement/matching",
                },
                {
                    name: "Dashboard",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function CarerDetails() {
    return (
        <Page title={PAGE_TITLE}>
            <Box>
                <ChildDetailsForm disabled />
            </Box>

        </Page>
    );
}