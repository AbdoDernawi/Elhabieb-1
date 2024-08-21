"use client";

//REACT
import Barcode from "react-barcode";

//COMPONENTS
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

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

export default function QrCode({ params }: { params: { slug: string } }) {
  const DataOrder = () => {
    return (
      <>
        <div dir="rtl" className="flex justify-center w-[100%] mt-16">
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
          </div>
          <div>
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
        </div>
      </>
    );
  };
  const Body = () => {
    return (
      <div className="w-[100%] h-screen bg-[var(--content)] mt-1 mb-0.5 p-4 flex flex-col justify-center items-center">
        <Barcode
          background="#F6F1EB"
          value={"66a160351fa27363f7ea40fd"}
          format="CODE128"
          width={2}
          height={100}
        />
        <DataOrder />
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
