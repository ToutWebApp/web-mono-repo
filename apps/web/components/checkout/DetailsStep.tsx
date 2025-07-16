import { Service } from '@repo/api-client/src/apis/types/services.types';
import { Button } from '@repo/ui/components/ui/button';

export function DetailsStep({
  service,
  onNext,
}: {
  service: Service;
  onNext: () => void;
}) {
  return (
    <div className='space-y-10'>
      <h1 className='text-2xl font-bold'>{service.name}</h1>

      <div className='grid grid-cols-2 gap-12'>
        <div>
          <h3 className='text-sm font-medium text-gray-500 mb-1'>Description</h3>
          <p className='text-gray-700'>{service.description}</p>
        </div>

        <div>
          <h3 className='text-sm font-medium text-gray-500 mb-1'>Deliverables</h3>
          <div className='flex flex-wrap gap-2'>
            {[service.deliverables].map((d: string) => (
              <div
                key={d}
                className='bg-gray-100 text-sm px-3 py-1 rounded-md'
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons cards */}
      <div className='grid grid-cols-3 gap-4 mt-8'>
          <div className='border border-slate-300 rounded-lg p-4'>
            <h4 className='font-semibold'>{service.name}</h4>
            <p className='text-sm text-gray-600 mb-2'>
              A full classification of the appropriate medium format...
            </p>
            <div className='flex justify-between items-center'>
              <span className='text-sm font-bold'>${service.basePrice}</span>
              <span className='text-xs text-green-600 font-medium'>{service.estimatedHours}</span>
            </div>
          </div>
      </div>

      <div className='flex gap-4 mt-10'>
        <Button onClick={onNext} className='bg-orange-500 rounded-none text-white px-8'>
          Next
        </Button>
        <Button variant='outline' className=' rounded-none'>Cancel</Button>
      </div>
    </div>
  );
}
