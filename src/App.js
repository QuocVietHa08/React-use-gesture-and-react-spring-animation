import React from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import { useDrag, useGesture } from "react-use-gesture";
import { add, scale } from "vec-la";

function App() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const width = window.innerWidth;
  const height = window.innerHeight;
  const bind = useDrag(({ offset: [ox, oy] }) => api.start({ x: ox, y: oy }));
  const topLeft = () => {
    api({ x: -width * 0.3, y: -height * 0.5 });
  };
  const topRight = () => {
    api({ x: width * 0.3, y: -height * 0.4 });
  };
  const bottomLeft = () => {
    api({ x: -width * 0.3, y: height * 0.4 });
  };
  const bottomRight = () => {
    api({ x: width * 0.3, y: height * 0.4 });
  };
  return (
    <div className="App">
      <animated.div
        {...bind()}
        style={{
          x,
          y,
          width: "100px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: "white",
        }}>
        <button onClick={topLeft}>Top Left</button>
        <button onClick={topRight}>Top Right</button>
        <button onClick={bottomLeft}>Bottom Left</button>
        <button onClick={bottomRight}>Bottom Right</button>
      </animated.div>
    </div>
  );
}

export default App;
