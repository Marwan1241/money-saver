import React from "react";

interface EnvelopeSvgIconProps {
  className?: string;
}

const EnvelopeSvgIcon: React.FC<EnvelopeSvgIconProps> = ({
  className = "h-8 w-8 text-blue-600 dark:text-blue-400",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );
};

export default EnvelopeSvgIcon;
