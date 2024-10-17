import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Today from "./components/main/Today/Today.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>wrong route. go back to <Link to={'/'}>home</Link></div>,
    children: [
      {
        path: "/today",
        element: <Today></Today>,
      },
      {
        path: "/completed",
        element: <div>completed</div>,
      }
    ],
  },
  {
    path: '/auth',
    element: <div></div>,
    children: [
      {
        path: '/auth/login'
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <div>
      <Toaster />
    </div>
  </StrictMode>
);
