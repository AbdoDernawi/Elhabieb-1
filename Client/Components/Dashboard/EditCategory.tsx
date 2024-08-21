"use client";

// React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryById } from "@/features/categorySlice";
import { RootState, AppDispatch } from "@/src/store";
import { useParams } from "next/navigation";
import CryptoJS from "crypto-js";

// Components
import { Button, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import Icons from "@/iconsSvg";
import Alert from "@/Components/Alert";

// Firebase
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "@/fireBase/fireBaseConfig";

import axios from "axios";

export default function EditCategory() {
  const keyHash = process.env.NEXT_PUBLIC_KEY_HASH;
  const apiEndpoint = process.env.NEXT_PUBLIC_LINK_API;

  const { slug } = useParams() || "";
  const dispatch = useDispatch<AppDispatch>();
  const { category } = useSelector((state: RootState) => state.category);

  const [formData, setFormData] = useState({
    name: "",
    isActive: true,
    image: "",
  });
  const [img, setImg] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [uploading, setUploading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (typeof slug === "string") {
      dispatch(fetchCategoryById(slug));
    }
  }, [dispatch, slug]);

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        isActive: category.Active,
        image: category.image,
      });
      setImg(category.image);
    }
  }, [category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);

      setUploading(true);
      const imageRef = ref(storage, `images/${file.name}`);

      try {
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        setImg(imageUrl);
        setFormData((prev) => ({ ...prev, image: imageUrl }));
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!keyHash) {
      console.error("Encryption key is missing");
      return;
    }

    const dataToEncrypt = {
      ...formData,
      isActive: formData.isActive,
    };

    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(dataToEncrypt),
      keyHash
    ).toString();

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${apiEndpoint}category/edit/${slug}`,
        { data: encryptedData }
      );

      if (response.data === "EDIT_SUCCESS") {
        playSuccessSound();
        Alert("success", "تم تعديل القسم بنجاح");
      } else if (response.data === "CATEGORY_NAME_EXISTS") {
        playSuccessSound2();
        Alert("error", "عذراَ هذا الإسم مستخدم من قبل");
      }
    } catch (error) {
      console.error("Error submitting data", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const playSuccessSound = () => {
    const audio = new Audio("/mp3/susess_edited_catogry.mp3");
    audio.play();
  };

  const playSuccessSound2 = () => {
    const audio = new Audio("/mp3/sorry.mp3");
    audio.play();
  };

  const ImageUploader = () => (
    <div className="flex flex-col items-center relative">
      {uploading && !img && previewImage ? (
        <div className="w-48 h-48 relative">
          <img
            src={previewImage as string}
            alt="Preview"
            className="w-full h-full object-cover rounded-full opacity-50"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 rounded-full">
            <Spinner size="lg" color="default" />
          </div>
        </div>
      ) : img || previewImage ? (
        <label
          htmlFor="img"
          className="flex flex-col items-center justify-center w-48 h-48 border-2 border-dashed border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 cursor-pointer transition relative"
          style={{
            backgroundImage: `url(${img || previewImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <input
            type="file"
            id="img"
            className="hidden"
            onChange={handleUploadImage}
          />
          <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50 rounded-full">
            <div className="text-gray-500 text-4xl">{Icons.PhotoIcon}</div>
          </div>
        </label>
      ) : (
        <label
          htmlFor="img"
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer transition relative"
        >
          <div className="text-gray-500 text-4xl">{Icons.PhotoIcon}</div>
          <span className="mt-2 text-sm text-gray-500">
            اضغط هنا لتحميل الصورة
          </span>
          <input
            type="file"
            id="img"
            className="hidden"
            onChange={handleUploadImage}
          />
        </label>
      )}
    </div>
  );

  const FormContent = () => (
    <form onSubmit={handleSubmit}>
      <ImageUploader />
      <div className="grid grid-cols-2 gap-3 gap-y-7 mt-10">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 mb-2">
            إسم القسم
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
        <div className="flex flex-col mt-6 mr-10">
          <label htmlFor="position" className="text-gray-700 mb-2">
            هل تحب أن هذا القسم يظهر الأن؟
          </label>
          <RadioGroup
            orientation="horizontal"
            color="default"
            value={formData.isActive ? "نعم" : "لا"}
            onValueChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                isActive: value === "نعم",
              }))
            }
            size="lg"
            className="mt-1"
          >
            <Radio value="نعم" className="capitalize">
              نعم
            </Radio>
            <Radio value="لا" className="capitalize mx-5">
              لا
            </Radio>
          </RadioGroup>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          type="submit"
          variant="shadow"
          color="default"
          disabled={isSubmitting}
          className="w-full h-16 mt-6"
        >
          {isSubmitting ? <Spinner size="sm" color="default" /> : "تعديل القسم"}
        </Button>
      </div>
    </form>
  );

  return (
    <div className="h-screen w-full bg-[var(--content)] border-1 border-[var(--mainColor)] overflow-y-auto custom-scrollbar p-6 mt-1" dir="rtl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">تعديل قسم</h2>
      {FormContent()}
    </div>
  );
}
