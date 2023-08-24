import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Image from "next/image";

import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
// utils

// ----------------------------------------------------------------------
export const titleCase = (string: any) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};

export const columns = ({ fosterChildId, listDeleteHandler }: any) => {
  return [
    {
      accessorFn: (row: any) => row.assessmentDate,
      id: "assessmentDate",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>
      ),
      header: () => <span>Assessment Date</span>,
    },
    {
      accessorFn: (row: any) => row.medalLevel,
      id: "medalLevel",
      cell: (info: any) => titleCase(info.getValue()),
      header: () => <span>Assessment Level</span>,
    },
    {
      accessorFn: (row: any) => row.duration,
      id: "duration",
      cell: (info: any) => {
        return `${dayjs(
          dayjs(info.row.original.toDate).format("YYYY-MM-DD")
        ).diff(
          dayjs(info.row.original.fromDate).format("YYYY-MM-DD"),
          "days"
        )} Days`;
      },
      header: () => <span>Duration</span>,
    },
    {
      accessorFn: (row: any) => row.outcome,
      id: "outcome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Outcome</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/independence-packs-life-skill-assessment/edit-independence-pack/${titleCase(
                  info?.row?.original?.medalLevel
                )}/${info?.row?.original?.id}?fosterChildId=${fosterChildId}`
              )
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />{" "}
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/independence-packs-life-skill-assessment/view-independence-pack/${titleCase(
                  info?.row?.original?.medalLevel
                )}/${info?.row?.original?.id}?fosterChildId=${fosterChildId}`
              )
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
};

export { default as IndependencePackTable } from "./independence-pack-table/IndependencePackTable";
