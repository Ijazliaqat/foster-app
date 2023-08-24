import Layout from "@root/layouts";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import MedicalAppointmentsFrom from "@root/sections/foster-child/health-medical-history/medicalAppointments/medicalAppointmentsFrom";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useDeletemedicalAppointmentsDocsMutation,
  useGetMedicalInfoDocsQuery,
  usePostmedicalAppointmentsDocsMutation,
} from "@root/services/foster-child/health-medical-history/medicalAppointments/medicalAppointments";

MedicalAppointments.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function MedicalAppointments() {
  const Router: any = useRouter();
  const [searchHandle, setSearchHandle] = useState("");
  const [pageHandle, setPageHandle] = useState(0);
  const [uploadDocuments, setUploadDocuments] = useState(true);
  const { action, medicalAppointmentID, fosterChildId } = Router.query;
  const PAGE_TITLE = "Medical Appointments";
  const formData = new FormData();

  const params = {
    search: searchHandle,
    limit: "10",
    offset: pageHandle,
  };

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: null,
      href: "",
    },
    {
      name: "Medical Appointments Info ",
      href: {
        pathname: "/foster-child/health-medical-history/medical-appointments",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Info",
      href: "",
    },
  ];

  useEffect(() => {
    if (action === "edit") {
      setUploadDocuments(false);
    }
  }, [action]);
  const {
    data: documentData,
    isLoading: isDocumentLoading,
    isFetching: isDocumentFetching,
    isError: hasDocumentError,
    isSuccess: isDocumentSuccess,
  } = useGetMedicalInfoDocsQuery({
    id: medicalAppointmentID,
    params,
  });
  const [postDocs] = usePostmedicalAppointmentsDocsMutation();
  const [deleteData] = useDeletemedicalAppointmentsDocsMutation();
  //extracting Data
  const tableData: any = documentData?.data;
  const metaData: any = documentData?.data?.meta;

  const documentUploadHandler = (data: any) => {
    formData.append("docType", data.documentType);
    formData.append("date", "12/12/2000");
    formData.append("password", data.password);
    formData.append("docFile", data.chosenFile);
    formData.append("docName", "medcial appointment");
    postDocs({ id: medicalAppointmentID, body: formData });
  };
  const pageChangeHandler = (page: any) => {
    setPageHandle(page * 10);
  };
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Medical Appointments Info", "Uploaded Documents"]}
      >
        <MedicalAppointmentsFrom
          action={action}
          medicalAppointmentID={medicalAppointmentID}
          fosterChildId={fosterChildId}
        />
        <UploadDocuments
          readOnly={uploadDocuments}
          onDelete={(row: any) => {
            deleteData(row?.id);
          }}
          searchParam={(searchedText: any) =>
            setSearchHandle(searchedText.search)
          }
          tableData={tableData}
          isLoading={isDocumentLoading}
          isFetching={isDocumentFetching}
          isError={hasDocumentError}
          isSuccess={isDocumentSuccess}
          column={["docFile", "docType", "date", "uploadedBy", "password"]}
          modalData={documentUploadHandler}
          onPageChange={(page: any) => pageChangeHandler(page)}
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Box>
  );
}
