"use client";

export default function ScrollCTAButton({
  targetId,
  children,
  className,
}: {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}