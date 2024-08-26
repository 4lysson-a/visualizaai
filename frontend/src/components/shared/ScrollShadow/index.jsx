import React from "react";

export default function ScrollShadow({ color, ...rest }) {
  const _color = color || "var(--background)";

  return (
    <div
      {...rest}
      style={{
        overflow: "auto",
        background: `
                    linear-gradient(${_color} 30%, rgba(255, 255, 255, 0)) center top,
                    linear-gradient(rgba(255, 255, 255, 0), ${_color} 70%) center bottom,
                    radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center top,
                    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center bottom
                `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
        backgroundAttachment: "local, local, scroll, scroll",
      }}
    />
  );
}
