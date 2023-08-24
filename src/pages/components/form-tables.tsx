// @mui
import Grid from "@mui/material/Grid";
import ComponentsBox from "@root/sections/overview/ComponentsBox";
// components
import Page from "@root/components/Page";
import ComponentsLayout from "@root/layouts/ComponentsLayout";
import CrudFormTable from "@root/sections/overview/table/crud-form-table/CrudFormTable";

// ----------------------------------------------------------------------
//Layout
FormTables.getLayout = function getLayout(page: any) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

// ----------------------------------------------------------------------
//Constants
const fullWidth = { gridSize: { xs: 12, md: 12, lg: 12 } };

// ----------------------------------------------------------------------

export default function FormTables() {
  return (
    <Page title="Form Tables">
      <Grid container sx={{ gap: 3.4 }} alignItems="flex-start">
        <ComponentsBox title="Form Tables" {...fullWidth}>
          <CrudFormTable />
        </ComponentsBox>
      </Grid>
    </Page>
  );
}
