"use client";

import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { Slider } from "@repo/ui/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@repo/ui/components/ui/toggle-group";

export function ServiceFilters() {
  return (
    <div className='space-y-6 text-sm text-gray-700'>
      <Input placeholder='Search' className='text-sm' />

      <div>
        <label className='block mb-1 font-medium'>Business Stage</label>
        <Select defaultValue='0-1'>
          <SelectTrigger className='text-sm'>
            <SelectValue placeholder='Select stage' />
          </SelectTrigger>
          <SelectContent className='bg-white text-sm'>
            <SelectItem value='0-1'>0-1 Years</SelectItem>
            <SelectItem value='1-5'>1-5 Years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className='block mb-1 font-medium'>Business Size</label>
        <Slider
          defaultValue={[1]}
          max={200}
          step={1}
          className='bg-[#F0F0F0]'
        />
      </div>

      <div>
        <label className='block mb-1 font-medium'>Goal</label>
        <Select>
          <SelectTrigger className='text-sm'>
            <SelectValue placeholder='Go Online' />
          </SelectTrigger>
          <SelectContent className='bg-white text-sm'>
            <SelectItem value='online'>Go Online</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className='block mb-1 font-medium'>Service Type</label>
        <ToggleGroup type='single' className='flex gap-2'>
          <ToggleGroupItem
            value='create'
            className='bg-[#007F7F] text-white px-4 py-1 rounded-md'
          >
            Create
          </ToggleGroupItem>
          <ToggleGroupItem
            value='improve'
            className='border px-4 py-1 rounded-md'
          >
            Improve
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <label className='block mb-1 font-medium'>Maximum Waiting Time</label>
        <Slider
          defaultValue={[10]}
          max={30}
          step={1}
          className='bg-[#F0F0F0]'
        />
      </div>

      <Button className='w-full bg-orange-500 text-white hover:bg-orange-600'>
        Apply
      </Button>
    </div>
  );
}
