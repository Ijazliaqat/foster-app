import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
export const getColumns = (parms: any) => {
  const { router, handleDeleteTherapy } = parms;
  const { query } = router;
  const { fosterChildId } = query;
  return [
    {
      accessorFn: (row: any) => row.referralDate,
      id: "CAMHS Date",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: " CAMHS Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.appointmentDate,
      id: "Appointment",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: "Appointment",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.f,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <Link
            href={`/foster-child/health-medical-history/therapy-info-list/child-therapy-info/?fosterChildId=${fosterChildId}&action=update&therapyInfoId=${info.row.original.id}`}
          >
            <TableAction size="small" type="edit" />
          </Link>
          <Link
            href={`/foster-child/health-medical-history/therapy-info-list/child-therapy-info/?fosterChildId=${fosterChildId}&action=view&therapyInfoId=${info.row.original.id}`}
          >
            <TableAction size="small" type="view" />
          </Link>
          <DeletePrompt
            onDeleteClick={() => handleDeleteTherapy(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
