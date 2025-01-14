export const TextArea = ({ className, name, text }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <textarea
        id={name}
        name={name}
        className={`w-full h-full text-md bg-transparent border border-black px-4 py-2 text-black placeholder-black resize-none ${className}`}
      />
    </>
  );
};
