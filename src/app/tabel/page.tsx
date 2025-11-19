"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Codepen, Codesandbox, Phone } from "lucide-react";
type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};
const items = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  },
];

const columns: ColumnDef<Item>[] = [
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
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <div>
        <span className="text-lg leading-none">{row.original.flag}</span>{" "}
        {row.getValue("location")}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("status") === "Inactive" &&
            "bg-muted-foreground/60 text-primary-foreground"
        )}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    header: () => <div className="text-right">Balance</div>,
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right">{formatted}</div>;
    },
  },
];

const dataTabelDemo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<Item[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/users-01_fertyx.json"
      );
      const data = await res.json();
      setData(data.slice(0, 5));
    }
    fetchPosts();
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="pt-10 ">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
        Data Table Component
      </h1>

      <div className="flex flex-col mx-auto gap-10 w-full  items-center justify-center">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                Kathryn Murphy
              </TableCell>
              <TableCell>Product manager</TableCell>
              <TableCell>Kathryn@timeless.co</TableCell>
              <TableCell>
                <Phone className="size-5" />
                +91 9994445678
              </TableCell>
              <TableCell>
                <Code className="size-5" />
                Dropbox
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                Kathryn Murphy
              </TableCell>
              <TableCell>Product manager</TableCell>
              <TableCell>Kathryn@timeless.co</TableCell>
              <TableCell>
                <Phone className="size-5" />
                +91 9994445678
              </TableCell>
              <TableCell>
                <Code className="size-5" />
                Dropbox
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                Kathryn Murphy
              </TableCell>
              <TableCell>Product manager</TableCell>
              <TableCell>Kathryn@timeless.co</TableCell>
              <TableCell>
                <Phone className="size-5" />
                +91 9994445678
              </TableCell>
              <TableCell>
                <Code className="size-5" />
                Dropbox
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                Kathryn Murphy
              </TableCell>
              <TableCell>Product manager</TableCell>
              <TableCell>Kathryn@timeless.co</TableCell>
              <TableCell>
                <Phone className="size-5" />
                +91 9994445678
              </TableCell>
              <TableCell>
                <Code className="size-5" />
                Dropbox
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/185.jpg" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                Kathryn Murphy
              </TableCell>
              <TableCell>Product manager</TableCell>
              <TableCell>Kathryn@timeless.co</TableCell>
              <TableCell>
                <Phone className="size-5" />
                +91 9994445678
              </TableCell>
              <TableCell>
                <Code className="size-5" />
                Dropbox
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                    <TableCell key={cell.id}>
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
          <TableFooter className="bg-transparent">
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(
                  data.reduce((total, item) => total + item.balance, 0)
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default dataTabelDemo;
