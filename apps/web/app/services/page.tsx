'use client';

import { useState } from 'react';
import { ServiceFilters } from '../../components/services/filters';
import { ServiceTagFilters } from '../../components/services/tag-filters';
import { ServiceCard } from '../../components/services/service-card';
import { ServiceDetailsDrawer } from '../../components/services/ServiceDetailsDrawer';

const services = Array(5).fill({
  category: 'Social Media',
  title: 'Content Calendar',
  description:
    'A strategic planning tool that outlines what content will be published, where it will be published, and when.',
  deliverables: [
    'Weekly Calendar View',
    'Strategy Decks',
    'Draft Content',
    'Draft Content',
    'Draft Content',
  ],
  time: 'RECEIVE IN 12H',
  revisions: 3,
  deliveryTime: '12H',
  deliverablesCount: 2,
  professionals: ['Graphic Designer', 'Account Manager', 'Copywriter', 'Art Director'],
  terms:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  price: 120,
});

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <>
      <div className='flex flex-col md:flex-row gap-8 px-8 pt-44 pb-12 bg-[#F9FAFB]'>
        <aside className='w-full md:w-72 shrink-0'>
          <ServiceFilters />
        </aside>

        <main className='flex-1 space-y-6'>
          <ServiceTagFilters />
          <p className='text-sm text-gray-500'>12 Service Available</p>
          <div className='space-y-4'>
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                {...service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </main>
      </div>

      {selectedService && (
        <ServiceDetailsDrawer
          open={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </>
  );
}
