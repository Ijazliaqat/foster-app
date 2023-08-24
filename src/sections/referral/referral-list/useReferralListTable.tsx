import { useEffect, useState } from "react";
import { Box, Checkbox, Stack } from "@mui/material";
import { TableDemoData } from ".";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import Image from "next/image";

export const useReferralListTable = () => {
  const path = "/referral/referral-list/referral-form";
  const router = useRouter();
  const [data, setData] = useState(TableDemoData);
  const [select, setSelect] = useState({ status: "", refereeType: "" });
  const [workFlowModal, setWorkFlowModal] = useState(false);
  const [isShareModal, setIsShareModal] = useState(false);

  const dynamicTableHeader = () => {
    switch (select?.refereeType) {
      case "fosterCarer":
        return "Disability";
      default:
        return "Special Needs";
    }
  };

  const dynamicTableHeaderFn = (row: any) => {
    switch (select?.refereeType) {
      case "fosterCarer":
        return row.disability;
      default:
        return row.specialNeeds;
    }
  };

  const dynamicTableHeaderData = (info: any) => {
    if (select?.refereeType === "fosterCarer")
      return <Stack>{info.getValue()}</Stack>;
    else {
      return (
        <Stack sx={(theme) => styles.specialNeeds(theme, info.getValue())}>
          {info.getValue()}
        </Stack>
      );
    }
  };

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "share":
        setIsShareModal(true);
        break;
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
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
      accessorFn: (row: any) => row.photo,
      id: "photo",
      cell: (info: any) => (
        <span>
          <Image src={info.getValue()} width={40} height={40} alt="Picture" />
        </span>
      ),
      header: () => <span>Photo</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refereeName,
      id: "refereeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referee Name</span>,

      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refereeType,
      id: "refereeType",
      cell: (info: any) => info.getValue(),
      header: () => <span> Referee Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referralDate,
      id: "referralDate;",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referral Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referredBy,
      id: "referredBy",
      cell: (info: any) => info.getValue(),
      header: "Referred By",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referredRole,
      id: "referredRole",
      cell: (info: any) => info.getValue(),
      header: "Referrer Role",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => dynamicTableHeaderFn(row),
      id: dynamicTableHeader(),
      cell: (info: any) => dynamicTableHeaderData(info),
      header: dynamicTableHeader(),
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.refereeStatus,
      id: "refereeStatus",
      cell: (info: any) => info.getValue(),
      header: "Referee Status",
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "share", "view"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  const selectHandler = (data: any) => {
    setSelect({ ...select, refereeType: data.refereeType });
  };
  return {
    workFlowModal,
    setWorkFlowModal,
    select,
    setSelect,
    data,
    router,
    selectHandler,
    columns,
    setIsShareModal,
    isShareModal,
  };
};

const styles = {
  specialNeeds: (theme: any, specialNeeds: any) => ({
    width: "84px",
    height: "25px",
    justifyContent: " center",
    borderRadius: "4px",
    margin: "auto",
    backgroundColor:
      specialNeeds === "Yes"
        ? "#1694DB"
        : specialNeeds === "No"
        ? "#198754"
        : "",
    color:
      specialNeeds && theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
  }),
};
