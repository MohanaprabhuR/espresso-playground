"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const SonnerDemo = () => {
  return (
    <div className="pt-10">
      <h1 className="text-xl font-bold text-center text-gray-900 dark:text-white pb-4">
        Sonner Component
      </h1>
      <div className="flex flex-col justify-center items-center gap-[30px_0] mx-auto">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              duration: 10000000,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </div>
    </div>
  );
};

export default SonnerDemo;
