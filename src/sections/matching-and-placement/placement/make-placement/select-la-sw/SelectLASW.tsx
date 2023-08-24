import React from "react";
import {  Button, Grid  } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { SelectLaSwData } from ".";
import useSelectSupervisingSocialWorker from "./useSelectLASW";


const SelectLASW = ({ handleIncreamentStep }: any) => {
  const { onSubmit, methods, handleSubmit, theme } = useSelectSupervisingSocialWorker(handleIncreamentStep);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container >
        {SelectLaSwData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id} mt={5} pl={2.5} pr={2.5}>
            <item.component
              {...item.componentProps}
              size={"small"}
            >
              {item.otherOptions?.select
                ? item.options?.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
                : null}
            </item.component>

          </Grid>
        ))}
    <Grid item xs={12}  ml={2.5} mb={2.5} mt={1.5}>
    <Button type="submit" sx={styles.saveBtn} >Save and Continue</Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default SelectLASW;

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};
