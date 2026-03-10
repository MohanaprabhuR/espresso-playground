import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Diamond } from "lucide-react";

const toolTipDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Tooltip Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] w-full max-w-[100px]">
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Open source by default</p>
              <Diamond />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>Hover left</TooltipTrigger>
            <TooltipContent side="left" align="center">
              <p>Open source by default</p>
              <Diamond />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>Hover right</TooltipTrigger>
            <TooltipContent side="right" align="center">
              <p>Open source by default</p>
              <Diamond />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>Hover bottom</TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Open source by default</p>
              <Diamond />
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>Hover me</TooltipTrigger>
            <TooltipContent arrow={false}>
              Open source by default
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>Hover me</TooltipTrigger>
            <TooltipContent resize={false} arrow={false}>
              Open source by default
              <Diamond />
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default toolTipDemo;
