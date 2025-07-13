import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import image from "../assets/images/image.png";
import home from "../assets/images/home.png";
import { FaChevronDown } from "react-icons/fa6";
import pages from "../assets/images/pages.png";
import app from "../assets/images/app.png";

import notification from "../assets/images/notificatiom.png";
import { IoChatbox } from "react-icons/io5";
import trans from "../assets/images/transaction.png"
import Budgets from "../assets/images/Budgets.png"


const sidelinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: home,
    pages: [
      {
        name: "Classical",
        link: "/",
      },

      {
        name: "Minimal",
        link: "minimal",
      },
    ],
  },

  {
    id: 2,
    title: "pages",
    icon: pages,
    pages: [
      {
        name: "Login",
        link: "login",
      },
      {
        name: "Register",
        link: "signup",
      },
      {
        name: "Forgot Password",
        link: "password",
      },
    ],
  },
  {
    id: 3,
    title: "Applications",
    icon: app,
    pages: [
      {
        name: "Mail Box",
        link: "mailbox",
      },
      {
        name: "Chat",
        link: "/chatbox",
      },
      {
        name: "faq",
        link: "faq",
      },
    ],
  },
  
];

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [openitem, setopenitem] = useState(null);
  return (
    <div >
      <div
        className={`side min-h-screen  w-64 absolute top-0 left-0 z-[10000000] bg-[#f7faff]  lg:block pt-10 px-5  ${
          menuOpen ? "block" : "hidden"
        } transition-width duration-300 ease-in-out`}>
        <div className="logo  ">
          <a className="flex gap-3 items-center justify-center bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <img src={image} className="w-10" />
            <h1 className="bg-transparent font-bold text-[#5882ac] text-3xl">
              Finance
            </h1>
          </a>
        </div>

        <div className="links pt-5">
          {sidelinks.map((link) => {
            return (
              <li
                onClick={() => {
                  setopenitem(openitem === link.id ? null : link.id);
                }}
                className="cursor-pointer py-3  ">
                <Link className="flex items-center justify-between">
                  <img src={link.icon} className="w-8" />
                  <p className="text-xl">{link.title}</p>
                  <FaChevronDown />
                </Link>

                <ul
                  className={`py-5 ${
                    openitem === link.id ? "block scale-100" : "hidden scale-95"
                  } bg-white space-y-10 rounded-lg shadow-md transition-all duration-300 transform mt-3 ease-in-out`}>
                  {link.pages&&link.pages.map((page) => {
                    return (
                      <li className="flex  flex-col justify-center items-center space-y-10 ">
                        <Link to={`${page.link}`}>{page.name} </Link>
                      </li>
                    );
                    
                  }) }

                </ul>
              </li>
            );
          })}

          <ul>

            <li >
        <Link to={"trans"}className="flex items-center gap-10 pt-5">
         <img src={trans} className="w-8"></img>
              <p className="text-xl">transaction</p>
        </Link>
           </li>


            <li >
        <Link to={"Budgets"}className="flex items-center gap-10 pt-5">
         <img src={Budgets} className="w-8"></img>
              <p className="text-xl">Budgets</p>
        </Link>
           </li>
            <li >
        <Link to={"Expenses"}className="flex items-center gap-10 pt-5">
         <img src={Budgets} className="w-8"></img>
              <p className="text-xl">Expenses</p>
        </Link>
           </li>
             
           
           
            
          </ul>
        </div>
      </div>

      <div className="main  relative min-h-screen lg:pl-64 overflow-x-hidden w-[100%] pt-10 ">
        <div className="  w-full ">

          <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div class=" hidden lg:flex bg-[#f7faff] items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                  fill="#475569"
                />
              </svg>
              <input
                type="text"
                class="h-full px-2 py-5 rounded-full outline-none "
                placeholder="  search... "
                required
              />
            </div>

            <div className="flex items-center space-x-10">
              <img
                src={notification}
                alt="Notification"
                className="w-5 h-5 md:w-8 md:h-8"
              />
              <IoChatbox className="w-8 h-8" />

              <div className="relative">
                <img
                  className="w-8 h-8 rounded"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="userImage1"
                />
                <div className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                  <p className="text-xs text-white">09</p>
                </div>
              </div>

              {/* Open Button */}
            </div>
          </header>

          <div className="content m-[30px] ">

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
