"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDownToLine,
  CloudDownload,
  Code,
  Disc2,
  Ellipsis,
  FileCog,
  Folder,
  Phone,
  PhoneIncoming,
  PhoneMissed,
  PhoneOutgoing,
  Share,
  Star,
} from "lucide-react";
import { id } from "date-fns/locale";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Item = {
  id: string;
  name: string;
  email: string;
  location: string;
  flag: string;
  status: "Active" | "Inactive" | "Pending";
  balance: number;
};

const columnsList: ColumnDef<Item>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="truncate font-medium">{row.getValue("name")}</div>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <div className="truncate">
        <span className="text-lg leading-none">{row.original.flag}</span>{" "}
        {row.getValue("location")}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Balance",
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return formatted;
    },
  },
  {
    header: "Department",
    accessorKey: "department",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Join Date",
    accessorKey: "joinDate",
  },
  {
    header: "Last Active",
    accessorKey: "lastActive",
  },
  {
    header: "Performance",
    accessorKey: "performance",
  },
];
const dealsItems = [
  {
    id: "1",
    organisation: "Timeless",
    amount: "₹ 3,50,500",
    status: "Qualification",
    email: "stacy@example.com",
    mobile: "+91 9994445678",
    assignedTo: "Avinash Goel",
    lastModified: "2 days ago",
    name: "Jenny Wilson",
    designation: "Product manager",
  },
  {
    id: "2",
    organisation: "Timeless",
    amount: "₹ 3,50,500",
    status: "Qualification",
    email: "stacy@example.com",
    mobile: "+91 9994445678",
    assignedTo: "Avinash Goel",
    lastModified: "2 days ago",
    name: "Mariana Rodriguez",
    designation: "UX designer",
  },
  {
    id: "3",
    organisation: "Dropbox",
    amount: "₹ 5,00,000",
    status: "Negotiation",
    email: "julie@example.com",
    mobile: "+91 7778889999",
    assignedTo: "Sara Patel",
    lastModified: "1 month ago",
    name: "David Lee",
    designation: "UI designer",
  },
  {
    id: "4",
    organisation: "Attentive",
    amount: "₹ 4,80,000",
    status: "Meeting",
    email: "linda@example.com",
    mobile: "+91 3332221111",
    assignedTo: "Emily Wong",
    lastModified: "2 weeks ago",
    name: "Sophie Chen",
    designation: "Front-end developer",
  },
  {
    id: "5",
    organisation: "Gumroad",
    amount: "₹ 4,60,000",
    status: "Proposal made",
    email: "john@example.com",
    mobile: "+91 2223334444",
    assignedTo: "Michael Chen",
    lastModified: "5 days ago",
    name: "Michael Wells",
    designation: "Web developer",
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
    enableSorting: false,
    enableHiding: false,
    meta: {
      colSpan: 1,
    },
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Department",
    accessorKey: "department",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Join Date",
    accessorKey: "joinDate",
  },
  {
    header: "Last Active",
    accessorKey: "lastActive",
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <>
        <span className="text-lg leading-none size-4">{row.original.flag}</span>
        {row.getValue("location")}
      </>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.getValue("status") === "Inactive" ? "secondary" : "default"
        }
        theme="violet"
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    header: () => <div>Balance</div>,
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div>{formatted}</div>;
    },
  },
];

const itemsStatic = [
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
  {
    id: "6",
    name: "John Brown",
    email: "john.brown@company.com",
    location: "New York, US",
    status: "Active",
    balance: "$1,500.00",
  },
  {
    id: "7",
    name: "Jane Doe",
    email: "jane.doe@company.com",
    location: "Paris, FR",
    status: "Inactive",
    balance: "$200.00",
  },
  {
    id: "8",
    name: "Peter Smith",
    email: "peter.smith@company.com",
    location: "Berlin, DE",
    status: "Active",
    balance: "$1,000.00",
  },
  {
    id: "9",
    name: "Olivia Lee",
    email: "olivia.lee@company.com",
    location: "Tokyo, JP",
    status: "Active",
    balance: "$500.00",
  },
  {
    id: "10",
    name: "Liam Chen",
    email: "liam.chen@company.com",
    location: "Shanghai, CN",
    status: "Inactive",
    balance: "$300.00",
  },
  {
    id: "11",
    name: "Ethan Kim",
    email: "ethan.kim@company.com",
    location: "Busan, KR",
    status: "Active",
    balance: "$800.00",
  },
  {
    id: "12",
    name: "Ava Brown",
    email: "ava.brown@company.com",
    location: "London, UK",
    status: "Active",
    balance: "$1,200.00",
  },
  {
    id: "13",
    name: "Lily Lee",
    email: "lily.lee@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "$400.00",
  },
  {
    id: "14",
    name: "Noah Smith",
    email: "noah.smith@company.com",
    location: "New York, US",
    status: "Inactive",
    balance: "$600.00",
  },
  {
    id: "15",
    name: "Eve Chen",
    email: "eve.chen@company.com",
    location: "Taipei, TW",
    status: "Active",
    balance: "$1,800.00",
  },
];

const cardItems = [
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
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },
  ]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const table = useReactTable({
    data,
    columns,
    columnsList,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    enableSortingRemoval: false,
  });

  return (
    <div className="pt-10 ">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
        Data Table Component
      </h1>

      <div className="flex flex-col mx-auto gap-10 w-full  items-center justify-center">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
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
        </Table>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Deals Table
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>
                  <Checkbox id={id} />
                </TableHead>
                <TableHead>Organisation</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile no</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Last Modified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dealsItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox id={`table-checkbox-${item.id}`} />
                  </TableCell>
                  <TableCell>
                    <Avatar shape="square">
                      <AvatarImage src="/images/svg/timeless.svg" />
                      <AvatarFallback>Timeless</AvatarFallback>
                    </Avatar>
                    {item.organisation}
                  </TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <Disc2 className="size-4" />
                    {item.status}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Phone className="size-4" />
                    {item.mobile}
                  </TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                      <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                    {item.assignedTo}
                  </TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Leads Table
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>
                  <Checkbox id={id} />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Organisation</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile no</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Last Modified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dealsItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox id={`table-checkbox-${item.id}`} />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Avatar>
                      <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                      <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    <Avatar shape="square">
                      <AvatarImage src="/images/svg/timeless.svg" />
                      <AvatarFallback>Timeless</AvatarFallback>
                    </Avatar>
                    {item.organisation}
                  </TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <Disc2 className="size-4" />
                    {item.status}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Phone className="size-4" />
                    {item.mobile}
                  </TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                      <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                    {item.assignedTo}
                  </TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Contacts Table
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>
                  <Checkbox id={id} />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile no</TableHead>
                <TableHead>Organisation</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Last Modified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dealsItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox id={`table-checkbox-${item.id}`} />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Avatar>
                      <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                      <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                    {item.name}
                  </TableCell>
                  <TableCell>{item.designation}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Phone className="size-4" />
                    {item.mobile}
                  </TableCell>
                  <TableCell>
                    <Avatar shape="square">
                      <AvatarImage src="/images/svg/timeless.svg" />
                      <AvatarFallback>Timeless</AvatarFallback>
                    </Avatar>
                    {item.organisation}
                  </TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                      <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                    {item.assignedTo}
                  </TableCell>
                  <TableCell>{item.lastModified}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Organisation Table
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>
                  <Checkbox id={id} />
                </TableHead>
                <TableHead> Organisation</TableHead>
                <TableHead>Deals</TableHead>
                <TableHead>Leads</TableHead>
                <TableHead>Contacts</TableHead>
                <TableHead>Web link</TableHead>
                <TableHead>Last modified/Createdn</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="/images/svg/attentive.svg" />
                    <AvatarFallback>Attentive</AvatarFallback>
                  </Avatar>
                  Attentive
                </TableCell>
                <TableCell>3</TableCell>
                <TableCell>0</TableCell>
                <TableCell>2</TableCell>
                <TableCell>zendesk.com</TableCell>
                <TableCell>2 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="/images/svg/1password.svg" />
                    <AvatarFallback>1password</AvatarFallback>
                  </Avatar>
                  1password
                </TableCell>
                <TableCell>2</TableCell>
                <TableCell>4</TableCell>
                <TableCell>5</TableCell>
                <TableCell>slack.com</TableCell>
                <TableCell>1 week ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="/images/svg/githud.svg" />
                    <AvatarFallback>Githud</AvatarFallback>
                  </Avatar>
                  Githud
                </TableCell>
                <TableCell>7</TableCell>
                <TableCell>1</TableCell>
                <TableCell>9</TableCell>
                <TableCell>trello.com</TableCell>
                <TableCell>21 sept</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="/images/svg/zapier.svg" />
                    <AvatarFallback>Zapier</AvatarFallback>
                  </Avatar>
                  Zapier
                </TableCell>
                <TableCell>5</TableCell>
                <TableCell>8</TableCell>
                <TableCell>6</TableCell>
                <TableCell>asana.com</TableCell>
                <TableCell>3 sept</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Call logs
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>
                  <Checkbox id={id} />
                </TableHead>
                <TableHead>From</TableHead>
                <TableHead>Phone no. (From)</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Phone no. (To)</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                    <AvatarFallback>Chad bono</AvatarFallback>
                  </Avatar>
                  Chad bono
                </TableCell>
                <TableCell>
                  <Phone className="size-4" />
                  +91 9994445678
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/170.jpg" />
                    <AvatarFallback>Chad bono</AvatarFallback>
                  </Avatar>
                  Stacy Kreed
                </TableCell>
                <TableCell>
                  <Phone className="size-4" />
                  +91 9994445678
                </TableCell>
                <TableCell>
                  <PhoneIncoming className="size-4" />
                  Incoming
                </TableCell>
                <TableCell>5s</TableCell>
                <TableCell>
                  <Badge theme="green" variant="secondary">
                    Completed
                  </Badge>
                </TableCell>
                <TableCell>22 Sept</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/180.jpg" />
                    <AvatarFallback>Lily Smith</AvatarFallback>
                  </Avatar>
                  Lily Smith
                </TableCell>
                <TableCell>
                  <Phone className="size-4" />
                  ++91 7456123456
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/175.jpg" />
                    <AvatarFallback>Tom Brown</AvatarFallback>
                  </Avatar>
                  Tom Brown
                </TableCell>
                <TableCell>
                  <Phone className="size-4" />
                  +91 9456123456
                </TableCell>
                <TableCell>
                  <PhoneOutgoing className="size-4" />
                  Outgoing
                </TableCell>
                <TableCell>2m</TableCell>
                <TableCell>
                  <Badge theme="green" variant="secondary">
                    Completed
                  </Badge>
                </TableCell>
                <TableCell>15 Oct</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/85.jpg" />
                    <AvatarFallback>Ella Johnson</AvatarFallback>
                  </Avatar>
                  Ella Johnson
                </TableCell>
                <TableCell>
                  <Phone className="size-4" />
                  +91 8012345678
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/190.jpg" />
                    <AvatarFallback>Noah Davis</AvatarFallback>
                  </Avatar>
                  Noah Davis
                </TableCell>
                <TableCell>
                  <Phone className="size-4" />
                  +91 8012345678
                </TableCell>
                <TableCell>
                  <PhoneMissed className="size-4" />
                  Missed
                </TableCell>
                <TableCell>10m</TableCell>
                <TableCell>
                  <Badge theme="red" variant="secondary">
                    Missed
                  </Badge>
                </TableCell>
                <TableCell>7 Nov</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Support tickets
          </h1>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>
                  <Checkbox id={id} />
                </TableHead>
                <TableHead>Ticket no.</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Assigned to</TableHead>
                <TableHead>Due in</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Replies</TableHead>
                <TableHead>Last modified</TableHead>
                <TableHead>Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>0000010137</TableCell>
                <TableCell>How does reimbursement works?</TableCell>
                <TableCell>Open</TableCell>
                <TableCell>
                  <Badge theme="green" variant="secondary">
                    Low
                  </Badge>
                </TableCell>
                <TableCell>Incident-sample ticket</TableCell>
                <TableCell>Product experts</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                    <AvatarFallback>Avinash Goel</AvatarFallback>
                  </Avatar>
                  Avinash Goel
                </TableCell>
                <TableCell>21 min</TableCell>
                <TableCell>Timeless</TableCell>
                <TableCell>Sumit Bhanusha</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>3</TableCell>
                <TableCell>1 hour ago </TableCell>
                <TableCell>12 Aug </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>0000010138</TableCell>
                <TableCell>Managing design assets</TableCell>
                <TableCell>Closed</TableCell>
                <TableCell>
                  <Badge theme="red" variant="secondary">
                    High
                  </Badge>
                </TableCell>
                <TableCell>Feature request</TableCell>
                <TableCell>Engineering team</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                    <AvatarFallback>Mia Johnson</AvatarFallback>
                  </Avatar>
                  Mia Johnson
                </TableCell>
                <TableCell>45 min</TableCell>
                <TableCell>Cooper</TableCell>
                <TableCell>Sara Patel</TableCell>
                <TableCell>Customer portal</TableCell>
                <TableCell>2</TableCell>
                <TableCell>30 min ago </TableCell>
                <TableCell>14 Aug </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>0000010139</TableCell>
                <TableCell>Feature bugs investigation</TableCell>
                <TableCell>Open</TableCell>
                <TableCell>
                  <Badge theme="amber" variant="secondary">
                    Medium
                  </Badge>
                </TableCell>
                <TableCell>Bug report</TableCell>
                <TableCell>Quality assurance</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/175.jpg" />
                    <AvatarFallback>David Lee</AvatarFallback>
                  </Avatar>
                  David Lee
                </TableCell>
                <TableCell>2 days</TableCell>
                <TableCell>Dropbox</TableCell>
                <TableCell>Emily Chen</TableCell>
                <TableCell>-</TableCell>
                <TableCell>4</TableCell>
                <TableCell>45 min ago </TableCell>
                <TableCell>16 Aug </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>0000010140</TableCell>
                <TableCell>Enhancing user experience</TableCell>
                <TableCell>Closed</TableCell>
                <TableCell>
                  <Badge theme="green" variant="secondary">
                    Low
                  </Badge>
                </TableCell>
                <TableCell>Usability testing</TableCell>
                <TableCell>User research team</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/181.jpg" />
                    <AvatarFallback>Alex Wong</AvatarFallback>
                  </Avatar>
                  Alex Wong
                </TableCell>
                <TableCell>1 week</TableCell>
                <TableCell>Tesla</TableCell>
                <TableCell>Lena Nguyen</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1 hour ago </TableCell>
                <TableCell>17 Aug </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Drive documents
          </h1>
          <Table className="table-fixed">
            <TableHeader>
              <TableRow>
                <TableHead colSpan={2}>Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Date modified</TableHead>
                <TableHead>
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
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody borderNone>
              <TableRow>
                <TableCell colSpan={2}>
                  <Folder className="size-4" />
                  Illustration
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                    <AvatarFallback>Aaron Stevenson</AvatarFallback>
                  </Avatar>
                  Aaron Stevenson
                </TableCell>
                <TableCell>47.4 MB</TableCell>
                <TableCell>2 days ago</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <Folder className="size-4" />
                  Photography
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/171.jpg" />
                    <AvatarFallback>Jacob Collins</AvatarFallback>
                  </Avatar>
                  Jacob Collins
                </TableCell>
                <TableCell>56.2 MB</TableCell>
                <TableCell>1 week ago</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <Folder className="size-4" />
                  Graphic Design
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://mockmind-api.uifaces.co/content/human/145.jpg" />
                    <AvatarFallback>Emily Parker</AvatarFallback>
                  </Avatar>
                  Emily Parker
                </TableCell>
                <TableCell>32.8 MB</TableCell>
                <TableCell>5 days ago</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Ticket types
          </h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>Ticket type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>
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
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Incident</TableCell>
                <TableCell>
                  <Badge theme="green" variant="secondary">
                    Low
                  </Badge>
                </TableCell>
                <TableCell>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem I...
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Bug</TableCell>
                <TableCell>
                  <Badge theme="amber" variant="secondary">
                    Medium
                  </Badge>
                </TableCell>
                <TableCell>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem I...
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>Question</TableCell>
                <TableCell>
                  <Badge theme="red" variant="secondary">
                    High
                  </Badge>
                </TableCell>
                <TableCell>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem I...
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Static Header Table
          </h1>
          <div className="[&>div]:max-h-96">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-xs">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {itemsStatic.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className="bg-transparent">
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>

        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Card Table
          </h1>
          <div className="overflow-hidden rounded-md border bg-background">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="h-10">
                    <Checkbox id={id} />
                  </TableHead>
                  <TableHead className="h-10">Name</TableHead>
                  <TableHead className="h-10">Email</TableHead>
                  <TableHead className="h-10">Location</TableHead>
                  <TableHead className="h-10">Status</TableHead>
                  <TableHead className="h-10">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cardItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Checkbox id={`table-checkbox-${item.id}`} />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter className="bg-transparent">
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={5}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            TanStack Basic Table
          </h1>
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
                <TableCell colSpan={9}>Total</TableCell>
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

        <div className=" w-full">
          <h1 className="text-lg font-semibold text-foreground pb-4 text-left tracking-4 leading-normal">
            Column Resize Table
          </h1>

          <Table
            className="table-fixed"
            style={{
              width: table.getCenterTotalSize(),
            }}
          >
            <TableHeader>
              {table.getHeaderGroups().map((headerGroups) => (
                <TableRow key={headerGroups.id} className="bg-muted/50">
                  {headerGroups.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="relative h-10 border-t select-none last:[&>.cursor-col-resize]:opacity-0"
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
                              // Enhanced keyboard handling for sorting
                              if (
                                header.column.getCanSort() &&
                                (e.key === "Enter" || e.key === " ")
                              ) {
                                e.preventDefault();
                                header.column.getToggleSortingHandler()?.(e);
                              }
                            }}
                            tabIndex={
                              header.column.getCanSort() ? 0 : undefined
                            }
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
                                "absolute top-0 h-full w-4 cursor-col-resize user-select-none touch-none -right-2 z-10 flex justify-center before:absolute before:w-px before:inset-y-0 before:bg-border before:translate-x-px",
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
                        <span className="truncate">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </span>
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
    </div>
  );
};

export default dataTabelDemo;
