"use client";

// REACT
import { useState } from "react";

// COMPONENTS
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";
import PageAnalysis from "@/Components/Dashboard/PagesDashboard/PageAnalysis";
import AddPerson from "@/Components/Dashboard/AddPerson";
import EditPerson from "@/Components/Dashboard/EditPerson";

export default function Loading({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="bg-zinc-200 lg:h-auto w-[100%] min-h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1">
          <NavBar />
          <EditPerson type={"مندوب توصيل"} />
        </div>
        <div className="w-[20%] bg-white">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
