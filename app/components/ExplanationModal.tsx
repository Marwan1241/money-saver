import React from "react";
import EnvelopeSvgIcon from "./EnvelopeSvgIcon";

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="explanation-modal"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8 overflow-hidden transform transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Title */}
          <div className="flex items-center mb-6">
            <div className="mr-3 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
              <EnvelopeSvgIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              The Envelope Savings Method
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              The Envelope Savings Challenge is a simple and effective way to
              save money consistently over time.
            </p>

            <h3 className="font-medium text-gray-800 dark:text-white text-lg mt-4">
              How It Works:
            </h3>

            <div className="rounded-lg bg-blue-50 dark:bg-gray-700/50 p-4 space-y-3">
              <div className="flex items-start">
                <div className="mr-3 bg-blue-100 dark:bg-blue-800/50 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                  1
                </div>
                <p>
                  Create a set of numbered envelopes from 1 up to your
                  calculated total.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mr-3 bg-blue-100 dark:bg-blue-800/50 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                  2
                </div>
                <p>
                  Each day, put money in an envelope matching the day number.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mr-3 bg-blue-100 dark:bg-blue-800/50 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                  3
                </div>
                <p>
                  For example: Day 1 → 1 EGP, Day 15 → 15 EGP, Day 50 → 50 EGP
                </p>
              </div>

              <div className="flex items-start">
                <div className="mr-3 bg-blue-100 dark:bg-blue-800/50 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                  4
                </div>
                <p>
                  By the end, you&apos;ll have saved the total calculated
                  amount!
                </p>
              </div>
            </div>

            <h3 className="font-medium text-gray-800 dark:text-white text-lg mt-4">
              Benefits:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Creates a consistent saving habit</li>
              <li>Makes saving money visual and tangible</li>
              <li>Starts small and gradually increases</li>
              <li>Provides a clear goal and timeline</li>
            </ul>

            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Tip: You can shuffle the envelopes and pick randomly if you want
                to mix up the amounts you save each day!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationModal;
