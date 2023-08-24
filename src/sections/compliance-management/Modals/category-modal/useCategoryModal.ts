import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchema, initialValues, } from '.';

export const useCategoryModal = () => {

    const [openModal, setOpenModal] = useState(false);
    const [pdfUpload, setPdfUpload] = useState(false);
    const [pdfArray, setPdfArray] = useState<any[]>([]);

    const methods: any = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: initialValues,
    });

    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

    const handleToggleModal = () => { setOpenModal(!openModal); setPdfUpload(false) };

    const handleTogglePdf = () => setPdfUpload(!pdfUpload);

    const handleUploadPdf = (event: any) => {
        setPdfArray([...pdfArray, event?.target.files[0].name]);
        setPdfUpload(true);
    }

    const onSubmit = (data: any) => { };

    return {
        handleToggleModal,
        handleTogglePdf,
        handleUploadPdf,
        openModal,
        pdfUpload,
        pdfArray,
        methods,
        handleSubmit,
        onSubmit
    }
}