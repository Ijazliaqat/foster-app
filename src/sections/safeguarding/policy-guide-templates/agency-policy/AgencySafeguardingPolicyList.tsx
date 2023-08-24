import React, { useRef, } from "react";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import CustomTable from "@root/components/Table/CustomTable";
import { useAgencySafeguardingPolicy } from "./useAgencySafeguardingPolicy";
import DeleteModel from "@root/components/modal/DeleteModel";
import { data } from ".";

const AgencySafeguardingPolicyList = () => {

  const { theme, router, isDeleteModalOpen, columns, tableHeaderRefTwo, handleClose } = useAgencySafeguardingPolicy();
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        hideSearch={true}
        title="Agency Safeguarding Policy"
        showAddBtn
        onAdd={() => router.push('/safeguarding/policy-guide-templates/agency-policy/form')}
      />
      <CustomTable
        data={data}
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
      <DeleteModel open={isDeleteModalOpen} handleClose={handleClose} />

    </>
  );
}
export default AgencySafeguardingPolicyList