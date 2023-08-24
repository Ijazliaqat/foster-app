import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const statutoryMedicalListXTableColumnsFunction = (
  router?: any,
  type?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row?.medicalDate,
    id: "medicalDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Medical Date</span>,
  },
  {
    accessorFn: (row: any) => row?.dueDate,
    id: "dueDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Due Date</span>,
  },
  {
    accessorFn: (row: any) => row?.onFile,
    id: "onFile",
    cell: (info: any) => info.getValue(),
    header: () => <span>On File</span>,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => prepareRecordForDelete?.(info.getValue())}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
                query: {
                  id: info.getValue(),
                  type,
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
                pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
                query: {
                  id: info.getValue(),
                  type,
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

export const STATUTORYMEDICALLISTTYPEPAGELIMIT = 10;

 export const headerHeading: any = {
    EHCP: "EHCP",
    CLA: "CLA MEDICAL",
    Dental: "Dental Check",
    Optician: "Optician Check",
  };
