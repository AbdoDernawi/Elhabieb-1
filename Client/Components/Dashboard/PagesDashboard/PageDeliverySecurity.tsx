"use client";

//react
import React, { useState } from "react";

//nextUi
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Spinner,
  Avatar,
} from "@nextui-org/react";

export default function PageDeliverySecurity() {
  const [loading, setLoading] = useState(false);

  const HeaderFilters = () => {
    return (
      <div className="w-[100%]">
        <input className="w-[90%] input" type="text" placeholder=" بحث ..." />
        <p className="mt-6">Total {3} Orders </p>
      </div>
    );
  };

  const TableDeliveries = () => {
    return (
      <div className="grid gab-1 grid-cols-3 w-[100%] my-3">
        <Card shadow="sm">
          <CardBody className="overflow-visible p-5 text-lg">
            <a
              className="w-[100%] flex justify-center"
              href="/dashboard/deliverySecurity/12"
            >
              <Avatar
                src={
                  "https://firebasestorage.googleapis.com/v0/b/elhabieb-d3522.appspot.com/o/elhbaieb%2F1719180002_l9515ptx_%D9%85%D9%86%D8%AF%D9%88%D8%A8%20%D8%AA%D9%88%D8%B5%D9%8A%D9%84.png?alt=media&token=a58b7262-b36f-4d38-b0c3-715cf6797636"
                }
                alt="لا يوجد صورة"
                className="w-20 h-20"
              />
            </a>

            <div className="flex justify-start my-2">
              <p className="opacity-75">إسم المندوب :</p>
              <p className="mr-2">محمد الفرجاني</p>
            </div>
            <div className="flex justify-start my-2">
              <p className="opacity-75">رقم الهاتف :</p>
              <p className="mr-2">0000</p>
            </div>
            <div className="flex justify-start my-2">
              <p className="opacity-75">عدد الطلبات :</p>
              <p className="mr-2">{27}</p>
            </div>
            <div className="flex justify-start my-2">
              <p className="opacity-75">الأموال :</p>
              <div className="mr-2 flex">
                <p>{1000}</p>
                <p className="mr-1">د.ل</p>
              </div>
            </div>
            <Button
              color="warning"
              className="opacity-90 rounded-full w-[100%] mt-2"
            >
              المخزن
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
            TableDeliveries()
          )}
        </div>
      </div>
    </>
  );
}
