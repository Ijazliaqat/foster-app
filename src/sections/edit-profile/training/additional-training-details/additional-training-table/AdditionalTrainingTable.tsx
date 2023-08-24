import React from "react";
import { useTheme } from "@emotion/react";
import { Grid, Modal, Typography } from "@mui/material";
import { useAdditionalTable } from "./useAdditionalTable";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumns } from "./columnsInfo";
import UpdateViewAdditionalForm from "./update-view-reference-form/UpdateViewAdditionalForm";

const AdditionalTrainingTable = () => {
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
  } = useAdditionalTable();

  const columns = getColumns({ openViewUpdateModel });
  // if (isLoading) return <FormSkeleton />;
  return (
    <>
      <Grid container>
        <Grid item container>
          <Grid item>
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.primary.main }}
            >
              Additional Training Details
            </Typography>
          </Grid>
        </Grid>
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
          <UpdateViewAdditionalForm
            close={closeViewUpdateModel}
            defValues={tableStatusInfo?.refFormDataHolder}
            disabled={tableStatusInfo.isDisabled}
          />
        </Grid>
      </Modal>
    </>
  );
};

export default AdditionalTrainingTable;
