import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import { uploadDummyData } from ".";
import ModelUploadDoc from "@root/components/modal/uploadDoc/modelUploadDoc";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGethospitalizationDocumentQuery } from "@root/services/foster-child/health-medical-history/hospitalization/hospitalizationDocuments";
import useHospitalizationForm from "./useHospitalizationForm";
const EmptyAarry: any = [];
const HospitalizationUploadTable = (props: any) => {
  const { action, fosterChildId, hospitalizationId } = props;
  const [modelOpen, setModelOpen] = React.useState(false);
  const { onUploadSubmit, onDeleteHander } = useHospitalizationForm({
    hospitalizationId: hospitalizationId,
    fosterChildId: fosterChildId,
  });
  const columns = [
    {
      accessorFn: (row: any) => row.documentOriginalName,
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
      accessorFn: (row: any) => row.documentPassword,
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
  const [Search, setSearch] = React.useState("");
  const { params, pageChangeHandler } = useTableParams();
  const { data, isError, isFetching, isLoading, isSuccess }: any =
    useGethospitalizationDocumentQuery({
      params: {
        recordId: hospitalizationId,
        limit: 10,
        offset: params?.offset,
      },
    });

  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          title="Uploaded Documents"
          searchKey="search"
          onChanged={(e: any) => {
            console.log(e.search);
          }}
          showAddBtn
          onAdd={() => {
            if (hospitalizationId) {
              setModelOpen(true);
            } else {
              enqueueSnackbar("Fill Hospital Info Form first ", {
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
        data={data?.data?.foster_child_document ?? EmptyAarry}
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

export default HospitalizationUploadTable;
