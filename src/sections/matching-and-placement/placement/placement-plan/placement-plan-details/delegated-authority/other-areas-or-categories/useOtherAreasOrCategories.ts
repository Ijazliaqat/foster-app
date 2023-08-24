import { useRouter } from "next/router";
import { useState } from "react"

export const useOtherAreasOrCategories = () => {

  const router = useRouter();
  const { query } = router;
  const disabled = query.action === 'view' ? true : false;

  const [openModal, setOpenModal] = useState(false);

  const [disableModal, setDisableModal] = useState(false);

  const handleOpenModal = () => { setOpenModal(!openModal); setDisableModal(false) }

  const handleAction = (id: string) => { handleOpenModal(); setDisableModal(true) }

  return {
    openModal,
    handleOpenModal,
    handleAction,
    disableModal,
    disabled
  }
}