import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import PanelSetup from '@root/sections/panel/panel-tools/setup/setup';

const PAGE_TILE = "View Panel Dashboard";

Setup.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel",
                    href: "/panel",
                },
                {
                    name: "Panel Dashboard",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function Setup() {
    return (
        <Page title={PAGE_TILE}>
            <PanelSetup />
        </Page>
    );
}
