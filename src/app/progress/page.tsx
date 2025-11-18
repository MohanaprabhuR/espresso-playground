"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";

const ProgressDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Progress Component
        </h1>

        <div className="flex flex-col  mx-auto gap-[50px] justify-center">
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[20px] w-full">
              <Progress value={40} size="xs" />
              <Progress value={40} size="sm" />
              <Progress value={40} size="md" />
              <Progress value={40} size="lg" />
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[20px] w-full">
              <Progress value={40} intervals={6} size="xs" />
              <Progress value={40} intervals={6} size="sm" />
              <Progress value={40} intervals={6} size="md" />
              <Progress value={40} intervals={6} size="lg" />
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <Progress value={40} intervals={6} size="xs" square />
              <Progress value={40} intervals={6} size="sm" square />
              <Progress value={40} intervals={6} size="md" square />
              <Progress value={40} intervals={6} size="lg" square />
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[20px] w-full">
              <Progress
                value={40}
                size="xs"
                showLabel
                labelName="Label"
                labelIcon={StarIcon}
              ></Progress>

              <Progress
                value={40}
                size="sm"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                size="md"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                size="lg"
                showLabel
                labelName="Label"
              ></Progress>
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <Progress
                value={40}
                square
                size="xs"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                square
                size="sm"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                square
                size="md"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                square
                size="lg"
                showLabel
                labelName="Label"
              ></Progress>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[20px] w-full">
              <Progress
                value={40}
                intervals={5}
                size="xs"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                intervals={5}
                size="sm"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                intervals={5}
                size="md"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                intervals={5}
                size="lg"
                showLabel
                labelName="Label"
              ></Progress>
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <Progress
                value={40}
                intervals={5}
                square
                size="xs"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                intervals={5}
                square
                size="sm"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                intervals={5}
                square
                size="md"
                showLabel
                labelName="Label"
              ></Progress>
              <Progress
                value={40}
                intervals={5}
                square
                size="lg"
                showLabel
                labelName="Label"
              ></Progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDemo;
