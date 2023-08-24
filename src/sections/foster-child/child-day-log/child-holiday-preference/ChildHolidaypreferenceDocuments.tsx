import { useTableParams } from "@root/hooks/useTableParams";
import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import ModelUploadDoc from "@root/components/modal/uploadDoc/modelUploadDoc";
import { useGetChildHolidayPrefrenceDocumentQuery } from "@root/services/foster-child/child-day-log/child-holiday-prefrence/childHolidayPrefrenceDocument";
import useChildholidayPrefrenceFrom from "./useChildholidayPrefrenceFrom";
const EmptyAarry: any = [];
const ChildHolidaypreferenceDocuments = (props: any) => {
  const { action, fosterChildId, childHolidayPrefrence } = props;
  const [search, setSearch] = useState("");
  const [modelOpen, setModelOpen] = React.useState(false);
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetChildHolidayPrefrenceDocumentQuery({
      childHolidayPrefrencesId: childHolidayPrefrence,
      params: {
        search: search,
        limit: 10,
        ...params,
      },
    });
  const { onUploadSubmit, onDeleteHander, onUpdateSubmit } =
    useChildholidayPrefrenceFrom({
      action: action,
      fosterChildId: fosterChildId,
      childHolidayPrefrence: childHolidayPrefrence,
    });
  const columns = [
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
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
      accessorFn: (row: any) => row.uploadBy,
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
          <DeletePrompt
            onDeleteClick={() => onDeleteHander(info.row.original.id)}
          />

          <ModelUploadDoc
            defaultValues={info.row.original}
            showActions={true}
            action="view"
            isFetching={false}
          />
          <ModelUploadDoc
            defaultValues={info.row.original}
            showActions={true}
            isFetching={false}
            action="edit"
            onSubmit={(data: any) => {
              onUpdateSubmit(data, info.row.original.id);
            }}
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
            setSearch(e.search);
          }}
          showAddBtn
          onAdd={() => {
            if (childHolidayPrefrence) {
              setModelOpen(true);
            } else {
              enqueueSnackbar("Fill Holiday details First ", {
                variant: "error",
              });
            }
          }}
        />
      </Box>
      <ModelUploadDoc
        action={"add"}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        isFetching={false}
        onSubmit={(data: any) => onUploadSubmit(data)}
      />
      <CustomTable
        data={data?.data?.child_holiday_prefrences_document ?? EmptyAarry}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        isPagination={true}
        showSerialNo={true}
        totalPages={data?.data?.meta?.pages ?? 0}
        currentPage={data?.data.meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        //  onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default ChildHolidaypreferenceDocuments;
