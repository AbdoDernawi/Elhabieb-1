"use client";

// Components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";
import AddCategory from "@/Components/Dashboard/AddCategory";

export default function PageAddCategory() {
  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1 flex flex-col">
          <NavBar />
          <AddCategory />
        </div>
        <div className="w-[20%] bg-white flex flex-col">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
