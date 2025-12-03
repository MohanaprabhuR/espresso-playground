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
  ArrowDownUp,
  ChevronDownIcon,
  ChevronUpIcon,
  Ellipsis,
  EyeOff,
  ListFilter,
  Logs,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

interface DealItem {
  name: string;
  avatar: string;
  organisation: string;
  organisation_image: string;
  status: string;
  status_image: string;
  email: string;
  phone: string;
  assigned_to: string;
  assigned_Avatar: string;
  last_modified: string;
}

const data: DealItem[] = [
  {
    name: "Jenny Wilson",
    avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    organisation: "Gumroad",
    organisation_image: "/images/svg/gumroad.svg",
    status: "Open",
    status_image: "/images/svg/open.svg",
    email: "stacy@example.com",
    phone: "+91 9994445678",
    assigned_to: "Avinash Goel",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/84.jpg",
    last_modified: "2 days ago",
  },
  {
    name: "Mariana Rodriguez",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    organisation: "Attentive",
    organisation_image: "/images/svg/attentive.svg",
    status: "Contacted",
    status_image: "/images/svg/contacted.svg",
    email: "mariana@example.com",
    phone: "+91 8885556789",
    assigned_to: "Rahul Sharma",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/85.jpg",
    last_modified: "1 week ago",
  },
  {
    name: "Sophie Chen",
    avatar: "https://mockmind-api.uifaces.co/content/human/81.jpg",
    organisation: "Evergreen",
    organisation_image: "/images/svg/evergreen.svg",
    status: "Nurture",
    status_image: "/images/svg/nurture.svg",
    email: "sophie@example.com",
    phone: "+91 7777335678",
    assigned_to: "Elena Petrova",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/86.jpg",
    last_modified: "3 days ago",
  },
  {
    name: "David Lee",
    avatar: "https://mockmind-api.uifaces.co/content/human/82.jpg",
    organisation: "Dropbox",
    organisation_image: "/images/svg/dropbox.svg",
    status: "Qualified",
    status_image: "/images/svg/qualified.svg",
    email: "david@example.com",
    phone: "+91 6662225678",
    assigned_to: "Priya Patel",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/87.jpg",
    last_modified: "4 days ago",
  },
  {
    name: "Maria Gomez",
    avatar: "https://mockmind-api.uifaces.co/content/human/83.jpg",
    organisation: "Hourglass",
    organisation_image: "/images/svg/hourglass.svg",
    status: "Unqualified",
    status_image: "/images/svg/unqualified.svg",
    email: "maria@example.com",
    phone: "+91 5554445678",
    assigned_to: "James Smith",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/88.jpg",
    last_modified: "5 days ago",
  },
  {
    name: "Anika Sharma",
    avatar: "https://mockmind-api.uifaces.co/content/human/84.jpg",
    organisation: "Miro",
    organisation_image: "/images/svg/miro.svg",
    status: "Nurture",
    status_image: "/images/svg/nurture.svg",
    email: "anika@example.com",
    phone: "+91 4443335678",
    assigned_to: "Mark Johnson",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/89.jpg",
    last_modified: "6 days ago",
  },
  {
    name: "Liam Brown",
    avatar: "https://mockmind-api.uifaces.co/content/human/86.jpg",
    organisation: "Zapier",
    organisation_image: "/images/svg/zapier.svg",
    status: "Junk",
    status_image: "/images/svg/junk.svg",
    email: "liam@example.com",
    phone: "+91 3332225678",
    assigned_to: "Olivia Martinez",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    last_modified: "1 week ago",
  },
  {
    name: "Daniel Kim",
    avatar: "https://mockmind-api.uifaces.co/content/human/84.jpg",
    organisation: "Figma",
    organisation_image: "/images/svg/figma.svg",
    status: "Contacted",
    status_image: "/images/svg/contacted.svg",
    email: "daniel@example.com",
    phone: "+91 2221115678",
    assigned_to: "Isabella Davis",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/91.jpg",
    last_modified: "1 week ago",
  },
  {
    name: "Nina Lee",
    avatar: "https://mockmind-api.uifaces.co/content/human/88.jpg",
    organisation: "1password",
    organisation_image: "/images/svg/1password.svg",
    status: "Open",
    status_image: "/images/svg/open.svg",
    email: "nina@example.com",
    phone: "+91 1110005678",
    assigned_to: "Ethan Wilson",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/92.jpg",
    last_modified: "8 days ago",
  },
  {
    name: "Avery Clark",
    avatar: "https://mockmind-api.uifaces.co/content/human/89.jpg",
    organisation: "Cooper",
    organisation_image: "/images/svg/cooper.svg",
    status: "Qualified",
    status_image: "/images/svg/qualified.svg",
    email: "avery@example.com",
    phone: "+91 9998885678",
    assigned_to: "Mia Thompson",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/93.jpg",
    last_modified: "9 days ago",
  },
  {
    name: "Lucas White",
    avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    organisation: "ChatGpt",
    organisation_image: "/images/svg/chatGpt.svg",
    status: "Junk",
    status_image: "/images/svg/junk.svg",
    email: "lucas@example.com",
    phone: "+91 8887775678",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/94.jpg",
    assigned_to: "Ella Hill",
    last_modified: "10 days ago",
  },
  {
    name: "Chloe Allen",
    avatar: "https://mockmind-api.uifaces.co/content/human/91.jpg",
    organisation: "Github",
    organisation_image: "/images/svg/github.svg",
    status: "Contacted",
    status_image: "/images/svg/contacted.svg",
    email: "chloe@example.com",
    phone: "+91 7776665678",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/95.jpg",
    assigned_to: "Noah Scott",
    last_modified: "11 days ago",
  },
  {
    name: "Evelyn Young",
    avatar: "https://mockmind-api.uifaces.co/content/human/92.jpg",
    organisation: "Metalab",
    organisation_image: "/images/svg/metalab.svg",
    status: "Open",
    status_image: "/images/svg/open.svg",
    email: "evelyn@example.com",
    phone: "+91 6665555678",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/96.jpg",
    assigned_to: "Alexander King",
    last_modified: "12 days ago",
  },
  {
    name: "Nathan Green",
    avatar: "https://mockmind-api.uifaces.co/content/human/93.jpg",
    organisation: "Adobe Express",
    organisation_image: "/images/svg/adobeexpress.svg",
    status: "Unqualified",
    status_image: "/images/svg/unqualified.svg",
    email: "nathan@example.com",
    phone: "+91 5554445678",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    assigned_to: "Sofia Walker",
    last_modified: "13 days ago",
  },
  {
    name: "Grace Roberts",
    avatar: "https://mockmind-api.uifaces.co/content/human/94.jpg",
    organisation: "Spotify",
    organisation_image: "/images/svg/spotify.svg",
    status: "Junk",
    status_image: "/images/svg/junk.svg",
    email: "grace@example.com",
    phone: "+91 4443335678",
    assigned_Avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    assigned_to: "Henry Allen",
    last_modified: "14 days ago",
  },
];

export const columns: ColumnDef<DealItem>[] = [
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <>
        <Avatar>
          <AvatarImage src={row.original.avatar} />
          <AvatarFallback>{row.original.name[0]}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.name}</span>
      </>
    ),
    size: 170,
  },
  {
    accessorKey: "organisation",
    header: "Organisation",
    cell: ({ row }) => (
      <>
        <Avatar shape="square">
          <AvatarImage src={row.original.organisation_image} />
          <AvatarFallback>{row.original.organisation[0]}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.organisation}</span>
      </>
    ),
    size: 144,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <>
        <Avatar size="xs">
          <AvatarImage src={row.original.status_image} />
          <AvatarFallback>{row.original.status[0]}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.status}</span>
      </>
    ),
    size: 144,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.email}</span>
      </>
    ),
    size: 216,
  },
  {
    accessorKey: "phone",
    header: "EmailMobile no.",
    cell: ({ row }) => (
      <>
        <figure className="size-4">
          <Phone className="size-4" />
        </figure>
        <span className="truncate">{row.original.phone}</span>
      </>
    ),
    size: 184,
  },
  {
    accessorKey: "assigned_to",
    header: "Assigned to",
    cell: ({ row }) => (
      <>
        <Avatar>
          <AvatarImage src={row.original.assigned_Avatar} />
          <AvatarFallback>{row.original.assigned_to[0]}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.assigned_to}</span>
      </>
    ),
    size: 168,
  },
  {
    accessorKey: "last_modified",
    header: "Last modified/Created",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.last_modified}</span>
      </>
    ),
    size: 120,
  },
];

const dataTabelDemo = () => {
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
    <div className="flex flex-col mx-auto gap-y-4.5 w-full  items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <ButtonGroup destructive className="gap-x-2">
          <Button variant="secondary">Lead Owner</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                Organization <ChevronDownIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Gumroad</DropdownMenuItem>
              <DropdownMenuItem>Attentive</DropdownMenuItem>
              <DropdownMenuItem>Evergreen</DropdownMenuItem>
              <DropdownMenuItem>Dropbox</DropdownMenuItem>
              <DropdownMenuItem>Hourglass</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                Status <ChevronDownIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Open</DropdownMenuItem>
              <DropdownMenuItem>Contacted</DropdownMenuItem>
              <DropdownMenuItem>Nurture</DropdownMenuItem>
              <DropdownMenuItem>Qualified</DropdownMenuItem>
              <DropdownMenuItem>Unqualified</DropdownMenuItem>
              <DropdownMenuItem>Junk</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
        <div className="flex gap-x-2 items-center">
          <ButtonGroup destructive className="gap-x-2">
            <Button variant="secondary">
              <EyeOff className="size-4" /> Columns
            </Button>
            <Button variant="secondary">
              <Logs className="size-4" /> Group
            </Button>
            <Button variant="secondary">
              <ListFilter className="size-4" /> Filter
            </Button>
            <Button variant="secondary">
              <ArrowDownUp className="size-4" /> Sort
            </Button>
          </ButtonGroup>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" iconOnly>
                <Ellipsis className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Import</DropdownMenuItem>
              <DropdownMenuItem>User Permissions</DropdownMenuItem>
              <DropdownMenuItem>Role Permissions Manager</DropdownMenuItem>
              <DropdownMenuItem>
                Customize
                <KbdGroup className="ml-auto">
                  <Kbd>⌘+Y</Kbd>
                </KbdGroup>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Toggle Sidebar
                <KbdGroup className="ml-auto">
                  <Kbd>⌘+G</Kbd>
                </KbdGroup>
              </DropdownMenuItem>
              <DropdownMenuItem>List Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Table
        className="table-fixed w-full min-w-full"
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
                    className="relative last:[&>.cursor-col-resize]:opacity-0 group"
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
                  <TableCell key={cell.id} className="truncate">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default dataTabelDemo;
