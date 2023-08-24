import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { usePendingRequest } from "./usePendingRequest";
import SecureDataExchangeModal from "./secure-data-exchange-modal/SecureDataExchangeModal";
import { Box } from "@mui/material";
import { SELECT_FILTERS } from "../approved-request";

const PendingRequest = () => {
  const {
    tableHeaderRefTwo,
    TableData,
    columns,
    theme,
    openModal,
    setOpenModal,
  } = usePendingRequest();
  return (
    <Box>
      <TableHeader
        ref={tableHeaderRefTwo}
        selectFilters= {SELECT_FILTERS}
        showSelectFilters={true}
        title="Secure Data Exhange Requests"
        searchKey="search"
        showAddBtn
        onAdd={() => setOpenModal(true)}
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={TableData}
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
        // rootSX={{ my: theme?.spacing(2) }}
      />

      <SecureDataExchangeModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </Box>
  );
};

export default PendingRequest;
