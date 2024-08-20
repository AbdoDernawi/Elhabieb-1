"use client";

// React
import { useState } from "react";
import Image from "next/image";

// Components
import NavBar from "@/Components/Dashboard/NavBar";
import SideBar from "@/Components/Dashboard/SideBar";
import { Avatar, Button, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import Icons from "@/iconsSvg";

// Firebase
import { getUnixTime } from "date-fns";
import React from "react";

export default function AddPerson({ type }: { type: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    startDate: "",
  });
  const [img, setImg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] = React.useState("solid");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const imageBase64 = async (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise<string>((resolve, reject) => {
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleUploadImage = async (selectedFiles?: FileList | null) => {
    const file = selectedFiles?.[0];
    if (file) {
      const image = await imageBase64(file);
      setImg(image);
    }
  };

  const generateUniqueFileName = (file: File) => {
    const timestamp = getUnixTime(new Date());
    const randomChars = Math.random().toString(36).substring(2, 10);
    return `${timestamp}_${randomChars}_${file.name}`;
  };

  const upload = async (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles.length > 0) {
      setLoading(true);
      const file = selectedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setImg(fileUrl);
      setLoading(false);
    } else {
      alert("Please select a file");
    }
  };

  const Body = () => {
    return (
      <div
        className="w-[100%] p-6 bg-white rounded-lg shadow-md mt-1"
        dir="rtl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          إضافة {type} جديد
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex justify-center items-center">
              {loading ? (
                <div className="w-24 h-24 flex justify-center items-center bg-gray-200 rounded-md">
                  <Spinner size="lg" />
                </div>
              ) : img ? (
                <div
                  className="w-48 h-48 bg-cover bg-center rounded-full"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ) : (
                <label
                  htmlFor="img"
                  className="flex flex-col items-center justify-center w-[100%] h-48 border-2 border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer transition"
                >
                  <div className="text-gray-500 text-4xl">
                    {Icons.PhotoIcon}
                  </div>
                  <span className="mt-2 text-sm text-gray-500">
                    اضغط هنا لتحميل الصورة
                  </span>
                  <input
                    type="file"
                    id="img"
                    className="hidden"
                    onChange={(e) => upload(e.target.files)}
                  />
                </label>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 gap-y-7 mt-10">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 mb-2">
                  الاسم
                </label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="department" className="text-gray-700 mb-2">
                  كلمة المرور
                </label>
                <input
                  className="input"
                  type="password"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="position" className="text-gray-700 mb-2">
                  الوظيفة
                </label>
                <RadioGroup
                  orientation="horizontal"
                  color={"warning"}
                  defaultValue="solid"
                  onValueChange={setSelectedVariant}
                  size="lg"
                  className="mt-3"
                >
                  <Radio value="أدمن" className="capitalize">
                    أدمن
                  </Radio>
                  <Radio value="موظف" className="capitalize mx-5">
                    موظف
                  </Radio>
                  <Radio value="زبون عادي" className="capitalize ">
                    زبون عادي
                  </Radio>
                  <Radio value="مندوب تسويق" className="capitalize mx-5">
                    مندوب تسويق
                  </Radio>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              variant="shadow"
              color="warning"
              className="w-[100%] h-16 mt-6 text-white"
            >
              إضافة {type}
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return <>{Body()}</>;
}
