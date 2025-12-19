"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  AlertTriangleIcon,
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarPlusIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CopyIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  TagIcon,
  Trash2Icon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ButtonGroupDemo = () => {
  const [label, setLabel] = React.useState("personal");
  return (
    <div>
      <div className="pt-10 lg:text-center">
        <h1 className="text-xl text-primary font-bold pb-10 lg:text-center tracking-4 leading-normal">
          ButtonGroup Component
        </h1>

        <div className="flex flex-col  gap-10 lg:items-center">
          <div className="flex flex-col gap-4">
            <ButtonGroup destructive>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>

            <ButtonGroup destructive>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
            </ButtonGroup>
            <ButtonGroup destructive>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonGroup destructive size="md">
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
            </ButtonGroup>
            <ButtonGroup destructive size="md">
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup destructive size="md">
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup destructive size="md">
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonGroup destructive size="lg">
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
            </ButtonGroup>
            <ButtonGroup destructive size="lg">
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup destructive size="lg">
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup destructive size="lg">
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonGroup>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary">Button</Button>
            </ButtonGroup>
            <ButtonGroup variant="outline">
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="outline">Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost">Button</Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonGroup>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
              <Button size="md">Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
              <Button size="md" variant="secondary">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="outline">
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
              <Button size="md" variant="outline">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
              <Button size="md" variant="ghost">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonGroup>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="outline">
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-4 ">
            <ButtonGroup
              wrapLayout={true}
              className="max-w-[400px] justify-center"
              destructive
              size="lg"
            >
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="lg">Button</Button>
            </ButtonGroup>
            <ButtonGroup
              wrapLayout={true}
              className="max-w-[400px] justify-center"
              destructive
              size="lg"
            >
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
              <Button size="lg" variant="secondary">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup
              variant="outline"
              wrapLayout={true}
              className="max-w-[400px] justify-center"
              destructive
              size="lg"
            >
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
              <Button size="lg" variant="outline">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup
              wrapLayout={true}
              className="max-w-[400px] justify-center"
              destructive
              size="lg"
            >
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
              <Button size="lg" variant="ghost">
                Button
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-[30px_0]">
            <div>
              <ButtonGroup destructive>
                <ButtonGroup className="hidden sm:flex" variant="outline">
                  <Button variant="outline" aria-label="Go Back">
                    <ArrowLeftIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup variant="outline">
                  <Button variant="outline">Archive</Button>
                  <Button variant="outline">Report</Button>
                </ButtonGroup>
                <ButtonGroup variant="outline">
                  <Button variant="outline">Snooze</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" aria-label="More Options">
                        <MoreHorizontalIcon className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <MailCheckIcon className="size-4" />
                          Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ArchiveIcon className="size-4" />
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <ClockIcon className="size-4" />
                          Snooze
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CalendarPlusIcon className="size-4" />
                          Add to Calendar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ListFilterPlusIcon className="size-4" />
                          Add to List
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <TagIcon className="size-4" />
                            Label As...
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup
                              value={label}
                              onValueChange={setLabel}
                            >
                              <DropdownMenuRadioItem value="personal">
                                Personal
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="work">
                                Work
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="other">
                                Other
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                      <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                          <Trash2Icon className="size-4" />
                          Trash
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ButtonGroup>
              </ButtonGroup>
            </div>
            <div className="flex gap-10">
              <ButtonGroup
                destructive
                orientation="vertical"
                aria-label="Media controls"
                className="h-fit"
              >
                <Button variant="outline" size="md">
                  <PlusIcon className="size-4" />
                </Button>
                <Button variant="outline" size="md">
                  <MinusIcon className="size-4" />
                </Button>
              </ButtonGroup>

              <ButtonGroup
                destructive
                aria-label="Media controls"
                className="h-fit"
              >
                <Button variant="outline" size="md">
                  <PlusIcon className="size-4" />
                </Button>
                <Button variant="outline" size="md">
                  <MinusIcon className="size-4" />
                </Button>
              </ButtonGroup>
              <ButtonGroup
                variant="outline"
                aria-label="Media controls"
                className="h-fit"
              >
                <Button variant="outline" size="md">
                  <PlusIcon className="size-4" />
                </Button>
                <Button variant="outline" size="md">
                  <MinusIcon className="size-4" />
                </Button>
              </ButtonGroup>
              <ButtonGroup
                variant="outline"
                aria-label="Media controls"
                className="h-fit"
                orientation="vertical"
              >
                <Button variant="outline" size="md">
                  <PlusIcon className="size-4" />
                </Button>
                <Button variant="outline" size="md">
                  <MinusIcon className="size-4" />
                </Button>
              </ButtonGroup>
            </div>
            <div className="flex gap-20">
              <div className="flex flex-col gap-10">
                <ButtonGroup>
                  <Button size="sm">Small</Button>
                  <Button size="sm">Button</Button>
                  <Button size="sm">Group</Button>
                  <Button size="sm">
                    <PlusIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="secondary" size="md">
                    Default
                  </Button>
                  <Button variant="secondary" size="md">
                    Button
                  </Button>
                  <Button variant="secondary" size="md">
                    Group
                  </Button>
                  <Button variant="secondary" size="md">
                    <PlusIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup variant="outline">
                  <Button variant="outline" size="lg">
                    Large
                  </Button>
                  <Button variant="outline" size="lg">
                    Button
                  </Button>
                  <Button variant="outline" size="lg">
                    Group
                  </Button>
                  <Button variant="outline" size="lg">
                    <PlusIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="ghost" size="xl">
                    Large
                  </Button>

                  <Button variant="ghost" size="xl">
                    Button
                  </Button>

                  <Button variant="ghost" size="xl">
                    Group
                  </Button>

                  <Button variant="ghost" size="xl">
                    <PlusIcon className="size-5" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button variant="destructive" size="2xl">
                    Large
                  </Button>
                  <Button variant="destructive" size="2xl">
                    Button
                  </Button>
                  <Button variant="destructive" size="2xl">
                    Group
                  </Button>
                  <Button variant="destructive" size="2xl">
                    <PlusIcon className="size-5" />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="flex flex-col gap-10">
                <ButtonGroup destructive>
                  <Button size="sm">Small</Button>
                  <Button size="sm">Button</Button>
                  <Button size="sm">Group</Button>
                  <Button size="sm">
                    <PlusIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup destructive>
                  <Button variant="secondary" size="md">
                    Default
                  </Button>
                  <Button variant="secondary" size="md">
                    Button
                  </Button>
                  <Button variant="secondary" size="md">
                    Group
                  </Button>
                  <Button variant="secondary" size="md">
                    <PlusIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup destructive size="lg">
                  <Button variant="outline" size="lg">
                    Large
                  </Button>
                  <Button variant="outline" size="lg">
                    Button
                  </Button>
                  <Button variant="outline" size="lg">
                    Group
                  </Button>
                  <Button variant="outline" size="lg">
                    <PlusIcon className="size-4" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup destructive size="lg">
                  <Button variant="ghost" size="xl">
                    Large
                  </Button>
                  <Button variant="ghost" size="xl">
                    Button
                  </Button>
                  <Button variant="ghost" size="xl">
                    Group
                  </Button>
                  <Button variant="ghost" size="xl">
                    <PlusIcon className="size-5" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup destructive size="lg">
                  <Button variant="destructive" size="2xl">
                    Large
                  </Button>
                  <Button variant="destructive" size="2xl">
                    Button
                  </Button>
                  <Button variant="destructive" size="2xl">
                    Group
                  </Button>
                  <Button variant="destructive" size="2xl">
                    <PlusIcon className="size-5" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="flex justify-between">
              <ButtonGroup destructive>
                <ButtonGroup variant="outline">
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                </ButtonGroup>
                <ButtonGroup variant="outline">
                  <Button variant="outline" aria-label="Previous">
                    <ArrowLeftIcon className="size-4" />
                  </Button>
                  <Button variant="outline" aria-label="Next">
                    <ArrowRightIcon className="size-4" />
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
              <ButtonGroup destructive>
                <ButtonGroup destructive>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
                  </Button>
                </ButtonGroup>
                <ButtonGroup destructive>
                  <Button variant="outline" aria-label="Previous">
                    <ArrowLeftIcon className="size-4" />
                  </Button>
                  <Button variant="outline" aria-label="Next">
                    <ArrowRightIcon className="size-4" />
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
            </div>
            <ButtonGroup>
              <Button variant="secondary" size="sm">
                Copy
              </Button>
              <ButtonGroupSeparator />
              <Button variant="secondary" size="sm">
                Paste
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="secondary">Button</Button>
              <ButtonGroupSeparator />
              <Button variant="secondary">
                <PlusIcon className="size-4" />
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="outline">
              <Input
                placeholder="Search..."
                className="rounded-r-none"
                variant="outline"
              />
              <Button variant="outline" aria-label="Search">
                <SearchIcon className="size-4" />
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="outline">
              <Button variant="outline">Follow</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="!pl-2">
                    <ChevronDownIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <VolumeOffIcon className="size-4" />
                      Mute Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckIcon className="size-4" />
                      Mark as Read
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <AlertTriangleIcon className="size-4" />
                      Report Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <UserRoundXIcon className="size-4" />
                      Block User
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ShareIcon className="size-4" />
                      Share Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CopyIcon className="size-4" />
                      Copy Conversation
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                      <TrashIcon className="size-4" />
                      Delete Conversation
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroupDemo;
