import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { Loader2Icon, LoaderIcon } from "lucide-react";
import React from "react";

function SpinnerDotLine({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

function SpinnerLine({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

const SpinnerDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Spinner Component
        </h1>
        <div className="flex flex-col justify-center items-center   mx-auto gap-[50px]">
          <div className="w-full max-w-[300px] mx-auto ">
            <Item variant="muted">
              <ItemMedia>
                <Spinner track variant="red" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  Processing payment...
                </ItemTitle>
              </ItemContent>
              <ItemContent className="flex-none justify-end">
                <span className="text-sm tabular-nums">$100.00</span>
              </ItemContent>
            </Item>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button disabled>
              <Spinner variant="red" track size="lg" />
              Loading...
            </Button>
            <Button variant="outline" size="md">
              <Spinner variant="red" track size="xl" />
              Please wait
            </Button>
          </div>

          <div className="flex items-center gap-4 [--radius:1.2rem]">
            <Badge theme="violet">
              <Spinner variant="red" track />
              Syncing
            </Badge>
            <Badge variant="secondary" theme="violet">
              <Spinner />
              Updating
            </Badge>
            <Badge variant="outline" theme="violet">
              <Spinner />
              Processing
            </Badge>
          </div>

          <div className="flex w-full max-w-md flex-col gap-4 [--radius:1rem]">
            <Item variant="outline">
              <ItemMedia variant="icon">
                <SpinnerDotLine className="szie-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Downloading...</ItemTitle>
                <ItemDescription>129 MB / 1000 MB</ItemDescription>
              </ItemContent>
              <ItemActions className="hidden sm:flex">
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </ItemActions>
              <ItemFooter className="w-full">
                <Progress value={75} size="xs" className="h-1" />
              </ItemFooter>
            </Item>
          </div>

          <div className="flex items-center gap-6">
            <SpinnerLine className="size-2 text-red-500" />
            <SpinnerLine className="size-3 text-green-500" />
            <SpinnerLine className="size-4 text-blue-500" />
            <SpinnerLine className="size-5 text-amber-500" />
            <SpinnerLine className="size-6 text-purple-500" />
          </div>
          <div className="flex items-center gap-6">
            <SpinnerDotLine className="size-2 text-red-500" />
            <SpinnerDotLine className="size-3 text-green-500" />
            <SpinnerDotLine className="size-4 text-blue-500" />
            <SpinnerDotLine className="size-5 text-amber-500" />
            <SpinnerDotLine className="size-6 text-purple-500" />
          </div>

          <div className="flex gap-x-10 justify-center">
            <div className="flex gap-x-3">
              <Spinner />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
            <div className="flex gap-x-3">
              <Spinner track />
              <Spinner track size="md" />
              <Spinner track size="lg" />
              <Spinner track size="xl" />
            </div>
          </div>
          <div className="flex gap-x-10 justify-center">
            <div className="flex gap-x-3">
              <Spinner variant="blue" />
              <Spinner variant="blue" size="md" />
              <Spinner variant="blue" size="lg" />
              <Spinner variant="blue" size="xl" />
            </div>
            <div className="flex gap-x-3">
              <Spinner variant="blue" track />
              <Spinner variant="blue" track size="md" />
              <Spinner variant="blue" track size="lg" />
              <Spinner variant="blue" track size="xl" />
            </div>
          </div>
          <div className="flex gap-x-10 justify-center">
            <div className="flex gap-x-3">
              <Spinner variant="green" />
              <Spinner variant="green" size="md" />
              <Spinner variant="green" size="lg" />
              <Spinner variant="green" size="xl" />
            </div>
            <div className="flex gap-x-3">
              <Spinner variant="green" track />
              <Spinner variant="green" track size="md" />
              <Spinner variant="green" track size="lg" />
              <Spinner variant="green" track size="xl" />
            </div>
          </div>
          <div className="flex gap-x-10 justify-center">
            <div className="flex gap-x-3">
              <Spinner variant="amber" />
              <Spinner variant="amber" size="md" />
              <Spinner variant="amber" size="lg" />
              <Spinner variant="amber" size="xl" />
            </div>
            <div className="flex gap-x-3">
              <Spinner variant="amber" track />
              <Spinner variant="amber" track size="md" />
              <Spinner variant="amber" track size="lg" />
              <Spinner variant="amber" track size="xl" />
            </div>
          </div>
          <div className="flex gap-x-10 justify-center">
            <div className="flex gap-x-3">
              <Spinner variant="red" />
              <Spinner variant="red" size="md" />
              <Spinner variant="red" size="lg" />
              <Spinner variant="red" size="xl" />
            </div>
            <div className="flex gap-x-3">
              <Spinner variant="red" track />
              <Spinner variant="red" track size="md" />
              <Spinner variant="red" track size="lg" />
              <Spinner variant="red" track size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerDemo;
// import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
// import { cn } from "@/lib/utils";
// import { Spinner } from "@/components/ui/spinner";
// import { LoaderIcon } from "lucide-react";

// function SpinnerLine({ className, ...props }: React.ComponentProps<"svg">) {
//   return (
//     <LoaderIcon
//       role="status"
//       aria-label="Loading"
//       className={cn("size-4 animate-spin", className)}
//       {...props}
//     />
//   );
// }

// const SpinnerDemo = () => {
//   return (
//     <div className="pt-10 text-center">
//       <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 ">
//         Spinner Component
//       </h1>
//       <div className="flex w-full  items-center justify-center flex-col gap-4 [--radius:1rem]">
//         <Item variant="muted">
//           <ItemMedia>
//             <Spinner />
//           </ItemMedia>
//           <ItemContent>
//             <ItemTitle className="line-clamp-1">
//               Processing payment...
//             </ItemTitle>
//           </ItemContent>
//           <ItemContent className="flex-none justify-end">
//             <span className="text-sm tabular-nums">$100.00</span>
//           </ItemContent>
//         </Item>

//         <div className="flex items-center gap-6">
//           <SpinnerLine className="size-2" />
//           <SpinnerLine className="size-3" />
//           <SpinnerLine className="size-4" />
//           <SpinnerLine className="size-6" />
//           <SpinnerLine className="size-8" />
//         </div>

//         <div className="flex items-center gap-6">
//           <Spinner className="size-2" />
//           <Spinner className="size-3" />
//           <Spinner className="size-4" />
//           <Spinner className="size-6" />
//           <Spinner className="size-8" />
//         </div>
//         <div className="flex items-center gap-6">
//           <Spinner className="size-6 text-red-500" />
//           <Spinner className="size-6 text-green-500" />
//           <Spinner className="size-6 text-blue-500" />
//           <Spinner className="size-6 text-yellow-500" />
//           <Spinner className="size-6 text-purple-500" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SpinnerDemo;
