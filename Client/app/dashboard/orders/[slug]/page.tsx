"use client";

//REACT
import Barcode from "react-barcode";

//COMPONENTS
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";
import { Avatar, Pagination } from "@nextui-org/react";
import { useState } from "react";

const Data = {
  id: "66a160351fa27363f7ea40fd",
  nameClient: "طلبية كبيرة",
  phone1Client: "911149336",
  phone2Client: "911149330",
  address: "جنب الجامع",
  date: "7/24/2024",
  time: "9:55:43 PM",
  marketer: "H6",
  gainMarketer: "0",
  deliveryPrice: "10",
  situation: "بإنتظار الموافقة",
};

export default function Order({ params }: { params: { slug: string } }) {
  const DataOrder = () => {
    return (
      <div className="flex ">
        <div className="w-[50%]">
          <div className="flex">
            <p className="ml-2 text-black opacity-50"> كود الطلبية : </p>
            <p className="text-[var(--ColorText)]"> {Data.id} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> اسم العميل : </p>
            <p className="text-[var(--ColorText)]"> {Data?.nameClient} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> رقم هاتف 1 : </p>
            <p className="text-[var(--ColorText)]"> {Data?.phone1Client} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> رقم هاتف 2 : </p>
            <p className="text-[var(--ColorText)]"> {Data?.phone2Client} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> العنوان : </p>
            <p className="text-[var(--ColorText)]"> {Data?.address} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> التاريخ : </p>
            <p className="text-[var(--ColorText)]"> {Data?.date} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> الوقت : </p>
            <p className="text-[var(--ColorText)]"> {Data?.time} </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <p className="ml-2 text-black opacity-50">مندوب التسويق :</p>
            <p className="text-[var(--ColorText)]"> {Data?.marketer} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> ربح المسوق : </p>
            <p className="text-[var(--ColorText)]"> {Data?.gainMarketer} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> سعر التوصيل : </p>
            <p className="text-[var(--ColorText)]"> {Data?.deliveryPrice} </p>
          </div>
          <div className="flex my-5">
            <p className="ml-2 text-black opacity-50"> حالة الطلبية : </p>
            <p className="text-[var(--ColorText)]"> {Data?.situation} </p>
          </div>
        </div>
      </div>
    );
  };

  const ProductsOrder = () => {
    return (
      <div>
        <div>
          <div className="flex items-center mt-4 mb-5 p-4 pr-10 pl-10 bg-[var(--mainColor)] shadow-lg shadow-[var(--mainColor)] rounded-2xl text-black opacity-75">
            <div className="w-[20%] text-center text-black opacity-50">
              <p> الصورة </p>
            </div>
            <div className="w-[20%] text-center text-black opacity-50">
              <p> إسم المنتج </p>
            </div>
            <div className="w-[20%] text-center text-black opacity-50">
              <p> اللون </p>
            </div>
            <div className="w-[20%] text-center text-black opacity-50">
              <p> المقاس </p>
            </div>
            <div className="w-[20%] text-center text-black opacity-50">
              <p> الكمية </p>
            </div>
            <div className="w-[20%] text-center text-black opacity-50">
              <p> سعر المنتج </p>
            </div>
            <div className="w-[20%] text-center text-black opacity-50">
              <p> الإجمالي </p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-3 p-4 pr-10 pl-10 bg-[var(--mainColor)] shadow-lg rounded-2xl border-1 border-[var(--mainColor)] text-black ">
              <div className="w-[20%] flex justify-center">
                <Avatar
                  size="lg"
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
              </div>
              <div className="w-[20%] text-center">
                <p> test </p>
              </div>
              <div className="w-[20%] text-center">
                <p> test </p>
              </div>
              <div className="w-[20%] text-center">
                <p> test </p>
              </div>
              <div className="w-[20%] text-center">
                <p> test </p>
              </div>
              <div className="w-[20%] text-center">
                <p> test </p>
              </div>
              <div className="w-[20%] text-center">
                <p> test </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Body = () => {
    return (
      <div
        className="h-screen w-[100%] bg-[var(--content)] border-1 border-[var(--mainColor)]  overflow-y-auto custom-scrollbar p-6 mt-1"
        dir="rtl"
      >
        <DataOrder />
        <ProductsOrder />
      </div>
    );
  };
  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1 flex flex-col">
          <NavBar />
          <Body />
        </div>
        <div className="w-[20%] bg-white flex flex-col">
          <SideBar />
        </div>
      </div>

      <SizeScreen />
    </>
  );
}
