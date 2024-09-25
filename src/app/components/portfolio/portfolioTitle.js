export default function PortfolioTitle({ textColor = "", children }) {
  return (
    <h1 className={`${textColor} text-[28px] tracking-wider font-semibold`}>
      {children}
    </h1>
  );
}
