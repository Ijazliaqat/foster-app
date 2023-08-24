import React from "react";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useSafeguardingTemplate } from "./useSafeguardingTemplate";
import { data } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";

const SafeguardingTemplatesList = () => {
  const { theme, router, isDeleteModalOpen, columns, tableHeaderRefTwo, handleClose } = useSafeguardingTemplate();


  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Safeguarding Templates"
        showAddBtn
        onAdd={() => router.push('/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/add-template')}
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
export default SafeguardingTemplatesList