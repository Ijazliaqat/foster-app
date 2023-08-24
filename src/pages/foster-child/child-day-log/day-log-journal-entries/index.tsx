import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import DayLogTable from "@root/sections/foster-child/child-day-log/day-log-journal-entries/DayLogJournalTable";

// ----------------------------------------------------------------------

// Constants
const BREADCRUMBS = (fosterChildId: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child?fosterChildId=${fosterChildId}`,
  },
  {
    name: "Day Log/Journal Entries List",
    href: "",
  },
];

const PAGE_TITLE = "Day Log/Journal Entries";
// ----------------------------------------------------------------------

DayLogJournalEntries.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function DayLogJournalEntries() {
  const router = useRouter();
  const { fosterChildId } = router?.query;
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <DayLogTable fosterChildId={fosterChildId} />
      </Paper>
    </Page>
  );
}
