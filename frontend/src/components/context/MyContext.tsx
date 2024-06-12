import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
  value: string;
  setValue: (value: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>('default value');
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
