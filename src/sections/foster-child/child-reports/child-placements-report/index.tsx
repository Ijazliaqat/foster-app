import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const data = [
  {
    caseId: "John",
    date: "2023-08-09T12:32:47.582Z",
    childName: "John",
    placementStatus: "John",
    carerName: "John",
    id: "2163421684589234523806598",
  },
  {
    caseId: "Doe",
    date: "2023-08-09T12:32:47.582Z",
    childName: "Doe",
    placementStatus: "Doe",
    carerName: "Doe",
    id: "2163421684589234523806598",
  },
];

export const getColumnsChildPlacementsReport = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.caseId ?? "-",
      id: "caseId",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Case ID",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.date ?? "-",
      id: "date",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.childName ?? "-",
      id: "childName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Child Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.placementStatus ?? "-",
      id: "placementStatus",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Placement Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.carerName ?? "-",
      id: "carerName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Carer Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "id",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/child-reports/child-placements-report/view-child-placements-report",
                  queryParams: { childReportsId: info.getValue() },
                })
              )
            }
          />
          <TableAction type="print" onClicked={() => {}} />
          <TableAction type="share" onClicked={() => {}} />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};

export { default as ChildPlacementsReportTable } from "./ChildPlacementsReportTable";
