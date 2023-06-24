import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { NavBar, ThemeProvider } from "@/components";
import { Home } from "./pages";
import AuthenticationContextProvider from "./AuthContext";
import { PrivacyWrapper } from "@/components/";

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
