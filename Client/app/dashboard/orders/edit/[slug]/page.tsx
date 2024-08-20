"use client";

// REACT
import { useState } from "react";

// COMPONENTS
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

const SituationItem = ({ status, situations, onChangeSituation }: any) => {
  const isActive = situations.some(
    (item: { situation: any }) => item.situation === status
  );
  const handleClick = () => onChangeSituation(status);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`border-1 border-[var(--Border)] w-36 h-16 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-[var(--Border)] ${
          isActive ? "bg-[var(--Border)]" : ""
        }`}
        onClick={handleClick}
      >
        {status}
      </div>
      <p className="w-[100%] text-center">
        {isActive
          ? situations.find(
              (item: { situation: any }) => item.situation === status
            )?.date || "-/--/----"
          : "-/--/----"}
      </p>
      <p className="w-[100%] text-center">
        {isActive
          ? situations.find(
              (item: { situation: any }) => item.situation === status
            )?.time || "--:--"
          : "--:--"}
      </p>
    </div>
  );
};

const Tabs = ({ situations, onChangeSituation }: any) => {
  const statuses = [
    "بإنتظار الموافقة",
    "قبول",
    "رفض",
    "مع الشحن",
    "إسترجاع جزئي",
    "إسترجاع",
    "تم التوصيل",
    "تم إستلام الكاش",
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center items-center">
        {statuses.map((status, index) => (
          <div
            key={status}
            className={`flex flex-col items-center ${
              index % 2 === 1 ? "mx-2" : ""
            }`}
          >
            <SituationItem
              status={status}
              situations={situations}
              onChangeSituation={onChangeSituation}
            />
            {index % 2 === 1 && (
              <div className="text-black text-lg pb-10 mt-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Body = ({ situations, onChangeSituation }: any) => (
  <div className="h-screen w-[100%] bg-[var(--content)] border-1 border-[var(--mainColor)] overflow-y-auto custom-scrollbar flex flex-col justify-center items-center p-6 mt-1">
    <p className="text-lg w-[100%] flex justify-end mb-20">
      <span className="text-[var(--ColorText)]">mohamed</span>{" "}
      <span className="ml-2 text-black opacity-50 " dir="rtl">
        مندوب التوصيل |
      </span>
    </p>
    <Tabs situations={situations} onChangeSituation={onChangeSituation} />
  </div>
);

export default function Edit({ params }: { params: { slug: string } }) {
  const [situations, setSituations] = useState<
    { situation: string; date: string; time: string }[]
  >([]);

  const changeSituation = (newSituation: string) => {
    const newSituationItem = {
      situation: newSituation,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setSituations((prevSituations) =>
      prevSituations.some((item) => item.situation === newSituation)
        ? prevSituations.filter((item) => item.situation !== newSituation)
        : [...prevSituations, newSituationItem]
    );
  };

  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1 flex flex-col">
          <NavBar />
          <Body situations={situations} onChangeSituation={changeSituation} />
        </div>
        <div className="w-[20%] bg-white flex flex-col">
          <SideBar />
        </div>
      </div>
      <SizeScreen />
    </>
  );
}
