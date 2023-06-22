import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const AuthenticationContext = createContext(
  {} as ReturnType<typeof useAuthentication>
);

export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};

const AuthenticationContextProvider = ({ children }: ProviderProps) => {
  const ctx = useAuthentication();

  return (
    <AuthenticationContext.Provider value={ctx}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
