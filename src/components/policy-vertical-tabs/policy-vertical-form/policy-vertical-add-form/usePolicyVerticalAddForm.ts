import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PolicyVerticalAddNewValidationSchema, PolicyVerticalAddNewFormData, handleInputFields, PolicyVerticalAddNewDefaultValues } from ".";
import { useRouter } from "next/router";

export const usePolicyVerticalAddNew = () => {
  const currentPage = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const route = useRouter();
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  const methods: any = useForm({
    resolver: yupResolver(PolicyVerticalAddNewValidationSchema),
    defaultValues: PolicyVerticalAddNewDefaultValues,
  });


  const { handleSubmit, reset } = methods;

  useEffect(() => (
    handleInputFields(currentPage.pathname === '/policies-and-guidelines/checklists/add')
  ), [currentPage.pathname]);

  const selectedArray = [
    { value: "Home Safety Checklist", label: "Home Safety Checklist" },
    { value: "Foster Carer Checklist", label: "Foster Carer Checklist" },
    { value: "General Data Protection Checklist", label: "General Data Protection Checklist" },
  ]

  return {
    methods,
    handleSubmit,
    handleNextTab,
    PolicyVerticalAddNewFormData,
    currentTab,
    setCurrentTab,
    handlePreviousTab,
    reset,
    currentPage,
    route,
    selectedArray
  };
};
