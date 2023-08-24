import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const sanctionDetailsTableColumnsFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row.reviewDate,
    id: "school",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sanction Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => prepareRecordForDelete?.(info?.row?.original?.id)}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/other-information/sanction-details-list/sanction-details`,
                query: {
                  sanctionDetailsId: info?.getValue(),
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
                pathname: `/foster-child/other-information/sanction-details-list/sanction-details`,
                query: {
                  sanctionDetailsId: info?.getValue(),
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
    header: () => <span>actions</span>,
  },
];
