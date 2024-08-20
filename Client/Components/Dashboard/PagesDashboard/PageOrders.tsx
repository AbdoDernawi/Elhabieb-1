import React, { useState } from "react";

//nextUi
import {
  Spinner,
  Pagination,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Radio,
  RadioGroup,
  Badge,
} from "@nextui-org/react";
import Icons from "@/iconsSvg";
import Link from "next/link";

const PageOrders = () => {
  const [loading, setLoading] = useState(false);

  const ItemRadio = (nameItem: string, value: number) => {
    return (
      <Radio className="mr-6 sm:mr-1 max-sm:mr-1" value={nameItem}>
        <div className="flex flex-col justify-center items-center">
          <p>{value}</p>
          <p>{nameItem}</p>
        </div>
      </Radio>
    );
  };

  const HeaderFilters = () => {
    return (
      <div className="w-[100%]">
        <input className="w-[90%] input" type="text" placeholder=" بحث ..." />
        <div className="flex flex-col gap-3 mt-6 items-center">
          <RadioGroup
            className="mb-8"
            color="default"
            orientation="horizontal"
            style={{ direction: "ltr" }}
          >
            {ItemRadio("بإنتظار الموافقة", 2)}
            {ItemRadio("تم القبول", 2)}
            {ItemRadio("تم الرفض", 2)}
            {ItemRadio("مع الشحن", 2)}
            {ItemRadio("تم التوصيل", 2)}
            {ItemRadio("تم الإسترجاع", 2)}
            {ItemRadio("إسترجاع جزئي", 2)}
            {/* {ItemRadio("تم إستلام الكاش", 2)} */}
          </RadioGroup>
        </div>
        <p>Total {3} Orders </p>
      </div>
    );
  };

  const HeaderTableOrders = () => {
    return (
      <div
        className="flex items-center mt-4 mb-5 p-4 pr-10 pl-10 bg-[var(--mainColor)] shadow-lg shadow-[var(--mainColor)] rounded-2xl text-black opacity-75"
        dir="rtl"
      >
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>إسم العميل</p>
        </div>
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>رقم الهاتف</p>
        </div>
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>العنوان</p>
        </div>
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>مندوب التسويق</p>
        </div>
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>مندوب التوصيل</p>
        </div>
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>الحالة</p>
        </div>
        <div className="w-[25%] flex justify-center text-black opacity-50">
          <p>chatRoom</p>
        </div>

        <div className="w-[10%] flex justify-center text-black opacity-50">-</div>
      </div>
    );
  };
  const TableOrders = () => {
    return (
      <div className="flex items-center mb-2 p-4 pr-10 pl-10 bg-[var(--mainColor)] shadow-lg rounded-2xl border-1 border-[var(--mainColor)] text-black ">
        <div className="w-[25%] flex flex-col items-center justify-center">
          <Link
            className="hover:cursor-pointer border-b border-black text-[var(--ColorText)]"
            href={`orders/123`}
          >
            mohamed ali
          </Link>
        </div>

        <div className="w-[25%] flex justify-center text-[var(--ColorText)]">
          <p>01212619708</p>
        </div>
        <div className="w-[25%] flex justify-center text-[var(--ColorText)]">
          <p>البحيره</p>
        </div>
        <div className="w-[25%] flex justify-center text-[var(--ColorText)]">
          <p>abdo</p>
        </div>
        <div className="w-[25%] flex justify-center text-[var(--ColorText)]">
          <p>
            <span>لا يوجد بعد!</span>
          </p>
        </div>
        <div className="w-[25%] flex justify-center text-[var(--ColorText)]">
          <p>تم إستلام الكاش</p>
        </div>
        <div className="w-[25%] flex justify-center opacity-75">
          <Badge
            content={2}
            color="warning"
            placement="top-right"
            className="hover:cursor-pointer hover:opacity-75 bg-success-500 p-3 mt-1 rounded-full border-1 border-success-600 text-success-800 shadow-2xl shadow-success-300"
          >
            <Link href={`orders/chat/12`}>
              <p className="ml-2 hover:cursor-pointer hover:opacity-75 bg-primary-200 p-3 mt-1 rounded-full border-1 border-primary-600 text-primary-900">
                {Icons.ChatbubbleleftrightIcon}
              </p>
            </Link>
          </Badge>
        </div>
        <div className="w-[10%] flex justify-center opacity-75">
          <Popover>
            <PopoverTrigger>
              <span className="hover:cursor-pointer">
                {Icons.EllipsisverticalIcon}
              </span>
            </PopoverTrigger>
            <PopoverContent className=" border-1 border-[var(--mainColor)] p-5">
              <div className="w-[25%] flex justify-center">
                <div>
                  <Link href={`orders/edit/12`}>
                    <p className="hover:cursor-pointer hover:opacity-75 bg-warning-200 p-3 mt-1 rounded-full border-1 border-warning-600 text-warning-900">
                      {Icons.PencilIcon}
                    </p>
                  </Link>
                </div>
                <div className="mx-1">
                  <Link href={`orders/Print/12`}>
                    <p className="hover:cursor-pointer hover:opacity-75 bg-primary-200 p-3 mt-1 rounded-full border-1 border-primary-600 text-primary-900">
                      {Icons.PrinterIcon}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href={`orders/QrCode/12`}>
                    <p className="hover:cursor-pointer hover:opacity-75 bg-success-200 p-3 mt-1 rounded-full border-1 border-success-600 text-success-900">
                      {Icons.QrCodeIcon}
                    </p>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  };
  return (
    <div className="h-screen w-[100%] bg-[var(--content)] border-1 border-[var(--mainColor)]  overflow-y-auto custom-scrollbar p-6 mt-1">
      <div className="mt-3 text-black opacity-60 text-sm text-center">
        {HeaderFilters()}
      </div>

      {HeaderTableOrders()}

      <div dir="rtl">
        {loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <Spinner size="lg" color="default" />
          </div>
        ) : (
          <div >{TableOrders()}</div>
        )}
      </div>
    </div>
  );
};

export default PageOrders;
