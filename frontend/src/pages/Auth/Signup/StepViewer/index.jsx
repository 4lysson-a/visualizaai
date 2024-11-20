import { sty } from '@/utils';
import React from 'react';

export default function StepViewer({ steps }) {
  return (
    <div className="p-2 bg-background shadow-xl box-border flex justify-center fixed bottom-0 flex-row gap-5 w-full">
      {Array(steps.total)
        .fill(steps.current)
        .map((_, i) => {
          return (
            <div
              key={i}
              className={sty('h-1 shadow-xl w-20 bg-card rounded-xl', {
                'bg-primary': steps.current === i + 1
              })}
            />
          );
        })}
    </div>
  );
}
