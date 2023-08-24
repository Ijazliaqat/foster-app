import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { initialValue, validationSchema } from ".";
import { useRouter } from "next/router";

export const useActionSheet = () => {

  const router = useRouter();
  const { query } = router;
  const disabled = query.action === 'view' ? true : false;

  const [openModal, setOpenModal] = useState(false);
  const [disabledModal, setDisabledModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setDisabledModal(false);
  };

  const handleAction = (id?: string) => {
    handleOpenModal();
    setDisabledModal(true);
  };

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValue,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  return {
    handleAction,
    openModal,
    handleOpenModal,
    methods,
    handleSubmit,
    onSubmit,
    disabledModal,
    disabled
  }
} 