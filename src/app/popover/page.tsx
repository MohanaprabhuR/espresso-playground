import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowDownToLine,
  Bold,
  Code,
  CornerUpRight,
  Forward,
  Grid2x2Check,
  Images,
  Italic,
  Link2,
  List,
  ListOrdered,
  Strikethrough,
  TextQuote,
  Trash,
  Underline,
  AlignLeft,
  X,
  PaintBucket,
  Ellipsis,
  User,
  Check,
  SquareActivity,
  MessageCircle,
  TextCursor,
  Pen,
  MousePointer2,
  Scan,
  Square,
} from "lucide-react";
import { Divider } from "@/components/ui/divider";
import { Checkbox } from "@/components/ui/checkbox";

const popOverDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Popover Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] w-full max-w-[100px]">
          <Popover>
            <PopoverTrigger>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="gap-2">
              <Button variant="ghost">2 selected</Button>

              <Divider orientation="vertical" />
              <Button variant="ghost">
                <ArrowDownToLine className="size-4" />
                Download
              </Button>
              <Button variant="ghost">
                <Forward className="size-4" />
                Move
              </Button>
              <Button variant="ghost">
                <CornerUpRight className="size-4" />
                Share
              </Button>
              <Button variant="destructive">
                <Trash className="size-4" />
                Delete
              </Button>
              <Button variant="ghost">
                <X className="size-4" />
              </Button>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button variant="outline">Open</Button>
            </PopoverTrigger>
            <PopoverContent>
              <Button variant="ghost">
                <Bold className="size-4" />
              </Button>
              <Button variant="ghost">
                <Italic className="size-4" />
              </Button>
              <Button variant="ghost">
                <Strikethrough className="size-4" />
              </Button>
              <Button variant="ghost">
                <Underline className="size-4" />
              </Button>
              <Divider orientation="vertical" className="px-1" />
              <Button variant="ghost">
                <TextQuote className="size-4" />
              </Button>
              <Button variant="ghost">
                <Code className="size-4" />
              </Button>
              <Divider orientation="vertical" className="px-1" />
              <Button variant="ghost">
                <Link2 className="size-4" />
              </Button>
              <Button variant="ghost">
                <Images className="size-4" />
              </Button>
              <Button variant="ghost">
                <Grid2x2Check className="size-4" />
              </Button>
              <Divider orientation="vertical" className="px-1" />
              <Button variant="ghost">
                <ListOrdered className="size-4" />
              </Button>
              <Button variant="ghost">
                <List className="size-4" />
              </Button>
              <Button variant="ghost">
                <AlignLeft className="size-4" />
              </Button>
              <Divider orientation="vertical" className="px-1" />
              <Button variant="ghost">
                Colour
                <PaintBucket className="size-4" />
              </Button>
              <Divider orientation="vertical" className="px-1" />
              <Button variant="ghost">
                <Ellipsis className="size-4" />
              </Button>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="gap-x-3.5">
              <Checkbox label="5 tasks selected" size="sm" />
              <div className="flex gap-2">
                <Divider orientation="vertical" />
                <Button variant="ghost">
                  <User className="size-4" />
                  Assign
                </Button>
                <Button variant="ghost">
                  <Check className="size-4" />
                  Select all entries
                </Button>
                <Button variant="ghost">
                  <Forward className="size-4" />
                  Move
                </Button>
                <Button variant="destructive">
                  <Trash className="size-4" />
                  Delete
                </Button>
                <Button variant="ghost">
                  <X className="size-4" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="gap-x-2">
              <Button variant="ghost">
                <MousePointer2 className="size-4" />
              </Button>
              <Button variant="ghost">
                <Scan className="size-4" />
              </Button>
              <Button variant="ghost">
                <Square className="size-4" />
              </Button>

              <Button variant="ghost">
                <Pen className="size-4" />
              </Button>
              <Button variant="ghost">
                <TextCursor className="size-4" />
              </Button>
              <Button variant="ghost">
                <MessageCircle className="size-4" />
              </Button>
              <Button variant="ghost">
                <SquareActivity className="size-4" />
              </Button>
              <Divider orientation="vertical" />
              <Button variant="ghost">
                <Code className="size-4" />
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default popOverDemo;
