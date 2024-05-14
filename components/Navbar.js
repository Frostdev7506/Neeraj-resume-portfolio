import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="py-10 px-10 text-gray-500 mb-12 flex justify-between ">
        <h1 className="text-xl font-burtons ">Resume/Portfolio</h1>
        <ul className="flex items-center pl-5 ">
          <li className=" ">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl "
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 border-y-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
