import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const cloneDeep = require("clone-deep");
  const [data, setData] = useState<number[][]>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const initialize = () => {
    let newGrid = cloneDeep(data);

    addNumber(newGrid);
    addNumber(newGrid);
    setData(newGrid);
  };

  const addNumber = (newGrid: number[][]) => {
    let added: boolean = false;
    let gridFull: boolean = false;
    let attempts: number = 0;
    // while (!added) {
    //   if (gridFull) {
    //     break;
    //   }
    // }
    let rand1 = Math.floor(Math.random() * 4);
    let rand2 = Math.floor(Math.random() * 4);
    attempts++;
    if (newGrid[rand1][rand2] === 0) {
      newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
      added = true;
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="bg-mainBg h-screen flex flex-col items-center p-10">
      <Header />
      <Board data={data} />
    </div>
  );
}

export default App;
