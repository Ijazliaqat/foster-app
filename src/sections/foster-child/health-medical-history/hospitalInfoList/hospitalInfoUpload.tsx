import React, { useMemo } from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import Link from "next/link";
import ModelUploadDoc from "../../../../components/modal/uploadDoc/modelUploadDoc";

import { useGetHospitalInfoListDocumentQuery } from "@root/services/foster-child/health-medical-history/hospital-info-list/hospitalInfoListDocument";
import { useTableParams } from "@root/hooks/useTableParams";
import useHospitalinfoListForms from "./useHospitalinfoListForms";
import { enqueueSnackbar } from "notistack";

function HospitalInfoUpload(props: any) {
  const { fosterChildId, hospitalinfoId } = props;

  const [Search, setSearch] = React.useState("");
  const { params, pageChangeHandler } = useTableParams();
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetHospitalInfoListDocumentQuery({
      params: {
        hospitalInfoFormId: hospitalinfoId,
        fosterCarerId: fosterChildId,
        search: Search,
        ...params,
      },
    });
  const {
    modelOpen,
    isloading,
    isFatching,
    onUploadSubmit,
    setModelOpen,
    onUpdateSubmit,
    onDeleteHander,
  } = useHospitalinfoListForms({
    fosterChildId: fosterChildId,
    hospitalinfoId: hospitalinfoId,
  });

  const col = useMemo(() => {
    return [
      // {
      //   accessorFn: (row: any) => row.id,
      //   id: "srNo",
      //   cell: (info: any) => info.getValue(),
      //   header: () => <span>Sr. No</span>,
      //   isSortable: true,
      // },
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
        accessorFn: (row: any) => row.personUploaded,
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
              showActions={true}
              isFetching={isFatching}
              defaultValues={info.row.original}
              action="edit"
              onSubmit={(data: any) => {
                onUpdateSubmit(data, info.row.original.id);
              }}
            />
            <ModelUploadDoc
              showActions={true}
              onSubmit={() => {}}
              action="view"
              defaultValues={info.row.original}
            />
            <Link
              href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.documentFile}`}
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
  }, [isFatching, onDeleteHander, onUpdateSubmit]);

  return (
    <>
      <Box sx={{ mb: 0.4 }}>
        <TableHeader
          title="Uploaded Documents"
          searchKey="search"
          onChanged={(e: any) => {
            setSearch(e.search);
          }}
          showAddBtn
          onAdd={() => {
            if (hospitalinfoId) {
              setModelOpen(true);
            } else {
              enqueueSnackbar("Fill Hospital Info Form first ", {
                variant: "error",
              });
            }
          }}
        />
      </Box>

      <CustomTable
        data={data?.hospitalinfolistDocuments ?? []}
        columns={col}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        isPagination={true}
        showSerialNo={true}
        totalPages={data?.meta?.pages ?? 0}
        currentPage={data?.meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
      />
      <ModelUploadDoc
        action={"add"}
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        isFetching={isFatching}
        onSubmit={onUploadSubmit}
      />
    </>
  );
}

export default HospitalInfoUpload;
