import React from "react";
import { useTheme } from "@emotion/react";

const RadiaHeaderUo: React.FC<{ text: string }> = ({ text }) => {
  const theme: any = useTheme();
  return (
    <ul style={{ marginLeft: "1.3em" }}>
      <li
        style={{
          color: `${
            theme.palette.mode === "light" ? "rgb(20 20 43 / 44%)" : "white"
          }`,
          fontWeight: "bold",
        }}
      >
        {text}
      </li>
    </ul>
  );
};

export default RadiaHeaderUo;
