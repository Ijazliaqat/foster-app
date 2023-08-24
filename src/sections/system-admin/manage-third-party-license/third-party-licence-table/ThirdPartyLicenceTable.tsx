import React from 'react'
import { useThirdPartyLicenceTable } from './useThirdPartyLicenceTable';
import CustomTable from '@root/components/Table/CustomTable';

const ThirdPartyLicenceTable = () => {
  const { tableHeaderRefTwo, router, columns, TableData, theme } =
  useThirdPartyLicenceTable();
  return (
    <>
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
        rootSX={{ my: theme.spacing(2) }}
      />
    </>
  )
}

export default ThirdPartyLicenceTable