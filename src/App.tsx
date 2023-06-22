import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { NavBar, Paragraph, ThemeProvider } from "@/components";
import { Home } from "./pages";
import { ChangeEvent, ReactNode, useContext, useEffect, useState } from "react";
import AuthenticationContextProvider, {
  AuthenticationContext,
} from "./AuthContext";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: calc(100svh - 4rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [input, setInput] = useState("");
  const { setIsAuthenticated } = useContext(AuthenticationContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const password = import.meta.env.VITE_ENCRYPTION_PASSWORD;
    if (input === password) setIsAuthenticated(true);
  }, [input]);

  return (
    <LoginContainer>
      <Paragraph color="grey">Enter the password</Paragraph>
      <input type="password" onChange={handleChange} value={input} />
    </LoginContainer>
  );
};

const PrivacyWrapper = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated ? children : <Login />;
};

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <PrivacyWrapper>
          <Home />
        </PrivacyWrapper>
      ),
    },
  ];

  const router = createBrowserRouter(routes, {
    basename: "/hl_birthday_card",
    window,
  });

  return (
    <AuthenticationContextProvider>
      <ThemeProvider>
        <NavBar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
