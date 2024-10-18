import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Header from "./components/Header";
import LoggedInHeader from "./components/LoggedInHeader";
import AboutUs from "./components/AboutUs";
import { useState } from "react"; 
import "./App.css";
import EzFixHomePage from "./components/EzFixHomePage";
import ServicesPage from "./components/ServicesPage";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ isLoggedIn, handleLogout }) => (
  <>
    {isLoggedIn ? (
      <LoggedInHeader handleLogout={handleLogout} />
    ) : (
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    )}
    <Outlet />
  </>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/signup-login", element: <Login handleLogin={handleLogin} /> },
        { path: "/mission", element: <AboutUs /> },
        { path: "/contact", element: <h1>Contact Page</h1> },
        { path: "/homepage", element: <EzFixHomePage /> },
        {path: "/service-page", element: <ServicesPage />}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
