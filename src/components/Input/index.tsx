import React, { ChangeEvent } from "react";

interface InputProps {
  value: string;
  readOnly?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, readOnly }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="input"
      readOnly={readOnly}
    />
  );
};

export default Input;
