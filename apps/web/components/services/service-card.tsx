"use client";

import { Badge } from "@repo/ui/components/ui/badge";

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  time: string;
}

export function ServiceCard({
  category,
  title,
  description,
  deliverables,
  time,
}: ServiceCardProps) {
  return (
    <div className='border rounded-xl p-4 bg-white shadow-sm'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='text-sm text-gray-500'>{category}</p>
          <h3 className='text-base font-semibold'>{title}</h3>
          <p className='text-sm text-gray-600 mt-1'>{description}</p>
        </div>
        <Badge className='bg-[#E0F7F5] text-[#007F7F] text-xs text-nowrap font-semibold px-3 py-1 rounded-full'>
          {time}
        </Badge>
      </div>

      <div className='flex flex-wrap gap-2 mt-4'>
        {deliverables.map((d, i) => (
          <Badge
            key={i}
            variant='outline'
            className='bg-[#F3F4F6] border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-1'
          >
            {d}
          </Badge>
        ))}
      </div>
    </div>
  );
}
