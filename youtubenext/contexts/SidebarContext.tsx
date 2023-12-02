import { SidebarContextType, SidebarProviderProps } from "@/types/type";
import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen((s) => !s);
    } else {
      setIsLargeOpen((l) => !l);
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  return (
    <SidebarContext.Provider
      value={{
        isSmallOpen,
        isLargeOpen,
        close,
        toggle
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
