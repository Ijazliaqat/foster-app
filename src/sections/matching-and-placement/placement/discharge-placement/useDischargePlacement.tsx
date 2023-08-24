import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import pdfFile from "../../../../assets/svg/safeguarding/pdfDownload.svg";

// ===========================================================================

export const useDischargePlacement = () => {
  let router = useRouter();
  const theme: any = useTheme();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const handleDeleteClose = () => setIsDeleteModal(!isDeleteModal);

  const SELECT_FILTERS = [
    {
      key: "fosterCarer",
      label: "Foster Carer",
      options: [{ label: "Foster Carer", value: "FosterCarer" }],
    },
  ];

  const columns = [
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.dateDischarge,
      id: "dateDischarge",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Of Discharge</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.photo,
      id: "photo",
      cell: (info: any) => (
        <Box sx={{ borderRadius: "50px" }}>
          <Image width={40} height={40} src={pdfFile} alt="" />
        </Box>
      ),
      header: () => <span>Discharge report</span>,
    },
    {
      accessorFn: (row: any) => row.approvedRole,
      id: "approvedRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved by (Role)</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.localAuthority,
      id: "localAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.localAuthoritySW,
      id: "localAuthoritySW",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority SW</span>,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => <button  style={buttonStyle(info.getValue())}>{info.getValue()}</button>,
      header: () => <span>Status</span>,
      isSortable: false,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() => router.push({ pathname: "/placement/discharge/form", query: { id: info.row.original.id, action: "edit" } })}
          />
          <TableAction type="delete" onClicked={() => setIsDeleteModal(true)} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return { theme, router, columns, SELECT_FILTERS, isDeleteModal, handleDeleteClose };
};


const buttonStyle = (status:string) => ({
  width: "95px",
  height: "31px",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
  backgroundColor:status === 'Inprogress' ? '#F6830F' : '#0E918C'
});