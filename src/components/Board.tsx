import React from "react";
import Tile from "./Tile";

type BroadProps = {
  data: number[][];
};

export default function Board({ data }: BroadProps) {
  return (
    <div className="bg-mainBoard w-[400px] h-[400px] rounded-xl p-2 grid grid-cols-4 grid-rows-4 justify-center items-center">
      {/* {data.map((row, oneIndex) => {
        return (
          
        )
      })} */}
    </div>
  );
}
