import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "../ContextApi/ThemeContext";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
      <Footer />
    </>
  );
}
