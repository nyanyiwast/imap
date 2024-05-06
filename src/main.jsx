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
    <Toaster position="bottom-center" richColors/>
    <RouterProvider router={router} />
  </React.StrictMode>
);