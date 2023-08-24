import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page'; 
import PanelChecklist from '@root/sections/panel/panel-tools/panel-checklist/Panel-checklist';

const PAGE_TILE = "View Panel Dashboard";

Checklist.getLayout = function getLayout(page: any) {
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

export default function Checklist() {
    return (
        <Page title={PAGE_TILE}>
            <PanelChecklist />
        </Page>
    );
}