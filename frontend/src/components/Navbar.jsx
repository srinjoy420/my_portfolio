import React, { useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const items = [
    { id: 1, text: "About" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Contact" },
  ];

  return (
    <div className="bg-yellow-50 text-black w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold flex items-center gap-1">
          <span>Srinjoy</span>
          <span className="text-yellow-500">Ghosh</span>
        </div>

        <ul className="flex gap-6 text-lg">
          {items.map((item) => (
            <li key={item.id} className="hover:text-yellow-500 cursor-pointer">
              {item.text}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
          <FaCloudDownloadAlt />
          <span>Download CV</span>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-4 py-3 shadow-sm">
        <div className="text-xl font-bold flex items-center gap-1">
          <span>Srinjoy</span>
          <span className="text-yellow-500">Ghosh</span>
        </div>
        <div className="cursor-pointer" onClick={() => setmenu(!menu)}>
          {menu ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden flex flex-col bg-yellow-50 px-4 py-3 gap-4 shadow-md">
          {items.map((item) => (
            <div key={item.id} className="text-lg hover:text-yellow-500 cursor-pointer">
              {item.text}
            </div>
          ))}
          <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
            <FaCloudDownloadAlt />
            <span>Download CV</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
