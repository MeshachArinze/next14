
import { SidebarContext } from "@/contexts/SidebarContext";
import { useContext } from "react";

function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) throw Error("Cannot use outside of SidebarProvider");

  return value;
}

export default useSidebarContext;
