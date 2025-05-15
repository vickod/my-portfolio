import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="absolute flex h-[500px] w-[85vw] sm:w-[60vw] items-center justify-center overflow-hidden rounded-lg  bg-background dark:bg-gray-950 bg-gray-50 p-20 top-0 right-0 -z-50">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-100%] h-[180%] skew-y-10"
        )}
      />
    </div>
  );
}
