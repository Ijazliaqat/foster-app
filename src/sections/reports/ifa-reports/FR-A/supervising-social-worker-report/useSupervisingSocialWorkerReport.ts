import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { initialValues, validationSchema } from ".";
import { useRouter } from "next/router";
import { useState } from "react";

export const useSupervisingSocialWorkerReport = () => {
  const path = '/reports/ifa-reports/FR-A-supervising-social-worker';
  const router = useRouter();

  const [modalData, setModalData] = useState<any>({ open: false, data: {} });

  const handleBack = () => router.push(path);
  const genRandom = () => Math.floor(Math.random() * 1000);

  const handleAddModal = () => setModalData({ open: false, data: {} });
  const [schema, setSchema] = useState<Yup.ObjectSchema<any>>(Yup.object().shape({}));

  const methods: any = useForm({
    resolver: yupResolver(Yup.object().shape(validationSchema)),
      defaultValues: initialValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods

  const hanldeUpdateSchema = (updatedData: any) => updatedData.reduce((acc: any, obj: any) => {
    const subFieldSchemas = obj.subFields.reduce((subAcc: any, subField: any) => {
      return { ...subAcc, [subField.otherOptions.name]: Yup.string().required('This field is required.') };
    }, {});
    return { ...acc, ...subFieldSchemas }
  }, {});

  const handleAddNew = (obj: any) => {
    const FieldCopy = [...obj.formFields];
    const newData = FieldCopy.map(field => {
      const NewSubFieldsCopy = [...field.subFields];
      const newFields = NewSubFieldsCopy[0];
      const newArr = [];
      const newFieldName = newFields.otherOptions.name + genRandom();
      const subFields: any = {
        otherOptions: { ...newFields.otherOptions, name: newFieldName },
        component: newFields.component,
      };
      newArr.push(subFields);
      return { title: field.title, subFields: newArr }
    });
    setSchema(Yup.object().shape(hanldeUpdateSchema(newData)));
    setModalData({
      open: true,
      data: {
        head: obj.title,
        formFields: newData
      }
    });
  };

  const handleAddNewColumn = (obj: any) => {
    const firstChild = [obj.formFields[1]];
    const fieldTitlesArr = obj.formFields[0].subFields;
    const [newData] = firstChild.map((obj: any, i: number) => {
      const newSubFieldCopy = [...obj.subFields];
      const fields = newSubFieldCopy.map((subField: any, j: number) => {
        const newFieldName = subField.otherOptions.name + genRandom();
        return {
          title: fieldTitlesArr[j].head,
          otherOptions: { ...subField.otherOptions, name: newFieldName },
          component: subField.component,
        };
      });
      return fields
    });
    const updatedData = [{ subFields: newData }]
    setSchema(Yup.object().shape(hanldeUpdateSchema(updatedData)));
    setModalData({
      open: true,
      data: {
        isColumnView: true,
        head: obj.title,
        formFields: updatedData
      }
    });

  }

  const onSubmit = (data: any) => {
    console.log(data);

  };

  return {
    methods,
    handleSubmit,
    modalData,
    schema,
    onSubmit,
    handleBack,
    handleAddNew,
    handleAddModal,
    handleAddNewColumn,
  }
}