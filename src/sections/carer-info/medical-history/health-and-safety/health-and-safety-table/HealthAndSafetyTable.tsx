import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import DeleteModel from "@root/components/modal/DeleteModel";

import { useHealthAndSafetyTable } from "./useHealthAndSafetyTable";

export const HealthAndSafetyTable = () => {
  const {
    deleteList,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    columnsFunction,
    isSuccess,
    healthAndSafetyId,
    setHealthAndSafetyId,
  } = useHealthAndSafetyTable();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return (
    <>
      <Card sx={{ p: 1 }}>
        <DeleteModel
          open={healthAndSafetyId && healthAndSafetyId}
          handleClose={() => setHealthAndSafetyId(null)}
          onDeleteClick={deleteList}
        />
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={() =>{
            router.push(
              "/carer-info/medical-history/health-and-safety/add-health-and-safety-table-tabs"
            );action:'push'}
          }
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={healthAndSafetyApiData}
          columns={columnsFunction}
          showSerialNo
          isError={isError}
          isLoading={isLoading}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={isSuccess}
          isPagination={false}
        />
      </Card>
    </>
  );
};
