import { FaMoon } from "react-icons/fa";
import React from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="">
      <Navbar className="bg-gray-500">
        <div>Header</div>
        <button className=" border rounded-full p-3 hover:bg-red-800 hover:text-white " pill>
          <FaMoon />
        </button>
      </Navbar>
    </div>
  );
};

export default Header;
