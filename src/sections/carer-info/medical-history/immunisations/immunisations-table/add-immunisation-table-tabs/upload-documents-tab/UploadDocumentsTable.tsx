import React from "react";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import { useTableParams } from "@root/hooks/useTableParams";
import Page from "@root/components/Page";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { UPLOAD_DOCUMENT_DATA, columns } from ".";
// import UploadDocuments from "@root/sections/documents/UploadDocuments";
export const UploadDocumentsTable = (props: any) => {
  const { breadCrumbData } = props;
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
  } = useUploadDocumentsTable(breadCrumbData);
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  return (
    <Page title="Upload Documents">
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Upload Documents"
          searchKey="search"
          showAddBtn
          onAdd={() =>
            // router.push(
            //   "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs"
            // )
            {}
          }
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={UPLOAD_DOCUMENT_DATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={false}
        />
        {/* <UploadDocuments
      tableData={UPLOAD_DOCUMENT_DATA}
      columns={columns}
      isSuccess={true}
      />
        {/* <UploadDocuments
          // readOnly={user?.defaultRole === "FOSTER_CARER"}
          tableData={UPLOAD_DOCUMENT_DATA.map((x: any) => ({
            document: x.documentName,
            documentType: x?.documentType,
            date: x?.documentDate,
            personName: x.personUploaded,
            password: x.password,
          }))}
          // isLoading={isLoading}
          columns={[
            "documentName",
            "documentType",
            "documentDate",
            "personUploaded",
            "password",
          ]}
          // isFetching={isFetching}
          // isError={isError}
          // isSuccess={true}
          modalData={(data: any) => console.log("data all the way here", data)}
        /> */}
      </Card>
    </Page>
  );
};
