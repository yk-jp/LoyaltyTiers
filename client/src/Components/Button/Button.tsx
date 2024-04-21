import React from "react";

type ButtonProps = {
  text: string;
  style: React.CSSProperties;
};

export default function Button({ text, style }: ButtonProps) {
  return <button style={style}>{text}</button>;
}
