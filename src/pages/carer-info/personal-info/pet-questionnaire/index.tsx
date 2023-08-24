import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import PetQuestionnaireTable from "@root/sections/carer-info/personal-info/pet-questionnaire/PetQuestionnaireTable";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Pet Questionnaire";

PetQuestionnaire.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
export default function PetQuestionnaire() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Pet Questionnaire List",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <PetQuestionnaireTable />
    </Page>
  );
}
