import { useState } from "react";
import { useRouter } from "next/router";
import { TableDummyData } from ".";
import { Box, Checkbox } from "@mui/material";
import Image from "next/image";

import documentIcon from "../../../../assets/img/documentIcon.png";

export const useTrainerEvaluationTable = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const router = useRouter();
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
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
      accessorFn: (row: any) => row.trainingName,
      id: "trainingName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainerName,
      id: "trainerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Trainer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingDate,
      id: "trainingDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.evaluationForm,
      id: "evaluationForm",
      cell: (info: any) => (
        <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}>
          <Image src={documentIcon} alt="Document" />
        </Box>
      ),
      header: () => <span>Evaluation Form</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.evaluationProvideBy,
      id: "evaluationProvideBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Evaluation Provide by</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.evaluationDate,
      id: "evaluationDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Evaluation Date</span>,
      isSortable: true,
    },
  ];
  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };
  return {
    TableDummyData,
    router,
    handleDelete,
    columns,
  };
};
