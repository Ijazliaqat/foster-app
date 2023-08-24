import React from "react";
import TableHeader from "@root/components/TableHeader";
import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { data } from ".";
import { useMemberSelfEvaluationForm } from "./useMemberSelfEvaluationForm";

const MemberSelfEvaluationFormList = () => {
    const {
        columns,
        tableHeaderRefTwo,
    } = useMemberSelfEvaluationForm();

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Panel Member List"
            />
            <CustomTable
                data={data}
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
        </>
    );
}
export default MemberSelfEvaluationFormList