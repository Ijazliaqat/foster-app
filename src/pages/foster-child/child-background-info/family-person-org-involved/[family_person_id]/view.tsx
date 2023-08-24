import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";
import { FamilyPersonDocument } from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-person-document/FamilyPersonDocument";
import { useGetFamilyPersonListByIdQuery } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-background-info/family-person-org-involved?fosterChildId=${query}`,
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "View Family Persons & Org Involved";
// ----------------------------------------------------------------------

ViewFamilyPersonForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewFamilyPersonForm() {
  const { query } = useRouter();
  const router = useRouter();
  console.log(query);

  const familyPersonId = query["family_person_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetFamilyPersonListByIdQuery(familyPersonId);

  console.log("Is loading: ", data);

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
        sx={{ mb: 2 }}
      />
      <HorizaontalTabs tabsDataArray={["Family Org Involved", "Documents"]}>

        {/* Family Person Form */}
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <FamilyOrgInvolvedForm defaultValues={data[0]} disabled />
        )}

        {/* Upload Document */}
        <FamilyPersonDocument />
        
      </HorizaontalTabs>
    </Page>
  );
}
