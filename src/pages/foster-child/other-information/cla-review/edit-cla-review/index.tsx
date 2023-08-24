import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { ClaReviewForm } from "@root/sections/foster-child/other-information/cla-review/form";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import {
  useClaReviewDocListQuery,
  useDeleteClaReviewDocMutation,
  useGetClaReviewIdQuery,
  usePatchClaReviewByIdMutation,
  usePostClaReviewDocMutation,
} from "@root/services/foster-child/other-information/cla-review/claReviewApi";
import { useRouter } from "next/router";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { enqueueSnackbar } from "notistack";

const PAGE_TITLE = "Edit CLA Review";

EditClaReview.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditClaReview() {
  const { makePath } = usePath();
  const router: any = useRouter();
  const { claReviewId }: any = router.query;

  const { data, isLoading, isError } = useGetClaReviewIdQuery(claReviewId);
  const [updateData, { isSuccess, isError: isErrorPatch }] =
    usePatchClaReviewByIdMutation();

  const [docParams, setDocParams] = useState({
    search: undefined,
    limit: "10",
    offset: "0",
  });

  const {
    data: docData,
    isLoading: docLoading,
    isFetching: docFetching,
    isError: docError,
    isSuccess: docSuccess,
  }: any = useClaReviewDocListQuery({ claReviewId, params: docParams });

  const tableData: any = docData?.data?.cla_review_info_document;
  const metaData: any = docData?.data?.meta;

  const [postDocs] = usePostClaReviewDocMutation();

  const [deleteDoc] = useDeleteClaReviewDocMutation();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "CLA Review List",
      href: makePath({
        path: "/foster-child/other-information/cla-review",
        skipQueries: ["claReviewId"],
      }),
    },
    {
      name: "CLA Review Details",
      href: "",
    },
  ];

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"CLA Review"}
      />

      <HorizaontalTabs tabsDataArray={["CLA Review", "Upload Document"]}>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <ClaReviewForm
            initialValueProps={{
              ...data[0],
              dateOfReview: new Date(data[0]?.dateOfReview),
              dueDate: new Date(data[0]?.dueDate),
            }}
            onSubmitHandler={updateData}
            message={"Updated"}
            isError={isErrorPatch}
            isSuccess={isSuccess}
          />
        )}

        <UploadDocuments
          searchParam={(searchedText: string) =>
            setDocParams((prev: any) => {
              return { ...prev, search: searchedText.search };
            })
          }
          tableData={tableData}
          isLoading={docLoading}
          isFetching={docFetching}
          isError={docError}
          isSuccess={docSuccess}
          column={[
            "chooseFiles",
            "documentType",
            "documentDate",
            "personName",
            "password",
          ]}
          modalData={async (data: any) => {
            const formData = new FormData();
            formData.append("documentType", data?.documentType);
            formData.append("documentDate", data?.documentDate);
            formData.append("password", data?.password);
            formData.append("chooseFiles", data?.chosenFile);
            const updatedData: any = {
              claReviewId,
              formData,
            };
            try {
              const res: any = await postDocs(updatedData).unwrap();
              enqueueSnackbar(
                res?.message ?? `CLA Review Document Added Successfully!`,
                {
                  variant: "success",
                }
              );
            } catch (error: any) {
              const errMsg = error?.data?.message;
              enqueueSnackbar(errMsg ?? "Something Went Wrong!", {
                variant: "error",
              });
            }
          }}
          onDelete={(data: any) => {
            deleteDoc(data?.id);
            enqueueSnackbar("CLA Review info deleted successfully!", {
              variant: "success",
            });
          }}
          onPageChange={(page: any) =>
            setDocParams((prev: any) => {
              return { ...prev, offset: (page - 1) * 10 };
            })
          }
          currentPage={metaData?.page}
          totalPages={metaData?.pages}
        />
      </HorizaontalTabs>
    </Page>
  );
}
