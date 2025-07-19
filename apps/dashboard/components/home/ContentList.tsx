import { Download } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";

export interface ContentItem {
  id: string;
  title: string;
  subtitle: string;
  purchaseDate: string;
  revisionsLeft: number;
  status: "Delivered" | "Pending";
}

export function ContentList({
  items,
  onItemClick,
}: {
  items: ContentItem[];
  onItemClick?: (item: ContentItem) => void;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick?.(item)}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition cursor-pointer border border-gray-100"
        >
          {/* Top Section */}
          <div className="flex justify-between items-start pb-4 border-b border-gray-200">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                item.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Bottom Section */}
          <div className="pt-4 flex justify-between items-center flex-wrap gap-4">
            <div className="text-sm text-gray-600 space-x-6 flex flex-wrap">
              <span>
                <span className="font-medium text-gray-700">
                  Purchase Date:
                </span>{" "}
                {item.purchaseDate}
              </span>
              <span>
                <span className="font-medium text-gray-700">
                  Revision Rounds Left:
                </span>{" "}
                {item.revisionsLeft}
              </span>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="h-8 w-8 p-0 flex items-center justify-center border-gray-300 text-orange-500 hover:bg-orange-50"
              >
                <Download size={16} />
              </Button>

              <Button className="h-8 px-3 bg-orange-500 text-white hover:bg-orange-600 text-sm font-medium">
                View Work
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
