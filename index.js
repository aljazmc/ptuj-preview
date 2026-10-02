// src/index.tsx
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
function Box(props) {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => meshRef.current.rotation.x += delta);
  return /* @__PURE__ */ React.createElement(
    "mesh",
    {
      role: "treeitem",
      ...props,
      ref: meshRef,
      scale: active ? 1.5 : 1,
      onClick: (event) => setActive(!active),
      onPointerOver: (event) => setHover(true),
      onPointerOut: (event) => setHover(false)
    },
    /* @__PURE__ */ React.createElement("boxGeometry", { args: [1, 1, 1] }),
    /* @__PURE__ */ React.createElement("meshStandardMaterial", { color: hovered ? "hotpink" : "#2f74c0" })
  );
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ React.createElement(Canvas, null, /* @__PURE__ */ React.createElement("ambientLight", { intensity: Math.PI / 2 }), /* @__PURE__ */ React.createElement(
    "spotLight",
    {
      position: [10, 10, 10],
      angle: 0.15,
      penumbra: 1,
      decay: 0,
      intensity: Math.PI
    }
  ), /* @__PURE__ */ React.createElement("pointLight", { position: [-10, -10, -10], decay: 0, intensity: Math.PI }), /* @__PURE__ */ React.createElement(Box, { position: [-1.2, 0, 0] }), /* @__PURE__ */ React.createElement(Box, { position: [1.2, 0, 0] }))
);
