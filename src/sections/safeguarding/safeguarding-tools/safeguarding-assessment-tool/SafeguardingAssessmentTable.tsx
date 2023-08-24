import { Card,   } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import {useSafeguardingAssessmentTable} from './useSafeguardingAssessmentTable'


const SafeguardingAssessmentTool = () => {
  const {TableData,theme,router,tableHeaderRefTwo,columns} = useSafeguardingAssessmentTable()

  return (
    <Card sx={{ padding: "19px 10px 10px 10px" }}>
      <>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Safeguarding Assessment Tool "
          hideSearch={true}
          showAddBtn
          onAdd={() => router.push(`${router.pathname}/add-safeguarding-assessment`)}
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

export default SafeguardingAssessmentTool


