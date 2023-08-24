import React from "react";
import { Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";

const TrainingWorkTable = () => {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      trainingName: "Character",
      certificateIssued: "09/04/2007",
      certificateExpiryDate: "09/04/2007",
      Attachments: "File",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.trainingName,
      id: "trainingName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.certificateIssued,
      id: "certificateIssued",
      cell: (info: any) => info.getValue(),
      header: () => <span>Certificate Issued</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.certificateExpiryDate,
      id: "certificateExpiryDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Certificate Expiry Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Attachments,
      id: "Attachments",
      cell: (info: any) => info.getValue(),
      header: () => <span>Attachments</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 3 }}
        component="div"
      >
        Additional Training Details
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

export default TrainingWorkTable;
