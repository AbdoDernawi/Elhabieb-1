import { useEffect, useState } from "react";
import Colors from "./AddProduct/ColorsProduct";
import Size from "./AddProduct/SizeProduct";
import Images from "./AddProduct/ImagesProduct";
import Prices from "./AddProduct/PricesProduct";
import {
  Button,
  Tab,
  Tabs,
  Spinner,
  Autocomplete,
  AutocompleteItem,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import CryptoJS from "crypto-js";
import axios from "axios";
import Alert from "@/Components/Alert";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "@/features/productSlice";
import { RootState, AppDispatch } from "@/src/store";
import { fetchCategories } from "@/features/categorySlice";

interface TypeData {
  name: string;
  price: number;
  priceMarkter: number;
  priceCustomer: number;
  properties: string[];
  colors: string[];
  images: string[];
  discrubtion: string;
  catogry: string;
  active: boolean;
}

interface ProductSubmissionData {
  name: string;
  price: number;
  priceMarkter: number;
  priceCustomer: number;
  colors: string[];
  images: string[];
  discrubtion: string;
  active: boolean;
  catogry: string;
  dateAdded: string;
  timeAdded: string;
  numberSelles: number;
  sizes: {
    size: string;
    colors: string[];
    stock: {
      city: string;
      store: string;
      amount: number;
    }[];
  }[];
  products: {
    name: string;
    price: number;
    priceMarkter: number;
    priceCustomer: number;
    colors: string[];
    images: string[];
    discrubtion: string;
    active: boolean;
    catogry: string;
    dateAdded: string;
    timeAdded: string;
    numberSelles: number;
    sizes: {
      size: string;
      colors: string[];
      stock: {
        city: string;
        store: string;
        amount: number;
      }[];
    }[];
  }[];
  properties: string[];
  branshesProductsts: string[];
}

export default function EditProduct() {
  const keyHash = process.env.NEXT_PUBLIC_KEY_HASH;
  const apiEndpoint = process.env.NEXT_PUBLIC_LINK_API;
  const { slug } = useParams() || "";
  const dispatch = useDispatch<AppDispatch>();
  const { product } = useSelector((state: RootState) => state.product);
  const [catogry, setCatogry] = useState("");
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  );
  const [selectedVariant, setSelectedVariant] = useState("نعم");
  const [loading2, setLoading2] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [branshesProducts, setBranshesProducts] = useState<TypeData[]>([]);

  const [formData, setFormData] = useState<TypeData>({
    name: "",
    price: 0,
    priceMarkter: 0,
    priceCustomer: 0,
    properties: [""],
    colors: ["#000000"],
    images: [],
    discrubtion: "",
    catogry: "",
    active: true,
  });

  const DataSendedReady: ProductSubmissionData = {
    name: formData.name,
    price: formData.price,
    priceMarkter: formData.priceMarkter,
    priceCustomer: formData.priceCustomer,
    colors: formData.colors,
    images: formData.images,
    discrubtion: formData.discrubtion,
    active: true,
    catogry: catogry,
    dateAdded: new Date().toLocaleDateString(),
    timeAdded: new Date().toLocaleTimeString(),
    numberSelles: 0,
    sizes: formData?.properties?.map((item) => ({
      size: item,
      colors: formData.colors,
      stock: [
        {
          city: "City1",
          store: "Store1",
          amount: 10,
        },
        {
          city: "City2",
          store: "Store2",
          amount: 5,
        },
      ],
    })),
    products: branshesProducts?.map((item) => ({
      name: item.name,
      price: item.price,
      priceMarkter: item.priceMarkter,
      priceCustomer: item.priceCustomer,
      colors: item.colors,
      images: item.images,
      discrubtion: item.discrubtion,
      active: true,
      catogry: catogry,
      dateAdded: new Date().toLocaleDateString(),
      timeAdded: new Date().toLocaleTimeString(),
      numberSelles: 0,
      sizes: item?.properties?.map((i) => ({
        size: i,
        colors: item.colors,
        stock: [
          {
            city: "City1",
            store: "Store1",
            amount: 10,
          },
          {
            city: "City2",
            store: "Store2",
            amount: 5,
          },
        ],
      })),
    })),
    properties: formData.properties,
    branshesProductsts: [],
  };

  const playSuccessSound = () => {
    const audio = new Audio("/mp3/susessEditedProduct.mp3");
    audio.play();
  };

  const playSuccessSound2 = () => {
    const audio = new Audio("/mp3/sorry.mp3");
    audio.play();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value, type } = e.target;
    if (index !== undefined) {
      setBranshesProducts((prev) =>
        prev.map((product, i) =>
          i === index
            ? {
              ...product,
              [name]: type === "number" ? parseFloat(value) || 0 : value,
            }
            : product
        )
      );
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? parseFloat(value) || 0 : value,
      }));
    }
  };

  const handleImagesChange = (updatedImages: string[], index?: number) => {
    if (index !== undefined) {
      setBranshesProducts((prev) =>
        prev.map((product, i) =>
          i === index ? { ...product, images: updatedImages } : product
        )
      );
    } else {
      setFormData((prev) => ({
        ...prev,
        images: updatedImages,
      }));
    }
  };

  const handleSizeChange = (updatedProperties: string[], index?: number) => {
    if (index !== undefined) {
      setBranshesProducts((prev) =>
        prev.map((product, i) =>
          i === index ? { ...product, properties: updatedProperties } : product
        )
      );
    } else {
      setFormData((prev) => ({
        ...prev,
        properties: updatedProperties,
      }));
    }
  };

  const handleDeleteSubProduct = (index: number) => {
    setBranshesProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const addProductForm = () => {
    setBranshesProducts((prev) => [
      ...prev,
      {
        name: "",
        price: 0,
        priceMarkter: 0,
        priceCustomer: 0,
        properties: [""],
        colors: ["#000000"],
        images: [],
        discrubtion: "",
        catogry: "",
        active: true,
      },
    ]);
  };

  const encryptData = (data: ProductSubmissionData) => {
    if (!keyHash) {
      throw new Error("Encryption key is missing");
    }
    return CryptoJS.AES.encrypt(JSON.stringify(data), keyHash).toString();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setLoading2(true);

    try {
      const encryptedFormData = encryptData(DataSendedReady);

      const response = await axios.post(
        `${apiEndpoint}api/products/editProduct/${slug}`,
        { data: encryptedFormData }
      );

      if (response.data === "EDIT_SUCCESS") {
        playSuccessSound();
        Alert("success", "تم تعديل المنتج بنجاح");
      } else if (response.data === "Product_NAME_EXISTS") {
        playSuccessSound2();
        Alert("error", "عذراَ هذا الإسم مستخدم من قبل");
      }
    } catch (error) {
      Alert("error", "حدث خطأ أثناء إرسال البيانات");
    } finally {
      setLoading2(false);
      setIsSubmitting(false);
    }
  };

  const FormProduct = (productData: TypeData, index?: number) => (
    <form className="border-1 border-dashed border-slate-400 rounded-xl my-2">
      <div className="flex gap-2">
        <div className="flex flex-col mt-5 mr-5">
          <label
            htmlFor={`name-${index}`}
            className="text-gray-700 mb-2 mr-2 opacity-55"
          >
            إسم المنتج
          </label>
          <input
            className="input"
            type="text"
            id={`name-${index}`}
            name="name"
            value={productData.name}
            onChange={(e) => handleChange(e, index)}
            required
          />

          {!index && (
            <>
              <Autocomplete
                className="w-[100%] mt-5"
                variant="underlined"
                color="default"
                placeholder="القسم"
                selectedKey={catogry}
                defaultSelectedKey={catogry}
                onSelectionChange={(key) =>
                  key !== null && setCatogry(key.toString())
                }
              >
                {categories.map((item: any) => (
                  <AutocompleteItem key={item.name} value={item.name}>
                    {item.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              <label htmlFor="position" className="text-gray-700 mb-2 mt-7">
                هل تحب أن هذا المنتج يظهر الأن ؟
              </label>
              <RadioGroup
                orientation="horizontal"
                color="default"
                defaultValue="نعم"
                onValueChange={setSelectedVariant}
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
            </>
          )}
        </div>

        <Prices productData={productData} onChange={handleChange} />

        <Size
          properties={productData.properties}
          onChange={(updatedProperties) =>
            handleSizeChange(updatedProperties, index)
          }
        />
        <Colors
          productData={productData.colors}
          onChange={(updatedColors) =>
            index !== undefined
              ? setBranshesProducts((prev) =>
                prev.map((product, i) =>
                  i === index
                    ? { ...product, colors: updatedColors }
                    : product
                )
              )
              : setFormData((prev) => ({ ...prev, colors: updatedColors }))
          }
        />
      </div>
      <div className="border-dashed border-t-1 border-gray-400 p-5 flex">
        <Images
          productData={productData.images}
          onChange={(updatedImages) => handleImagesChange(updatedImages, index)}
        />
        <div className="flex flex-col w-[35%] mr-5">
          <label
            htmlFor={`discrubtion-${index}`}
            className="text-gray-700 mb-2 mr-2 opacity-55"
          >
            وصف المنتج
          </label>
          <textarea
            className="input max-h-52 min-h-32 p-5"
            id={`discrubtion-${index}`}
            name="discrubtion"
            value={productData.discrubtion}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </div>
      </div>
    </form>
  );

  useEffect(() => {
    if (typeof slug === "string") {
      dispatch(fetchProductById(slug));
    }
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    let sizesAll: string[] = [];
    product?.sizes.forEach((item) => sizesAll.push(item.size));

    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        priceMarkter: product.priceMarkter,
        priceCustomer: product.priceCustomer,
        properties: sizesAll,
        colors: product.colors,
        images: product.images,
        discrubtion: product.discrubtion,
        active: product.active,
        catogry: product.catogry,
      });
      const mappedProducts = product?.products.map((item) => ({
        name: item.name,
        price: item.price,
        priceMarkter: item.priceMarkter,
        priceCustomer: item.priceCustomer,
        properties: item.sizes.map((item2) => item2.size),
        colors: item.colors,
        images: item.images,
        discrubtion: item.discrubtion,
        active: item.active,
        catogry: product.catogry,
      }));

      setBranshesProducts(mappedProducts || []);
    }
  }, [product]);

  return (
    <div className="h-screen w-full bg-[var(--content)] border-1 border-[var(--mainColor)] overflow-y-auto custom-scrollbar p-6 mt-1" dir="rtl">
      <div className="flex justify-between ">
        <h2 className="text-2xl mb-6 text-gray-800">
          تعديل <span className="text-default-400">{formData?.name}</span>{" "}
          الموجود في القسم{" "}
          <span className="text-default-400">{formData?.catogry}</span>
        </h2>
        <Button variant="bordered" color="default" onClick={addProductForm}>
          إضافة نموذج منتج جديد
        </Button>
      </div>

      <Tabs
        className="mt-2"
        aria-label="Options"
        color="default"
        variant="underlined"
      >
        <Tab
          key="المنتج الرئيسي"
          title={<p className="mb-4">المنتج الرئيسي</p>}
        >
          {FormProduct(formData)}
        </Tab>
        {branshesProducts.map((product, index) => (
          <Tab
            key={`branch-${index}`}
            title={
              <div className="flex items-center mb-4">
                <p>منتج فرعي {index + 1}</p>
                <Button
                  isIconOnly
                  variant="light"
                  className="!rounded-full"
                  onClick={() => handleDeleteSubProduct(index)}
                >
                  🗑️
                </Button>
              </div>
            }
          >
            {FormProduct(product, index)}
          </Tab>
        ))}
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button
          className="w-[100%] h-14"
          color="default"
          variant="shadow"
          onClick={handleSubmit}
          isDisabled={isSubmitting}
        >
          {isSubmitting ? (
            <Spinner size="sm" color="default" />
          ) : (
            "تعديل المنتج "
          )}
        </Button>
      </div>
    </div>
  );
}
