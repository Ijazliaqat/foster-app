import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
import router from "next/router";

export const SELECTFILTERS = [
  {
    key: "status",
    label: "Status",
    options: [
      { label: "Placed", value: "Placed" },
      { label: "Current Referral", value: "Current Referral" },
    ],
  },
];

export const data = [
  {
    refereeName: "John",
    gender: "Male",
    dob: "Wed May 10 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
    status: "Placed",
    referralDate: "Wed May 10 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
    refereeType: "Foster Child",
    specialNeeds: false,
    id: "7835q47834659034",
  },
  {
    refereeName: "Doe",
    gender: "Male",
    dob: "Wed May 10 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
    status: "Placed",
    referralDate: "Wed May 10 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
    refereeType: "Foster Child",
    specialNeeds: true,
    id: "578834659063490563490856",
  },
];

export const getColumnsChildReferral = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.refereeName ?? "-",
      id: "refereeName",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Referee Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.gender ?? "-",
      id: "gender",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Gender",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dob ?? "-",
      id: "dob",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date of Birth",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status ?? "-",
      id: "status",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Status",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.referralDate ?? "-",
      id: "referralDate",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Referral Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.refereeType ?? "-",
      id: "refereeType",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Referee Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.specialNeeds ?? "-",
      id: "specialNeeds",
      cell: (info: any) => (
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            width={"50%"}
            bgcolor={
              info.getValue()
                ? (theme: any) => theme.palette.error.lighter
                : (theme: any) => theme.palette.success.main
            }
            borderRadius={1}
          >
            {info.getValue() ? "Yes" : "No"}
          </Box>
        </Box>
      ),
      header: "Special Needs",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "id",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/foster-child/referrals/child-referral/view-child-referral",
                  queryParams: { childReferralId: info.getValue() },
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

export { default as ChildReferralTable } from "./ChildReferralTable";
