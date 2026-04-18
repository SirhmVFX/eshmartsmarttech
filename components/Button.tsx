import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light" | "ghost-brand" | "danger";
type Size = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-[10px]",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-xs",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps & {
  href: string;
  onClick?: () => void;
};

type Props = ButtonProps | LinkProps;

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  loading = false,
  ...rest
}: Props) {
  const base = `btn btn-${variant} ${SIZE_CLASSES[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, onClick } = rest as LinkProps;
    return (
      <Link href={href} onClick={onClick} className={base}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonRest } = rest as ButtonProps & { href?: undefined };
  return (
    <button className={base} disabled={loading || (buttonRest as ButtonHTMLAttributes<HTMLButtonElement>).disabled} {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {loading ? "Loading..." : children}
    </button>
  );
}
