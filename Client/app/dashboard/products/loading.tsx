"use client";

// react
import Image from "next/image";

//components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import PageProducts from "@/Components/Dashboard/PagesDashboard/PageProducts";

//images
import SizeScreen from "@/Components/Dashboard/SizeScreen";

export default function Products() {
  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1 flex flex-col">
          <NavBar />
          <PageProducts />
        </div>
        <div className="w-[20%] bg-white flex flex-col">
          <SideBar />
        </div>
      </div>

      <SizeScreen />

    </>
  );
}
