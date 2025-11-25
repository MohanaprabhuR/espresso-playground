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
  ArrowDownToLine,
  ChevronDownIcon,
  ChevronUpIcon,
  CloudDownload,
  Ellipsis,
  FileCog,
  Folder,
  Phone,
  Share,
  Star,
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

interface DealItem {
  name: string;
  owner: string;
  owner_avatar: string;
  size: string;
  date_of_modified: string;
}

const data: DealItem[] = [
  {
    name: "Illustration",
    owner: "Aaron Stevenson",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "2 days ago",
  },
  {
    name: "Photography",
    owner: "Jacob Collins",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "56.2 MB",
    date_of_modified: "1 week ago",
  },
  {
    name: "Graphic Design",
    owner: "Emily Parker",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "32.8 MB",
    date_of_modified: "5 days ago",
  },
  {
    name: "Illustration",
    owner: "Aaron Stevenson",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "2 days ago",
  },
  {
    name: "Photography",
    owner: "Jacob Collins",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "56.2 MB",
    date_of_modified: "1 week ago",
  },
  {
    name: "Graphic Design",
    owner: "Emily Parker",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "32.8 MB",
    date_of_modified: "5 days ago",
  },
];

export const columns: ColumnDef<DealItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <>
        <figure>
          <Folder className="size-4" />
        </figure>
        <span className="truncate">{row.original.name}</span>
      </>
    ),
  },
  {
    accessorKey: "owner",
    header: "Owner",
    cell: ({ row }) => (
      <>
        <Avatar>
          <AvatarImage src={row.original.owner_avatar} />
          <AvatarFallback>{row.original.owner[0]}</AvatarFallback>
        </Avatar>
        <span className="truncate">{row.original.owner}</span>
      </>
    ),
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.size}</span>
      </>
    ),
  },
  {
    accessorKey: "date_of_modified",
    header: "Date Of Modified",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.date_of_modified}</span>
      </>
    ),
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <ButtonGroup destructive>
          <Button iconOnly variant="ghost">
            <Star className="size-4" />
          </Button>
          <Button iconOnly variant="ghost">
            <Share className="size-4" />
          </Button>
          <Button iconOnly variant="ghost">
            <ArrowDownToLine className="size-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button iconOnly variant="ghost">
                <Ellipsis className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Folder className="size-4" /> Actions
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileCog className="size-4" />
                New File
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share className="size-4" />
                Share File
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CloudDownload className="size-4" />
                Download File
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      );
    },
    cell: ({ row }) => {
      return (
        <ButtonGroup destructive>
          <Button iconOnly variant="ghost">
            <Star className="size-4" />
          </Button>
          <Button iconOnly variant="ghost">
            <Share className="size-4" />
          </Button>
          <Button iconOnly variant="ghost">
            <ArrowDownToLine className="size-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button iconOnly variant="ghost">
                <Ellipsis className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Folder className="size-4" /> Actions
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileCog className="size-4" />
                New File
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share className="size-4" />
                Share File
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CloudDownload className="size-4" />
                Download File
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      );
    },
  },
];

const dataTabelDemo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div className="pt-10 ">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
        Drive Table
      </h1>
      <div className="flex flex-col mx-auto gap-10 w-full  items-center justify-center">
        <Table
          className="table-fixed w-full"
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
          <TableBody borderNone>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="truncate">
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
    </div>
  );
};

export default dataTabelDemo;
