import ApparatusList from "@/components/ApparatusList";
import ApparatusChart from "@/components/ApparatusList/apparatusChart";
import React from "react";

const Apparatus = () => {
  return (
    <div>
      <div className="h-12" />
      <ApparatusChart />
      <div className="h-8" />
      <ApparatusList />
    </div>
  );
};

export default Apparatus;
