"use client";

//react
import React, { useState } from "react";

//nextUi
import { Button, Card, CardBody, Spinner } from "@nextui-org/react";

//components
import Icons from "@/iconsSvg";

export default function PageMoneyTransfers() {
  const [loading, setLoading] = useState(false);

  const HeaderFilters = () => {
    return (
      <div className="w-[100%]">
        <input className="w-[90%] input" type="text" placeholder=" بحث ..." />
        <p className="mt-6">Total {3} Orders </p>
      </div>
    );
  };

  const TableMoneyTransfers = () => {
    return (
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        <Card shadow="sm">
          <CardBody className="overflow-visible  p-5 ">
            <div className=" flex flex-col items-start text-md">
              <p className="mb-3">
                <span>إسم المرسل | </span>
                <span className="font-bold">محمد الفرجاني</span>
              </p>
              <p className="mb-3">
                <span>رتبة المرسل | </span>
                <span className="font-bold">مندوب توصيل</span>
              </p>
              <p className="mb-3">
                <span>التاريخ | </span>
                <span className="font-bold">٢٢/٦/٢٠٢٤</span>
              </p>
              <p className="" style={{ direction: "rtl" }}>
                <span>الوقت | </span>
                <span className="font-bold">٣:١٤:٤١ ص</span>
              </p>
            </div>
            <Button
              className="w-[100%] rounded-full text-warning-800 mt-4"
              startContent={Icons.BanknotesIcon}
              color="warning"
            >
              إستلام
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div className="h-[1000px] w-[100%] bg-slate-100 rounded-r-3xl  rounded-2xl overflow-y-auto p-6 mt-1">
        <div className="mt-3 text-black opacity-60 text-sm text-center">
          {HeaderFilters()}
        </div>

        <div dir="rtl">
          {loading ? (
            <div className="flex justify-center items-center h-[400px]">
              <Spinner size="lg" color="warning" />
            </div>
          ) : (
            TableMoneyTransfers()
          )}
        </div>
      </div>
    </>
  );
}
