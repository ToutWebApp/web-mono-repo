"use client";

import { Badge } from "@repo/ui/components/ui/badge";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";

const tags = [
  "Branding",
  "Social Media",
  "Public Relations",
  "Media Buying",
  "Digital",
  "Creative",
  "UX",
  "Marketing",
];

export function ServiceTagFilters() {
  return (
    <ScrollArea className='w-full'>
      <div className='flex gap-2 flex-wrap'>
        {tags.map((tag) => (
          <Badge
            key={tag}
            className='cursor-pointer rounded-full border border-gray-300 text-gray-700 px-4 py-1 text-sm hover:bg-orange-500 hover:text-white transition'
            variant='outline'
          >
            {tag}
          </Badge>
        ))}
      </div>
    </ScrollArea>
  );
}
