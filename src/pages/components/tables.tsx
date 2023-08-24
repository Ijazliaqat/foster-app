// @mui
import Grid from "@mui/material/Grid";
import ComponentsBox from "@root/sections/overview/ComponentsBox";
// components
import Page from "@root/components/Page";
import ComponentsLayout from "@root/layouts/ComponentsLayout";
import TableHeaders from "@root/sections/overview/table/TableHeaders";
import TableActions from "@root/sections/overview/table/TableActions";
import {
  TableBodies,
  TableWithCheckBox,
  TableWithLoading,
  TableWithfatching,
  TableWithPagenation,
  TableWithActionBtns,
  TableWithNoData,
  EditableTable,
  DynamicEditTable,
} from "@root/sections/overview/table/TableBodies";

// ----------------------------------------------------------------------
//Layout
Tables.getLayout = function getLayout(page: any) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

// ----------------------------------------------------------------------
//Constants
const fullWidth = { gridSize: { xs: 12, md: 12, lg: 12 } };

// ----------------------------------------------------------------------

export default function Tables() {
  return (
    <Page title="Tables">
      <Grid container sx={{ gap: 3.4 }} alignItems="flex-start">
        <ComponentsBox title="Tables" {...fullWidth}>
          <TableHeaders />
          <TableActions />
          <TableBodies />
          <TableWithActionBtns />
          <TableWithCheckBox />
          <TableWithLoading />
          <TableWithfatching />
          <TableWithPagenation />
          <TableWithNoData />
          <EditableTable />
          <DynamicEditTable />
        </ComponentsBox>
      </Grid>
    </Page>
  );
}
