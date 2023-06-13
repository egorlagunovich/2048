import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [data, setData] = useState<number[][]>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  return (
    <div className="bg-mainBg h-screen flex flex-col items-center p-10">
      <Header />
      <Board data={data} />
    </div>
  );
}

export default App;
