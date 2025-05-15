"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternLinearGradient() {
  return (
    <div className="absolute flex w-[20vw] h-[90vh] items-center justify-center overflow-hidden rounded-lg border   bg-background p-20 -z-50 top-0 right-0">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
