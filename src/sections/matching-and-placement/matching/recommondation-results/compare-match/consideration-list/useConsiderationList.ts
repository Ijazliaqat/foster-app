import { useTheme } from "@mui/material";
import { useRouter } from "next/router"

export const useConsiderationList = () => {
    const route = useRouter();
    const theme = useTheme();

    return {
        route,
        theme
    }
}