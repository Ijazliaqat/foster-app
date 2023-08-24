import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import useIncidentTable from "./useIncidentTable";
import useIncidentFrom from "./useIncidentFrom";
import dayjs from "dayjs";
import IncidentUploadDocumentModal from "./modals/incidentUploadDocumentModal";
import IncidentViewDocumentModel from "./modals/incidentViewDocumentModel";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";

function UploadedDocuments(props: any) {
  //   const tableHeaderRefTwo = useRef<any>();

  const { action, id } = props;
  const { onUploadSubmit, uploadingDocumentisLoading, modelOpen, modelHander } =
    useIncidentFrom(action, id);

  const {
    incidentUploadlist,
    incidentUploadListError,
    incidentUploadListIsloading,
    incidentUploadlistIsfetching,
    incidentUploadListIsSuccess,
    setsearch,
    pageChangeHandler,
    sortChangeHandler,
    uploadDeleteHandler,
  }: any = useIncidentTable();

  const columns = [
    {
      accessorFn: (row: any) => row.id,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.type,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>
      ),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.incidentId,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <IncidentViewDocumentModel id={info.row.original.id} />
          <DeletePrompt
            onDeleteClick={() => uploadDeleteHandler(info.row.original.id)}
          />
          <Link
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.file}`}
            target="_blank"
          >
            <TableAction size="small" type="download" />
          </Link>
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          title="Uploaded Documents"
          searchKey="search"
          onChanged={(e: any) => {
            console.log(e.search);
            setsearch(e.search);
          }}
          showAddBtn
          onAdd={() => {
            if (action === "add" && id === "") {
              enqueueSnackbar("Please Fill The Incident Form First", {
                variant: "error",
              });
            } else {
              return modelHander();
            }
          }}
        />
      </Box>
      <IncidentUploadDocumentModal
        onUploadSubmit={onUploadSubmit}
        open={modelOpen}
        setOpen={modelHander}
        isLoading={uploadingDocumentisLoading}
      />
      <CustomTable
        data={incidentUploadlist?.data?.incident_documents ?? []}
        columns={columns}
        isLoading={incidentUploadListIsloading}
        isFetching={incidentUploadlistIsfetching}
        isError={incidentUploadListError}
        isSuccess={incidentUploadListIsSuccess}
        isPagination={true}
        totalPages={incidentUploadlist?.data?.meta?.pages ?? 0}
        currentPage={incidentUploadlist?.data?.meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
}

export default UploadedDocuments;
