import {
  useContext,
  createContext,
  useState,
  MouseEventHandler,
  Dispatch,
  SetStateAction,
} from "react";

interface Prop {
  children: React.ReactNode;
}

type ThemeContextType = {
  showLinks: boolean;
  openLink: () => void ;
  setShowLinks:  Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<ThemeContextType>({} as ThemeContextType);

function AppProvider({ children }: Prop) {
  const [showLinks, setShowLinks] = useState(false);

  function openLink () {
     setShowLinks(!showLinks);
  };

  return (
    <AppContext.Provider value={{ showLinks, setShowLinks, openLink }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
