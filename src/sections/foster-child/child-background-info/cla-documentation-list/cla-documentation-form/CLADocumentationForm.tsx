import React, { useState } from "react";
import EHCPForm from "./EHCPForm";
import PEPForm from "./PEPForm";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

export const ClaDocumentationForm = (props: any) => {
  const router = useRouter();

  const { defaultFormType = "EHCP", defaultValues, disabled = false } = props;

  const [selectForm, setSelectForm] = useState(defaultFormType);


  const handleSelectChange = (event: any) => {
    setSelectForm(event.target.value);
  };

  return (
    <>
      {!disabled && (
        <FormControl disabled={disabled} sx={{ width: "300px", m: 2 }}>
          <Select value={selectForm} onChange={handleSelectChange}>
            <MenuItem value="EHCP">EHCP</MenuItem>
            <MenuItem value="PEP">PEP</MenuItem>
          </Select>
        </FormControl>
      )}
      {selectForm === "EHCP" && (
        <EHCPForm disabled={disabled} defaultValues={defaultValues} />
      )}

      {selectForm === "PEP" && (
        <PEPForm disabled={disabled} defaultValues={defaultValues} />
      )}
    </>
  );
};
