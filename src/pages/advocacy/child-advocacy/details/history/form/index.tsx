import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AdvocacyHistoryFormWrapper from '@root/sections/advocacy/child-advocacy/child-details/AdvocacyHistory/AdvocacyHistoryFormWrapper/AdvocacyHistoryFormWrapper';

const PAGE_TITLE = "Advocacy History Form";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Advocacy History",
                    href: "/advocacy/child-advocacy/details/history",
                },
                {
                    name: "Advocacy Form",
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
            <AdvocacyHistoryFormWrapper />
        </Page>
    );
}