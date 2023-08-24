import { useTheme } from "@mui/material"

export const useReferenceDropdownManagement = () => {
    const theme = useTheme()
    return {
        theme
    }
}