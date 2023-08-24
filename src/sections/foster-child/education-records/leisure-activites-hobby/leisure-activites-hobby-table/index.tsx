import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Image from "next/image";

import documentIcon from "../../../../../assets/img/ifaAvatar.png";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import RHFRating from "./RHFRtaing";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
// utils

// ----------------------------------------------------------------------

export const LeisureActivityDefaultValues = {
  hobby: "",
  description: "",
  date: new Date(),
  media: null,
  time: "",
  stars: Number,
};

export const FormSchema = Yup.object().shape({
  hobby: Yup.string().required("Field is required"),
  description: Yup.string().required("Field is required"),
  time: Yup.string().required("Field is required"),
  stars: Yup.number().required("Field is required"),
  date: Yup.date().required("Date of Interview is required"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "hobby",
      label: "Types of Hobbies",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Cricket", label: "Cricket" },
      { value: "Football", label: "Football" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Description",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    otherOptions: {
      name: "date",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "time",
      label: "Time",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "media",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "stars",
      label: "Rewards / Stars / Stickers",
      sx: {
        "& .MuiRating-iconFilled": {
          color: "#0E918C",
        },
        "& .MuiRating-iconHover": {
          color: "#0E918C",
        },
      },
      size: "lg",
    },
    component: RHFRating,
  },
];
export const columns = ({
  activePath,
  listDeleteHandler,
  fosterChildId,
}: any) => {
  return [
    {
      accessorFn: (row: any) => row.hobby,
      id: "hobby",
      cell: (info: any) => info.getValue(),
      header: () => <span>Types of Hobbies</span>,
    },
    {
      accessorFn: (row: any) => row.description,
      id: "description",
      cell: (info: any) => info.getValue(),
      header: () => <span>Description</span>,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>
      ),
      header: () => <span>Date</span>,
    },
    {
      accessorFn: (row: any) => row.time,
      id: "time",
      cell: (info: any) => info.getValue(),
      header: () => <span>Time</span>,
    },
    {
      accessorFn: (row: any) => row.media,
      id: "media",
      cell: (info: any) => (
        <Box
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
        >
          <Image
            width={35}
            height={35}
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${info.getValue()}`}
            alt="Document"
          />
        </Box>
      ),
      header: () => <span>Upload Picture/Video</span>,
    },
    {
      accessorFn: (row: any) => row.stars,
      id: "stars",
      cell: (info: any) => (
        <Rating
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#0E918C",
            },
          }}
          name="read-only"
          value={info.getValue()}
          readOnly
        />
      ),
      header: () => <span>Reward/Stars</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `${activePath}/edit-leisure-activity/${info?.row?.original?.id}?fosterChildId=${fosterChildId}`
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
                `${activePath}/view-leisure-activity/${info?.row?.original?.id}?fosterChildId=${fosterChildId}`
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

export { default as LeisureActivitiesTable } from "./LeisureActivitiesTable";
