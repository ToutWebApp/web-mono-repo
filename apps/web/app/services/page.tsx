"use client";

import { useState } from "react";
import { ServiceFilters } from "../../components/services/filters";
import { ServiceTagFilters } from "../../components/services/tag-filters";
import { ServiceCard } from "../../components/services/service-card";
import { ServiceDetailsDrawer } from "../../components/services/ServiceDetailsDrawer";
import { useServices } from "@repo/api-client";
import { Service } from "@repo/api-client/src/apis/types/services.types";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { data: servicesResponse, isLoading } = useServices();

  // Placeholder data
  const placeholderProfessionals = [
    "Strategy Consultant",
    "Project Manager",
    "Content Specialist",
  ];
  const placeholderDeliverables = ["Strategy Document", "Implementation Plan"];

  const mappedServices =
    servicesResponse?.data.map((service) => ({
      ...service,
      category: service.serviceType,
      title: service.name,
      deliverables: [service.deliverables],
      time: `RECEIVE IN ${service.estimatedHours}H`,
      revisions: 3,
      deliveryTime: `${service.estimatedHours}H`,
      deliverablesCount: [service.deliverables].length,
      professionals: placeholderProfessionals,
    })) || [];

  return (
    <>
      <div className='flex flex-col md:flex-row gap-8 px-8 pt-44 pb-12 bg-[#F9FAFB]'>
        <aside className='w-full md:w-72 shrink-0'>
          <ServiceFilters />
        </aside>

        <main className='flex-1 space-y-6'>
          <ServiceTagFilters />
          <p className='text-sm text-gray-500'>
            {servicesResponse?.data.length || 0} Service Available
          </p>
          <div className='space-y-4'>
            {mappedServices.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onClick={() =>
                  setSelectedService(
                    servicesResponse?.data.find((s) => s.id === service.id) ||
                      null
                  )
                }
              />
            ))}
          </div>
        </main>
      </div>

      {selectedService && (
        <ServiceDetailsDrawer
          open={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={{
            ...selectedService,
            category: selectedService.serviceType,
            revisions: 3,
            deliveryTime: `${selectedService.estimatedHours}H`,
            deliverablesCount: placeholderDeliverables.length,
            professionals: placeholderProfessionals,
          }}
        />
      )}
    </>
  );
}
