import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import IfaParticipationPolicyChildList from "@root/sections/foster-child/other-information/ifa-participation-policy-child/ifa-participation-policy-child-list/IfaParticipationPolicyChildList";
import NewIfaParticipationPolicyChild from "@root/sections/foster-child/other-information/ifa-participation-policy-child/new-ifa-participation-policy-child/NewIfaParticipationPolicyChild";

const PAGE_TITLE = "IFA Participation Policy for Child";

NewIfaParticationChild.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "IFA Participation Policy List",
          href: "",
        },
        {
          name: "IFA Participation Policy for Child",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function NewIfaParticationChild() {
  return (
    <Page title={PAGE_TITLE}>
      <NewIfaParticipationPolicyChild />
    </Page>
  );
}
