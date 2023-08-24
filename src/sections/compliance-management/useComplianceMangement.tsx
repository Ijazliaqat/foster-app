import { SyntheticEvent, useState } from "react";

export const useComplianceManagement = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [categoryModal, setCategoryModal] = useState(false);
    const [categoryData, setCategoryData] = useState<any>();
    const [pdfModal, setPdfModal] = useState(false);
    const [categoryIcon, setCategoryIcon] = useState(false);
    const [file, setFile] = useState(null)

    const handlePdf = (file: any) => { setPdfModal(!pdfModal); setFile(file) };

    const handleCategoryModal = () => {
        setCategoryModal(!categoryModal);
        setCategoryData(null);
        setCategoryIcon(true);
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const handleSubCategory = (item: any) => {
        setCategoryModal(!categoryModal);
        setCategoryData(item);
        setCategoryIcon(false);
    }

    return {
        currentTab,
        handleChange,
        categoryModal,
        handleCategoryModal,
        handleSubCategory,
        categoryData,
        pdfModal,
        handlePdf,
        categoryIcon,
        file
    }
}

