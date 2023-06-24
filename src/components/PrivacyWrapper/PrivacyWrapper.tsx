import { ReactNode, useContext } from "react";
import { AuthenticationContext } from "@/AuthContext";
import Login from "./Login";

const PrivacyWrapper = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? children : <Login />;
};

export default PrivacyWrapper;
