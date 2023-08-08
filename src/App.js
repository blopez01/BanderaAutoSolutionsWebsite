import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Routes/Home/Home";
import Careers from "./Routes/Careers/Careers";
import Contact from "./Routes/Contact/Contact";
import ErrorPage from "./Routes/ErrorPage";
import FAQ from './Routes/FAQ/FAQ';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      /*
      TODO: add these pages back
      {
        path: "careers",
        element: <Careers />,
      },
      */
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
