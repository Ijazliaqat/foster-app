import Image from "next/image";
import TableImage from "../../assets/img/Approve.png";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import router from "next/router";
import dayjs from "dayjs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const SELECTFILTERS = [
  {
    key: "selectCarer",
    label: "Select Carer",
    options: [{ label: "Carer", value: "Carer" }],
  },
  {
    key: "selectStatus",
    label: "Select Status",
    options: [{ label: "Status", value: "Status" }],
  },
  {
    key: "selectAreaOffice",
    label: "Select Area Office",
    options: [{ label: "Office", value: "Office" }],
  },
];

export const getFosterCarerListColumns = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.profileImage,
      id: "img",
      cell: (info: any) => (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Image
            src={process.env.NEXT_PUBLIC_IMG_URL + info.getValue()}
            alt={"Image"}
            width={35}
            height={35}
          />
        </Box>
      ),
      header: "Image",
      isSortable: false,
    },
    {
      accessorFn: (row: any) =>
        `${row?.firstName ?? "-"} ${row?.lastName ?? ""}`,
      id: "name",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.agencySocialWorker,
      id: "agencySocialWorker",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Agency Social Worker",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.nationality ?? "-",
      id: "areaLocality",
      cell: (info: any) => info.getValue(),
      header: "Area/Locality",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.gender ?? "-",
      id: "gender",
      cell: (info: any) => info.getValue(),
      header: "Gender",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.location ?? "-",
      id: "areaOffice",
      cell: (info: any) => info.getValue(),
      header: "Area Office",
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.trainingHistory?.specialities?.status ?? "-",
      id: "status",
      cell: (info: any) => info.getValue(),
      header: "Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "detailsId",
      cell: (info: any) => (
        <Button
          variant={"outlined"}
          onClick={() =>
            router.push(
              makePath({
                path: "carer-info",
                passOldQuery: true,
                queryParams: { fosterCarerId: info.getValue() },
              })
            )
          }
          sx={{ whiteSpace: "nowrap" }}
        >
          View Details
        </Button>
      ),
      header: "Details",
      isSortable: false,
    },
  ];
};

export const dataFosterCarerTask = [
  {
    task: "Task 1",
    priority: "High",
    img: TableImage,
    date: "Wed May 10 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
    status: "Pending",
  },
  {
    task: "Task 2",
    priority: "Low",
    img: TableImage,
    date: "Wed May 10 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
    status: "Pending",
  },
];

export const columnsFosterCarerTask = [
  {
    accessorFn: (row: any) => row?.task,
    id: "task",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Task #",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row?.priority,
    id: "priority",
    cell: (info: any) => (
      <>
        {info.getValue() === "High" ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={(theme: any) => theme.palette.primary.main}
          >
            <ArrowUpwardIcon />
            High
          </Box>
        ) : (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={(theme: any) => theme.palette.error.main}
          >
            <ArrowDownwardIcon />
            Low
          </Box>
        )}
      </>
    ),
    header: "Priority",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.img,
    id: "img",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image
          src={info.getValue()}
          alt={"User Image"}
          width={35}
          height={35}
        />
      </Box>
    ),
    header: "Image",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row?.date,
    id: "date",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "status",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Status",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.action,
    id: "action",
    cell: (info: any) => <MuiSelect />,
    header: "Details",
    isSortable: false,
  },
];

const MuiSelect = () => {
  const options = [
    {
      value: "Option 1",
      label: "Option 1",
    },
  ];
  return (
    <TextField
      select
      label="Select Action"
      sx={{ textAlign: "left", width: "80%" }}
      defaultValue={" "}
      size={"small"}
    >
      <MenuItem value=" ">Select Option</MenuItem>
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export { default as FosterCarerListTable } from "./FosterCarerListTable";
