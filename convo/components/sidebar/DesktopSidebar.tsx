"use client";

import DesktopItem from "./DesktopItem";
import useRoutes from "@/hooks/useRoutes";

import { useState } from "react";
import { User } from "@prisma/client";
import { IconType } from "react-icons";

interface RouteItem {
  label: string;
  href?: string; // Making href optional
  icon: IconType;
  active?: boolean; // Making active optional
  onClick?: () => Promise<void> | void;
}

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes: RouteItem[] = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-20 
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-white 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      ">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href || '#'} // Providing a default value or handle it conditionally
                label={item.label}
                icon={item.icon}
                active={item.active || false} // Providing a default value or handle it conditionally
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          ></div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
