import TableHeader from "@root/components/TableHeader";
import React from "react";
import useIfaParticipationPolicyChildList from "./useIfaParticipationPolicyChildList";
import CustomTable from "@root/components/Table/CustomTable";
import { DummyData, columnsIfaParticipationPolicyTable } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";
import IsFetching from "@root/components/loaders/IsFetching";

const IfaParticipationPolicyChildList = () => {
  const {
    tableHeaderRef,
    router,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsIfaParticipationPolicyFunction,
    fosterChildId,
    deleteFosterChild,
    closeDeleteModal,
    fosterId,
    data,
    isLoading,
    isFetching,
  } = useIfaParticipationPolicyChildList();
  return (
    <>
      {isLoading ? (
        <IsFetching isFetching={isLoading} />
      ) : (
        <>
          <DeleteModel
            open={fosterChildId}
            onDeleteClick={deleteFosterChild}
            handleClose={closeDeleteModal}
          />
          <TableHeader
            showAddBtn
            ref={tableHeaderRef}
            title="IFA Participation Policy"
            searchKey="search"
            onAdd={() => {
              router.push(
                `/foster-child/other-information/ifa-participation-policy-for-child/new-ifa-participation-policy-for-child?fosterChildId=${fosterId}`
              );
            }}
            onChanged={headerChangeHandler}
          />
          <CustomTable
            columns={columnsIfaParticipationPolicyFunction}
            data={data?.data?.IFaParticipation}
            onPageChange={pageChangeHandler}
            onSortByChange={sortChangeHandler}
            isSuccess={true}
            isPagination={false}
          />
        </>
      )}
    </>
  );
};

export default IfaParticipationPolicyChildList;
