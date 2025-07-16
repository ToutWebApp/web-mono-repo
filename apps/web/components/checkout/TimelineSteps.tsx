import { Check } from 'lucide-react';
import { cn } from '../../../../packages/ui/src/lib/utils';

interface Step {
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface TimelineStepsProps {
  steps: Step[];
}

export const TimelineSteps = ({ steps }: TimelineStepsProps) => {
  return (
    <div className='flex items-center justify-start px-6 pt-8 gap-6'>
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;
        const nextStep = steps[idx + 1];

        return (
          <div key={idx} className='flex items-center gap-2'>
            {/* Step Icon + Label */}
            <div className='flex items-center gap-2'>
              <div
                className={cn(
                  'w-6 h-6 flex items-center justify-center',
                  {
                    'bg-green-500 text-white': step.status === 'completed',
                    'border-2 border-blue-500 text-blue-500':
                      step.status === 'current',
                    'border-2 border-gray-300 text-gray-400':
                      step.status === 'upcoming',
                  }
                )}
              >
                {step.status === 'completed' ? (
                  <Check className='w-4 h-4' />
                ) : step.status === 'current' ? (
                  <div className='w-2 h-2 rounded-full bg-blue-500' />
                ) : null}
              </div>

              <span
                className={cn(
                  'text-sm font-medium',
                  step.status === 'completed' && 'text-green-600',
                  step.status === 'current' && 'text-blue-600',
                  step.status === 'upcoming' && 'text-gray-400'
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Line to next step */}
            {!isLast && (
              <div
                className={cn('h-0.5 w-10', {
                  'bg-green-500': step.status === 'completed',
                  'bg-gray-300': step.status !== 'completed',
                })}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
