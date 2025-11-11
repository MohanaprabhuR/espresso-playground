"use clients";

import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  Link2Icon,
  MailIcon,
  SearchIcon,
  CornerDownLeft,
  StarIcon,
  Code2Icon,
  CopyIcon,
  RefreshCwIcon,
  ArrowUpIcon,
  PlusIcon,
  Search,
  HelpCircle,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";
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
      <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
        InputGroup Component
      </h1>
      <div className="grid w-full gap-6 justify-center">
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
          <InputGroup variant="outline" size="sm">
            <InputGroupInput placeholder="Search..." size="sm" />
            <InputGroupAddon size="sm" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput placeholder="Search..." size="md" />
            <InputGroupAddon size="md" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput placeholder="Search..." size="lg" />
            <InputGroupAddon size="lg" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput placeholder="Search..." size="xl" />
            <InputGroupAddon size="xl" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="sm"
            />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="md"
            />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="lg"
            />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="xl"
            />
            <InputGroupAddon size="xl">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="sm"
            />
            <InputGroupAddon size="sm" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="md"
            />
            <InputGroupAddon size="md" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="lg"
            />
            <InputGroupAddon size="lg" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="xl"
            />
            <InputGroupAddon size="xl" align="inline-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="sm"
            />
            <InputGroupAddon size="sm" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="md"
            />
            <InputGroupAddon size="md" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="lg"
            />
            <InputGroupAddon size="lg" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="xl"
            />
            <InputGroupAddon size="xl" align="block-start">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4 items-center">
          <InputGroup variant="outline" size="sm">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="sm"
            />
            <InputGroupAddon size="sm" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="md"
            />
            <InputGroupAddon size="md" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="lg"
            />
            <InputGroupAddon size="lg" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="xl"
            />
            <InputGroupAddon size="xl" align="block-end">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

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
          <InputGroup variant="outline" size="sm">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="sm"
            />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="md">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="md"
            />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="lg">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="lg"
            />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup variant="outline" size="xl">
            <InputGroupInput
              variant="outline"
              placeholder="Search..."
              size="xl"
            />
            <InputGroupAddon size="xl">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup status="success" size="sm">
            <InputGroupInput
              placeholder="Search..."
              size="sm"
              status="success"
            />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="error" size="md">
            <InputGroupInput placeholder="Search..." size="md" status="error" />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="warning" size="lg">
            <InputGroupInput
              placeholder="Search..."
              size="lg"
              status="warning"
            />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex gap-4 items-center">
          <InputGroup status="success" variant="outline" size="sm">
            <InputGroupInput
              placeholder="Search..."
              size="sm"
              status="success"
              variant="outline"
            />
            <InputGroupAddon size="sm">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="error" variant="outline" size="md">
            <InputGroupInput
              placeholder="Search..."
              size="md"
              status="error"
              variant="outline"
            />
            <InputGroupAddon size="md">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup status="warning" variant="outline" size="lg">
            <InputGroupInput
              placeholder="Search..."
              size="lg"
              status="warning"
              variant="outline"
            />
            <InputGroupAddon size="lg">
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCardIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <CheckIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon align="inline-end">
            <StarIcon />
            <InfoIcon />
          </InputGroupAddon>
        </InputGroup>

        <ButtonGroup>
          <ButtonGroupText asChild>
            <Label htmlFor="url">https://</Label>
          </ButtonGroupText>
          <InputGroup>
            <InputGroupInput id="url" />
            <InputGroupAddon align="inline-end">
              <Link2Icon />
            </InputGroupAddon>
          </InputGroup>
          <ButtonGroupText>.com</ButtonGroupText>
        </ButtonGroup>

        <InputGroup>
          <InputGroupTextarea
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
            className="min-h-[200px]"
          />
          <InputGroupAddon align="block-end" className="border-t">
            <InputGroupText>Line 1, Column 1</InputGroupText>
            <InputGroupButton size="sm" className="ml-auto">
              Run <CornerDownLeft className="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-start" className="border-b">
            <InputGroupText className="font-mono font-medium">
              <Code2Icon className="size-4" />
              script.js
            </InputGroupText>
            <InputGroupButton className="ml-auto" size="icon-xs">
              <RefreshCwIcon className="size-4" />
            </InputGroupButton>
            <InputGroupButton variant="ghost" size="icon-xs">
              <CopyIcon className="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
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
              <InputGroupButton
                variant="outline"
                className="rounded-full"
                size="icon-xs"
              >
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
