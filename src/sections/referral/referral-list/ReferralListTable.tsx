import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import WorkFlowModal from "@root/components/modal/workFlowModal";
import { SELECT_FILTERS } from ".";
import { useReferralListTable } from "./useReferralListTable";
import ShareModal from "@root/components/modal/shareModal";

const ReferralListTable = () => {
  const {
    workFlowModal,
    setWorkFlowModal,
    data,
    selectHandler,
    columns,
    setIsShareModal,
    isShareModal,
  } = useReferralListTable();

  return (
    <>
      <TableHeader
        title="Referrals"
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showDiagramBtn
        showShareBtn
        showPrintBtn
        onPrint={() => {
          window.print();
        }}
        onDiagramBtn={() => setWorkFlowModal(true)}
        onAdd={() => setWorkFlowModal(true)}
        onShare={() => setIsShareModal(true)}
        onChanged={(data: any) => {
          selectHandler(data);
        }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
      <WorkFlowModal
        open={workFlowModal}
        handleClose={() => setWorkFlowModal(false)}
      />
      {isShareModal && (
        <ShareModal
          open={isShareModal}
          data={[{ email: "hassan@gmail.com" }]}
          handleClose={() => setIsShareModal(false)}
        />
      )}
    </>
  );
};

export default ReferralListTable;
