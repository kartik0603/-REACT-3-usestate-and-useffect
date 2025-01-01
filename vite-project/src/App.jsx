import React, { useState } from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div>
      <Counter />

      <Timer />
    </div>
  );
};

export default App;
