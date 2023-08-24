import Page from "@root/components/Page";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import NewTrainingsProfile from "@root/sections/carer-info/training-profiles/new-trainings-profile/NewTrainingsProfile";
import {
  useGetTrainingProfileAllDocumentQuery,
  usePatchTrainingProfileApiMutation,
  usePostTrainingProfileApiMutation,
  usePostTrainingProfileDocumentMutation,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

const PAGE_TITLE = "Training Profile";

AddTraingVerification.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Trainings List",
          href: "/carer-info/training-profiles/trainings-list",
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

// ["Training Profile", "Upload Documents"]
export default function AddTraingVerification() {
  const [postData] = usePostTrainingProfileApiMutation();
  const [updateData] = usePatchTrainingProfileApiMutation();
  const [params, setParams] = useState("");
  const router = useRouter();
  const formData = new FormData();

  const [profileTabs, setProfileTabs] = useState(["Training Profile"]);
  const [formState, setFormState] = useState("add");
  const [profileId, setProfileId] = useState("");

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
      setProfileTabs(["Training Profile", "Upload Documents"]);
      router.push("/carer-info/training-profiles/trainings-list");
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
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={profileTabs}>
        <NewTrainingsProfile
          profileId={profileId}
          formState={formState}
          onSubmitHandler={updateTabs}
        />

        <UploadDocuments
          readOnly={false}
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
      </HorizaontalTabs>
    </Page>
  );
}
