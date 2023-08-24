import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { openViewUpdateModel } = parms;
  return [
    {
      accessorFn: (row: any) => row.employerName,
      id: "employeName",
      cell: (info: any) => info.getValue(),
      header: "Name of Employer",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.position,
      id: "position",
      cell: (info: any) => info.getValue(),
      header: "Position",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.experience,
      id: "exp",
      cell: (info: any) => shortName(info.getValue(), 20),
      header: "Experience",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "leavingRes",
      cell: (info: any) => "Not Avialable",
      header: "Reason for leaving",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.createdAt,
      id: "startDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Start Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.updatedAt,
      id: "endDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "End Date",
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
