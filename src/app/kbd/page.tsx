import React from "react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { PrinterIcon, SearchIcon } from "lucide-react";
const KbdDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Kbd Component
        </h1>
        <div className="flex flex-col gap-[30px_0] w-full max-w-[500px] mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-sm">
              Use
              <KbdGroup>
                <Kbd>Ctrl + B</Kbd>
                <Kbd>Ctrl + K</Kbd>
              </KbdGroup>
              to open the command palette
            </p>
          </div>

          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>⇧</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>⌃</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>B</Kbd>
          </KbdGroup>
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </InputGroupAddon>
          </InputGroup>
          <Button variant="outline">
            <PrinterIcon className="size-4" />
            Print
            <Kbd>⌘P</Kbd>
          </Button>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" className="pr-2">
              Accept <Kbd>⏎</Kbd>
            </Button>
            <Button size="sm" className="pr-2">
              Cancel <Kbd>Esc</Kbd>
            </Button>
            <Button variant="outline" size="sm" className="pr-2">
              Accept <Kbd>⏎</Kbd>
            </Button>
            <Button variant="outline" size="sm" className="pr-2">
              Cancel <Kbd>Esc</Kbd>
            </Button>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonGroup>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline">
                      Save
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      Save Changes <Kbd>S</Kbd>
                    </div>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline">
                      Print
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center gap-2">
                      Print Document{" "}
                      <KbdGroup>
                        <Kbd>Ctrl</Kbd>
                        <Kbd>P</Kbd>
                      </KbdGroup>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KbdDemo;
