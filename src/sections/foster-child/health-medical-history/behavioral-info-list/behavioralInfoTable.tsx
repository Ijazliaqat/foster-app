import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { DummyData } from ".";
import useBehavioralInfoTable from "./useBehavioralInfoTable";
import useBehavioralInfoForm from "./useBehavioralInfoForm";

const activepath =
  "/foster-child/health-medical-history/behavioural-info/actions";

function BehavioralInfoTable(props: any) {
  const { fosterChildId } = props;
  const {
    BehaviorInfoList,
    BehaviorInfoListisLoading,
    BehaviorInfoListisSuccess,
    BehaviorInfoListisError,
    BehaviorInfoListisFetching,
  } = useBehavioralInfoTable({ fosterChildId: fosterChildId });

  const { deleteHander } = useBehavioralInfoForm({});

  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.overallBehaviour,
      id: "overallBehavious",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Overall Behavious (in Scale 1 to 10)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.summary,
      id: "summary",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Summary</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() => {
                deleteHander(info.row.original.id);
              }}
            />
            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "edit",
                    behaviouralInfoId: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push({
                  pathname: activepath,
                  query: {
                    action: "view",
                    behaviouralInfoId: info.row.original.id,
                    fosterChildId: fosterChildId,
                  },
                });
              }}
            />
          </Box>
        );
      },
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="behavioural info"
                  searchKey="search"
                  showAddBtn
                  onChanged={(e: any) => {}}
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", fosterChildId: fosterChildId },
                    });
                  }}
                />
              </Box>
              <CustomTable
                data={BehaviorInfoList?.data ?? []}
                columns={columns}
                isLoading={BehaviorInfoListisLoading}
                isFetching={BehaviorInfoListisFetching}
                isError={BehaviorInfoListisError}
                isSuccess={BehaviorInfoListisSuccess}
                isPagination={true}
                showSerialNo={true}
                // totalPages={incidentlist?.data?.meta?.pages ?? 0}
                // currentPage={incidentlist?.data?.meta?.page ?? 1}
                // onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BehavioralInfoTable;
