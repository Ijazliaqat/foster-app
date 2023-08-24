import React from "react";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useSocialWorker } from "./useSocialWorker";
import { STATUS_SELECT_FILTERS } from ".";

const SocialWorker = () => {
  const {
    tableHeaderRefTwo,
    navigate,
    theme,
    data,
    columns,
    openDelete,
    setOpenDelete,
  } = useSocialWorker();

  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Referrals"
        searchKey="search"
        showAddBtn
        showSelectFilters={true}
        selectFilters={STATUS_SELECT_FILTERS}
        onAdd={() => {
          navigate.push("/referral/social-worker-request/add-social-worker");
        }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
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
      <DeleteModel
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        onDeleteClick={() => setOpenDelete(false)}
      />
    </>
  );
};

export default SocialWorker;
