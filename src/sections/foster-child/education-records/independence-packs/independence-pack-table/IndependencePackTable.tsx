import React, { useState } from "react";
import BronzeLevel from "@root/assets/svg/bronze-level";
import SilverLevel from "@root/assets/svg/silver-level";
import GoldLevel from "@root/assets/svg/gold-level";
import { Box, Button, Grid } from "@mui/material";
import LevelButtons from "../Levels/LevelButtons";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useIndependencePackTable } from "./useIndependencePackTable";
import { columns } from "..";
import LevelButtonsModal from "../Levels/LevelButtonsModal";
import SingleLevel from "../Levels/SingleLevel";
export default function IndependencePackTable() {
  let [open, setOpen] = useState(false);
  const {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    Independentpacks,
    meta,
    listDeleteHandler,
  } = useIndependencePackTable();

  let { fosterChildId } = router.query;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LevelButtons />
        <Box sx={{ mt: 1 }}>
          <SingleLevel isBadge={true} levelName="Bronze">
            <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
          </SingleLevel>
        </Box>
      </Box>

      <Grid container>
        <Grid xs={12} item>
          <TableHeader
            ref={tableHeaderRef}
            title="Life Skill Assessment"
            searchKey="search"
            showAddBtn
            onAdd={() => {
              setOpen(true);
            }}
            onChanged={headerChangeHandler}
          />
          <CustomTable
            data={Independentpacks}
            columns={columns({ fosterChildId, listDeleteHandler })}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
            currentPage={meta?.page}
            totalPages={meta?.pages}
            showSerialNo
            onPageChange={pageChangeHandler}
            onSortByChange={sortChangeHandler}
          />
        </Grid>
      </Grid>
      {open && <LevelButtonsModal handleClose={handleClose} open={open} />}
    </>
  );
}
