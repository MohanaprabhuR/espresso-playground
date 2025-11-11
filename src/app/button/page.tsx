import React from "react";
import { Button } from "@/components/ui/button";
import { CommandIcon } from "../../../public/images/svg/commandIcon";

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
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="primary" size="sm" disabled>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="primary" size="sm" iconOnly>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="sm">
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="secondary" size="sm" disabled>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="secondary" size="sm" iconOnly>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="sm">
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="outline" size="sm" disabled>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="outline" size="sm" iconOnly>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="sm">
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" disabled>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" iconOnly>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="sm">
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="destructive" size="sm" disabled>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
              <Button variant="destructive" size="sm" iconOnly>
                <CommandIcon fill="currentColor" className="size-4" />
                Discover
                <CommandIcon fill="currentColor" className="size-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="md">
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="primary" size="md" disabled>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="primary" size="md" iconOnly>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="md">
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="secondary" size="md" disabled>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="secondary" size="md" iconOnly>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="md">
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="outline" size="md" disabled>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="outline" size="md" iconOnly>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="md">
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="ghost" size="md" disabled>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="ghost" size="md" iconOnly>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="md">
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="destructive" size="md" disabled>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
              <Button variant="destructive" size="md" iconOnly>
                <CommandIcon fill="currentColor" className="size-4.5" />
                Discover
                <CommandIcon fill="currentColor" className="size-4.5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="lg">
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="primary" size="lg" disabled>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="primary" size="lg" iconOnly>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="lg">
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="secondary" size="lg" disabled>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="secondary" size="lg" iconOnly>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="lg">
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="outline" size="lg" disabled>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="outline" size="lg" iconOnly>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="lg">
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="ghost" size="lg" disabled>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="ghost" size="lg" iconOnly>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="lg">
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="destructive" size="lg" disabled>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
              <Button variant="destructive" size="lg" iconOnly>
                <CommandIcon fill="currentColor" className="size-5" />
                Discover
                <CommandIcon fill="currentColor" className="size-5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="primary" size="xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="primary" size="xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="secondary" size="xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="secondary" size="xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="outline" size="xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="outline" size="xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="ghost" size="xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="ghost" size="xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="destructive" size="xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="destructive" size="xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <div className="flex gap-[0_20px]">
              <Button variant="primary" size="2xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="primary" size="2xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="primary" size="2xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="secondary" size="2xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="secondary" size="2xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="secondary" size="2xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="outline" size="2xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="outline" size="2xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="outline" size="2xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="ghost" size="2xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="ghost" size="2xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="ghost" size="2xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
            <div className="flex gap-[0_20px]">
              <Button variant="destructive" size="2xl">
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="destructive" size="2xl" disabled>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
              <Button variant="destructive" size="2xl" iconOnly>
                <CommandIcon fill="currentColor" className="size-6" />
                Discover
                <CommandIcon fill="currentColor" className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
