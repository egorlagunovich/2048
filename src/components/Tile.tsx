import React from "react";

type TileProps = {
  num: number;
};

export default function Tile({ num }: TileProps) {
  return (
    <div
      className={`w-[80px] h-[80px] flex justify-center items-center text-white text-5xl m-2 bg-gray-300`}
    >
      {/* {num !== 0 ? num : ""} */}
    </div>
  );
}
