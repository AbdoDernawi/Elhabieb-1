"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { Avatar } from "@nextui-org/react";

import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import SizeScreen from "@/Components/Dashboard/SizeScreen";

import { RootState, AppDispatch } from "@/src/store";
import { fetchProductById } from "@/features/productSlice";

export default function Product() {
  const { slug } = useParams() || "";
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (typeof slug === "string") {
      dispatch(fetchProductById(slug));
    }
  }, [dispatch, slug]);

  const DataProduct = () => (
    <div className="flex">
      <div className="w-[50%]">
        <div className="flex">
          <p className="ml-2 text-black opacity-50">كود المنتج :</p>
          <p className="text-[var(--ColorText)]">{product?._id}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">الإسم :</p>
          <p className="text-[var(--ColorText)]">{product?.name}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">التكلفة :</p>
          <p className="text-[var(--ColorText)]">{product?.price}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">سعر البيع للمسوق :</p>
          <p className="text-[var(--ColorText)]">{product?.priceMarkter}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">سعر البيع للزبون :</p>
          <p className="text-[var(--ColorText)]">{product?.priceCustomer}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">القسم :</p>
          <p className="text-[var(--ColorText)]">{product?.catogry}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">تاريخ الإضافة :</p>
          <p className="text-[var(--ColorText)]">{product?.dateAdded}</p>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">وقت الإضافة :</p>
          <p className="text-[var(--ColorText)]">{product?.timeAdded}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center my-5">
          <p className="ml-2 text-black opacity-50">الألوان :</p>
          <div className="text-[var(--ColorText)] flex gap-2">
            {product?.colors && product.colors.length > 0 ? (
              product.colors.map((item, k) => (
                <div key={k}>
                  <p
                    className="w-12 h-12 rounded-full border-2 border-white"
                    style={{
                      backgroundColor: item,
                      outline: `2px solid ${item}`,
                    }}
                  ></p>
                </div>
              ))
            ) : (
              <p>لا توجد أي ألوان</p>
            )}
          </div>
        </div>
        <div className="flex items-center my-5">
          <p className="ml-2 text-black opacity-50">الصور :</p>
          <div className="flex items-center">
            {product?.images.map((item, k) => (
              <div key={k} className="flex gap-3">
                <Avatar
                  className="outline-2 outline-slate-300"
                  src={item || "/default-image.png"}
                  size="md"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex my-5">
          <p className="ml-2 text-black opacity-50">الوصف :</p>
          <p className="text-[var(--ColorText)]">{product?.discrubtion}</p>
        </div>
      </div>
    </div>
  );

  const ProductsBranch = () => (
    <div>
      <div
        className="flex items-center p-4 mb-5 bg-[var(--mainColor)] shadow-lg rounded-2xl text-black opacity-75"
        dir="rtl"
      >
        <div className="w-full flex justify-center text-black opacity-50">
          الصورة
        </div>
        <div className="w-full flex justify-center text-black opacity-50">
          الإسم
        </div>
        <div className="w-full flex justify-center text-black opacity-50">
          القسم
        </div>
        <div className="w-full flex justify-center text-black opacity-50">
          السعر
        </div>
        <div className="w-full flex justify-center text-black opacity-50">
          الكمية
        </div>
      </div>
      <div>
        {product?.products.map((item, k) => (
          <div
            key={k}
            className="flex items-center p-4 mb-2 bg-[var(--mainColor)] shadow-lg rounded-2xl border-1 border-[var(--mainColor)] text-black"
          >
            <div className="w-full flex justify-center">
              <Avatar
                className={`outline-2 ${
                  item.active ? "outline-green-800" : "outline-red-800"
                }`}
                src={item.images[0] || "/default-image.png"}
                size="lg"
              />
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p>{item.name}</p>
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p>{item.catogry}</p>
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p>
                <span>{item.price}</span>
                <span className="mr-1">د.ل</span>
              </p>
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p>
                <span>{100}</span>
                <span className="mr-1">قطعة</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Body = () => (
    <div
      className="h-screen w-full bg-[var(--content)] border-1 border-[var(--mainColor)] overflow-y-auto custom-scrollbar p-6 mt-1"
      dir="rtl"
    >
      <DataProduct />
      <ProductsBranch />
    </div>
  );

  return (
    <>
      <div className="w-full h-screen flex max-2xl:flex max-xl:flex lg:flex md:hidden sm:hidden max-sm:hidden">
        <div className="w-[80%] mr-1 flex flex-col">
          <NavBar />
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <p>Loading...</p>
            </div>
          ) : (
            <Body />
          )}
        </div>
        <div className="w-[20%] bg-white flex flex-col">
          <SideBar />
        </div>
      </div>
      <SizeScreen />
    </>
  );
}
