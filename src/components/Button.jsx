const variants = {
  primary: "bg-primary text-bg-main hover:bg-primary-dark",
  outline: "border border-primary text-primary hover:bg-primary hover:text-bg-main",
  ghost: "text-primary hover:text-primary-dark",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
