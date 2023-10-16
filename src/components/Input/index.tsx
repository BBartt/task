import React, { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} className="input" />;
};

export default Input;
