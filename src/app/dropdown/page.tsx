"use client";
import React from "react";
import {
  ArchiveRestoreIcon,
  ChevronDownIcon,
  PlusIcon,
  Share2Icon,
  TrashIcon,
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
        <div className="flex  items-start mx-auto justify-center gap-[30px] w-full flex-wrap">
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
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
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
              <DropdownMenuItem variant="destructive" disabled>
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
        </div>
      </div>
    </div>
  );
}

export default DropdownDemo;
