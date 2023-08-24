import React from 'react'
import { Box, Card } from '@mui/material';
import { useRouter } from 'next/router';
import TableHeader from '@root/components/TableHeader';
import TableAction from '@root/components/TableAction';
import CustomTable from '@root/components/Table/CustomTable';
import DeletePrompt from '@root/components/Table/prompt/DeletePrompt';
import { useMoneySkillAssessmentTable } from './useMoneySkillAssessmentTable';

export const MoneySkillAssessmentTable = (props: any) => {
    const router = useRouter();
    // const { fosterChildId } = props;
    const {
      //   data,
        // isError,
        // isLoading,
        // isSuccess,
        // isFetching,
      headerChangeHandler,
      listDeleteHandler,
      pageChangeHandler,
      sortChangeHandler,
    } = useMoneySkillAssessmentTable();
  
  const TableData = [
      {
        id: 1,
        date: "12.11.2021",
        score: "05",
      },
      {
        id: 2,
        date: "12.11.2021",
        score: "10",
      },
    ];
    
  
    const columns = [
      {
        accessorFn: (row: any) => row?.date,
        id: "date",
        cell: (info: any) => info.getValue(),
        header: () => <span>Date</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row?.score,
        id: "score",
        cell: (info: any) => info.getValue(),
        header: () => <span>Score</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row?.id,
        id: "actions",
        cell: (info: any) => (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <TableAction
              type="edit"
              onClicked={() =>
                router.push({
                  pathname: `/money-management/money-skill-assessment/${info.getValue()}/edit`,
                  // query: { fosterChildId: fosterChildId },
                })
              }
            />
            <TableAction
              type="view"
              onClicked={() =>
                router.push({
                  pathname: `/money-management/money-skill-assessment/${info.getValue()}/view`,
                  // query: { fosterChildId: fosterChildId },
                })
              }
            />
            <DeletePrompt
              onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
            />
          </Box>
        ),
        header: () => <span>Actions</span>,
        isSortable: false,
      },
    ];
  
    return (
      <>
        <Card>
          <TableHeader
            showAddBtn
            title="Money Skill Assessment"
            searchKey="search"
            onChanged={headerChangeHandler}
            onAdd={() =>
              router.push({
                pathname:"/money-management/money-skill-assessment/add-money-skill-assessment",
                // query: { fosterChildId: fosterChildId },
              })
            }
          />
          <CustomTable
          showSerialNo
             data={TableData}
             columns={columns}
             isLoading={false}
             isFetching={false}
             isError={false}
             isPagination={false}
             isSuccess={true}
             currentPage={1}
             onPageChange={pageChangeHandler}
             onSortByChange={sortChangeHandler}
          />
        </Card>
      </>
    );
  };
  