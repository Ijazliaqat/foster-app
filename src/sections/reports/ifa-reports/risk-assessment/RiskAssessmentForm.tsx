import React, { useState } from "react";
import {viewReportsFilterData } from ".";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import { useAssessmentForm } from "./useRiskAssessmentForm";
import CustomTable from "@root/components/Table/CustomTable";
import { DatePicker } from "@mui/x-date-pickers";

const RiskAssessmentForm = () => {
  const { TableDemoData, HandlerSearch, columns} =
    useAssessmentForm();

  return (
    <Card sx={{ p: 1 }}>
      <Box display={"flex"} justifyContent={"flex-end"}>
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
            <Button onClick={HandlerSearch} variant="contained">
              Search
            </Button>
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

export default RiskAssessmentForm;

