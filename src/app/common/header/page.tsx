"use client";
import React from "react";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  BoltIcon,
  BookOpenIcon,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  Plane,
  Plus,
  Send,
  Sparkles,
  Square,
  SquarePlay,
  Type,
  UserPenIcon,
  Image,
  ImageUp,
  Grid3x3,
  Play,
  Settings,
  Forward,
  Globe,
} from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const headerDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Header Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <Header>
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Plane />
                    Products
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">General</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Task</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Open source frappe products</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-x-2">
              <Button variant="ghost">4/6</Button>
              <ButtonGroup destructive>
                <Button variant="ghost">Day</Button>
                <Button variant="ghost" iconOnly>
                  <ChevronLeft />
                </Button>
                <Button variant="ghost" iconOnly>
                  <ChevronRight />
                </Button>
              </ButtonGroup>
              <Button variant="ghost">
                <Ellipsis />
              </Button>
              <Button>
                <Check />
                Mark complete
              </Button>
            </div>
          </Header>
          <Header>
            <div className="flex items-center gap-x-2">
              <div className="bg-[#0A62BC] size-8 rounded-md flex items-center justify-center">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2957 0.527231L19.5515 9.5341H19.5368C19.6019 9.59747 19.6618 9.66465 19.7163 9.73503L17.8139 12.8H13.4444L10.3103 15.9341C10.2861 15.9573 10.2614 15.9799 10.2362 16.0019L9.57444 16.6636L7.05996 15.0755V14.6473C7.05935 14.6272 7.05904 14.607 7.05904 14.5867V2.88513H6.88329H0V0H8.96293C9.47551 0 9.95881 0.190389 10.2957 0.527231ZM9.95881 4.21785V12.2435L10.8668 11.3355L12.2581 9.92952H15.8316L13.3858 7.54233L9.95881 4.21785ZM0.0146511 9.57798L6.1239e-06 6.72214L2.87049 6.7075L2.88513 9.59262H0.0146511V9.57798Z"
                    fill="white"
                  />
                </svg>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Breadcrumb>
                    <BreadcrumbList size="md">
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          Builder <ChevronDown />
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-64">
                  <DropdownMenuLabel className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-foreground tracking-4 leading-normal">
                      Keith Kennedy
                    </span>
                    <span className="truncate text-xs font-normal text-muted-foreground tracking-4 leading-normal">
                      k.kennedy@coss.com
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BoltIcon />
                      Option 1
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Layers2Icon />
                      Option 2
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BookOpenIcon />
                      Option 3
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <PinIcon />
                      Option 4
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserPenIcon />
                      Option 5
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-x-2">
              <Button variant="ghost">
                <SquarePlay />
                Learning resources
              </Button>
              <Button variant="ghost">
                <Sparkles />
                Templates
              </Button>
              <Button>
                <Plus />
                New Project
              </Button>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                <AvatarFallback>Timeless</AvatarFallback>
              </Avatar>
            </div>
          </Header>
          <Header>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center">
                <div className="bg-[#0A62BC] size-8 rounded-md flex items-center justify-center">
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2957 0.527231L19.5515 9.5341H19.5368C19.6019 9.59747 19.6618 9.66465 19.7163 9.73503L17.8139 12.8H13.4444L10.3103 15.9341C10.2861 15.9573 10.2614 15.9799 10.2362 16.0019L9.57444 16.6636L7.05996 15.0755V14.6473C7.05935 14.6272 7.05904 14.607 7.05904 14.5867V2.88513H6.88329H0V0H8.96293C9.47551 0 9.95881 0.190389 10.2957 0.527231ZM9.95881 4.21785V12.2435L10.8668 11.3355L12.2581 9.92952H15.8316L13.3858 7.54233L9.95881 4.21785ZM0.0146511 9.57798L6.1239e-06 6.72214L2.87049 6.7075L2.88513 9.59262H0.0146511V9.57798Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" iconOnly>
                      Builder <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="max-w-64">
                    <DropdownMenuLabel className="flex min-w-0 flex-col">
                      <span className="truncate text-sm font-medium text-foreground tracking-4 leading-normal">
                        Keith Kennedy
                      </span>
                      <span className="truncate text-xs font-normal text-muted-foreground tracking-4 leading-normal">
                        k.kennedy@coss.com
                      </span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <BoltIcon />
                        Option 1
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Layers2Icon />
                        Option 2
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BookOpenIcon />
                        Option 3
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <PinIcon />
                        Option 4
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <UserPenIcon />
                        Option 5
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOutIcon />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <ButtonGroup destructive>
                <Button variant="ghost" iconOnly>
                  <Square />
                </Button>
                <Button variant="ghost" iconOnly>
                  <Send />
                </Button>
                <Button variant="ghost" iconOnly>
                  <Type />
                </Button>
                <Button variant="ghost" iconOnly>
                  <ImageUp />
                </Button>
                <Button variant="ghost" iconOnly>
                  <Grid3x3 />
                </Button>
              </ButtonGroup>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="leading-tight tracking-4 text-muted-foreground text-base font-normal">
                <span className="text-accent-foreground">My page -</span>{" "}
                pages/my-page-c3c8
              </p>
              <ChevronDown className="size-4" />
            </div>
            <div className="flex items-center gap-x-2">
              <Button variant="ghost" iconOnly>
                <Settings />
              </Button>
              <Button variant="ghost" iconOnly>
                <Play />
              </Button>
              <Button variant="secondary">
                <Forward />
                Share
              </Button>
              <Button>
                <Globe />
                Publish
              </Button>
              <Avatar size="lg">
                <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                <AvatarFallback>Timeless</AvatarFallback>
              </Avatar>
            </div>
          </Header>
        </div>
      </div>
    </div>
  );
};

export default headerDemo;
