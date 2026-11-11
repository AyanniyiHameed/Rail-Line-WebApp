import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

// Links to other websites open in a new tab.
// rel="noopener noreferrer" stops the other site getting access to ours.
const ExternalLink = ({ href, children, className = "" }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium text-red-600 underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
};

export default ExternalLink;
