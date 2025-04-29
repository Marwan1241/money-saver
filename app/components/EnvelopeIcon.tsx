import React from "react";

interface EnvelopeIconProps {
  day: number;
  amount: number;
  isHighlighted?: boolean;
}

const EnvelopeIcon: React.FC<EnvelopeIconProps> = ({
  day,
  amount,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-2 w-20 h-24 
        ${
          isHighlighted
            ? "bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-700"
            : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
        } 
        border rounded-md shadow-sm transition-all duration-200 transform ${
          isHighlighted ? "scale-105" : ""
        }`}
    >
      {/* Envelope flap */}
      <div className="absolute top-0 left-0 right-0 h-5 w-full overflow-hidden">
        <div
          className={`w-full h-10 rounded-full 
          ${
            isHighlighted
              ? "bg-blue-200 dark:bg-blue-800/50"
              : "bg-gray-100 dark:bg-gray-600"
          }`}
        ></div>
      </div>

      {/* Day label */}
      <div className="absolute top-1 left-0 right-0 text-center text-xs font-semibold text-gray-600 dark:text-gray-300">
        Day {day}
      </div>

      {/* Amount */}
      <div className="mt-4 font-bold text-lg text-gray-800 dark:text-white">
        {amount}
      </div>

      {/* Currency */}
      <div className="text-xs text-gray-500 dark:text-gray-400">EGP</div>
    </div>
  );
};

export default EnvelopeIcon;
