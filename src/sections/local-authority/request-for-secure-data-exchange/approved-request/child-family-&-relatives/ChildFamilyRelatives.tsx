import React from "react";
import { useChildFamilyRelatives } from "./useChildFamilyRelatives";
import { Box } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import ChildFamilyRelativesForm from "./child-family-&-relatives-form/ChildFamilyRelativesForm";

const ChildFamilyRelatives = () => {
  const { TableData, columns, theme, openForm, setOpenForm } =
    useChildFamilyRelatives();
  return (
    <>
      {!openForm ? (
        <Box sx={{ width: "100%", padding: "10px" }}>
          <TableHeader
            title="Child Family / Persons Involved"
            searchKey="search"
            showAddBtn
            onAdd={() => setOpenForm(true)}
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
            rootSX={{ my: theme?.spacing(2) }}
          />
        </Box>
      ) : (
        <ChildFamilyRelativesForm setOpenForm={setOpenForm} />
      )}
    </>
  );
};

export default ChildFamilyRelatives;
