"use client";
import React from "react";
import {
  ArchiveRestoreIcon,
  BoltIcon,
  BookOpenIcon,
  Calendar,
  ChevronDownIcon,
  Columns2,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
  List,
  LogOutIcon,
  MapPin,
  MapPinCheck,
  PinIcon,
  Plus,
  PlusIcon,
  Share2Icon,
  TrashIcon,
  UserPenIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommandIcon } from "../../../public/images/svg/commandIcon";
import { AtIcon } from "../../../public/images/svg/atIcon";
import { TableIcon } from "../../../public/images/svg/tableIcon";
import { QuoteIcon } from "../../../public/images/svg/quoteIcon";
import { ImageIcon } from "../../../public/images/svg/imageIcon";
import { CodeIcon } from "../../../public/images/svg/codeIcon";
import { BellIcon } from "../../../public/images/svg/bellIcon";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropdownDemo() {
  const [showNext, setShowNext] = React.useState(true);
  const [showSvelte, setShowSvelte] = React.useState(false);
  const [showRemix, setShowRemix] = React.useState(false);
  const [showAstro, setShowAstro] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState<string>("");
  const [framework, setFramework] = React.useState("nextjs");
  const [emailNotifications, setEmailNotifications] = React.useState(false);
  const [pushNotifications, setPushNotifications] = React.useState(true);
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          DropDown Component
        </h1>
        <div className="flex  items-center mx-auto justify-center gap-[30px] w-full flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-transparent"
              >
                <Avatar size="xl">
                  <AvatarImage
                    src="https://mockmind-api.uifaces.co/content/human/185.jpg"
                    alt="Profile image"
                  />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
                <ChevronDownIcon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-64">
              <DropdownMenuLabel className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium text-foreground">
                  Keith Kennedy
                </span>
                <span className="truncate text-xs font-normal text-muted-foreground">
                  k.kennedy@coss.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BoltIcon className="size-4" />
                  Option 1
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Layers2Icon className="size-4" />
                  Option 2
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpenIcon className="size-4" />
                  Option 3
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PinIcon className="size-4" />
                  Option 4
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPenIcon className="size-4" />
                  Option 5
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="size-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <List className="size-4" /> List view
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Columns2 className="size-4" />
                Kanban view
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="size-4" />
                Calendar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>🔆</span> Product - sales
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>⚓</span>Support
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>📌</span>Board- highest sales
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MapPin className="size-4" /> Board pinned
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Plus className="size-4" />
                New view
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <CommandIcon />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BellIcon />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CommandIcon />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CommandIcon />
                  Keyboard shortcuts
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <CommandIcon />
                  Team
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <CommandIcon />
                    Invite users
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <CommandIcon />
                        Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CommandIcon />
                        Message
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <CommandIcon />
                        More...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <CommandIcon />
                  New Team
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <CommandIcon />
                GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CommandIcon />
                Support
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <CommandIcon />
                API
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <BellIcon />
                Support
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <BellIcon />
                API
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Aaron Menezes
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/185.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Daniel Kapoor
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <CommandIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Rich menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Edit</span>
                  <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Duplicate</span>
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Archive</span>
                  <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Move to project</DropdownMenuItem>
                      <DropdownMenuItem>Move to folder</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Advanced options</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem>Add to favorites</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <span>Delete</span>
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Search Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="" align="start">
              <Input
                size="sm"
                type="Search"
                placeholder="Search"
                className="mb-2"
              />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Avatar size="xs">
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Aaron Menezes
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar size="xs">
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/82.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Vaani Kapoor
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar size="xs">
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/185.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Daniel Kapoor
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar size="xs">
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/186.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Steven James
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar size="xs">
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/187.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Dipen Gala
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                Rich menu with icons
                <ChevronDownIcon size={16} aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PlusIcon size={16} aria-hidden="true" />
                  <span>New</span>
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Framework</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuRadioGroup
                        value={framework}
                        onValueChange={setFramework}
                      >
                        <DropdownMenuRadioItem value="nextjs">
                          Next.js
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="sveltekit" disabled>
                          SvelteKit
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="remix">
                          Remix
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="astro">
                          Astro
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Notifications</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuCheckboxItem
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      >
                        Email
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={pushNotifications}
                        onCheckedChange={setPushNotifications}
                      >
                        Push
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Share2Icon size={16} aria-hidden="true" />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArchiveRestoreIcon size={16} aria-hidden="true" />
                  <span>Archive</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon size={16} aria-hidden="true" />
                <span>Delete</span>
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Icon List</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <AtIcon />
                Mention
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TableIcon />
                Table
              </DropdownMenuItem>
              <DropdownMenuItem>
                <QuoteIcon />
                Quote
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ImageIcon />
                Image
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CodeIcon />
                Code
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Checkbox items</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={showNext}
                onCheckedChange={setShowNext}
              >
                Next.js
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showSvelte}
                onCheckedChange={setShowSvelte}
              >
                SvelteKit
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showRemix}
                onCheckedChange={setShowRemix}
              >
                Remix
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem
                checked={showAstro}
                onCheckedChange={setShowAstro}
              >
                Astro
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="destructive">Select Option</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={selectedValue}
                onValueChange={setSelectedValue}
              >
                <DropdownMenuRadioItem value="option1">
                  Option 1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="option2">
                  Option 2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="option3">
                  Option 3
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Labeled grouped items
                <ChevronDownIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Label</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <CopyPlusIcon className="size-4" />
                  Copy
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BoltIcon className="size-4" />
                  Edit
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Label</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Layers2Icon className="size-4" />
                  Group
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FilesIcon className="size-4" />
                  Clone
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <TrashIcon size={16} aria-hidden="true" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default DropdownDemo;
