"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function DotPatternLinearGradient() {
  return (
    <div className="absolute flex size-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 -z-50 left-0 top-0">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
