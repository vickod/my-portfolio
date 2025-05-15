"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternDashed() {
  return (
    <div className="absolute flex w-[90vw] h-[90vh] items-center justify-center overflow-hidden rounded-lg  bg-background p-20 top-0 right-0 -z-50">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
