"use client";

// react
import Image from "next/image";

//components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import PageDeliveries from "@/Components/Dashboard/PagesDashboard/PageDeliveries";

//images
import error from "@/public/images/notfound.png";

export default function Loading() {
  return (
    <>
      <div className="bg-zinc-200 lg:h-auto w-[100%] min-h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1">
          <NavBar />
          <PageDeliveries />
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <div className="flex max-2xl:hidden max-xl:hidden lg:hidden md:flex sm:flex max-sm:flex h-screen flex-col items-center justify-center">
        <Image src={error} alt={"error"} width={200} height={300} />
        <p> عفوا مقاس الشاشه الخاص بك غير مدعوم ☹ </p>
      </div>
    </>
  );
}
