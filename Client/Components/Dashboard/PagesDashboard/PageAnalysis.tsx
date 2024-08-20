import React from "react";
import Chart1 from "@/Components/Dashboard/Cahrt1";
import Chart2 from "@/Components/Dashboard/Cahrt2";
import Chart3 from "@/Components/Dashboard/Cahrt3";
import Chart4 from "@/Components/Dashboard/Cahrt4";

const PageAnalysis = () => {
  return (
    <div className="w-[100%] h-screen flex-col flex items-center bg-[var(--mainColor)] mt-1">
      <div className="flex w-[100%] mt-4">
        <div className="w-[50%] h-96 border-1 border-[var(--Border)] mx-2 rounded-r-3xl rounded-2xl p-6">
          <Chart1 />
        </div>
        <div className="w-[50%] h-96 border-1 border-[var(--Border)] mr-2 rounded-r-3xl rounded-2xl p-6">
          <Chart2 />
        </div>
      </div>
      <div className="px-2">
        <div className="w-[100%] h-[430px] border-1 border-[var(--Border)]  rounded-r-3xl rounded-2xl p-6 mt-2 mr-3">
          <Chart3 />
        </div>
      </div>
    </div>
  );
};

export default PageAnalysis;
