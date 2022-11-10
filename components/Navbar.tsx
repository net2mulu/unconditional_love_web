import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.webp";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FaYoutube, FaTelegram, FaFacebook } from "react-icons/fa";
const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  
  return (
    <div className="fixed w-full h-20 z-[100] bg-white shadow-lg shadow-gray-300 top-0 left-0 right-0">
      <div className="flex items-center justify-between w-full h-full p-6">
        <div className="md:flex-1">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="md:flex-1 text-xl md:mr-10">
          <ul className="items-center justify-between hidden md:flex">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>About</li>
            </Link>
            <Link href="/">
              <li>Works</li>
            </Link>
            <Link href="/">
              <li>Partners</li>
            </Link>
            <Link href="/">
              <li>Contact</li>
            </Link>
            <AiOutlineSearch />
          </ul>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setSideMenu(!sideMenu)}
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          sideMenu
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            sideMenu
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div className="flex items-center justify-between">
            <div>
              <Image src={logo} alt="Logo" width={50} height={50} />
            </div>
            <div
              onClick={() => setSideMenu(!sideMenu)}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4 mx-auto">Together We can!</p>
          </div>
          <div className="flex flex-col py-4  ">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4  text-sm ">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4  text-sm ">About</li>
              </Link>
              <Link href="/">
                <li className="py-4  text-sm ">Works</li>
              </Link>
              <Link href="/">
                <li className="py-4  text-sm ">Partners</li>
              </Link>
              <Link href="/">
                <li className="py-4  text-sm ">Contact</li>
              </Link>
            </ul>
            <div className="pt-20 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-start my-3 w-full sm:w[80%]">
                <div className="p-3 cursor-pointer duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105">
                  <FaFacebook />
                </div>
                <div className="p-3 cursor-pointer duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105">
                  <FaYoutube />
                </div>
                <div className="p-3 cursor-pointer duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-105">
                  <FaTelegram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
