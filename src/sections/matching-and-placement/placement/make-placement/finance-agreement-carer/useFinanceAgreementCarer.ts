import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useFinanceAgreementCarer = () => {
  const [isOpenFinanceAgreementWithcarerModal, setIsOpenFinanceAgreementWithcarerModal] = useState(false)
  const theme: any = useTheme();
   const onAddFinanceAgreementCarer = (data:any) =>{
    console.log(data);
    
   }

  return {
    theme,
    isOpenFinanceAgreementWithcarerModal, setIsOpenFinanceAgreementWithcarerModal,
    onAddFinanceAgreementCarer
  };
};
