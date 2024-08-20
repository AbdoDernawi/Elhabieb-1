"use client";

// react
import { useState } from "react";

// nextUi
import {
  Tooltip,
  User,
  Spinner,
  Badge,
  PopoverContent,
  Popover,
  PopoverTrigger,
} from "@nextui-org/react";

// svgIcons
import Icons from "@/iconsSvg";

export default function NavBar() {
  const notif = () => {
    return (
      <>
        <div className=" text-white text-sm flex items-center justify-between pr-5 hover:font-bold hover:cursor-pointer hover:transform hover:scale-110 transition-transform duration-300">
          <Popover className="w-[1000px]" placement="right" backdrop="blur">
            <PopoverTrigger>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Badge color="success" content={2} shape="circle">
                    <span className="text-black">{Icons.BellalertIcon}</span>
                  </Badge>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[100%] flex flex-col justify-start items-end max-h-[500px] min-h-96 overflow-y-auto  P-4 py-6">
              <div className="w-[100%] h-96 text-lg flex justify-center items-center">
                لا يوجد أي إشعارات
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="flex justify-between items-center w-[100%] h-[60px] bg-[#e3d5c4ad]"
        style={{ direction: "ltr" }}
      >
        <div className="flex justify-start items-center w-[35%] h-[60px] pl-6 ">
          <span className="text-black opacity-90 font-bold text-xl mr-5">
            Dashboard
          </span>
        </div>

        <div className="mr-7 flex items-center">
          {notif()}
          <Tooltip
            showArrow
            placement="bottom"
            content={1}
            classNames={{
              base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400 rounded-lg",
              arrow: "bg-neutral-400 dark:bg-white",
            }}
          >
            <User
              className="hover:cursor-pointer"
              name={
                <div className="text-black opacity-90 font-medium">
                  <p>mohamed ali</p>
                  <p className="text-slate-500 text-sm mt-1">admin</p>
                </div>
              }
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                size: "md",
              }}
            />
            {/* )} */}
          </Tooltip>
        </div>
      </div>
    </>
  );
}
