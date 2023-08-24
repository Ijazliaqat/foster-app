import React from "react";
import { useRouter } from 'next/router';

export const useSupportCarersCard = () => {
  const navigate = useRouter();
  return {
    navigate
  };
};
