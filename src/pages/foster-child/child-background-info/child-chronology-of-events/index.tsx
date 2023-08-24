import HomeIcon from "@mui/icons-material/Home";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import ChildChronologyOfEventsList from "@root/sections/foster-child/child-background-info/child-chronology-of-events/ChildChronologyOfEventsList";
import { useRouter } from "next/router";

const BREADCRUMBS = (fosterChildId: any) => {
  return [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: `/foster-child?fosterChildId=${fosterChildId}`,
    },
    {
      name: "Child Chronology of Events",
      href: "",
    },
  ];
};

const PAGE_TITLE = "Child Chronology of Events";
ChildChronologyOfEvents.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ChildChronologyOfEvents() {
  const router = useRouter();
  const { fosterChildId } = router.query;
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        title={PAGE_TITLE}
        breadcrumbs={BREADCRUMBS(fosterChildId)}
      />
      <ChildChronologyOfEventsList fosterChildId={fosterChildId} />
    </>
  );
}
