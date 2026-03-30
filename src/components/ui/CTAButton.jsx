export default function CTAButton({
  href = "/leistungen",
  label = "Leistungen entdecken",
  variant = "outline", // "outline" | "filled"
}) {
  const baseStyles =
    "group inline-flex items-center gap-3 self-start px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2";

  const variants = {
    outline:
      "border border-[#00C9A7] text-[#00C9A7] hover:bg-[#00C9A7] hover:text-black",
    filled:
      "bg-[#00C9A7] text-black hover:opacity-90",
  };

  return (
    <a
      href={href}
      role="button"
      aria-label={label}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}