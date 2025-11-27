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
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDownUp,
  Calendar,
  Check,
  ChevronDown,
  Ellipsis,
  FileArchive,
  Files,
  List,
  SquareCheckBig,
  Trash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge, BadgeGroup } from "@/components/ui/badge";

interface DealItem {
  task_title: string;
  project: string;
  priority: string;
  tags: string[];
  due: string;
}

const data: DealItem[] = [
  {
    task_title: "Version 14 Release",
    project: "General",
    priority: "Low",
    tags: ["Design", "Help", "+2"],
    due: "3 Sept",
  },
  {
    task_title: "Hyper-verge landing page",
    project: "Trainings",
    priority: "High",
    tags: ["App", "Frappe", "App", "Opensource"],
    due: "10 Sept",
  },
  {
    task_title: "New design system",
    project: "Uncategorised",
    priority: "High",
    tags: ["Mobile"],
    due: "24 Sept",
  },
  {
    task_title: "Client feedback",
    project: "Meta",
    priority: "Low",
    tags: ["Opensource"],
    due: "5 Oct",
  },
  {
    task_title: "Content strategy",
    project: "Approved",
    priority: "Low",
    tags: ["Mobile", "App", "Opensource", "Frappe"],
    due: "15 Oct",
  },
  {
    task_title: "Calendar update",
    project: "Fun points",
    priority: "Low",
    tags: ["Help", "Frappe", "Opensource", "Frappe"],
    due: "17 Sept",
  },
  {
    task_title: "Version 14 Release date",
    project: "General",
    priority: "Medium",
    tags: ["App"],
    due: "17 Sept",
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
        className="rounded-full"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    size: 32,
  },
  {
    accessorKey: "task_title",
    header: "Task title",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.task_title}</span>
      </>
    ),
    size: 258,
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.project}</span>
      </>
    ),
    size: 120,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.priority}</span>
      </>
    ),
    size: 88,
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.original.tags;

      if (tags.length === 1) {
        return (
          <Badge variant="secondary" theme="violet">
            {tags[0]}
          </Badge>
        );
      }

      return (
        <BadgeGroup max={2}>
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" theme="violet">
              {tag}
            </Badge>
          ))}
        </BadgeGroup>
      );
    },
    size: 184,
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        <Calendar className="size-4" />
        <span className="truncate">{row.original.due}</span>
      </div>
    ),
    size: 104,
  },
  {
    accessorKey: "rating",
    header: ({}) => {
      return (
        <div className="group">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                iconOnly
                variant="ghost"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Ellipsis className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <SquareCheckBig className="size-4" /> Edit task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <List className="size-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Check className="size-4" />
                Mark complete
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileArchive className="size-4" />
                Archive task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Files className="size-4" />
                Copy task id
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash className="size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    cell: ({}) => {
      return (
        <div className="group">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                iconOnly
                variant="ghost"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Ellipsis className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <SquareCheckBig className="size-4" /> Edit task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <List className="size-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Check className="size-4" />
                Mark complete
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileArchive className="size-4" />
                Archive task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Files className="size-4" />
                Copy task id
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash className="size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    size: 48,
  },
];

const driveTabelDemo = () => {
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
        Game Plan Table
      </h1>
      <div className="flex flex-col mx-auto gap-y-4.5 w-full  items-center justify-center">
        <div className="flex justify-between items-center w-full max-w-[900px] mx-auto">
          <span className="text-lg font-semibold tracking-4 leading-tight text-foreground">
            Tasks
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <ArrowDownUp className="size-4" /> Newest
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Open</DropdownMenuItem>
              <DropdownMenuItem>Close</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table
          className="table-fixed w-full mx-auto"
          style={{
            width: table.getCenterTotalSize(),
          }}
        >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="group">
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
                          className={cn(
                            header.column.getCanSort() &&
                              "flex h-full cursor-pointer items-center justify-between gap-2 select-none"
                          )}
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
                  className="group"
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

export default driveTabelDemo;
