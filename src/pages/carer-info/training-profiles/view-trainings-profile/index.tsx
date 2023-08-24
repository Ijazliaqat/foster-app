import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import IsFetching from "@root/components/loaders/IsFetching";
import ViewTraingsProfile from "@root/sections/carer-info/training-profiles/view-trainings-profile/ViewTrainingProfile";
import { useRouter } from "next/router";
import {
  useGetSingleTrainingProfileDataQuery,
  useGetTrainingProfileAllDocumentQuery,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useState } from "react";

const PAGE_TITLE = "Training Profile";

AddTraingVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Trainings List",
          href: "/carer-info",
        },
        {
          name: "Training",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AddTraingVerification() {
  const [params, setParams] = useState("");
  const formData = new FormData();

  const router = useRouter();
  const id = Object.keys(router?.query)[0];

  const { data, isLoading, isError, isSuccess } =
    useGetSingleTrainingProfileDataQuery(id);

  const {
    data: uploadDocuments,
    isLoading: uploadDocumentsIsLoading,
    isError: uploadDocumentsIsError,
    isFetching: uploadDocumentsIsFetching,
  } = useGetTrainingProfileAllDocumentQuery({ id, params });

  const uploadDocumentsHandler = async (postData: any) => {
    // formData.append("documentType", postData.documentType);
    // formData.append("date", postData.documentDate);
    // formData.append("password", postData.password);
    // formData.append("file", postData.chosenFile);
    // const updatedData = {
    //   trainingProfileId: id,
    //   data: formData,
    // };
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Training Profile", "Upload Documents"]}>
        {isLoading ? (
          <IsFetching isFetching={isLoading} />
        ) : (
          <>
            <ViewTraingsProfile
              initialValueProps={{
                carerName: data?.data?.carerName,
                courseAttended: data?.data?.courseAttended,
                courseStatus: data?.data?.courseStatus,
                comments: data?.data?.comments,
                trainingNeeds: data?.data?.trainingNeeds,
                otherTraining: data?.data?.otherTraining,
                addtionalInfo: data?.data?.addtionalInfo,
                attendance: data?.data?.attendance,
                expiryDate: new Date(data?.data?.expiryDate),
                date: new Date(data?.data?.date),
              }}
              trainingProfileId={id}
              message={"Updated"}
              isError={isError}
              isSuccess={isSuccess}
            />
          </>
        )}

        {uploadDocumentsIsLoading ? (
          <IsFetching isFetching={uploadDocumentsIsLoading} />
        ) : (
          <>
            <UploadDocuments
              readOnly={true}
              tableData={uploadDocuments?.data?.docs}
              searchParam={(searchedText: string) => setParams(searchedText)}
              isLoading={uploadDocumentsIsLoading}
              isFetching={uploadDocumentsIsFetching}
              isError={uploadDocumentsIsError}
              column={[
                "documentType",
                "documentType",
                "date",
                "uploadBy",
                "password",
              ]}
              isSuccess={isSuccess}
              modalData={(data: any) => uploadDocumentsHandler(data)}
              onPageChange={(page: any) => console.log(page)}
              currentPage={uploadDocuments?.data?.meta?.page}
              totalPages={uploadDocuments?.data?.meta?.pages}
            />
          </>
        )}
      </HorizaontalTabs>
    </Page>
  );
}
