"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@repo/ui/components/ui/drawer";
import { Button } from "@repo/ui/components/ui/button";
import { Service } from "@repo/api-client/src/apis/types/services.types";
import { useRouter } from "next/navigation";

interface UIService extends Service {
  category: string;
  revisions: number;
  deliveryTime: string;
  deliverablesCount: number;
  professionals: string[];
}

interface ServiceDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  service: UIService;
}

export function ServiceDetailsDrawer({
  open,
  onClose,
  service,
}: ServiceDetailsDrawerProps) {
  const router = useRouter();
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className='max-w-2xl ml-auto h-full p-6 overflow-y-auto shadow-xl bg-white'>
        <DrawerHeader className='p-6 pb-4'>
          <p className='text-sm text-gray-500'>{service.category}</p>
          <DrawerTitle className='text-2xl font-semibold mt-1'>
            {service.name}
          </DrawerTitle>

          {/* Horizontal stats bar */}
          <div className='flex items-center justify-between mt-6 p-4 rounded-xl bg-[#F1F3F5]'>
            <div className='flex flex-col items-center flex-1 border-r-2 b border-gray-200'>
              <span className='text-lg font-semibold'>
                {service.revisions}x
              </span>
              <span className='text-sm text-[#696969] font-semibold'>
                Revisions
              </span>
            </div>
            <div className='flex flex-col items-center flex-1 border-r-2 b border-gray-200'>
              <span className='text-lg font-semibold'>
                {service.deliveryTime}
              </span>
              <span className='text-sm text-[#696969] font-semibold'>
                Delivery Time
              </span>
            </div>
            <div className='flex flex-col items-center flex-1'>
              <span className='text-lg font-semibold'>
                {service.deliverablesCount}
              </span>
              <span className='text-sm text-[#696969] font-semibold'>
                Deliverables
              </span>
            </div>
          </div>
        </DrawerHeader>

        <div className='px-6 space-y-6 text-sm text-gray-800'>
          <div className='flex items-start gap-6 py-3 border-b-2 border-[#DEE2E6]'>
            <div className='w-40 shrink-0 font-medium text-[#828282]'>
              Description
            </div>
            <p className='text-gray-600 leading-relaxed'>
              {service.description}
            </p>
          </div>

          <div className='flex items-start gap-6 py-3 border-b-2 border-[#DEE2E6]'>
            <div className='w-40 shrink-0 font-medium text-[#828282]'>
              Business Details
            </div>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <span className='font-medium w-32'>Business Size:</span>
                <span>{service.businessSize}</span>
              </div>
              <div className='flex items-center'>
                <span className='font-medium w-32'>Business Stage:</span>
                <span>{service.businessStage.join(", ")}</span>
              </div>
              <div className='flex items-center'>
                <span className='font-medium w-32'>Service Type:</span>
                <span>{service.serviceType}</span>
              </div>
            </div>
          </div>

          <div className='flex items-start gap-6 py-3'>
            <div className='w-40 shrink-0 font-medium text-[#828282]'>
              Professionals Involved
            </div>
            <ul className='space-y-1 list-disc list-inside text-gray-700'>
              {service.professionals.map((p, i) => (
                <li key={i} className='text-[14px]'>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-start gap-6 pb-10'>
            <div className='w-40 shrink-0 font-medium'>
              Terms and Conditions
            </div>
            <div className='bg-[#F1F3F5] p-4 rounded-md text-gray-600 text-[14px] leading-relaxed'>
              {service.termsConditions}
            </div>
          </div>
        </div>

        <DrawerFooter className='mt-6'>
          <Button onClick={() => router.push(`/checkout/${service.id}`)} className='w-full bg-orange-500 hover:bg-orange-600 text-white'>
            Purchase for ${parseFloat(service.basePrice).toFixed(2)}
          </Button>
          <DrawerClose asChild>
            <Button variant='ghost' className='w-full'>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}