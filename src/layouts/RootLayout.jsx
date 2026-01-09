import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useTheme } from "../context/ThemeContext.jsx"; // 1. Soo dhoofiso useTheme

export default function RootLayout() {

  const { theme, toggleTheme } = useTheme();

  return (
  
    <div className={theme}>
      <div className="bg-white dark:bg-[#020617] min-h-screen transition-colors text-slate-900 dark:text-white">
    
        <Navbar />

        <main className="pt-4">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
