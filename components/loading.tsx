import React, { createContext, useState, useContext } from "react";

 /*
  Interface ve oop componentler Ibrahim Arda Doğan a aittir. Kalan kısım ise Ahmad Alhomsi ye aittir.
  */
interface LoadingContextProps {
  isLoading: boolean;
  toggleLoading: () => void;
}


const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  toggleLoading: () => {},
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => setIsLoading(!isLoading);

  return (
    <LoadingContext.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
