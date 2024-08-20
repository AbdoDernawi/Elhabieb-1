//react
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Barcode from "react-barcode";
import Icons from "@/iconsSvg";
import { Cairo } from "next/font/google";

//NEXT UI
import { Avatar } from "@nextui-org/react";

//IMAGES
import faceBook from "@/public/images/facebook.png";
import linkenIn from "@/public/images/linkedin.png";
import telegram from "@/public/images/telegram.png";
import instagram from "@/public/images/instagram.png";
import whatsapp from "@/public/images/whatsapp.png";
import Hbaieb from "@/public/images/hbaieb.png";

const cairo = Cairo({ subsets: ["arabic"] });

export default function BottomPrint() {
  const printRef = useRef<HTMLFormElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const [offset, setOffset] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    setOffset(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-[50%] right-[30%] transition-transform duration-200 ${
          isScrollingDown ? "translate-y-0" : "translate-y-[-30px]"
        }`}
        style={{ transform: `translateY(${offset}px)` }}
        onClick={handlePrint}
      >
        <p className="hover:cursor-pointer hover:opacity-75 bg-[var(--Border)] h-16 flex items-center p-3 mt-1 rounded-full border-1 border-[var(--ColorText)] text-warning-900">
          {Icons.PrinterIcon}
        </p>
      </div>

      <div className="hidden">
        <form ref={printRef} className={cairo.className}>
          <div className="w-[100%] mt-4 border-b-0 border-1 border-[var(--Border)]">
            <div className="p-4 w-[100%] flex justify-between items-center">
              <p
                className="w-[5%] h-4"
                style={{ backgroundColor: `var(--Border)` }}
              ></p>
              <p className="w-[45%] flex justify-center items-center">
                <Avatar src={`${Hbaieb.src}`} size="md" />

                <span className="ml-3">الحبايب</span>
              </p>
              <p
                style={{ backgroundColor: `var(--Border)` }}
                className="w-[50%] h-10 text-lg text-white font-bold flex justify-center items-center"
              >
                فاتورة
              </p>
            </div>
            <div className="my-4">
              <div className="w-[100%] mt-10 p-4 text-sm flex justify-evenly items-center">
                <Barcode
                  background="#E4E4E7"
                  value={"66a160351fa27363f7ea40fd"}
                  format="CODE128"
                  width={2}
                  height={100}
                  displayValue={false}
                />
                <div className="flex justify-between items-center w-[100%] mt-7">
                  <div></div>
                  <div className="flex flex-col items-end text-md">
                    <p className="flex mb-2">
                      <span className="mr-1">{22}</span>
                      <span className="text-black opacity-50"> : الإسم </span>
                    </p>
                    <p className="flex mb-2">
                      <span className="mr-1">{22}</span>
                      <span className="text-black opacity-50"> : العنوان </span>
                    </p>
                    <p className="flex mb-2">
                      <span className="mr-1">
                        {33} . {44}
                      </span>
                      <span className="text-black opacity-50">
                        {" "}
                        : أرقام الهواتف{" "}
                      </span>
                    </p>

                    <p className="flex mb-2">
                      <span className="mr-1">PM 9:56:35 . 7</span>
                      <span className="text-black opacity-50"> : التاريخ </span>
                    </p>
                    <p className="flex mb-2">
                      <span className="mr-1" dir="rtl">
                        {10} د.ل
                      </span>
                      <span className="text-black opacity-50">
                        {" "}
                        : سعر التوصيل{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-evenly items-center text-sm text-black opacity-50 p-4"
                style={{ backgroundColor: `var(--Border)` }}
              >
                <p className="w-[20%] text-center">الإجمالي</p>
                <p className="w-[20%] text-center">الكميه</p>
                <p className="w-[20%] text-center">السعر</p>
                <p className="w-[20%] text-center">المقاس</p>
                <p className="w-[20%] text-center">المنتج</p>
              </div>

              <div
                className="flex justify-evenly items-center text-sm p-4 border-b-1"
                style={{ borderBottom: `1px var(--Border) solid` }}
              >
                <p className="w-[20%] text-center">{2 * 100}</p>
                <p className="w-[20%] text-center">{2}</p>
                <p className="w-[20%] text-center">{100}</p>
                <p className="w-[20%] text-center">S</p>
                <p className="w-[20%] text-center">sde</p>
              </div>

              <div className="flex justify-center my-4">
                <Avatar
                  src={`${Hbaieb.src}`}
                  className="w-60 h-60 opacity-30"
                />
              </div>

              <div
                style={{ backgroundColor: `var(--Border)` }}
                className="w-[100%] -mb-4 p-4 flex justify-evenly items-center text-sm"
              >
                <div className="flex">
                  <Avatar src={faceBook.src} size="sm" className="mr-2" />
                  <Avatar src={telegram.src} size="sm" className="mr-2" />
                  <Avatar src={linkenIn.src} size="sm" className="mr-2" />
                  <Avatar src={instagram.src} size="sm" className="mr-2" />
                  <Avatar src={whatsapp.src} size="sm" className="mr-2" />
                </div>
                <div>01212619708</div>
                <div>
                  <Avatar src={`${Hbaieb.src}`} size="md" />
                </div>
              </div>
            </div>
          </div>
        </form>

        <style jsx global>{`
          @media print {
            body {
              font-size: 30px;
              padding: 15px;
            }

            .non-printable {
              display: none;
            }

            form {
              width: 100%;
            }

            /* Add any additional print styles here */
          }
        `}</style>
      </div>
    </>
  );
}
