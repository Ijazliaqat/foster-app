import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import RecruitmentTrainingProfile from "@root/sections/recruitment/assessment-stage-one/training-verification-form/add-taining-profile/training-profile/RecruitmentTrainingProfile";
import {
  useDeleteTrainingProfileDocumentMutation,
  useGetTrainingProfileAllDocumentQuery,
  usePatchTrainingProfileApiMutation,
  usePostTrainingProfileApiMutation,
  usePostTrainingProfileDocumentMutation,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

const PAGE_TITLE = "Recruitment";

AddTraingVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Assessment stage 1",
          href: "/recruitment/assessment-stage-one/training-verification-form",
        },
        {
          name: "Training Profile",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ["Training Profile", "Upload Documents"]
export default function AddTraingVerification() {
  const [postData] = usePostTrainingProfileApiMutation();
  const [updateData] = usePatchTrainingProfileApiMutation();
  const [deleteUploadedDocument] = useDeleteTrainingProfileDocumentMutation();
  const [params, setParams] = useState("");
  const router = useRouter();
  const formData = new FormData();

  const [tabsArr, setTabsArr] = useState(["Training Profile"]);
  const [formState, setFormState] = useState("add");
  const [profileId, setProfileId] = useState("");

  console.log(profileId);

  const updateTabs = async (data: any) => {
    try {
      let res: any = null;
      if (formState === "add") res = await postData(data).unwrap();
      else
        res = await updateData({ trainingProfileId: profileId, data }).unwrap();

      if (res?.error) return;

      setFormState("update");
      setProfileId(res.data.id);
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      setTabsArr(["Training Profile", "Upload Documents"]);
    } catch (error: any) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  const {
    data: uploadDocuments,
    isLoading: uploadDocumentsIsLoading,
    isError: uploadDocumentsIsError,
    isFetching: uploadDocumentsIsFetching,
    isSuccess,
  } = useGetTrainingProfileAllDocumentQuery({ id: profileId, params });

  const [postTrainingProfileData] = usePostTrainingProfileDocumentMutation();

  const uploadDocumentsHandler = async (postData: any) => {
    formData.append("documentType", postData.documentType);
    formData.append("date", postData.documentDate);
    formData.append("password", postData.password);
    formData.append("file", postData.chosenFile);

    const updatedData = {
      trainingProfileId: profileId,
      data: formData,
    };

    try {
      const res: any = await postTrainingProfileData(updatedData).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      router.push(
        "/recruitment/assessment-stage-one/training-verification-form"
      );
    } catch (error) {
      console.log(error);

      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };

  const deleteDocument = async (userId: any) => {
    try {
      let res = await deleteUploadedDocument({
        trainingProfileId: profileId,
        profileId: userId,
      });

      enqueueSnackbar(`Document Delete Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={tabsArr}>
        <RecruitmentTrainingProfile
          profileId={profileId}
          formState={formState}
          onSubmitHandler={updateTabs}
        />

        <UploadDocuments
          readOnly={false}
          tableData={uploadDocuments?.data?.docs}
          searchParam={
            (searchedText: string) => setParams(searchedText)
            // console.log(searchedText)
          }
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
          onDelete={(data: any) => {
            console.log("uploaded document id", data.id);
            deleteDocument(data.id);
          }}
          modalData={(data: any) => uploadDocumentsHandler(data)}
          onPageChange={(page: any) => console.log(page)}
          currentPage={uploadDocuments?.data?.meta?.page}
          totalPages={uploadDocuments?.data?.meta?.pages}
        />
      </HorizaontalTabs>
    </Page>
  );
}
