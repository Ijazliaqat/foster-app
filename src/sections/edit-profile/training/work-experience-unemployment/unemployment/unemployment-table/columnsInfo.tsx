import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { openViewUpdateModel } = parms;
  return [
    {
      accessorFn: (row: any) => row.leavingReason,
      id: "resForUnemplo",
      cell: (info: any) => shortName(info.getValue(), 10),
      header: "Reason",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.startDate,
      id: "startDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Start Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.endDate,
      id: "endDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "End Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "unemployment",
      cell: (info: any) => "Not Avialable",
      header: "Unemployed",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() => openViewUpdateModel(info.row.original.id, true)}
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() => openViewUpdateModel(info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
