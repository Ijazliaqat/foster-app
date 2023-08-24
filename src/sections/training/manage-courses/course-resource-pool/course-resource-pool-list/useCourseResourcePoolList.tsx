import React from 'react'
import { courseResourceData } from '.';


export default function useCourseResourcePoolList() {
  const [open, setOpen] = React.useState(false);
  const [resourcePoolListData, setResourcePoolListData] = React.useState<any[]>(courseResourceData);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const colorsArray = [
    "#F63D31",
    "#20BE60",
    "#0E918C",
    "#10B0C6",
    "#EB9411",
  ];
  // colorsArray[Math.floor(Math.random() * 5)]
  const generateColors = () => {
    let length = resourcePoolListData.length;
    const i = length < colorsArray.length ? length : length % colorsArray.length;
    return colorsArray[i];
  }

  const addHandler = (data: any) => {
    if (data) {
      setResourcePoolListData([...resourcePoolListData, {
        image: "",
        categoryDescription: data.categoryDescription,
        backgroundColor: generateColors(),
      }])
    }
    // const addFormData = {
    //   image: "",
    //   categoryDescription: data.categoryDescription,
    //   backgroundColor: colorsArray[Math.floor(Math.random() * 5)],
    //   link: ""
    // }
    // const newTodos = resourcePoolListData.slice();
    // newTodos.push(addFormData);
    // setResourcePoolListData(newTodos)

  };
  return {
    addHandler,
    handleClose,
    handleOpen,
    open,
    resourcePoolListData
  }

}
