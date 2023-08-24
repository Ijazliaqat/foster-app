import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import NewPersonalEducationPlan from "@root/sections/foster-child/education-records/personal-education-plan/new-personal-educational-plan/NewPersonalEducationPlan";
import {
  usePostChildEducationPlanMutation,
  usePostDocumentChildEducationPlanMutation,
} from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

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
  const [tabsArr, setTabsArr] = useState(["PEP info"]);
  const [id, setId] = useState("");
  const formData = new FormData();
  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;
  const [postDocument] = usePostDocumentChildEducationPlanMutation();
  const [postData] = usePostChildEducationPlanMutation();

  console.log(fosterChildId);

  const postEducationPlanData = async (data: any) => {
    try {
      const res = await postData({ data, fosterChildId });

      if (res?.error) return;

      setId(res.data.data.id);
      enqueueSnackbar(res?.data?.data?.message ?? `Successfully!`, {
        variant: "success",
      });
      setTabsArr(["PEP info", "Upload Document"]);
    } catch (error: any) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  const postDocumentData = async (data: any) => {
    formData.append("type", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.chosenFile);

    const res = await postDocument({ formData, id });
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <NewPersonalEducationPlan
          postEducationPlanData={postEducationPlanData}
        />
        <UploadDocuments
          readOnly={false}
          tableData={[]}
          searchParam={() => {}}
          isLoading={false}
          isFetching={false}
          onDelete={async (data: any) => {}}
          column={[
            "documentName",
            "type",
            "documentDate",
            "uploadBy",
            "password",
          ]}
          isSuccess={true}
          modalData={(data: any) => postDocumentData(data)}
        />
      </HorizaontalTabs>
    </Page>
  );
}
