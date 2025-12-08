"use client";

import React from "react";
import Snowfall from "react-snowfall";

const SnowEffect = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <Snowfall />
    </div>
  );
};

export default SnowEffect;
