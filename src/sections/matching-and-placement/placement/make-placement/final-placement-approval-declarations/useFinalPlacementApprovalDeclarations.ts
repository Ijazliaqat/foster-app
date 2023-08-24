import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useFinalPlacementApprovalDeclarations = () => {
  const [isOpenFinalPlacementModal, setIsOpenFinalPlacementModal] = useState(false)
  const theme: any = useTheme();
   const onAddFinalPlacementModal = (data:any) =>{
    console.log(data);
   }
  return {
    theme,isOpenFinalPlacementModal, setIsOpenFinalPlacementModal,onAddFinalPlacementModal
  };
};
