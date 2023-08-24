import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { SubstituteCarerForm } from "@root/sections/carer-info/substitute-cares/common-form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { usePostSubstituteCarerMutation } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import VocationalCourseForm from "@root/sections/foster-child/vocational-course-info/vocational-course-form/VocationalCourseForm";
import { useRouter } from "next/router";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import {
  useAddVocationalInfoDocumentMutation,
  useAddVocationalInfoMutation,
  useDeleteVocationalInfoDocumentMutation,
  useVocationalInfoDocumentsQuery,
} from "@root/services/foster-child/vocational-info-list/VocationalInfoListApi";
import { enqueueSnackbar } from "notistack";
import { formData } from "@root/sections/carer-info/personal-info/carer-address-history";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Vocational Course Info";

export const TABSDATA = ["Course Info", "Upload Documents"];

VocationalCourseInfoForm.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function VocationalCourseInfoForm() {
  const { makePath } = usePath();
  const router = useRouter();
  const formData = new FormData();
  const id = router?.query?.fosterChildId;

  const [postVocationalInfo, status] = useAddVocationalInfoMutation();
  const [postVocationalDoc] = useAddVocationalInfoDocumentMutation();
  const [deleteVocationalDoc] = useDeleteVocationalInfoDocumentMutation();
  const { data } = useVocationalInfoDocumentsQuery({
    search: undefined,
    limit: "10",
    offset: "0",
    fosterCarerId: id,
  });
  const BREADCRUMBS = [
    {
      name: "",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "Vocational Course Info List",
      href: makePath({
        path: "/foster-child/education-records/vocational-course-info",
      }),
    },
    {
      name: "Course Info",
      href: "/foster-child/education-records/vocational-course-info/details",
    },
  ];

  const formSubmitHandler = async (formData: any) => {
    try {
      const res: any = await postVocationalInfo({
        body: formData,
        id,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(
        `/foster-child/education-records/vocational-course-info?fosterChildId=${id}`
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
    console.log(formData);
  };
  const documentSubmitHandler = async (data: any) => {
    formData.append("documentType", data.documentType);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("documentFile", data.chosenFile);
    try {
      const res: any = await postVocationalDoc({
        body: formData,
        id,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
    console.log(formData);
  };
  const documentDeleteHandler = async (row: any) => {
    try {
      const res: any = await deleteVocationalDoc(row.id).unwrap();
      enqueueSnackbar(res?.message ?? `Document Deleted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizontalTabs tabsDataArray={TABSDATA}>
        <VocationalCourseForm
          onSubmit={(data: any) => {
            formSubmitHandler(data);
          }}
          status={status}
          onEdit={(data: any) => console.log(data)}
        />
        <UploadDocuments
          searchParam={(searchedText: string) =>
            console.log("searched Value", searchedText)
          }
          tableData={data?.data ?? []}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          column={[
            "documentFile",
            "documentType",
            "documentDate",
            "personName",
            "password",
          ]}
          modalData={documentSubmitHandler}
          onDelete={documentDeleteHandler}
          onPageChange={(page: any) => console.log("parent log", page)}
          currentPage={"1"}
          totalPages={"1"}
        />
      </HorizontalTabs>
    </Page>
  );
}
