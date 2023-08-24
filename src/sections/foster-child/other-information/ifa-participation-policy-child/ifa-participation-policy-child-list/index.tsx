import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const columnsIfaParticipationPolicyTable = (
  router: any,
  openDeleteModel: any
) => [
  {
    id: "select",
    header: ({ table, row }: any) => {
      // console.log(table.getSelectedRowModel().flatRows);
      return (
        <Box>
          <Checkbox
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
    accessorFn: (row: any) => row,
    id: "srNo",
    cell: (info: any) => Number(info?.row?.id) + 1,
    header: "Sr. No",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.date,
    id: "date",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.participationActivity,
    id: "participationActivity",
    cell: (info: any) => info.getValue(),
    header: () => <span>Participation Activity</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.fileName,
    id: "fileName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Files / Recording</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.achievement,
    id: "achievement",
    cell: (info: any) => info.getValue(),
    header: () => <span>Achievement</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.rating,
    id: "rating",
    cell: (info: any) => (
      <Box>
        <Rating readOnly name="simple-controlled" value={info.getValue()} />
      </Box>
    ),
    header: () => <span>Rating</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              `/foster-child/other-information/ifa-participation-policy-for-child/edit-ifa-participation-policy-for-child?ifaChildId=${info.getValue()}`
            )
          }
        />
        <TableAction
          type="delete"
          onClicked={() => openDeleteModel(info.getValue())}
          size="small"
        />

        <TableAction
          type="view"
          onClicked={() => router.push(`?${info.getValue()}`)}
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];

export const DummyData = [
  {
    id: "1",
    srNo: "1",
    date: new Date().toDateString(),
    participationActivity: "Half Term Events",
    filesRecording: "abc.mp3",
    achievement: "Medal on Sport Event",
    rating: "",
  },
];
