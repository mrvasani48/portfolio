import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { images } from "../../../assets/img";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    if (darkTheme) {
      document.querySelector("html")?.classList.add("dark");
      document.querySelector("html")?.classList.remove("light");
    } else {
      document.querySelector("html")?.classList.add("light");
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div className="grid grid-cols-2 mb-5 pt-3 sticky top-0 bg-white dark:bg-dark-900 z-50">
      <div className="flex items-center gap-5">
        <div className="h-[70px] w-[70px] overflow-hidden rounded-full bg-dark-secondary  border border-white ">
          <img
            src={images.profile}
            alt="user profile"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-xl"> Jone Lee </p>
      </div>
      <div className="flex gap-5">
        <nav className="flex items-center gap-5 text-xl dark:text-light-primary text-dark-500">
          <a
            href="#home"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Features
          </a>
          <a
            href="#PortFolio"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            PortFolio
          </a>
          <a
            href="#resume"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="#home"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Client
          </a>
          <a
            href="#price"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Pricing
          </a>
          <a
            href="#blog"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="hover:cursor-pointer dark:hover:text-light-white  "
            target="_self"
            rel="noreferrer"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center">
          <button
            className="h-[30px] w-[30px] hover:shadow-md hover:shadow-dark-500 hover:scale-125 hover:rounded-full"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? (
              <Icon
                icon="material-symbols:light-mode-outline"
                className="text-3xl	"
              />
            ) : (
              <Icon icon="material-symbols:dark-mode" className="text-3xl	" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
