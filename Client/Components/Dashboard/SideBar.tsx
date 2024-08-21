"use client";

// react
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

//component
import Icons from "@/iconsSvg";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function SideBar() {
  const path = usePathname();
  const Item = (icon: any, nameItem: string, link: string) => {
    const isActive =
      link === "/dashboard"
        ? path === "/dashboard"
        : path.startsWith(link) && link !== "/dashboard";
    return (
      <Link
        className="p-4 pl-5 opacity-90 mb-1 text-black text-sm flex justify-between items-center hover:font-bold hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
        href={link}
      >
        <div className="flex items-center">
          {icon}
          <p className="block hover:font-bold mr-3">{nameItem}</p>
        </div>
        <p className={`rotate-180 ${isActive ? "" : "hidden"}`}>
          {Icons.ForwardIcon}
        </p>
      </Link>
    );
  };

  return (
    <>
      <div
        className="h-screen overflow-y-auto bg-[var(--mainColor)] custom-scrollbar"
        dir="rtl"
      >
        <div className="p-6 flex justify-center">
          <p className="text-xl animate-slide-color">اللهم صلي وسلم علي سيدنا محمد </p>
        </div>
        <div className="w-[100%] h-10"></div>
        <div className="flex items-center justify-between">
          <div className="w-[35%] h-[1px] bg-slate-400"></div>
          <span className="text-slate-400">الرئيسيه</span>
          <div className="w-[35%] h-[1px] bg-slate-400"></div>
        </div>

        {Item(Icons.HomeIcon, "لوحة التحكم", "/dashboard")}
        {Item(Icons.MapIcon, "الطلبيات", "/dashboard/orders")}
        {Item(
          Icons.ArrowtrendingdownIcon,
          "عهدة التوصيل",
          "/dashboard/deliverySecurity"
        )}
        {Item(Icons.ArrowPathcon, "تحويلات مالية", "/dashboard/moneyTransfers")}

        <Accordion>
          <AccordionItem
            className="px-2"
            key="1"
            title={
              <div className="pl-5 opacity-90 mb-1 text-black text-sm flex justify-between items-center hover:font-bold hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
                <div className="flex items-center">
                  {Icons.BoltIcon}
                  <p className="block hover:font-bold mr-3">الرتبات</p>
                </div>
              </div>
            }
          >
            <div className="w-[100%] overflow-x-hidden">
              {Item(Icons.UsergroupIcon, "الموظفين", "/dashboard/employees")}
              {Item(Icons.UsergroupIcon, "الزبائن", "/dashboard/customers")}
              {Item(
                Icons.ShoppingcartIcon,
                "مندوبي التسويق",
                "/dashboard/marketer"
              )}
              {Item(
                Icons.RocketlaunchIcon,
                "مندوبي التوصيل",
                "/dashboard/deliveries"
              )}
            </div>
          </AccordionItem>
        </Accordion>

        {Item(Icons.ListbulletIcon, "الأقسام", "/dashboard/categories")}
        {Item(Icons.ProductsIcon, "المنتجات", "/dashboard/products")}
        <div className="flex items-center justify-between">
          <div className="w-[35%] h-[1px] bg-slate-400"></div>
          <span className="text-slate-400">إضافات</span>
          <div className="w-[35%] h-[1px] bg-slate-400"></div>
        </div>
        {Item(Icons.BanknotesIcon, "طرق الدفع", "/dashboard")}
        {Item(Icons.BuildinglibraryIcon, "الخزينه", "/dashboard")}
        {Item(Icons.BanknotesIcon, "طلبات السحب", "/dashboard")}
        {Item(Icons.UsergroupIcon, "الموردين", "/dashboard")}
        {Item(Icons.ShoppingbagIcon, "المشتريات", "/dashboard")}
        {Item(Icons.ComputerDesktopIcon, "الكاشير", "/dashboard")}
        {Item(
          Icons.ArrowtrendingdownIcon,
          "سجل تحويلات الكاشير",
          "/dashboard"
        )}
        {Item(Icons.BuildingstorefrontIcon, "المخازن", "/dashboard")}

        <div className="p-4 pl-5 m-1 cursor-pointer text-slate-700 text-sm flex items-center hover:text-red-500 opacity-[0.7] rounded-2xl hover:font-bold ">
          {Icons.ArrowUturnDownIcon}
          <span className="block hover:font-bold ml-3">تسجيل خروج</span>
        </div>
      </div>
    </>
  );
}
