import React from "react";
import { MANAGELOGINDATA } from ".";

export const useManageLoginDropDown = () => {
  const [open, setOpen] = React.useState(false);
  const [manageLoginData, setManageLoginData] = React.useState(MANAGELOGINDATA);
  const [selectedIndex, setSelectedIndex] = React.useState<any>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.info(`You clicked ${manageLoginData[selectedIndex]}`);
  };

  //   const handleMenuItemClick = (event: any, index: number) => {
  //     setOpen(false);
  //   };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return {
    open,
    setOpen,
    manageLoginData,
    setManageLoginData,
    selectedIndex,
    setSelectedIndex,
    anchorRef,
    handleClose,
    handleToggle,
    handleMenuItemClick,
  };
};
