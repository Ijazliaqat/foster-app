import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Grid, Modal, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useBankDetails } from "./useBankDetails";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumns } from "./columnsInfo";
import UpdateViewBankDetailsForm from "./update-view-bankdetails-form/UpdateViewBankDetailsForm";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";

const BankdetailsTable = () => {
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
  } = useBankDetails();

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
          <UpdateViewBankDetailsForm
            close={closeViewUpdateModel}
            defValues={tableStatusInfo?.refFormDataHolder}
            disabled={tableStatusInfo.isDisabled}
          />
        </Grid>
      </Modal>
    </>
  );
};

export default BankdetailsTable;
