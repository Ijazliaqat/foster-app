import { Card,} from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { useReferralSchemeTable } from './useReferralSchemeTable';

const ReferralSchemeTable = () => {
  const {TableData,tableHeaderRefTwo,router,theme,SELECT_FILTERS,columns} = useReferralSchemeTable()
  
  return (
    <Card sx={{ padding: "19px 10px 10px 10px" }}>
      <>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Referrals"
          showAddBtn
          showSelectFilters={true}
          selectFilters={SELECT_FILTERS}
          onAdd={() => router.push(`${router.pathname}/referral-scheme-add-form`)}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        {/* table body start here */}
        <CustomTable
          data={TableData}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          isPagination={false}
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
      </>
    </Card>
  )
}

export default ReferralSchemeTable

  // ----------------------------------------------------------------------

