"use client";

//components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import PageAnalysis from "@/Components/Dashboard/PagesDashboard/PageAnalysis";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

const Loading = () => {
  return (
    <>
      <div className="bg-zinc-200 lg:h-auto w-[100%] min-h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1">
          <NavBar />
          <PageAnalysis />
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
};

export default Loading;
