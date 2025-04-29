import React from "react";
import EnvelopeIcon from "./EnvelopeIcon";

interface EnvelopeVisualizerProps {
  envelopeCount: number;
}

const EnvelopeVisualizer: React.FC<EnvelopeVisualizerProps> = ({
  envelopeCount,
}) => {
  // Create an array of envelopes to display
  // If there are more than 5 envelopes, we'll show the first 2, the last 2, and a middle one
  const displayedEnvelopes = [];

  if (envelopeCount <= 5) {
    // Show all envelopes when 5 or fewer
    for (let i = 1; i <= envelopeCount; i++) {
      displayedEnvelopes.push({ day: i, amount: i });
    }
  } else {
    // Show first envelope
    displayedEnvelopes.push({ day: 1, amount: 1 });

    // Show second envelope
    displayedEnvelopes.push({ day: 2, amount: 2 });

    // Show a middle envelope
    const middleDay = Math.floor(envelopeCount / 2);
    displayedEnvelopes.push({ day: middleDay, amount: middleDay });

    // Show second-to-last envelope
    displayedEnvelopes.push({
      day: envelopeCount - 1,
      amount: envelopeCount - 1,
    });

    // Show last envelope
    displayedEnvelopes.push({ day: envelopeCount, amount: envelopeCount });
  }

  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex justify-center space-x-4 min-w-max">
        {displayedEnvelopes.map((envelope, index) => {
          // Check if this is a middle envelope when displaying more than 5
          const isEllipsis = envelopeCount > 5 && index === 2;

          return (
            <React.Fragment key={envelope.day}>
              <EnvelopeIcon
                day={envelope.day}
                amount={envelope.amount}
                isHighlighted={index === displayedEnvelopes.length - 1}
              />

              {/* Show ellipsis between non-consecutive envelopes */}
              {isEllipsis && (
                <div className="flex items-center justify-center w-8">
                  <div className="text-2xl text-gray-400 dark:text-gray-500">
                    ...
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {envelopeCount > 5 && (
        <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
          Showing 5 of {envelopeCount} envelopes
        </div>
      )}
    </div>
  );
};

export default EnvelopeVisualizer;
