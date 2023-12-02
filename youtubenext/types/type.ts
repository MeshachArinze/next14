import { ReactNode } from "react";


export type SidebarProviderProps = {
  children: ReactNode;
};

export type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};
