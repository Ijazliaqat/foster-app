import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box, Typography } from "@mui/material";
import React from "react";
import { PanelMembersData } from ".";
import Image from "next/image";

const PanelMember = () => {
  const columns = [
    {
      id: "id",
      accessorFn: (row: any) => row.id,
      header: () => <span>sr. no</span>,
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Image
            src={info.row.original.userProfile}
            height={33}
            width={33}
            alt="icon"
          />
          <Typography sx={styles.text}>{info.getValue()}</Typography>
        </Box>
      ),
      header: () => <span>Name</span>,
    },
    {
      accessorFn: (row: any) => row.caseName,
      id: "caseName",
      cell: (info: any) => (
        <Typography sx={styles.text}>{info.getValue()}</Typography>
      ),
      header: () => <span>Case Name</span>,
    },
    {
      accessorFn: (row: any) => row.accessRevokeDate,
      id: "accessRevokeDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Access RevokeDate</span>,
    },
  ];

  
  return (
    <Box>
      <TableHeader title={"Panel Members"} hideSearch />
      <CustomTable
        columns={columns}
        data={PanelMembersData}
        isLoading={false}
        isSuccess={true}
        isPagination={false}
      />
    </Box>
  );
};

export default PanelMember;

const styles = {
  text: { textTransform: "capitalize", fontSize: "14px", fontWeight: 600 },
};
