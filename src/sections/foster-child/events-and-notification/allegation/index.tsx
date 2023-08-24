import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const allegationInfoTableColumnsFunction = (
  router?: any,
  prepareRecordForDelete?: any,
  theme?: any
) => [
  {
    accessorFn: (row: any) => row?.allegationDate,
    id: "allegationDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Date of Allegation</span>,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => (
      <>
        {info.getValue()}{" "}
        {info?.row?.original?.status === "Pending" && (
          <span
            onClick={() =>
              router.push({
                pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
                query: {
                  id: info?.row?.original?.id,
                  action: "edit",
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
            style={{
              color: "white",
              fontSize: ".4rem",
              marginTop: "1.5rem",
              marginRight: "1rem",
              padding: ".15rem .15rem",
              borderRadius: "50%",
              backgroundColor: "black",
              cursor: "pointer",
            }}
          >
            draft
          </span>
        )}
      </>
    ),
    header: () => <span>Status</span>,
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
                pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
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
                pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
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

export const ALLEGATIONLISTPAGELIMIT = 10;
