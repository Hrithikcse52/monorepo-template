import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  newTab?: boolean;
  href: string;
}

export function Link({
  children,
  href,
  newTab,
  ...other
}: LinkProps): JSX.Element {
  return (
    <a
      className={cn("tw-text-xl")}
      href={href}
      rel={newTab ? "noreferrer" : undefined}
      target={newTab ? "_blank" : undefined}
      {...other}
    >
      {children}
    </a>
  );
}
