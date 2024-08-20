"use client";

// Components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";
import AddPerson from "@/Components/Dashboard/AddPerson";

export default function Loading() {
  return (
    <>
      <div className="bg-zinc-200 lg:h-auto w-[100%] min-h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1">
          <NavBar />
          <AddPerson type={"مندوب تسويق"} />
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
