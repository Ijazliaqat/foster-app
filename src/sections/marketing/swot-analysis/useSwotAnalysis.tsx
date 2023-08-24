import { Box, Checkbox } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const useSwotAnalysis = () => {
  const path = "/marketing/swot-analysis/form";
  const router = useRouter();
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.sNO,
      id: "S.NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reportDate,
      id: "reportDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>SWOT Report Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.topic,
      id: "topic",
      cell: (info: any) => info.getValue(),
      header: () => <span>SWOT Topic</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.duration,
      id: "duration",
      cell: (info: any) => info.getValue(),
      header: () => <span>SWOT Duration</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.competitor,
      id: "competitor",
      cell: (info: any) => (
        <Box sx={(theme) => styles.competitor()}>
          <Link href={`/marketing/swot-analysis/competitor`}>
            <Image src={info.getValue()} width={44} height={44} alt="Picture" />
          </Link>
        </Box>
      ),
      header: () => <span>SWOT(Competitor)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reviewer,
      id: "reviewer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reviewer (Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reviewDate,
      id: "reviewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Review Date</span>,
      isSortable: true,
    },
  ];
  return {
    columns,
    handleAction,
    router,
    path,
  };
};
const styles = {
  competitor: () => ({
    justifyContent: " center",
    display: "flex",
    cursor: "pointer",
  }),
};
