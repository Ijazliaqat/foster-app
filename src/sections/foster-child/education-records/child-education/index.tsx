import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
export const educationInfoTableColumnsFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row.school,
    id: "school",
    cell: (info: any) => info.getValue(),
    header: () => <span>School Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.classStudying,
    id: "classStudying",
    cell: (info: any) => info.getValue(),
    header: () => <span>Class Studying</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.schoolYear,
    id: "schoolYear",
    cell: (info: any) => info.getValue(),
    header: () => <span>School Year</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.school,
    id: "school",
    cell: (info: any) => info.getValue(),
    header: () => <span>Current School</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      console.log(info);

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
                pathname: `/foster-child/education-records/child-education/child-education-info`,
                query: {
                  educationInfoId: info?.getValue(),
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
                pathname: `/foster-child/education-records/child-education/child-education-info`,
                query: {
                  educationInfoId: info?.getValue(),
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
