import { Skeleton } from "@/components/ui/skeleton"


const DYKLoader = () => {
  
    return (
      <Skeleton className="relative h-full w-full rounded-xl">
        <Skeleton className="flex space-x-4 overflow-x-auto p-2 bg-[#011627] scrollbar-hide rounded-xl h-full w-full">
          {/* Add skeleton items or content here */}
        </Skeleton>
      </Skeleton>
    );
  };
  
export default DYKLoader