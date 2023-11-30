import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";

import { Person } from "../Types";

type ProviderContextType = {
  groupMembers: Person[];
  setGroupMembers: React.Dispatch<React.SetStateAction<Person[]>>;
};

const ProviderContext = createContext<ProviderContextType | undefined>(undefined);

const GroupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [groupMembers, setGroupMembers] = useState<Person[]>([]);


  return (
    <ProviderContext.Provider
      value={{
        groupMembers,
        setGroupMembers,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};




export const useProvider = () => {
  const context = useContext(ProviderContext);
  if (context === undefined) {
    throw new Error("useProvider must be used within a Provider");
  }
  return context;
};


export default GroupProvider;
