import { useRouter } from "next/router";
import { useState } from "react"

export const useMarketingPlanMeetings = () => {

    const router = useRouter();

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);

    const handleAction = (action: string, id: string) => {
        switch (action) {
            case 'delete':
                handleDeleteModal()
                break;
            case 'edit':
                router.push({ pathname: `/marketing/plan-meetings/form/${id}` })
                break;
            default:
                break;
        }
    }

    return {
        openDeleteModal,
        handleDeleteModal,
        handleAction
    }
}