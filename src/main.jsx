import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./router/root";
import ErrorPage from "./pages/error-page/error";
import FormOneLanding from "./pages/imap-pages/form-one";
import StudentsHome from "./pages/landing-page/StudentsHome";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider"
import ComingSoonPage from "./pages/error-page/coming-soon";
// import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StudentsHome />
      },
      {
        path: "form-one",
        element: <FormOneLanding />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoonPage />
      },
    ],
  },
  // PRIVATE ROUTES HERE
  // {
  //   path: "form-one",
  //   element: <FormOneLanding />,
  // },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster position="bottom-center" richColors/>
    </ThemeProvider>  
    <RouterProvider router={router} />
  </React.StrictMode>
);