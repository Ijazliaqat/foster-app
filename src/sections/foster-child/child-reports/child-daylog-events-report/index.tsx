import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const childDaylogEventsReportInfoTableColumnsFunction = (
  router?: any,
  prepareRecordForDelete?: any,
  theme?: any
) => [
  {
    accessorFn: (row: any) => row?.childName,
    id: "childName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Name</span>,
  },
  {
    accessorFn: (row: any) => row?.dateOfOccurence,
    id: "dateOfOccurence",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY :: HH:mm"),
    header: () => <span>Date /Time of Occurence</span>,
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "status",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Status</span>,
  },
  {
    accessorFn: (row: any) => row?.createdDate,
    id: "createdDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Created Date</span>,
  },
  {
    accessorFn: (row: any) => row?.createdBy,
    id: "createdBy",
    cell: (info: any) => info.getValue(),
    header: () => <span>Created By</span>,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => prepareRecordForDelete?.(info?.getValue())}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info`,
                query: {
                  id: info?.getValue(),
                  action: "edit",
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info`,
                query: {
                  id: info.getValue(),
                  action: "view",
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
          />
        </Box>
      );
    },
    header: () => <span>Action</span>,
  },
];

export const CHILDDAYLOGEVENTSREPORTLISTPAGELIMIT = 10;
