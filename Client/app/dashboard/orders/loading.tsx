"use client";

//components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import PageOrders from "@/Components/Dashboard/PagesDashboard/PageOrders";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

export default function Orders() {
  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1 flex flex-col">
          <NavBar />
          <PageOrders />
        </div>
        <div className="w-[20%] bg-white flex flex-col">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
