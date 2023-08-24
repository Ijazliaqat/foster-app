import React from "react";
import { Box, Card, Checkbox } from "@mui/material";
import AdvocacyIcon from "../../../../assets/svg/safeguarding/advocacy-icon.svg";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import ShareModal from "@root/components/modal/shareModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import { bulkOperationsData } from ".";
import { useBulkOperationsTable } from "./useBulkOperationsTable";

const BulkOperationsTable = () => {
  const { isDeleteModal, setIsDeleteModal, handleAction, theme, router } = useBulkOperationsTable();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        return (
          <Box>
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.operationName,
      id: "operationName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Operation Name</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "delete", "view"].map((action: string, index: number) => (
            <TableAction
              key={index}
              type={action}
              onClicked={() => handleAction(action, info.row.original.id)}
            />
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card sx={{ p: 2 }}>
        <TableHeader
          title="Bulk Operations"
          showAddBtn
          onAdd={() => router.push("/system-admin/bulk-operations/personal-details")}
        />
        <CustomTable
          data={bulkOperationsData}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
        <DeleteModel open={isDeleteModal} handleClose={() => setIsDeleteModal(false)} />
      </Card>
    </>
  );
};
export default BulkOperationsTable;
