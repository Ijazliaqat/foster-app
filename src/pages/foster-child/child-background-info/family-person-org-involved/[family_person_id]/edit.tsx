import Layout from "@root/layouts";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useGetFamilyPersonListByIdQuery } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { FamilyPersonDocument } from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-person-document/FamilyPersonDocument";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

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

const PAGE_TITLE = "Edit Family Persons & Org Involved";
// ----------------------------------------------------------------------

EditFamilyPersonForm.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditFamilyPersonForm() {
  const { query } = useRouter();
  const router = useRouter();
  const familyPersonId = query["family_person_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetFamilyPersonListByIdQuery(familyPersonId);

  console.log("Is loading: ", data);

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Family Org Involved", "Uploaded documents"]}
      >
        {/* Family Person Form */}
        {isLoading && <p>Loading...</p>}
        {isSuccess && <FamilyOrgInvolvedForm defaultValues={data[0]} />}

        {/* Upload Document */}
        <FamilyPersonDocument />
      </HorizaontalTabs>
    </Page>
  );
}
