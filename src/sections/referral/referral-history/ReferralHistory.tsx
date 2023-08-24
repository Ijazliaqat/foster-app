import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { SELECT_FILTERS, data } from ".";
import { useReferralHistory } from "./useReferralHistory";

const ReferralHistoryList = () => {

  const { tableHeaderRefThree, columns, theme } = useReferralHistory();

  return (
    <>
      <TableHeader
        ref={tableHeaderRefThree}
        title="Referrals"
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
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
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
    </>
  );
}
export default ReferralHistoryList