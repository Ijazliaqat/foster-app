import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { CONTRACTSANDDECLARATIONDATA } from ".";

export const useContractsAndDeclarations = () => {
  const theme: any = useTheme();
  const route = useRouter();
  const { fosterCarerId } = route.query;
  const CONTRACTSANDDECLARATIONDATAFUNCTION = CONTRACTSANDDECLARATIONDATA(fosterCarerId);
  const [contractsAndDeclarationData] = React.useState(
    CONTRACTSANDDECLARATIONDATAFUNCTION
  );
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();

  const [formDialogId, setFormDialogId] = React.useState<any>();

  const [signedFormId, setsignedFormId] = React.useState<any>();

  const [unSignedFormId, setUnSignedFormId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    contractsAndDeclarationData,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    signedFormId,
    setsignedFormId,
    unSignedFormId,
    setUnSignedFormId,
  };
};
