import React from "react";

export default function Input({ placeholder, type, ...props }) {
  let input = (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className="w-full text-lg bg-transparent border border-black px-4 py-2 text-black placeholder-black"
    />
  );

  if (type === "textarea") {
    input = (
      <textarea
        {...props}
        type="text"
        rows={4}
        placeholder={placeholder}
        className="w-full text-lg bg-transparent border border-black px-4 py-2 text-black placeholder-black resize-none"
      />
    );
  }

  return input;
}
