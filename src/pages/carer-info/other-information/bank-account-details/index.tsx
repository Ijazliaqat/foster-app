import Layout from "@root/layouts";
import BankAccountDetailsSection from "@root/sections/carer-info/other-info/bank-account-details/BankAccountDetailsSection";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import {
  useDeleteBankDetailMutation,
  useGetBankDetailsQuery,
  usePatchBankDetailsMutation,
  usePostBankDetailsMutation,
} from "@root/services/recruitment/other-information/bankDetailsApi";
import { enqueueSnackbar } from "notistack";

// ----------------------------------------------------------------------// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Bank Account Details",
    href: "/carer-info/personal-info/initial-enquiry",
  },
];
const PAGE_TITLE = "Bank Account Details";

BankAccountDetails.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function BankAccountDetails() {
  const [pageOffset, setPageOffset] = useState<any>(0);
  const [searchedText, setSearchedText] = useState<any>(undefined);

  //using API hooks
  const tableData = useGetBankDetailsQuery({
    search: searchedText?.search,
    limit: 10,
    offset: pageOffset * 10,
  });
  const [postFormData, postingStatus] = usePostBankDetailsMutation();

  const [editFormData, editingStatus] = usePatchBankDetailsMutation();

  const [deleteEntry, deletingStatus] = useDeleteBankDetailMutation();
  // Form Submitting
  //adding new entry
  const submitFormHandler = async (formData: any) => {
    try {
      const res: any = await postFormData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  //editing form entry
  const editFormHandler = async (formData: any) => {
    try {
      const res: any = await editFormData(formData).unwrap();
      enqueueSnackbar(res?.message ?? `Details Edited Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.errors?.[0] || error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  //deleting Form Entry
  const deleteTableRowHandler = async (id: any) => {
    try {
      const res: any = await deleteEntry(id).unwrap();
      enqueueSnackbar(res?.message ?? `Details Edited Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  // FrontEnd
  return (
    <BankAccountDetailsSection
      tableData={tableData?.data?.data}
      formData={submitFormHandler}
      gettingStatus={tableData}
      postingStatus={postingStatus}
      editingStatus={editingStatus}
      deletingStatus={deletingStatus}
      editedData={editFormHandler}
      onDelete={deleteTableRowHandler}
      searchedText={setSearchedText}
      // if modal closes ,reset the queries status
      modalStatus={(state: any) => {
        if (!state) {
          postingStatus.reset();
          editingStatus.reset();
        }
      }}
      onPageChange={(page: any) => setPageOffset(page - 1)}
    />
  );
}
