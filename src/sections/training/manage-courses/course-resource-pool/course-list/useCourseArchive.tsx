import { archiveCourseData, formSchema, initialValues } from ".";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useCourseArchive = () => {

  const { courses } = archiveCourseData;
  const [archiveModal, setArchiveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [isArchive, setIsArchive] = useState(false);
  const [reasonVal, setReasonVal] = useState('');

  const handleOpenArchiveModal = () => setArchiveModal(true);
  const handleCloseArchiveModal = () => setArchiveModal(false);
  const handleRejectModal = () => setRejectModal(!rejectModal);
  const hanldeApprove = () => alert('snack bar here');
  const handleIsArchive = () => { setIsArchive(true); setArchiveModal(false) };

  const handleReasonSubmit = () => { setRejectModal(reasonVal ? false : true) };
  const handleReasonChange = (event: any) => setReasonVal(event.target.value);

  const DurationToHourMin = (i: number) => {
    const totalMinutes: number = courses[i].component.reduce((acc: number, { duration }: any) => {
      const [hoursString, minutesString]: string[] = duration ? duration.split(':') : ['', ''];
      const hours: number = hoursString ? parseInt(hoursString, 10) : 0;
      const minutes: number = minutesString ? parseInt(minutesString, 10) : 0;
      return acc + hours * 60 + minutes;
    }, 0);
    const hours: number = Math.floor(totalMinutes / 60);
    const minutes: number = totalMinutes % 60;
    return `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`
  };

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return {
    DurationToHourMin,
    handleOpenArchiveModal,
    handleCloseArchiveModal,
    handleIsArchive,
    handleRejectModal,
    onSubmit,
    hanldeApprove,
    archiveModal,
    isArchive,
    methods,
    handleSubmit,
    rejectModal,
    isSubmitting,
    handleReasonSubmit,
    handleReasonChange
  }
}