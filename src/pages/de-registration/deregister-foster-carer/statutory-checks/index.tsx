import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import StatutoryChecksList from '@root/sections/carer-info/background-checks/statutory-checks-list/StatutoryChecksList';


const PAGE_TITLE = "De-Registration";

StatutoryChecksPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "De-reg Assessment Stage 2",
                    href: "/de-registration/deregister-foster-carer",
                },
                {
                    name: "Statutory Checks",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function StatutoryChecksPage() {
    return (
        <Page title={PAGE_TITLE}>
            <StatutoryChecksList />
        </Page>
    );
}