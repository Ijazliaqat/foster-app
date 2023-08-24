import { useRouter } from "next/router";
import { useState } from "react"

export const useDashboard = () => {
    const router = useRouter()
    const [showChildStatistics, setShowChildStatistics] = useState<boolean>();
    const [showCarerStatistics, setShowCarerStatistics] = useState<boolean>();
    return {
        showChildStatistics,
        setShowChildStatistics,
        showCarerStatistics,
        setShowCarerStatistics,
        router
    }
}