import React from "react";
import { useTheme } from "./ThemeContext"; // Ka import ThemeContext

const App = () => {
  const { theme, toggleTheme } = useTheme(); // Isticmaal theme iyo toggle function

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <header className="p-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded bg-blue-500 text-white"
        >
          Toggle Theme (Current: {theme})
        </button>
      </header>
      <main className="p-4">
        <h1>Welcome to my {theme} mode app!</h1>
      </main>
    </div>
  );
};

export default App;
