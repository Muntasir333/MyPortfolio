import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-white text-[#050816] hover:bg-cyan-300",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    outline:
      "border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}