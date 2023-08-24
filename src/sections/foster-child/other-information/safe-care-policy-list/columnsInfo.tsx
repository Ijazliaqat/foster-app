import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import Link from "next/link";

export const getColumns = (parms: any) => {
  const { router, handleDeleteDocs } = parms;
  const { query } = router;
  const { fosterChildId } = query;
  return [
    {
      accessorFn: (row: any) => row.CarerName,
      id: "Carer Name",
      cell: (info: any) => info.getValue(),
      header: "Carer Name",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.sectionA.inspectionDate,
      id: "Inspection Date",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: "Inspection Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.sectionA?.nextInspectionDate,
      id: "subject",
      cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
      header: "Next Inspection Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "Status",
      cell: (info: any) => info.getValue(),
      header: "Status",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.f,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <Link
            href={`/foster-child/other-information/safe-care-policy-list/details?fosterChildId=${fosterChildId}&action=update&id=${info.row.original.id}`}
          >
            <TableAction size="small" type="edit" />
          </Link>
          <Link
            href={`/foster-child/other-information/safe-care-policy-list/details?fosterChildId=${fosterChildId}&action=view&id=${info.row.original.id}`}
          >
            <TableAction
              size="small"
              type="view"
              onClick={() =>
                router.push(
                  `/foster-child/other-information/safe-care-policy-list/details?fosterChildId=${fosterChildId}&action=view&id=${info.row.original.id}`
                )
              }
            />
          </Link>
          <DeletePrompt
            onDeleteClick={() => handleDeleteDocs(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
