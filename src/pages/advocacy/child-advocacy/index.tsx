import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChildAdvocacy from '@root/sections/advocacy/child-advocacy/ChildAdvocacy';

const PAGE_TITLE = "Child List";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Dashboard",
                    href: "/advocacy",
                },
                {
                    name: "Advocacy",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function AdvocacyPage() {
    return (
        <Page title={PAGE_TITLE}>
            <ChildAdvocacy/>
        </Page>
    );
}