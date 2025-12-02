"use client";

import React from "react";

interface TextareaFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      ></textarea>
    </div>
  );
};

export default TextareaField;