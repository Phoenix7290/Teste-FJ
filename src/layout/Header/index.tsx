import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/image/gym.svg";

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  const handleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="bg-transparent dark:bg-slate-800 shadow-md p-4 flex justify-between items-center border-b-2 dark:border-gray-700 relative z-20">
      <hgroup className="flex items-center gap-4">
        <img src={Logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">FJ Personal</h1>
      </hgroup>
      <div className="md:hidden">
        <IoMenu
          onClick={handleMenu}
          className="text-3xl cursor-pointer text-gray-900 dark:text-white"
        />
      </div>
      <nav className={`md:flex ${menuIsActive ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent z-30`}>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4 md:p-0">
          <li>
            <Link to="/" className="text-lg text-gray-900 dark:text-white">Home</Link>
          </li>
          <li>
            <Link to="/personal/" className="text-lg text-gray-900 dark:text-white">Personais</Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="text-lg text-gray-900 dark:text-white">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;