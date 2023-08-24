import { Box } from "@mui/material";
import Layout from "@root/layouts";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import StudySupportInfoForm from "@root/sections/foster-child/education-records/study-support-info/StudySupportInfoForm";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

AddStudySupportInfo.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};
export default function AddStudySupportInfo() {
  const Router: any = useRouter();
  const { fosterChildId } = Router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Study Support Info List",
      href: {
        pathname: "/foster-child/education-records/study-support-info",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Study Support Info",
      href: "",
    },
  ];

  const PAGE_TITLE = "Study Support Info";

  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Study Support Info", "Upload Document"]}
      >
        <StudySupportInfoForm />
        <UploadDocuments
          readOnly={true}
          column={[
            "documentOriginalName",
            "documentType",
            "documentDate",
            "personUploaded",
            "documentPassword",
          ]}
        />
      </HorizaontalTabs>
    </Box>
  );
}
