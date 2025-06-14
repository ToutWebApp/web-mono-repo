import { ServiceFilters } from '../../components/services/filters';
import { ServiceTagFilters } from '../../components/services/tag-filters';
import { ServiceCard } from '../../components/services/service-card';

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
});

export default function ServicesPage() {
  return (
    <div className='flex flex-col md:flex-row gap-8 px-8 pt-44 pb-12 bg-[#F9FAFB]'>
      <aside className='w-full md:w-72 shrink-0'>
        <ServiceFilters />
      </aside>

      <main className='flex-1 space-y-6'>
        <ServiceTagFilters />
        <p className='text-sm text-gray-500'>12 Service Available</p>
        <div className='space-y-4'>
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </main>
    </div>
  );
}
