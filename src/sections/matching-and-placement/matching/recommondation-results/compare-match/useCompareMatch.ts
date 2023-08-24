import { useState } from "react"

export const useCompareMatch = () => {
    const [isAddConsiderationModalOpen, setIsAddConsiderationModalOpen] = useState(false);
    
    return { 
        isAddConsiderationModalOpen,
        setIsAddConsiderationModalOpen,
    }
}