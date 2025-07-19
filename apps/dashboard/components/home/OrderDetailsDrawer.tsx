import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@repo/ui/components/ui/drawer";
import { Button } from "@repo/ui/components/ui/button";

interface Step {
  label: string;
  description: string;
  timestamp?: string;
}

interface OrderDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  steps: Step[];
}

export function OrderDetailsDrawer({
  open,
  onOpenChange,
  title,
  steps,
}: OrderDetailsDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="ml-auto h-full max-w-md w-full shadow-xl border-l bg-white">
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-6">
            <p className="text-sm font-medium text-gray-500 mb-1">Social Media</p>
            <DrawerHeader className="p-0">
              <DrawerTitle className="text-xl font-semibold">{title}</DrawerTitle>
            </DrawerHeader>

            {/* Tabs */}
            <div className="flex items-center border-b mt-6 text-sm text-gray-600">
              <div className="mr-6 pb-2 border-b-2 border-blue-500 text-blue-600 font-medium">
                Interaction
              </div>
              <div className="mr-6 pb-2">Overview</div>
              <div className="pb-2">Invoice</div>
              <div className="ml-auto text-xs text-gray-500">14:00:30 Left</div>
            </div>

            {/* Timeline */}
            <div className="mt-6 space-y-6 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="flex space-x-4">
                  {/* Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5" />
                    {idx < steps.length - 1 && (
                      <div className="flex-1 w-px bg-gray-300 mt-1.5" />
                    )}
                  </div>

                  {/* Step content */}
                  <div>
                    <p className="font-medium text-sm">{step.label}</p>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                    {step.timestamp && (
                      <p className="text-xs text-gray-400 mt-1">{step.timestamp}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Upload Work
              </Button>
            </div>
          </div>

          {/* Optional close footer */}
          <DrawerFooter className="mt-auto p-6">
            <DrawerClose asChild>
              <Button variant="ghost" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
