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
  Typography,
} from "@mui/material";
import Image from "next/image";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import { tableSubHeader, viewReportsFilterData, tableMockData } from ".";
import { useFosteringServiceManagerReport } from "./useFosteringServiceManagerReport";
import TableHeader from "@root/components/TableHeader";
import TableSubHeader from "../../table-sub-header/TableSubHeader";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { DatePicker } from "@mui/x-date-pickers";

const FosteringServiceManagerReport = () => {
  const { handleSearch, handleAction, openDelete, handleCloseDeleteModal } =
    useFosteringServiceManagerReport();

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
      accessorFn: (row: any) => row.nameOfFosterCarer,
      id: "nameOfFosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of foster carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingReviewDate,
      id: "meetingReviewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Review Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.nameOfFosteringManager,
      id: "nameOfFosteringManager",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of Fostering Manager</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.modifiedDate,
      id: "modifiedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Modified Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.modifiedBy,
      id: "modifiedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Modified By</span>,
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
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          sx={{ px: 2 }}
        >
          <Image src={automatedIcon} alt="icon" />
        </Box>
        <Card sx={{ p: 2, my: 2 }}>
          <Grid container spacing={4}>
            {viewReportsFilterData.map((data: any, i: number) => (
              <Grid item key={i} md={data.gridlength} xs={12}>
                {data.requireDatePicker ? (
                  <DatePicker
                  label={data.label}
                    slotProps={{
                      textField: { ...data.otherOptions },
                    }}
                  />
                ) : (
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
                )}
              </Grid>
            ))}
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <Button onClick={handleSearch} variant="contained">
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
        open={openDelete}
        handleClose={handleCloseDeleteModal}
        onDeleteClick={handleCloseDeleteModal}
      />
    </>
  );
};

export default FosteringServiceManagerReport;

const styles = {
  cardStyle: {
    "& .MuiStack-root": {
      "& .MuiStack-root": {
        marginLeft: "auto",
        marginRight: "20px",
      },
    },
  },
};
