import React, { useState, useEffect, useRef, useCallback } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

{/*let angle;

const Sketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(100);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);*/}

{/*const Sketch = ({
  initialLength = 100,
  angleMin = Math.PI / 16,
  angleMax = Math.PI / 2,
  branchFactor = 0.67,
  color = [255, 255, 255],
  strokeWeightBase = 2
}) => p5 => {
  let angle;

  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    p5.strokeWeight(strokeWeightBase);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(
      p5.sin(p5.frameCount * 0.01),
      -1,
      1,
      angleMax,
      angleMin
    );
    p5.stroke(...color);
    branch(initialLength);
  };

  function branch(len) {
    p5.strokeWeight(p5.map(len, 2, initialLength, 1, strokeWeightBase));
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * branchFactor);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * branchFactor);
      p5.pop();
    }
  }
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  backgroundColor: "#222",
  padding: "20px",
  borderRadius: "12px"
};

const FractalTree = () => {
  const variations = [
    {
      initialLength: 120,
      angleMin: Math.PI / 20,
      angleMax: Math.PI / 2.2,
      branchFactor: 0.7,
      color: [255, 100, 100],
      strokeWeightBase: 3
    },
    {
      initialLength: 90,
      angleMin: Math.PI / 8,
      angleMax: Math.PI / 3,
      branchFactor: 0.6,
      color: [100, 255, 150],
      strokeWeightBase: 2.5
    },
    {
      initialLength: 110,
      angleMin: Math.PI / 16,
      angleMax: Math.PI / 1.5,
      branchFactor: 0.75,
      color: [100, 150, 255],
      strokeWeightBase: 2
    },
    {
      initialLength: 100,
      angleMin: Math.PI / 24,
      angleMax: Math.PI / 1.7,
      branchFactor: 0.65,
      color: [255, 255, 150],
      strokeWeightBase: 1.8
    }
  ];

  return (
    <div style={containerStyle} aria-label="Fractal Tree Variations">
      {variations.map((props, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "#111",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 0 15px rgba(255,255,255,0.15)"
          }}
        >
          <ReactP5Wrapper sketch={Sketch(props)} />
        </div>
      ))}
    </div>
  );
};*/}

{/*const Sketch = ({
  initialLength = 100,
  angleMin = Math.PI / 16,
  angleMax = Math.PI / 2,
  branchFactor = 0.67,
  color = [255, 255, 255],
  strokeWeightBase = 2
}) => p5 => {
  let angle;

  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    p5.strokeWeight(strokeWeightBase);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(
      p5.sin(p5.frameCount * 0.01),
      -1,
      1,
      angleMax,
      angleMin
    );
    p5.stroke(...color);
    branch(initialLength);
  };

  function branch(len) {
    p5.strokeWeight(p5.map(len, 2, initialLength, 1, strokeWeightBase));
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * branchFactor);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * branchFactor);
      p5.pop();
    }
  }
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  gap: "10px",
  background: "linear-gradient(to top, #1e292c, #162321)",
  padding: "20px",
  borderRadius: "12px",
  width: "100%",
  boxSizing: "border-box"
};

const treeWrapperStyle = {
  flex: "0 0 400px",
  backgroundColor: "#111",
  borderRadius: "10px",
  padding: "10px",
  boxShadow: "0 0 15px rgba(255,255,255,0.15)"
};

const FractalTree = () => {
  const variations = [
    {
      initialLength: 120,
      angleMin: Math.PI / 20,
      angleMax: Math.PI / 2.2,
      branchFactor: 0.7,
      color: [255, 100, 100],
      strokeWeightBase: 3
    },
    {
      initialLength: 90,
      angleMin: Math.PI / 8,
      angleMax: Math.PI / 3,
      branchFactor: 0.6,
      color: [100, 255, 150],
      strokeWeightBase: 2.5
    },
    {
      initialLength: 110,
      angleMin: Math.PI / 16,
      angleMax: Math.PI / 1.5,
      branchFactor: 0.75,
      color: [100, 150, 255],
      strokeWeightBase: 2
    },
    {
      initialLength: 100,
      angleMin: Math.PI / 24,
      angleMax: Math.PI / 1.7,
      branchFactor: 0.65,
      color: [255, 255, 150],
      strokeWeightBase: 1.8
    },
    {
      initialLength: 105,
      angleMin: Math.PI / 18,
      angleMax: Math.PI / 2,
      branchFactor: 0.68,
      color: [180, 255, 200],
      strokeWeightBase: 2.2
    },
    {
      initialLength: 95,
      angleMin: Math.PI / 22,
      angleMax: Math.PI / 3.5,
      branchFactor: 0.64,
      color: [255, 180, 220],
      strokeWeightBase: 2
    }
  ];

  return (
    <div style={containerStyle} aria-label="Fractal Tree Forest">
      {variations.map((props, i) => (
        <div key={i} style={treeWrapperStyle}>
          <ReactP5Wrapper sketch={Sketch(props)} />
        </div>
      ))}
    </div>
  );
};*/}

const styles = [
  {
    initialLength: 100,
    angleMin: Math.PI / 20,
    angleMax: Math.PI / 2.2,
    branchFactor: 0.7,
    color: [255, 255, 255],
    strokeWeightBase: 3
  },
  {
    initialLength: 100,
    angleMin: Math.PI / 8,
    angleMax: Math.PI / 3,
    branchFactor: 0.6,
    color: [200, 200, 255],
    strokeWeightBase: 2.5
  },
  {
    initialLength: 100,
    angleMin: Math.PI / 16,
    angleMax: Math.PI / 1.5,
    branchFactor: 0.75,
    color: [255, 255, 200],
    strokeWeightBase: 2
  },
  {
    initialLength: 100,
    angleMin: Math.PI / 24,
    angleMax: Math.PI / 1.7,
    branchFactor: 0.65,
    color: [255, 255, 255],
    strokeWeightBase: 1.8
  },
  {
    initialLength: 100,
    angleMin: Math.PI / 18,
    angleMax: Math.PI / 2,
    branchFactor: 0.68,
    color: [255, 255, 255],
    strokeWeightBase: 2.2
  }
];

// p5 sketch factory function accepting parameters and onCycleComplete callback
const Sketch = (params, onCycleComplete) => (p5) => {
  let angle;
  let frameAtCycleStart = 0;

  const {
    initialLength = 100,
    angleMin = Math.PI / 16,
    angleMax = Math.PI / 2,
    branchFactor = 0.67,
    color = [255, 255, 255],
    strokeWeightBase = 2,
  } = params;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.strokeWeight(strokeWeightBase);
    p5.stroke(...color);
    p5.angleMode(p5.RADIANS);
    frameAtCycleStart = p5.frameCount;
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);

    // Calculate elapsed frames since cycle start
    const elapsedFrames = p5.frameCount - frameAtCycleStart;
    const phase = elapsedFrames * 0.01;

    angle = p5.map(
      p5.sin(phase),
      -1,
      1,
      angleMax,
      angleMin
    );

    p5.stroke(...color);
    branch(initialLength);

    // Check if a full cycle is completed (phase >= 2*Math.PI)
    if (phase >= 2 * Math.PI) {
      // Notify React component about cycle completion only once per cycle
      if (typeof onCycleComplete === "function") {
        onCycleComplete();
      }
      // Reset cycle start frame count to start a new cycle
      frameAtCycleStart = p5.frameCount;
    }
  };

  function branch(len) {
    p5.strokeWeight(p5.map(len, 2, initialLength, 1, strokeWeightBase));
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * branchFactor);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * branchFactor);
      p5.pop();
    }
  }
};

const FractalTree = () => {
  const [styleIndex, setStyleIndex] = useState(0);
  const changingRef = useRef(false);

  // Callback triggered by p5 sketch when cycle completes
  const handleCycleComplete = useCallback(() => {
    if (changingRef.current) return; // avoid double calls

    changingRef.current = true;

    setStyleIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * styles.length);
      } while (next === prev);
      return next;
    });

    // Allow next cycle after style switch
    setTimeout(() => {
      changingRef.current = false;
    }, 150); // small delay to prevent rapid style changing
  }, []);

  return (
    <div id="fractal-tree" style={{ width: 400, height: 300 }}>
      <ReactP5Wrapper
        sketch={Sketch(styles[styleIndex], handleCycleComplete)}
      />
    </div>
  );
};

export default FractalTree;
