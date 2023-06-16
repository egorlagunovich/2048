import React from "react";
import Tile from "./Tile";

type BroadProps = {
  data: number[][];
};

export default function Board({ data }: BroadProps) {
  return (
    <div className="bg-mainBoard w-[400px] h-[400px] rounded-xl p-2 ">
      {data.map((row, oneIndex) => {
        return (
          <div key={oneIndex} className="flex justify-center">
            {row.map((digit, index) => (
              <Tile num={digit} key={index} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
