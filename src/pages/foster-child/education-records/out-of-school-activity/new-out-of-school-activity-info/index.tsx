import { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import NewOutSchoolActivityInfo from "@root/sections/foster-child/education-records/out-of-school-activity/new-out-of-school-activity-info/NewOutSchoolActivityInfo";
import {
  useDeleteSchoolActivityDocumentDataMutation,
  useGetSchoolActivityDocumentDataQuery,
  usePostDocumentSchoolActivityMutation,
  usePostSingleSchoolActivityDataMutation,
} from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const PAGE_TITLE = "Out of School Activity";

NewChildExclusionInfoPage.getLayout = function getLayout(page: any) {
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
          name: "Out of School Info List",
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
  const [recordID, setRecordID] = useState("");

  const router = useRouter();

  const fosterChildId = Object.keys(router?.query)[0];

  const [postActivityData] = usePostSingleSchoolActivityDataMutation();
  const [postActivityDocument] = usePostDocumentSchoolActivityMutation();

  const {
    data: documentData,
    idFetching: documentFetching,
    isLoading: documentLoading,
    isSuccess: documentSuccess,
  } = useGetSchoolActivityDocumentDataQuery({ fosterChildId, recordID });

  const [deletRecord] = useDeleteSchoolActivityDocumentDataMutation();

  const postSchoolActivityData = async (data: any) => {
    try {
      const res = await postActivityData({ data, fosterChildId });

      if (res?.error) return;

      setTabsArr(["Exclusion info", "Upload Document"]);
      enqueueSnackbar(`Successfully!`, {
        variant: "success",
      });

      setRecordID(res?.data?.data?.id);
    } catch (err) {
      console.log(err);

      // enqueueSnackbar(`${err?.error.data.message}!`, {
      //   variant: "error",
      // });
    }
  };

  const postDocumentData = async (data: any) => {
    const formData = new FormData();
    formData.append("formName", "OUT_OF_SCHOOL_ACTIVITY");
    formData.append("recordId", recordID);
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("documentPassword", data.password);
    formData.append("file", data.chosenFile);

    try {
      const res = await postActivityDocument({ formData, fosterChildId });
      enqueueSnackbar(`${res?.data?.message}`, { variant: "success" });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <NewOutSchoolActivityInfo
          postSchoolActivityData={postSchoolActivityData}
        />
        <UploadDocuments
          readOnly={false}
          tableData={documentData?.data?.documents}
          searchParam={() => {}}
          isLoading={false}
          isFetching={false}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
          isSuccess={documentSuccess}
          modalData={(data: any) => postDocumentData(data)}
          onDelete={(data: any) => {
            deletRecord(data?.id);
          }}
        />
      </HorizaontalTabs>
    </Page>
  );
}
