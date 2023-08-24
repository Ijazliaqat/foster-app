import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { useState } from "react";
import NewChildExclusionInfo from "@root/sections/foster-child/education-records/child-exclusion-info/new-child-exclusion-info/NewChildExclusionInfo";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  usePostExclusionInfoRecordMutation,
  usePostFosterExclusionDocumentMutation,
} from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const PAGE_TITLE = "Child Exclusion Info";

NewChildExclusionInfoPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Exclusion Info List",
          href: "/child-info",
        },
        {
          name: "Child Exclusion Info",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function NewChildExclusionInfoPage() {
  const [tabsArr, setTabsArr] = useState(["Exclusion info"]);
  
  const [postChildInfoRecord] = usePostExclusionInfoRecordMutation();
  const [postExclusionDocumentData] = usePostFosterExclusionDocumentMutation();
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const formData = new FormData();

  const fosterChildId = Object.keys(router?.query)[0];

  const postExclusionDocument = async (exclusionData: any) => {
    formData.append("type", exclusionData.documentType);
    formData.append("documentDate", exclusionData.documentDate);
    formData.append("password", exclusionData.password);
    formData.append("file", exclusionData.chosenFile);
    formData.append("exclusionId", id);
    const res = await postExclusionDocumentData(formData);
  };

  const postExclusionInfo = async (data: any) => {
    try {
      const res = await postChildInfoRecord({ data, fosterChildId })
      setId(res?.data?.data?.id);

      if (res.data.data.id) {
        setTabsArr(["Exclusion Info", "Upload Document"]);
      }
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar(`Something went Wrong!`, {
        variant: "error",
      });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <NewChildExclusionInfo postExclusionInfo={postExclusionInfo} />
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
          modalData={(data: any) => postExclusionDocument(data)}
        />
      </HorizaontalTabs>
    </Page>
  );
}
