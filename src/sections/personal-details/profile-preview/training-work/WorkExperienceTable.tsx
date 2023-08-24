import React from "react";
import { Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";

const WorkExperienceTable = () => {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      employeeName: "John Christ",
      position: "Foster",
      experience: "Coodinate Patient",
      leavingReason: "Willing to Learn",
      startDate: "09/04/2007",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.employeeName,
      id: "employeeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of Employer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.position,
      id: "position",
      cell: (info: any) => info.getValue(),
      header: () => <span>Position</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.experience,
      id: "experience",
      cell: (info: any) => info.getValue(),
      header: () => <span>Experience</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.leavingReason,
      id: "leavingReason",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reason for Leaving</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.startDate,
      id: "startDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Start Date</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 3 }}
        component={"div"}
      >
        Work Experience
      </Typography>
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default WorkExperienceTable;
