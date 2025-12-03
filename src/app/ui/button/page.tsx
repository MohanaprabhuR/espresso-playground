import React from "react";
import { Button } from "@/components/ui/button";
import { Diamond } from "lucide-react";

const ButtonDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Button Component
        </h1>
        <div className="flex flex-col gap-[30px_0]">
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="sm">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="sm" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="sm" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="sm">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="sm" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="sm" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="sm">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="sm" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="sm" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="sm">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="sm" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="sm" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="sm">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="sm" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="sm" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="md">
                <Diamond className="size-4.5" />
                Discover
                <Diamond className="size-4.5" />
              </Button>
              <Button variant="primary" size="md" disabled>
                <Diamond className="size-4.5" />
                Discover
                <Diamond className="size-4.5" />
              </Button>
              <Button variant="primary" size="md" iconOnly>
                <Diamond className="size-4.5" />
                Discover
                <Diamond className="size-4.5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="md">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="md" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="md" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="md">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="md" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="md" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="md">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="md" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="md" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="md">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="md" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="md" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="lg">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="lg" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="lg" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="lg">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="lg" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="lg" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="lg">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="lg" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="lg" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="lg">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="lg" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="lg" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="lg">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="lg" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="lg" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="2xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="2xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="primary" size="2xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="2xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="2xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="secondary" size="2xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="2xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="2xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="outline" size="2xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="2xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="2xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="ghost" size="2xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="2xl">
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="2xl" disabled>
                <Diamond />
                Discover
                <Diamond />
              </Button>
              <Button variant="destructive" size="2xl" iconOnly>
                <Diamond />
                Discover
                <Diamond />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
