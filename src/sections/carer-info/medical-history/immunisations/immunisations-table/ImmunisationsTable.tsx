import { Card } from "@mui/material";
import Page from "@root/components/Page";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import { useImmunisations } from "./useImmunisations";
import { IMMUNISATIONS_DATA, columns } from ".";

export const ImmunisationsTable = () => {
    const {
        open,
        setOpen,
        handleOpen,
        handleClose,
        theme,
        router,
        tableHeaderRef,
      } = useImmunisations();
    const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  return (
    <Page title='Immunisations List'>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Carer Immunisation Info"
          searchKey="search"
          showAddBtn
          onAdd={()=>router.push('immunisations/add-immunisation-table-tabs')}
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={IMMUNISATIONS_DATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={false}
        />
      </Card>
    </Page>
  );
};
