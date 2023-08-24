import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const petQuestionnaireTable = (makePath: any) => [
  {
    accessorFn: (row: any) => row.createdAt,
    id: "createdAt",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Pet Questionnaire Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.inspectionDate,
    id: "inspectionDate",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Next Inspection Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.petQuestionnaire1?.nameOfAnimal,
    id: "nameOfAnimal",
    cell: (info: any) => info.getValue(),
    header: "Name Of Pet",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => (info.getValue() ? "Yes" : "No"),
    header: "Status",
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
              makePath({
                path: "/carer-info/personal-info/pet-questionnaire/edit-pet-questionnaire",
                queryParams: { petId: info.getValue() },
              })
            )
          }
        />
        <TableAction
          type="view"
          onClicked={() =>
            router.push(
              makePath({
                path: "/carer-info/personal-info/pet-questionnaire/view-pet-questionnaire",
                queryParams: { petId: info.getValue() },
              })
            )
          }
        />
      </Box>
    ),
    header: "Actions",
    isSortable: false,
  },
];
