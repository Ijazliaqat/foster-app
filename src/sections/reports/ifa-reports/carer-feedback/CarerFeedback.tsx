import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import automatedIcon from "../../../../assets/svg/reports/automatedIcon.svg";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { DatePicker } from "@mui/x-date-pickers";
import { careerFeedbackFilterData } from ".";
import { useCarerFeedback } from "./useCarerFeedback";

const CareerFeedback = () => {
  const { TableDemoData, HandlerSearch, columns } = useCarerFeedback();

  return (
    <Card sx={{ p: 1 }}>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Image src={automatedIcon} width={25} height={25} alt="icon" />
      </Box>
      <Card sx={{ p: 2, my: 2 }}>
        <Grid container columnSpacing={4}>
          {careerFeedbackFilterData.map((data: any, i) => (
            <Grid item xs={12} md={data.gridlength} mb={4} key={i}>
              {i === 0 ? (
                <TextField {...data.otherOptions} />
              ) : (
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    {data.label}
                  </InputLabel>
                  <Select {...data.otherOptions}>
                    {data.options &&
                      data.options.map((item: any, i: number) => {
                        return (
                          <MenuItem key={i} value={item.value}>
                            {item.label}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              )}
            </Grid>
          ))}
          <Grid item xs={12} md={6} mb={4}>
            <DatePicker
              label="Date To"
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                },
              }}
            />
          </Grid>

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

export default CareerFeedback;
