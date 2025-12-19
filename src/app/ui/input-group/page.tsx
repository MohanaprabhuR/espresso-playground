"use clients";

import {
  CheckIcon,
  InfoIcon,
  SearchIcon,
  ArrowUpIcon,
  PlusIcon,
  Search,
  HelpCircle,
  ListFilter,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const InputGroupDemo = () => {
  return (
    <div className="pt-10 text-center">
      <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
        InputGroup Component
      </h1>
      <div className="grid w-full gap-6 justify-center">
        <div className="flex gap-4 items-center">
          <InputGroup size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
          </InputGroup>
          <InputGroup size="md">
            <InputGroupInput placeholder="Search..." size="md" />
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
          </InputGroup>
          <InputGroup size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="sm" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="md" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="lg" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="xl" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="md" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="sm" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="md" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="lg" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon size="xl" align="inline-end">
              <ListFilter />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup>
            <InputGroupTextarea placeholder="Text area...." size="sm" />
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Text area...." size="md" />
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Text area...." size="lg" />
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup status="success" size="sm">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="error" size="md">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="warning" size="lg">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup status="success" variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="error" variant="outline" size="md">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="warning" variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup>
            <InputGroupTextarea placeholder="Text area...." size="sm" />
          </InputGroup>
          <InputGroup variant="outline">
            <InputGroupTextarea placeholder="Text area...." size="md" />
          </InputGroup>
          <InputGroup variant="ghost">
            <InputGroupTextarea placeholder="Text area...." size="lg" />
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup status="success">
            <InputGroupTextarea placeholder="Text area...." size="sm" />
          </InputGroup>
          <InputGroup status="warning">
            <InputGroupTextarea placeholder="Text area...." size="md" />
          </InputGroup>
          <InputGroup status="error">
            <InputGroupTextarea placeholder="Text area...." size="lg" />
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" status="success">
            <InputGroupTextarea placeholder="Text area...." size="sm" />
          </InputGroup>
          <InputGroup variant="outline" status="warning">
            <InputGroupTextarea placeholder="Text area...." size="md" />
          </InputGroup>
          <InputGroup variant="outline" status="error">
            <InputGroupTextarea placeholder="Text area...." size="lg" />
          </InputGroup>
        </div>

        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              className="tracking-4 leading-normal text-muted-foreground font-normal"
            >
              12 results
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="example.com" className="!pl-1" />
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton className="rounded-full" size="icon-xs">
                    <InfoIcon className="size-4" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Ask, Search or Chat..." />
            <InputGroupAddon align="block-end">
              <InputGroupButton className="rounded-full" size="icon-xs">
                <PlusIcon className="size-4" />
              </InputGroupButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton variant="ghost">Auto</InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  align="start"
                  className="[--radius:0.95rem]"
                >
                  <DropdownMenuItem>Auto</DropdownMenuItem>
                  <DropdownMenuItem>Agent</DropdownMenuItem>
                  <DropdownMenuItem>Manual</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <InputGroupText className="ml-auto">52% used</InputGroupText>
              <Separator orientation="vertical" className="!h-4" />
              <InputGroupButton
                className="rounded-full"
                size="icon-xs"
                disabled
              >
                <ArrowUpIcon className="size-4" />
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="@shadcn" />
            <InputGroupAddon align="inline-end">
              <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
                <CheckIcon className="size-3" />
              </div>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupTextarea placeholder="Enter your message" />
            <InputGroupAddon align="block-end">
              <InputGroupText className="text-muted-foreground text-xs">
                120 characters left
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter password" type="password" />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Info"
                    size="icon-xs"
                  >
                    <InfoIcon className="size-4" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Password must be at least 8 characters</p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Your email address" />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    size="icon-xs"
                  >
                    <HelpCircle className="size-4" />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>
                  <p>We&apos;ll use this to send you notifications</p>
                </TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter API key" />
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupAddon>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    size="icon-xs"
                  >
                    <HelpCircle className="size-4" />
                  </InputGroupButton>
                </InputGroupAddon>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Click for help with API keys</p>
              </TooltipContent>
            </Tooltip>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
export default InputGroupDemo;
