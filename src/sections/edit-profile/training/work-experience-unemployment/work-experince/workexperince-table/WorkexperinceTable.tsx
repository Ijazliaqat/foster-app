import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Grid, Modal, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useWorkexperinceTable } from "./useWorkexpTable";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumns } from "./columnsInfo";
import UpdateViewWorkForm from "./update-view-work-form/UpdateViewWorkForm";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";

const WorkexperinceTable = () => {
  const theme: any = useTheme();
  const {
    tableRows,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    openViewUpdateModel,
    closeViewUpdateModel,
  } = useWorkexperinceTable();

  const columns = getColumns({ openViewUpdateModel });

  return (
    <>
      <Grid container>
        <Grid item container>
          <CustomTable
            data={tableRows ?? []}
            columns={columns}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
            isPagination={false}
          />
        </Grid>
      </Grid>
      <Modal
        open={tableStatusInfo.updateViewModel}
        onClose={closeViewUpdateModel}
      >
        <Grid
          container
          sx={{
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          sm={5}
          xs={10}
        >
          <UpdateViewWorkForm
            close={closeViewUpdateModel}
            defValues={tableStatusInfo?.refFormDataHolder}
            disabled={tableStatusInfo.isDisabled}
          />
        </Grid>
      </Modal>
    </>
  );
};

export default WorkexperinceTable;
