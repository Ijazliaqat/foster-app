import React from "react";
import Link from "next/link";
import { Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useInventoryTableForm } from "./useInventoryTableForm";

const InventoryTableForm = ({ disabled }: any) => {
  const { methods, FormData, handleSubmit, onSubmit } = useInventoryTableForm();
  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={(theme) => style.title(theme)}>
        API Inventory
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {FormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                fullWidth
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
              >
                {item?.heading}
              </item.component>
            </Grid>
          ))}

          <Grid item xs={12}>
            {!disabled && (
              <Button
                disabled={disabled}
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
              >
                Submit
              </Button>
            )}

            <Link
              href={"/system-admin/api-inventory"}
              style={{ textDecoration: "none" }}
            >
              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": { backgroundColor: "#F6830F" },
                }}
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default InventoryTableForm;
const style = {
  title: (theme: any) => ({
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 600,
    margin:"10px 0"
  }),
};
