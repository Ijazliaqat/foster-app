import { Box, Checkbox, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { SAFE_CARING_POLICY_TABLE_DATA } from ".";
import { useSafeCaring } from "./useSafeCaring";

export default function SafeCaring() {

  // ----------------------------------------------------------------------

  const {
    theme,
    router,
    isDeleteModalOpen,
    columns,
    tableHeaderRefTwo,
    handleClose,
  } = useSafeCaring();
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Safe Caring Policy For Looked After Children"
        searchKey="search"
        hideSearch
        showAddBtn
        onAdd={() => {
          router.push(
            "/safeguarding/policy-guide-templates/safe-caring/form"
          );
        }}
      />
      <CustomTable
        data={SAFE_CARING_POLICY_TABLE_DATA}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
           <DeleteModel open={isDeleteModalOpen} handleClose={handleClose} />
    </>
  );
}
