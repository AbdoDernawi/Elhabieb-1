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
  Avatar,
  Button,
} from "@nextui-org/react";
import Icons from "@/iconsSvg";
import Link from "next/link";

const PageEmployees = () => {
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
      <>
        <div className="flex justify-between items-center mb-10">
          <Link href={`/dashboard/employees/add`}>
            <Button
              color="warning"
              className="h-14 mt-4"
              startContent={Icons.PlusIcon}
            >
              إضافة موظف
            </Button>
          </Link>
          <div className="w-[50%]">
            <input
              className="w-[30%] input"
              type="text"
              placeholder=" بحث ..."
            />
          </div>
        </div>
        <div className="ml-2 text-black opacity-60 text-sm mr-3 flex justify-end">
          <p>Total {120} Employees</p>
        </div>
      </>
    );
  };

  const HeaderTableEmployees = () => {
    return (
      <div
        className="flex items-center mt-4 mb-3 p-4 pr-10 pl-10 bg-[var(--mainColorRgba)] shadow-lg shadow-[var(--mainColorRgba)] rounded-2xl text-black opacity-75"
        dir="rtl"
      >
        <div className="w-[10%] flex justify-center">
          <p>الصورة</p>
        </div>
        <div className="w-[33%] flex justify-center">
          <p>الإسم</p>
        </div>
        <div className="w-[33%] flex justify-center">
          <p>رقم الهاتف</p>
        </div>
        <div className="w-[44%] flex justify-center">
          <p>password</p>
        </div>
        <div className="w-[44%] flex justify-center">
          <p>الرتبة</p>
        </div>
        <div className="w-[10%] flex justify-center"></div>
      </div>
    );
  };
  const TableEmployees = () => {
    return (
      <>
        <div className="flex items-center p-4 pr-10 pl-10 bg-[var(--mainColorRgbaa)] shadow-lg rounded-2xl border-1 mb-1 border-[var(--mainColor)] text-black opacity-75">
          <div className="w-[10%] flex justify-center">
            <Avatar
              src={
                "https://media-hbe1-2.cdn.whatsapp.net/v/t61.24694-24/328145398_1055480519330717_5044027427584496146_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIN9bHf1AK57V1Z86toZ8ccZMJn_33RCai8-qNoc23URA&oe=66B5B62C&_nc_sid=e6ed6c&_nc_cat=102"
              }
              size="lg"
            />
          </div>
          <div className="w-[33%] flex justify-center">
            <p className="text-warning-500">mohamed ali</p>
          </div>
          <div className="w-[33%] flex justify-center">
            <p> 01201217394</p>
          </div>
          <div className="w-[44%] flex justify-center">
            <p> ************** </p>
          </div>
          <div className="w-[44%] flex justify-center">
            <p> موظف </p>
          </div>
          <div className="w-[10%] flex justify-center">
            <div className="flex flex-wrap gap-4">
              <Link href={`/dashboard/employees/edit/121212`}>
                <Button
                  className="rounded-full mb-2 mt-2 "
                  variant="light"
                  color="warning"
                  startContent={Icons.PencilIcon}
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="h-[1000px] w-[100%] bg-slate-100 rounded-r-3xl  rounded-2xl overflow-y-auto p-6 mt-1">
      <div className="mt-3 text-black opacity-60 text-sm text-center">
        {HeaderFilters()}
      </div>

      {HeaderTableEmployees()}

      <div dir="rtl">
        {loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <Spinner size="lg" color="warning" />
          </div>
        ) : (
          TableEmployees()
        )}
      </div>
    </div>
  );
};

export default PageEmployees;
