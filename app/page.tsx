"use client";

import { useState, useCallback } from "react";
import EnvelopeVisualizer from "./components/EnvelopeVisualizer";
import EnvelopeSvgIcon from "./components/EnvelopeSvgIcon";
import ExplanationModal from "./components/ExplanationModal";

export default function Home() {
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [envelopes, setEnvelopes] = useState<number | null>(null);
  const [totalSaved, setTotalSaved] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);

  const calculateEnvelopes = useCallback(() => {
    if (
      !targetAmount ||
      isNaN(Number(targetAmount)) ||
      Number(targetAmount) <= 0
    ) {
      return;
    }

    setIsCalculating(true);

    // Small delay to show the calculation animation
    setTimeout(() => {
      const target = Number(targetAmount);

      // Formula: n(n+1)/2 = target amount
      // Solving for n: n² + n - 2*target = 0
      // Using quadratic formula: n = (-1 + √(1 + 8*target))/2

      const discriminant = 1 + 8 * target;
      const envelopeCount = Math.ceil((-1 + Math.sqrt(discriminant)) / 2);

      const actualSaved = (envelopeCount * (envelopeCount + 1)) / 2;

      setEnvelopes(envelopeCount);
      setTotalSaved(actualSaved);
      setIsCalculating(false);
    }, 500);
  }, [targetAmount, isCalculating]);

  const handleReset = () => {
    setTargetAmount("");
    setEnvelopes(null);
    setTotalSaved(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
              <EnvelopeSvgIcon />
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
              Envelope Savings Calculator
            </h1>

            {/* Info Button */}
            <button
              onClick={() => setIsExplanationOpen(true)}
              className="p-2 rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center"
              aria-label="Learn how it works"
              title="Learn how it works"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Find out how many envelopes you need to save your target amount
          </p>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="targetAmount"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Target Amount to Save
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">EGP</span>
                </div>
                <input
                  type="number"
                  id="targetAmount"
                  min="1"
                  placeholder="Enter amount"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
            </div>

            <button
              onClick={calculateEnvelopes}
              disabled={isCalculating || !targetAmount}
              className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Calculate"
              )}
            </button>

            {envelopes !== null && totalSaved !== null && (
              <div className="mt-8 space-y-4 bg-blue-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Number of Envelopes
                  </span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {envelopes}
                  </span>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Total Amount to Save
                  </span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {totalSaved.toLocaleString()} EGP
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Envelope Visualization
                  </h3>
                  <EnvelopeVisualizer envelopeCount={envelopes} />
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg transition ease-in duration-200 text-center text-sm font-medium"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Help button with pulsing effect to draw attention */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsExplanationOpen(true)}
                className="mt-4 text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline focus:outline-none"
              >
                <span>How does the envelope method work?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        Made with ♥ for smart savers
      </div>

      {/* Explanation Modal */}
      <ExplanationModal
        isOpen={isExplanationOpen}
        onClose={() => setIsExplanationOpen(false)}
      />
    </div>
  );
}
