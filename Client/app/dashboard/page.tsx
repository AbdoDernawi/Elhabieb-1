"use client";

//components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import PageAnalysis from "@/Components/Dashboard/PagesDashboard/PageAnalysis";
import SizeScreen from "@/Components/Dashboard/SizeScreen";
import WorkingOnPage from "@/Components/WorkingOnPage";

export default function Home() {
  return (
    <>
      {/* <div className="w-[100%] h-full flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1">
          <NavBar />
          <PageAnalysis />
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <SizeScreen /> */}
      <WorkingOnPage /> 
    </>
  );
}
