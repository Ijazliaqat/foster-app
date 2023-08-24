import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page'; 
import EditPanelChecklist from '@root/sections/panel/panel-tools/panel-checklist/edit-panel-checklist/EditPanelChecklist';

const PAGE_TILE = "Edit Panel Checklist";

EditPanelChecklistPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel",
                    href: "/",
                },
                {
                    name: "Panel Checklist",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function EditPanelChecklistPage() {
    return (
        <Page title={PAGE_TILE}>
            <EditPanelChecklist />
        </Page>
    );
}