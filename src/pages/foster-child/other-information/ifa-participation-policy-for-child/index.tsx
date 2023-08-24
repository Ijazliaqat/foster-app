import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import IfaParticipationPolicyChildList from "@root/sections/foster-child/other-information/ifa-participation-policy-child/ifa-participation-policy-child-list/IfaParticipationPolicyChildList";

const PAGE_TITLE = "IFA Participation Policy for Child";

IfaParticationChild.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Info",
          href: "/child-info",
        },
        {
          name: "IFA Participation Policy List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function IfaParticationChild() {
  return (
    <Page title={PAGE_TITLE}>
      <IfaParticipationPolicyChildList />
    </Page>
  );
}
