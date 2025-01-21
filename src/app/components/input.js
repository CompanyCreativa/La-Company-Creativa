import React from "react";
import Link from "next/link";

export default function Input({
  placeholder,
  type,
  color,
  className,
  ...props
}) {
  let input = (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className={`w-full text-lg bg-transparent border border-black px-4 py-2 text-black placeholder-black ${className}`}
    />
  );

  if (type === "textarea") {
    input = (
      <textarea
        {...props}
        type="text"
        rows={4}
        placeholder={placeholder}
        className={`w-full text-lg bg-transparent border border-black px-4 py-2 text-black placeholder-black resize-none ${className}`}
      />
    );
  }

  if (type === "checkbox") {
    input = (
      <div className="w-full flex gap-2 z-30">
        <input
          {...props}
          type="checkbox"
          placeholder={placeholder}
          className={`text-lg bg-transparent border border-black px-4 py-2 text-black placeholder-black cursor-pointer ${className}`}
        />
        <label htmlFor="checkbox" className={`${className}`}>
          Aceptas nuestra{" "}
          <Link
            href="/politicas"
            className={`underline ${className}`}
            target="_blank"
          >
            política de tratamiento de datos
          </Link>
        </label>
      </div>
    );
  }

  return input;
}
