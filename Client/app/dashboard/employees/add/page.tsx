"use client";

import AddPerson from "@/Components/Dashboard/AddPerson";
// Components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

export default function AddEmploy() {
  return (
    <>
      <div className="bg-zinc-200 lg:h-auto w-[100%] min-h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1">
          <NavBar />
          <AddPerson type={"موظف"} />
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
