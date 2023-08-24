import React from "react";
import image1 from "@root/assets/svg/money-management/kidiee-saving.svg";
import image2 from "@root/assets/svg/money-management/pocket-money.svg";
import image3 from "@root/assets/svg/money-management/money-skill.svg";
import image4 from "@root/assets/svg/money-management/saving-account.svg";

export const managementCardData = [
  {
    id: 1,
    icon: image1,
    path: "/money-management/kidiee-saving",
    bgColor: "#0E918C",
    gridLength: 3,
    title: "Kidiee Saving",
  },
  {
    id: 2,
    icon: image2,
    path: "/money-management/manage-pocket-money",
    bgColor: "#DEBC0A",
    gridLength: 3,
    title: "Guide to Manage your Pocket Money",
  },
  {
    id: 3,
    icon: image3,
    path: "/money-management/money-skill-assessment",
    bgColor: "#F6830F",
    gridLength: 3,
    title: "Money Skills Assessment",
  },
  {
    id: 4,
    icon: image4,
    path: "/money-management/saving-account",
    bgColor: "#523C87",
    gridLength: 3,
    title: "Savings Account for Minors",
  },
];
