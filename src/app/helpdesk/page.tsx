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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronDownIcon,
  ChevronLeft,
  ChevronRight,
  ChevronUpIcon,
  Columns2,
  ListFilter,
  RefreshCcw,
  SignalMedium,
  Sparkles,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Ticket {
  id: string;
  ticket: string;
  status: string;
  status_image: string;
  firstDue: string;
  resolution: string;
  priority: string;
  type: string;
  assignee: string;
  team: string;
  customer: string;
  rating: number;
  avatar?: string;
  assignedAvatar?: string;
  organisation?: string;
  organisation_image?: string;
  email?: string;
  phone?: string;
  last_modified?: string;
  status_info?: string;
}

const data: Ticket[] = [
  {
    id: "#06070",
    ticket: "<strong>Update website content for new products</strong>",
    status: "New",
    status_image: "/images/svg/new.svg",
    firstDue: "22h 30m",
    resolution: "3d 2h",
    priority: "Medium",
    type: "Incident",
    assignee: "Jay",
    team: "Marketing",
    customer: "Namma yathri",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
  {
    id: "#06069",
    ticket: "Prepare presentation for client pitch",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Medium",
    type: "Incident",
    assignee: "Sandeep",
    team: "Creative",
    customer: "Timeless",
    rating: 5,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/81.jpg",
  },

  {
    id: "06065",
    ticket: "Analyze competitors' marketing strategies",
    status: "New",
    status_image: "/images/svg/new.svg",
    firstDue: "2h 30m",
    resolution: "3d 2h",
    priority: "Low",
    type: "Incident",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "Agency",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/82.jpg",
  },

  {
    id: "06063",
    ticket: "Create marketing materials for the campaign",
    status: "New",
    status_image: "/images/svg/new.svg",
    firstDue: "0h 35m",
    resolution: "2d 2h",
    priority: "High",
    type: "Incident",
    assignee: "Jay",
    team: "Marketing",
    customer: "CRED",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/83.jpg",
  },
  {
    id: "06059",
    ticket: "Create marketing materials for the campaign",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Low",
    type: "Bug",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "TCS",
    rating: 4,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/84.jpg",
  },
  {
    id: "06058",
    ticket: "Develop social media strategy for next quarter",
    status: "Awaiting approval",
    status_image: "/images/svg/waiting.svg",
    firstDue: "Failed",
    resolution: "3d 2h",
    priority: "High",
    type: "Bug",
    assignee: "Gowtham",
    team: "Marketing",
    customer: "Pentagram",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/85.jpg",
  },
  {
    id: "06056",
    ticket: "Develop social media strategy for next quarter",
    status: "Awaiting approval",
    status_image: "/images/svg/waiting.svg",
    firstDue: "Failed",
    resolution: "3d 2h",
    priority: "Medium",
    type: "Incident",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "Crew",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/86.jpg",
  },
  {
    id: "06066",
    ticket: "Conduct user feedback sessions for product",
    status: "Quotation",
    status_image: "/images/svg/quotation.svg",
    firstDue: "Failed",
    resolution: "3d 2h",
    priority: "Medium",
    type: "Incident",
    assignee: "Jay",
    team: "Product",
    customer: "InsightsCorp",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/87.jpg",
  },
  {
    id: "06055",
    ticket: "Optimise website SEO for better visibility",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Low",
    type: "Incident",
    assignee: "Gowtham",
    team: "Marketing",
    customer: "WebSolutions",
    rating: 4,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/88.jpg",
  },
  {
    id: "06054",
    ticket: "Update website content for new products",
    status: "Closed",
    status_image: "/images/svg/closed.svg",
    firstDue: "Failed",
    resolution: "3d 2h",
    priority: "Low",
    type: "Bug",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "Namma yathri",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/89.jpg",
  },
  {
    id: "06053",
    ticket: "Prepare presentation for client pitch",
    status: "Awaiting Customer",
    status_image: "/images/svg/waiting-closed.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Medium",
    type: "Bug",
    assignee: "Gowtham",
    team: "Creative",
    customer: "Timeless",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
  },
  {
    id: "06052",
    ticket: "Analyze competitors' marketing strategies",
    status: "New",
    status_image: "/images/svg/new.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Medium",
    type: "Incident",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "Agency",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/91.jpg",
  },
  {
    id: "06051",
    ticket: "Create marketing materials for the campaign",
    status: "Replied",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Medium",
    type: "Incident",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "CRED",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/92.jpg",
  },
  {
    id: "06050",
    ticket: "Launch email campaign targeting new subscribers",
    status: "New",
    status_image: "/images/svg/new.svg",
    firstDue: "1h 45m",
    resolution: "3d 2h",
    priority: "High",
    type: "Incident",
    assignee: "Jay",
    team: "Creative",
    customer: "Timeless",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/93.jpg",
  },
  {
    id: "06049",
    ticket: "Conduct A/B testing for website landing page",
    status: "In Progress",
    status_image: "/images/svg/new.svg",
    firstDue: "Fulfilled",
    resolution: "1d 3h",
    priority: "Medium",
    type: "Bug",
    assignee: "Gowtham",
    team: "Product",
    customer: "WebSolutions",
    rating: 0,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/94.jpg",
  },
  {
    id: "06050",
    ticket: "Revamp mobile app interface for improved",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "High",
    type: "Unspecified",
    assignee: "Aisha",
    team: "Design",
    customer: "AppInnovations",
    rating: 4,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/95.jpg",
  },
  {
    id: "06051",
    ticket: "Integrate payment gateway for e-commerce",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "High",
    type: "Bug",
    assignee: "Rajesh",
    team: "Development",
    customer: "ShopTech",
    rating: 3,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/96.jpg",
  },
  {
    id: "06052",
    ticket: "Conduct user research for new product features",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Medium",
    type: "Incident",
    assignee: "Jessica",
    team: "UX",
    customer: "InnovativeIdeas",
    rating: 4,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
  },
  {
    id: "06053",
    ticket: "Update content strategy for social media channels",
    status: "Resolved",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Fulfilled",
    resolution: "Fulfilled",
    priority: "Low",
    type: "Bug",
    assignee: "Sandeep",
    team: "Marketing",
    customer: "SocialMediaMasters",
    rating: 5,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
  },
  {
    id: "06054",
    ticket: "Optimize website load time and performance",
    status: "Not Started",
    status_image: "/images/svg/resolved.svg",
    firstDue: "Pending",
    resolution: "4d 8h",
    priority: "High",
    type: "Improvement",
    assignee: "Lina",
    team: "Engineering",
    customer: "TechSolutions",
    rating: 5,
    assignedAvatar: "https://mockmind-api.uifaces.co/content/human/99.jpg",
  },
];

export const columns: ColumnDef<Ticket>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    size: 35,
  },
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.id}</span>
      </>
    ),
    size: 100,
  },
  {
    accessorKey: "ticket",
    header: "Ticket",
    cell: ({ row }) => (
      <div className="min-w-0 flex flex-col">
        <span
          className="truncate w-full text-secondary-foreground [&_strong]:text-accent-foreground [&_strong]:font-medium"
          dangerouslySetInnerHTML={{ __html: row.original.ticket }}
        />
      </div>
    ),
    size: 316,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <>
        <Avatar>
          <AvatarImage src={row.original.status_image}></AvatarImage>
          <AvatarFallback>{row.original.status}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.status}</span>
      </>
    ),
    size: 120,
  },
  {
    accessorKey: "firstDue",
    header: "First due",
    cell: ({ row }) => (
      <>
        <Badge variant="secondary">{row.original.firstDue}</Badge>
      </>
    ),
    size: 88,
  },
  {
    accessorKey: "resolution",
    header: "Resolution",
    cell: ({ row }) => (
      <>
        <Badge variant="secondary">{row.original.firstDue}</Badge>
      </>
    ),
    size: 88,
  },
  {
    accessorKey: "Priority",
    header: "Priority",
    cell: ({ row }) => (
      <>
        <figure>
          <SignalMedium className="size-4" />
        </figure>
        <span className="truncate">{row.original.priority}</span>
      </>
    ),
    size: 104,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.type}</span>
      </>
    ),
    size: 88,
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: ({ row }) => (
      <>
        <Avatar>
          <AvatarImage src={row.original.assignedAvatar}></AvatarImage>
          <AvatarFallback>{row.original.assignee}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.assignee}</span>
      </>
    ),
    size: 120,
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.team}</span>
      </>
    ),
    size: 104,
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.customer}</span>
      </>
    ),
    size: 120,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <ButtonGroup destructive>
          <Button variant="ghost" iconOnly>
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
        </ButtonGroup>
      );
    },
    cell: ({ row }) => {
      return (
        <ButtonGroup destructive>
          <Button variant="ghost" iconOnly>
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
          <Button variant="ghost" iconOnly className="-ml-2.5">
            <Star className="size-4" />
          </Button>
        </ButtonGroup>
      );
    },
    size: 200,
  },
];

const helpDeskTabelDemo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div className="flex flex-col mx-auto gap-y-4.5 w-full  h-[calc(100vh-60px)]  relative pb-11 pt-2.5">
      <div className="flex justify-between items-center w-full px-5">
        <Input
          className="max-w-[280px]"
          placeholder="Try “first due” or ticket type"
          prefix={<Sparkles />}
        />
        <ButtonGroup destructive>
          <Button variant="secondary" iconOnly>
            <RefreshCcw className="size-4" />
          </Button>
          <Button variant="secondary">
            <ListFilter className="size-4" /> Filter
          </Button>
          <Button variant="secondary">
            Last modified <ChevronDown className="size-4" />
          </Button>
          <Button variant="secondary">
            <Columns2 className="size-4" /> Column
          </Button>
        </ButtonGroup>
      </div>
      <div className="px-5">
        <Table
          className="table-fixed w-full min-w-0"
          style={{
            width: table.getCenterTotalSize(),
          }}
        >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="relative  group last:text-right [&:last-child>*]:justify-end"
                      aria-sort={
                        header.column.getIsSorted() === "asc"
                          ? "ascending"
                          : header.column.getIsSorted() === "desc"
                            ? "descending"
                            : "none"
                      }
                      {...{
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={cn(
                            header.column.getCanSort() &&
                              "flex h-full cursor-pointer items-center justify-between gap-2 select-none"
                          )}
                          onClick={header.column.getToggleSortingHandler()}
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
                          {{
                            asc: (
                              <ChevronUpIcon
                                className="shrink-0 opacity-60"
                                size={16}
                                aria-hidden="true"
                              />
                            ),
                            desc: (
                              <ChevronDownIcon
                                className="shrink-0 opacity-60"
                                size={16}
                                aria-hidden="true"
                              />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                      {header.column.getCanResize() && (
                        <div
                          {...{
                            onDoubleClick: () => header.column.resetSize(),
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                            className:
                              "absolute top-1/2 -translate-y-2/4  group-hover:before:opacity-100 h-6  w-4 cursor-col-resize user-select-none touch-none -right-1.5 z-10 flex justify-center before:absolute  before:w-0.5 before:rounded-sm before:opacity-0 before:inset-y-0 before:bg-border before:translate-x-px",
                          }}
                        />
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
                      className="truncate last:text-right [&:last-child>*]:justify-end"
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
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="absolute bottom-0 border-t px-7 py-1.5 flex items-center justify-between w-full bg-background">
        <div className="flex gap-x-2 items-center">
          <Label className="text-muted-foreground">Show rows per page</Label>
          <Select>
            <SelectTrigger
              variant="outline"
              icon={<ChevronDown />}
              defaultValue="15"
            >
              <SelectValue placeholder="15" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="35">35</SelectItem>
              <SelectItem value="45">45</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-x-2">
          <Label className="text-muted-foreground">1-15 of 150</Label>
          <ButtonGroup destructive>
            <Button variant="ghost" iconOnly>
              <ChevronLeft />
            </Button>
            <Button variant="ghost" iconOnly>
              <ChevronRight />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default helpDeskTabelDemo;
