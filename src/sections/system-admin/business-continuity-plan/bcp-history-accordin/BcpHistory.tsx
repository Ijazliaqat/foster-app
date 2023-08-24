import React from "react";
import { useBcpHistory } from "./useBcpHistory";
import { FormProvider } from "@root/components/hook-form";
import FormTable from "@root/components/Table/FormTable";
import { COLUMNS } from ".";

const BcpHistory = () => {
  const { methods, handleSubmit, onSubmit, onClear } = useBcpHistory();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        // beforeAdd={(methods: any) => uploadImage("image", methods)}
        // beforeUpdate={(methods: any) => uploadImage("image", methods)}
        columns={COLUMNS}
      />
    </FormProvider>
  );
};
export default BcpHistory;
