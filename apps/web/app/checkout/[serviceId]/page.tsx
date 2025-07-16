'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { DetailsStep } from '../../../components/checkout/DetailsStep';
import { PaymentStep } from '../../../components/checkout/PaymentStep';
import { useService } from '@repo/api-client';
import { TimelineSteps } from '../../../components/checkout/TimelineSteps';


const mockService = {
  id: '1',
  name: 'Content Calendar',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
  deliverables: ['Weekly Calendar View', 'Strategy Decks'],
  basePrice: 120,
  addons: [
    { id: 'a1', name: 'Publishing Automation', price: 12, time: '2 HOURS' },
    { id: 'a2', name: 'Content classification by medium', price: 18, time: '2-3 HOURS' },
  ],
  summary: {
    base: 120,
    addons: 12,
    coupon: 42,
    total: 80,
  },
};


const steps = [
  { label: 'Details', completed: true, active: false },
  { label: 'Payment', completed: false, active: true },
  { label: 'Brief', completed: false, active: false },
  { label: 'Done', completed: false, active: false },
];

export default function CheckoutPage() {
  const [step, setStep] = useState<'details' | 'payment'>('details');
const params = useParams();
const serviceId = params?.serviceId as string;
const { data: service, isLoading } = useService(serviceId);
console.log("service", service);


if (isLoading) return <div>Loading...</div>;
if (!service) return <div>Service not found</div>;

  return (
    <div className='flex min-h-screen mt-20'>
      {/* Left Summary Panel */}
      <aside className='w-64 bg-[#1E1E1E] text-white p-6 space-y-6'>
        <h3 className='text-lg font-semibold'>Summary</h3>
        <div>
          <div className='flex justify-between'>
            <span>${mockService.summary.base}</span>
            <span className='text-sm text-gray-400'>Service</span>
          </div>
          <div className='flex justify-between'>
            <span>+${mockService.summary.addons}</span>
            <span className='text-sm text-gray-400'>Addons</span>
          </div>
          <div className='flex justify-between'>
            <span>-${mockService.summary.coupon}</span>
            <span className='text-sm text-gray-400'>Coupons</span>
          </div>
          <hr className='my-4 border-gray-600' />
          <div className='flex justify-between font-bold'>
            <span>${mockService.summary.total}</span>
            <span>Total</span>
          </div>
        </div>
      </aside>

      {/* Right Step Panel */}
      <main className='flex-1 bg-white p-10'>
        {/* Progress Header */}
<TimelineSteps   steps={[
    { label: 'Details', status: 'completed' },
    { label: 'Payment', status: 'current' },
    { label: 'Brief', status: 'upcoming' },
    { label: 'Done', status: 'upcoming' },
  ]}/>;

        {step === 'details' && (
          <DetailsStep
            service={service}
            onNext={() => setStep('payment')}
          />
        )}

        {step === 'payment' && (
          <PaymentStep
            service={mockService}
            onBack={() => setStep('details')}
            onPay={() => alert('Payment submitted')}
          />
        )}
      </main>
    </div>
  );
}
