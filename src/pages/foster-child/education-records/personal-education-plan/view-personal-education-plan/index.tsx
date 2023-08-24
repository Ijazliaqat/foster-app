import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import ViewPersonalEducationPlan from "@root/sections/foster-child/education-records/personal-education-plan/view-personal-educational-plan/ViewPersonalEducationPlan";
import { useRouter } from "next/router";
import { useGetSingleChildEducationPlanQuery } from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";
import IsFetching from "@root/components/loaders/IsFetching";

const PAGE_TITLE = "Personal Education Plan";

EditChildExclusionInfoPage.getLayout = function getLayout(page: any) {
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
          name: "Personal Education Plan",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EditChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["PEP info", "Upload Document"]);
  const router = useRouter();
  const id = Object.keys(router?.query)[0];
  const { data, isLoading } = useGetSingleChildEducationPlanQuery(id);

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <ViewPersonalEducationPlan
              initialValueProps={{
                school: data?.school,
                date: new Date(data?.date),
                onFile: data?.onFile,
                comments: data?.comments,
                principalName: data?.principalName,
              }}
            />
          </>
        )}
        <UploadDocuments
          readOnly={false}
          tableData={[]}
          searchParam={() => {}}
          isLoading={false}
          isFetching={false}
          column={[
            "documentType",
            "documentType",
            "date",
            "uploadBy",
            "password",
          ]}
          isSuccess={false}
          modalData={(data: any) => console.log(data)}
        />
      </HorizaontalTabs>
    </Page>
  );
}
