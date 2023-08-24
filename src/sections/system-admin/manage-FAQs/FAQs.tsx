import { Box, Button } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React, { useState } from "react";
import FosterChild from "./foster-child/FosterChild";
import FosterCarer from "./foster-carer/FosterCarer";
import SocialWorker from "./social-worker/SocialWorker";
import IFA from "./ifa/IFA";
import AddFormModal from "./add-form/AddFormModal";
import DeleteModel from "@root/components/modal/DeleteModel";

const FAQs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleDeleteModal = (item: any) => {
    setIsDeleteModal(true);
  };

  const handleOpenDialog = (type: string, item?: any) => {
    setModalTitle(type === "edit" ? "EDIT FAQ" : "ADD FAQ");
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Box display="flex" justifyContent="right" mb={2}>
        <Button onClick={() => handleOpenDialog("add", {})} variant="contained">
          Add
        </Button>
      </Box>
      <HorizaontalTabs
        tabsDataArray={["Foster Child", "Foster Carer", "Social Worker", "IFA"]}
        spacing={2}
      >
        <FosterChild
          onDelete={handleDeleteModal}
          onEdit={(item: any) => handleOpenDialog("edit", item)}
        />
        <FosterCarer
          onDelete={handleDeleteModal}
          onEdit={(item: any) => handleOpenDialog("edit", item)}
        />
        <SocialWorker
          onDelete={handleDeleteModal}
          onEdit={(item: any) => handleOpenDialog("edit", item)}
        />
        <IFA onDelete={handleDeleteModal} onEdit={(item: any) => handleOpenDialog("edit", item)} />
      </HorizaontalTabs>
      {isDialogOpen && (
        <AddFormModal open={isDialogOpen} onClose={handleCloseDialog} title={modalTitle} />
      )}
      {isDeleteModal && (
        <DeleteModel open={isDeleteModal} handleClose={() => setIsDeleteModal(false)} />
      )}
    </>
  );
};

export default FAQs;
