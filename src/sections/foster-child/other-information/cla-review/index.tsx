import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const getColumnsClaReview = (makePath: any, setOpen: any) => {
  return [
    {
      accessorFn: (row: any) => row?.dateOfReview ?? "-",
      id: "dateOfReview",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date of Review",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.reviewType ?? "-",
      id: "reviewType",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Review Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "id",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/other-information/cla-review/edit-cla-review",
                  queryParams: { claReviewId: info.getValue() },
                })
              )
            }
          />
          <TableAction
            type="delete"
            onClicked={() => setOpen(info.getValue())}
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/other-information/cla-review/view-cla-review",
                  queryParams: { claReviewId: info.getValue() },
                })
              )
            }
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};

export { default as ClaReviewTable } from "./ClaReviewTable";
