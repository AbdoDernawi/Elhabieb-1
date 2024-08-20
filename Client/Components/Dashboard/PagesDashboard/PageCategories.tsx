import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Button, Avatar } from "@nextui-org/react";
import { RootState, AppDispatch } from "@/src/store";
import { fetchCategories } from "@/features/categorySlice";
import Link from "next/link";
import Icons from "@/iconsSvg";

const PageCategories: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  );

  // # Filter Categories
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // # Header Filters
  const HeaderFilters = () => (
    <div className="flex flex-col mb-10">
      <div className="flex justify-between items-center mb-4">
        <Link href="/dashboard/categories/add">
          <Button
            className="h-14"
            color="default"
            startContent={Icons.PlusIcon}
          >
            إضافة قسم
          </Button>
        </Link>
        <div className="w-[50%]">
          <input
            className="w-full input"
            type="text"
            placeholder="بحث ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="ml-2 text-black opacity-60 text-sm flex justify-end">
        <p>Total {filteredCategories.length} Categories</p>
      </div>
    </div>
  );

  // # Header Table Orders
  const HeaderTableOrders = () => (
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
        عدد المنتجات
      </div>
      <div className="w-full flex justify-center text-black opacity-50">
        الحالة
      </div>
      <div className="w-full flex justify-center">-</div>
    </div>
  );

  // # Table Orders
  const TableOrders = () => (
    <>
      {filteredCategories.length === 0 ? (
        <div className="flex justify-center items-center h-[400px] text-black opacity-50">
          <p>لا يوجد أي أقسام</p>
        </div>
      ) : (
        filteredCategories.map((category) => (
          <div
            key={category._id}
            className="flex items-center p-4 mb-2 bg-[var(--mainColor)] shadow-lg rounded-2xl border-1 border-[var(--mainColor)] text-black"
          >
            <div className="w-full flex justify-center">
              <Avatar src={category.image} size="lg" />
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p>{category.name}</p>
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p>{category.products.length}</p>
            </div>
            <div className="w-full flex justify-center opacity-75">
              <p
                className={
                  category.Active ? "text-success-500" : "text-red-500"
                }
              >
                {category.Active ? "نشط" : "غير نشط"}
              </p>
            </div>
            <div className="w-full flex justify-center opacity-75">
              <Link href={`/dashboard/categories/edit/${category._id}`}>
                <p className="hover:cursor-pointer hover:opacity-75 p-3 rounded-full">
                  {Icons.PencilIcon}
                </p>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="h-screen w-full bg-[var(--content)] border-1 border-[var(--mainColor)] overflow-y-auto custom-scrollbar p-6 mt-1">
      {HeaderFilters()}
      <HeaderTableOrders />
      <div dir="rtl">
        {loading ? (
          <div className="flex justify-center items-center h-[400px] text-black opacity-50">
            يتم سحب الأقسام من فضلك انتظر ...
          </div>
        ) : (
          <TableOrders />
        )}
      </div>
    </div>
  );
};

export default PageCategories;
