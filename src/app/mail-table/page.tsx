"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Check, FileArchive, FileText, ImageIcon, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Attachment {
  name: string;
  type: "zip" | "image" | "pdf" | "other";
}
interface MailItem {
  name: string;
  avatar: string[];
  description: string;
  attachments: Attachment[];
  date: string;
}

const data: MailItem[] = [
  {
    name: "Michael Nguyen",
    avatar: ["https://mockmind-api.uifaces.co/content/human/80.jpg"],
    description:
      "<strong>Don't forget to complete the user testing feedback form.</strong>",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Sophie Rodriguez, Noah Brown",
    avatar: [
      "https://mockmind-api.uifaces.co/content/human/81.jpg",
      "https://mockmind-api.uifaces.co/content/human/82.jpg",
    ],
    description:
      "<strong>Reminder</strong> Complete peer code review for sprint deliverables.",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Upstox daily",
    avatar: ["https://mockmind-api.uifaces.co/content/human/83.jpg"],
    description:
      "<strong>Asian Paints Q3 profit falls, Titan Q3 total income rises & more</strong> NIFTY sectoral indices, Oil and Gas (+2.70%) and",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Behance",
    avatar: ["https://mockmind-api.uifaces.co/content/human/84.jpg"],
    description:
      "<strong>New Inspiration For You: Feb 5, 2025</strong> New projects from people you follow like TACTYC Studio, Danny Ivan, and more ",
    date: "Apr 09, 2024",
    attachments: [],
  },
  {
    name: "Olivia Garcia",
    avatar: ["https://mockmind-api.uifaces.co/content/human/85.jpg"],
    description:
      "<strong>Upcoming holiday:</strong> Office closed on Labor Day.",
    date: "Apr 09, 2024",
    attachments: [],
  },
  {
    name: "Coursera",
    avatar: ["https://mockmind-api.uifaces.co/content/human/86.jpg"],
    description:
      "<strong>We combed our catalog and found courses that we think match your interests.</strong> Browse our recommendations below, and start learning something new today!",
    date: "Apr 08, 2024",
    attachments: [],
  },
  {
    name: "ET money",
    avatar: ["https://mockmind-api.uifaces.co/content/human/87.jpg"],
    description:
      "<strong>Hey, it's reserved only for you</strong> Your family's dreams are unique & deserve a plan that's as special as the aspiration you have for their future.",
    date: "Apr 08, 2024",
    attachments: [],
  },
  {
    name: "Olivia Garcia",
    avatar: ["https://mockmind-api.uifaces.co/content/human/89.jpg"],
    description:
      "<strong>The tool behind $5k+ app design wins</strong> Quick question: Would you like to peek behind the curtain of successful app designs that consistently win $5k+ projects?",
    date: "Apr 08, 2024",
    attachments: [
      { name: "Screenshots.zip", type: "zip" },
      { name: "image.jpg", type: "image" },
      { name: "Invoice.pdf", type: "pdf" },
    ],
  },
  {
    name: "Ava Rodriguez",
    avatar: ["https://mockmind-api.uifaces.co/content/human/90.jpg"],
    description:
      "<strong>Project requirements</strong> I just open a new  Restaurant which i run now and i need a website for my business to grow, So i need you to go through this",
    date: "Apr 07, 2024",
    attachments: [],
  },
  {
    name: "Sophie Rodriguez, Noah Brown",
    avatar: [
      "https://mockmind-api.uifaces.co/content/human/91.jpg",
      "https://mockmind-api.uifaces.co/content/human/92.jpg",
    ],
    description:
      "<strong>Reminder:</strong> Complete peer code review for sprint deliverables.",
    date: "Apr 06, 2024",
    attachments: [],
  },
  {
    name: "Olivia Garcia",
    avatar: ["https://mockmind-api.uifaces.co/content/human/93.jpg"],
    description:
      "<strong>The tool behind $5k+ app design wins Quick question:</strong> Would you like to peek behind the curtain of successful app designs that consistently win $5k+ projects?",
    date: "Apr 06, 2024",
    attachments: [],
  },
  {
    name: "Mason Smith",
    avatar: ["https://mockmind-api.uifaces.co/content/human/94.jpg"],
    description:
      "<strong>New Inspiration For You: Feb 5, 2025</strong> New projects from people you follow like TACTYC Studio, Danny Ivan, and more ",
    date: "Apr 06, 2024",
    attachments: [],
  },
  {
    name: "Evelyn Brown",
    avatar: ["https://mockmind-api.uifaces.co/content/human/95.jpg"],
    description:
      "<strong>We combed our catalog and found courses that we think match your interests.</strong> Browse our recommendations below, and start learning something new today!",
    date: "Apr 05, 2024",
    attachments: [],
  },
  {
    name: "Behance",
    avatar: ["https://mockmind-api.uifaces.co/content/human/96.jpg"],
    description:
      "<strong>New Inspiration For You: Feb 5, 2025</strong> New projects from people you follow like TACTYC Studio, Danny Ivan, and more ",
    date: "Apr 04, 2024",
    attachments: [],
  },
  {
    name: "Coursera",
    avatar: ["https://mockmind-api.uifaces.co/content/human/97.jpg"],
    description:
      "<strong>We combed our catalog and found courses that we think match your interests.</strong> Browse our recommendations below, and start learning something new today!",
    date: "Apr 08, 2024",
    attachments: [],
  },
  {
    name: "Scarlett Taylor",
    avatar: ["https://mockmind-api.uifaces.co/content/human/98.jpg"],
    description:
      "<strong>Hey, it's reserved only for you</strong> Your family's dreams are unique & deserve a plan that's as special as the aspiration you have for their future.",
    date: "Apr 04, 2024",
    attachments: [],
  },
  {
    name: "Liam Martinez",
    avatar: ["https://mockmind-api.uifaces.co/content/human/99.jpg"],
    description:
      "<strong>Exciting news for</strong> you Exclusive early access to our upcoming product launch! Get a sneak peek at what's in store and be the first to try it out.",
    date: "Apr 04, 2024",
    attachments: [],
  },
  {
    name: "Nora Clark",
    avatar: ["https://mockmind-api.uifaces.co/content/human/100.jpg"],
    description:
      "<strong>Your recent activity Your recent designs</strong> have been getting a lot of attention. Check out the feedback and reactions from the community.",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Upstox daily",
    avatar: ["https://mockmind-api.uifaces.co/content/human/101.jpg"],
    description:
      "<strong>Asian Paints Q3 profit falls, Titan Q3 total income rises & more</strong> NIFTY sectoral indices, Oil and Gas (+2.70%) and",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Olivia Garcia",
    avatar: ["https://mockmind-api.uifaces.co/content/human/102.jpg"],
    description:
      "<strong>Join our design challenge Participate in our latest design challenge and showcase</strong> your skills to the world. Win exciting prizes and recognition!",
    date: "Apr 12, 2024",
    attachments: [],
  },
  {
    name: "Behance",
    avatar: ["https://mockmind-api.uifaces.co/content/human/103.jpg"],
    description:
      "<strong>New Inspiration For You: Feb 5, 2025</strong> New projects from people you follow like TACTYC Studio, Danny Ivan, and more",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Sophia Evans",
    avatar: ["https://mockmind-api.uifaces.co/content/human/104.jpg"],
    description:
      "<strong>Community spotlight Your work has been featured in our community spotlight!</strong> Explore how your designs are inspiring others and making an impact.",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Jack White",
    avatar: ["https://mockmind-api.uifaces.co/content/human/105.jpg"],
    description:
      "<strong>Vendor meeting rescheduled to the afternoon.</strong>",
    date: "Apr 20, 2024",
    attachments: [],
  },
  {
    name: "Upstox daily",
    avatar: ["https://mockmind-api.uifaces.co/content/human/106.jpg"],
    description:
      "<strong>Asian Paints Q3 profit falls, Titan Q3 total income rises & more </strong>NIFTY sectoral indices, Oil and Gas (+2.70%) and",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Coursera",
    avatar: ["https://mockmind-api.uifaces.co/content/human/107.jpg"],
    description:
      "<strong>We combed our catalog and found courses that we think match your interests.</strong> Browse our recommendations below, and start learning something new today!",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "Upstox daily",
    avatar: ["https://mockmind-api.uifaces.co/content/human/108.jpg"],
    description:
      "<strong>Asian Paints Q3 profit falls, Titan Q3 total income rises & more</strong> NIFTY sectoral indices, Oil and Gas (+2.70%) and ",
    date: "Apr 10, 2024",
    attachments: [],
  },
  {
    name: "David Lewis",
    avatar: ["https://mockmind-api.uifaces.co/content/human/109.jpg"],
    description:
      "<strong>Department town hall meeting on Thursday morning.</strong>",
    date: "Apr 22, 2024",
    attachments: [],
  },
];

const AttachmentIcon = ({ type }: { type: Attachment["type"] }) => {
  switch (type) {
    case "zip":
      return <FileArchive className="size-4" />;
    case "image":
      return <ImageIcon className="size-4" />;
    case "pdf":
      return <FileText className="size-4" />;
    default:
      return <FileText className="size-4" />;
  }
};

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const columns: ColumnDef<MailItem>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center gap-3">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />

        <Button variant="ghost" iconOnly>
          <ChevronDown className="size-4" />
        </Button>

        <Button variant="outline">
          <Check className="size-4" />
          Has attachment
        </Button>
        <Button variant="outline">
          <Check className="size-4" />
          Image
        </Button>
        <Button variant="outline">PDF</Button>
        <Button variant="outline">
          From
          <ChevronDown className="size-4" />
        </Button>
        <Button variant="outline">
          Any time
          <ChevronDown className="size-4" />
        </Button>
        <Button variant="outline">
          To
          <ChevronDown className="size-4" />
        </Button>
        <Button variant="outline">Is unread</Button>
        <Button variant="ghost">Advanced search</Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex gap-x-3">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        <figure>
          <Star className="size-4" />
        </figure>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    size: 50,
  },
  {
    accessorKey: "name",
    header: "",
    cell: ({ row }) => {
      const avatars = row.original.avatar;

      return (
        <div className="flex items-center gap-3 min-w-0">
          {avatars.length > 1 ? (
            <AvatarGroup>
              {avatars.map((img, index) => (
                <Avatar key={index}>
                  <AvatarImage src={img} />
                  <AvatarFallback>
                    {row.original.name.split(",")[index]?.trim()?.[0]}
                  </AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          ) : (
            <Avatar className="shrink-0">
              <AvatarImage src={avatars[0]} />
              <AvatarFallback>{row.original.name[0]}</AvatarFallback>
            </Avatar>
          )}

          <span className="truncate w-full">{row.original.name}</span>
        </div>
      );
    },
    size: 214,
  },
  {
    accessorKey: "description",
    header: "",
    cell: ({ row }) => (
      <div className="gap-y-2.5 flex flex-col min-w-0">
        <span
          className="truncate w-full [&_strong]:text-foreground [&_strong]:font-medium"
          dangerouslySetInnerHTML={{ __html: row.original.description }}
        />
        {row.original.attachments && row.original.attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 pb-px pl-px">
            {row.original.attachments.map((attachment, index) => (
              <Badge
                key={`${row.id}-attachment-${index}`}
                variant="outline"
                className="text-xs"
              >
                <AttachmentIcon type={attachment.type} />
                <span>{attachment.name}</span>
              </Badge>
            ))}
          </div>
        )}
      </div>
    ),
    size: 754,
  },
  {
    accessorKey: "date",
    header: () => (
      <Label size="sm" className="text-right w-full block text-xs">
        1-50 of 2,000
      </Label>
    ),
    cell: ({ row }) => (
      <span className="truncate text-right w-full">{row.original.date}</span>
    ),
    size: 120,
  },
];

const MailTableDemo = () => {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="pt-10">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-tight leading-normal">
        Mail Table
      </h1>
      <div className="flex flex-col mx-auto gap-y-4.5 w-full  items-center justify-center">
        <div className="flex justify-between items-center w-full"></div>
        <Table className="table-fixed w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="!border-0">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="relative last:[&>.cursor-col-resize]:opacity-0 group"
                      {...{
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          onKeyDown={(e) => {
                            if (
                              header.column.getCanSort() &&
                              (e.key === "Enter" || e.key === " ")
                            ) {
                              e.preventDefault();
                              header.column.getToggleSortingHandler()?.(e);
                            }
                          }}
                          tabIndex={header.column.getCanSort() ? 0 : undefined}
                        >
                          <span className="truncate">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="overflow-hidden align-top"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center "
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MailTableDemo;
