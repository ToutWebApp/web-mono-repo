import { Button } from '@repo/ui/components/ui/button';

export function PaymentStep({
  service,
  onBack,
  onPay,
}: {
  service: any;
  onBack: () => void;
  onPay: () => void;
}) {
  return (
    <div className='space-y-8'>
      <h1 className='text-2xl font-bold'>Payment</h1>

      <div className='space-y-4'>
        <div>
          <h4 className='text-sm font-medium mb-1'>Pay with</h4>
          <div className='flex gap-4'>
            <label className='flex items-center gap-2'>
              <input type='radio' defaultChecked name='method' />
              <span>Card</span>
            </label>
            <label className='flex items-center gap-2'>
              <input type='radio' name='method' />
              <span>Paypal</span>
            </label>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <input className='border p-2 rounded-md' placeholder='Card Number' />
          <div className='flex gap-2'>
            <input className='border p-2 rounded-md w-full' placeholder='MM/YY' />
            <input className='border p-2 rounded-md w-full' placeholder='CVV' />
          </div>
          <label className='flex items-center gap-2'>
            <input type='checkbox' />
            <span className='text-sm'>Save card details</span>
          </label>
        </div>
      </div>

      <div className='flex gap-4 mt-10'>
        <Button onClick={onPay} className='bg-orange-500 text-white px-8'>
          Pay ${service.summary.total}
        </Button>
        <Button variant='outline' onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  );
}
