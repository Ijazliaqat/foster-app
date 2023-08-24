import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select, 
} from "@mui/material";
import Image from "next/image";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import { useFRC1 } from "./useFRC1";
import TableHeader from "@root/components/TableHeader";
import TableSubHeader from "../../table-sub-header/TableSubHeader";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { FRC1FilterData, tableMockData, tableSubHeader } from ".";

const FRC1 = () => {
  const { handleSearch, handleAction, handleDeleteModal, deleteModal } =
    useFRC1();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row, table }: any) => (
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>{`Child's Name (DOB)`}</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.socialWorker,
      id: "socialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>{`Foster Carer(s)`}</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: "createdDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "delete", "view", "print"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Card sx={{ ...styles.cardStyle, py: 2, px: 1 }}>
        <Box display={"flex"} justifyContent={"end"} sx={{ px: 2 }}>
          <Image src={automatedIcon} alt="icon" />
        </Box>
        <Card sx={{ p: 2, my: 2 }}>
          <Grid container spacing={4}>
            {FRC1FilterData.map((data: any, i: number) => (
              <Grid item key={i} md={data.gridlength} xs={12}>
                 <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">{data.label}</InputLabel>
                <Select {...data.otherOptions}>
                  {data.options.map((item: any, j: number) => (
                    <MenuItem key={j} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
              </Grid>
            ))}
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <Button variant="contained" onClick={handleSearch}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Card>
        <TableHeader title={""} showAddBtn onAdd={() => handleAction("add")} />
        <TableSubHeader data={tableSubHeader} />
        <CustomTable
          isError={false}
          isLoading={false}
          isFetching={false}
          isSuccess={true}
          data={tableMockData}
          columns={columns}
        />
      </Card>
      <DeleteModel
        open={deleteModal}
        handleClose={handleDeleteModal}
        onDeleteClick={handleDeleteModal}
      />
    </>
  );
};

export default FRC1;

const styles = {
  title: {
    fontWeight: 600,
    fontSize: "16px",
  },
  cardStyle: {
    "& .MuiStack-root": {
      "& .MuiStack-root": {
        marginLeft: "auto",
        marginRight: "20px",
      },
    },
  },
};
