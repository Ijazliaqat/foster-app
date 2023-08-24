import React, { useRef } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { CHILD_PATHWAYL_PLAN_MOCK_DATA } from ".";
export const useChildPathwayPlan = () => {
  const theme = useTheme();
  const route = useRouter();
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const [childPathwayPlanMockData, setChildPathwayPlanMockData] =
    React.useState(CHILD_PATHWAYL_PLAN_MOCK_DATA);
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  // const {
  //   data,
  //   isError: childPersonalGoalsListError,
  //   isFetching: childPersonalGoalsListFetching,
  //   isLoading: childPersonalGoalsListLoading,
  //   isSuccess: childPersonalGoalsListSuccess,
  // }: any = useGetChildPersonalGoalsListQuery({ search: search });

  // const childPersonalGoalsListData = data?.absence_details;
  // const meta = data?.meta;
  const columns = [
    // {
    //   id: "select",
    //   header: ({ table, row }: any) => {
    //     console.log(table.getSelectedRowModel().flatRows);
    //     return (
    //       <Box>
    //         <Checkbox
    //           checked={table.getIsAllRowsSelected()}
    //           onChange={table.getToggleAllRowsSelectedHandler()}
    //         />
    //       </Box>
    //     );
    //   },
    //   // cell: ({ row, table }: any) => (
    //   //   <Box>
    //   //     <Checkbox
    //   //       disabled={row?.original?.Assigned}
    //   //       checked={row?.original?.Assigned ? false : row.getIsSelected()}
    //   //       onChange={row.getToggleSelectedHandler()}
    //   //     />
    //   //   </Box>
    //   // ),
    // },
    {
      accessorFn: (row: any) => row.id ?? "-",
      id: "srNo",
      cell: (info: any) => info?.row?.index + 1,
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.pathwayPlanVersion,
      id: "pathwayPlanVersion",
      cell: (info: any) => info.getValue(),
      header: () => <span>Pathway Plan Version</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reviewedBy,
      id: "reviewedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reviewed By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "author",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.consultationTeam,
      id: "consultationTeam",
      cell: (info: any) => info.getValue(),
      header: () => <span>Consultation Team</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box display={"flex"} gap={0.5}>
          <TableAction type="edit" />
          <TableAction
            type="view"
            onClicked={() =>
              route.push({
                // pathname: `child-personal-goals/personal-goals-list-view`,
                // query: {
                //   id: info?.row?.original?.id,
                //   childId: info?.row?.original?.fosterChildId,
                //   action: "view",
                // },
              })
            }
          />
          <TableAction
            type="print"
            onClicked={() => console.log(info.row.original.id)}
          />
          <TableAction type="download" />
          <div
            style={{
              border: "1px solid ",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "34px",
              width: "34px",
              backgroundColor: theme.palette.grey[500],
            }}
          >
            <NotificationsActiveIcon sx={{ color: "white" }} />
          </div>
        </Box>
      ),
      header: () => <span>actions</span>,
    },
  ];

  return {
    childPathwayPlanMockData,
    setChildPathwayPlanMockData,
    tableHeaderRefTwo,
    search,
    setSearch,
    columns,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    // childPersonalGoalsListError,
    // childPersonalGoalsListFetching,
    // childPersonalGoalsListLoading,
    // childPersonalGoalsListSuccess,
    // childPersonalGoalsListData,
    // meta,
  };
};
