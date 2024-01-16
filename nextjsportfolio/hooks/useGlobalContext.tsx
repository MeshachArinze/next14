import { AppContext } from "@/context/context";


import { useContext } from "react";

export const useGlobalContext = () => {
  return useContext(AppContext);
};