import React from "react";
import { NavLink } from "react-router-dom";

const NavbarSide = () => {
  return (
    <div className="bg-white min-h-screen md:w-[18vw] p-4 shadow-2xl w-[40px] hidden md:block">
      <h1 className="font-bold text-3xl hidden md:block">Expense Tracker</h1>

      {/* Search Bar */}
      <div className="hidden md:flex w-[95%] h-[50px] mt-7">
        <div className="p-3 bg-gray-300 rounded-l-lg">
          <i className="fas fa-search text-2xl"></i>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full bg-gray-300 rounded-r-lg px-2"
        />
      </div>

      {/* Menu Items */}
      <div className="menu-items w-full mt-4 border-t border-gray-300">
        <h2 className="text-gray-300 text-xl md:mt-2">Main</h2>
        <ul>
          {[
            { to: "/", icon: "fa-tachometer-alt", color: "text-blue-500", label: "Dashboard" },
            { to: "/expense", icon: "fa-money-bill-wave", color: "text-yellow-500", label: "Expense" },
            { to: "/create-expense", icon: "fa-plus", color: "text-green-500", label: "Create Expense" },
            { to: "/ai", icon: "fa-robot", color: "text-purple-500", label: "AI" },
          ].map((item, index) => (
            <li key={index} className="text-2xl mt-10 md:mt-3">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `md:p-4 rounded-2xl flex items-center gap-3 ${
                    isActive ? "bg-blue-200 text-blue-500" : "hover:bg-blue-200 hover:text-blue-500"
                  }`
                }
              >
                <i className={`fas ${item.icon} ${item.color}`}></i>
                <span className="">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSide;
