import React from "react";
import { useRouter } from "next/router";
import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useFamilyPersonListTable } from "./useFamilyPersonListTable";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

export default function FamilyPersonListTable(prop: any) {
  const router = useRouter();
  const { fosterChildId } = prop;
  const {
    data,
    headerChangeHandler,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useFamilyPersonListTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.contactType,
      id: "contactType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-background-info/family-person-org-involved/${info.getValue()}/edit`,
                query: { fosterChildId: fosterChildId},
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-background-info/family-person-org-involved/${info.getValue()}/view`,
                query: { fosterChildId: fosterChildId},
              })
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card>
        <TableHeader 
          showAddBtn
          title="Child Family / Persons & Org. Involved"
          searchKey="search"
          onChanged={headerChangeHandler}
          onAdd={() =>
            router.push({
              pathname: `/foster-child/child-background-info/family-person-org-involved/add-family-form-list`,
              query: { fosterChildId: fosterChildId },
            })
          }
        />
        <CustomTable
          data={data?.family_details}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          showSerialNo
          currentPage={data?.meta?.page}
          totalPages={data?.meta?.pages}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
}
