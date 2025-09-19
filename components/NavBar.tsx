"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [islogged, setislogged] = useState<boolean> (true)

  const tabs = [
    { text: "Home", href: "/" },
    { text: "Posts", href: "/posts" },
    { text: "Users", href: "/users" },
  ];

  return (
    <header className="bg-[#05203C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between shadow-xl py-4">
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="font-bold tracking-widest ml-[-8px] text-xl sm:text-2xl"
            >
              Mini Dashboard
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-block relative cursor-pointer mx-2 group">
              <span 
                className="after:content-[''] after:absolute
                 after:left-0 after:bottom-0 after:w-0 
                 after:h-[1px] after:bg-white 
                 after:transition-all after:duration-300 
                 group-hover:after:w-full"
                 >
                Help
              </span>
            </div>
            <button className="rounded-md hover:bg-white/20 hover:text-yellow-400 p-2">
              🌍
            </button>
            <button className="rounded-md hover:bg-white/20 hover:text-yellow-400 p-2">
              ❤️
            </button>
            {/* if user loogedin then  */}
            {islogged?
              <div className="rounded-full border-1 p-1">
                <img src="user.svg" alt="" />
              </div>
            :
              <button
                onClick={() => alert("Open login popup")}
                className="bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-1 ml-2"
              >
                Login
              </button>
            }
          </div>
        </div>
        <div className="flex gap-2 mt-6 flex-wrap mb-6">
          {tabs.map((item, index) => (
          <Link
              key={index}
              href={item.href}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-1 rounded-lg text-sm border border-gray-400 transition
                ${activeTab === index ? "bg-green-600 text-white" : "hover:bg-blue-800"}
              `}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
