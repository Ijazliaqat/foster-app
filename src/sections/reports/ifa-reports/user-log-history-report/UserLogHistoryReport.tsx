import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useUserLogHistoryReport } from "./useUserLogHistoryReport";
import { viewReportsFilterData } from ".";

const UserLogHistoryReport = () => {
  const { TableDemoData, HandlerSearch, columns } = useUserLogHistoryReport();

  return (
    <Card sx={{ p: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 15px",
        }}
      >
        <Typography sx={(theme) => styles.title(theme)}>
          Search Criteira
        </Typography>
        <Image src={automatedIcon} width={25} height={25} alt="icon" />
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
                  <InputLabel id="demo-simple-select-label">
                    {data.label}
                  </InputLabel>
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
          <Grid item xs={12}>
            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
              <Button onClick={HandlerSearch} variant="contained">
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <TableHeader
        title=""
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={TableDemoData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Card>
  );
};

export default UserLogHistoryReport;

const styles = {
  title: (theme: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color:
      theme.palette.mode === "dark" ? theme.palette.common.white : "#343A40",
  }),
};
