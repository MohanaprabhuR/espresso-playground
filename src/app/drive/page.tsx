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
  ArrowDownUp,
  ChevronDown,
  ChevronDownIcon,
  ChevronUpIcon,
  CloudDownload,
  Ellipsis,
  FileCog,
  Folder,
  List,
  ListFilter,
  Share,
  Star,
  Ungroup,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DealItem {
  name: string;
  owner: string;
  owner_avatar: string;
  size: string;
  date_of_modified: string;
}

const data: DealItem[] = [
  {
    name: "Tax submission documents",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "Yesterday",
  },
  {
    name: "Photos",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "47.4 MB",
    date_of_modified: "2 days ago",
  },
  {
    name: "Abcd",
    owner: "8 People",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "2 days ago",
  },
  {
    name: "Abode collections",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "1 week ago",
  },
  {
    name: "Mango mist - outing",
    owner: "3 People",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "47.4 MB",
    date_of_modified: "1 week ago",
  },
  {
    name: "Procreate illustrations",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "3 weeks ago",
  },
  {
    name: "video2023081822p54.mp4",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "2 days ago",
  },
  {
    name: "Satoshi.zip",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "74 KB",
    date_of_modified: "22 Jun 2023",
  },
  {
    name: "Ball.jpg",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "Jan 16 2023",
  },
  {
    name: "Untitled2023.psd",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "May 28 2023",
  },
  {
    name: "Orginal_image.jpg",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "47.4 MB",
    date_of_modified: "May 28 2023",
  },
  {
    name: "New_catalogue.pdf",
    owner: "11 People",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "May 28 2023",
  },
  {
    name: "Illustration.aed",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "May 22 2023",
  },
  {
    name: "Illustration.skt",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "58.9 mb",
    date_of_modified: "May 1 2023",
  },
  {
    name: "town-10169.mp3",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "May 1 2023",
  },
  {
    name: "Orginal_list.xlsx",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "Apr 12 2023",
  },
  {
    name: "Illustration_updel...pdf",
    owner: "2 People",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "47.4 MB",
    date_of_modified: "May 31 2023",
  },
  {
    name: "Mosaic menu.pdf",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "Jan 1 2023",
  },
  {
    name: "Sample doc.doc",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/222.jpg",
    size: "47.4 MB",
    date_of_modified: "Jan 1 2023",
  },
  {
    name: "IMG3200976002I.jpg",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    size: "47.4 MB",
    date_of_modified: "Dec 12 2022",
  },
  {
    name: "Audio324588",
    owner: "Just you",
    owner_avatar: "https://mockmind-api.uifaces.co/content/human/98.jpg",
    size: "47.4 MB",
    date_of_modified: "Dec 9 2022",
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
    size: 400,
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.size}</span>
      </>
    ),
    size: 200,
  },
  {
    accessorKey: "date_of_modified",
    header: "Date Of Modified",
    cell: ({ row }) => (
      <>
        <span className="truncate">{row.original.date_of_modified}</span>
      </>
    ),
    size: 200,
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
            <DropdownMenuTrigger asChild>
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
            <DropdownMenuTrigger asChild>
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

const driveTabelDemo = () => {
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
    <div className="flex flex-col mx-auto gap-y-4.5 w-full relative  pb-1 pt-6  h-[calc(100vh-50px)] overflow-y-auto">
      <div className="flex justify-between items-center w-full px-5">
        <p className="text-foreground text-lg font-medium tracking-4 leading-tight">
          All
        </p>
        <div className="flex gap-x-2">
          <Select defaultValue="open">
            <SelectTrigger icon={<ChevronDown />}>
              <ArrowDownUp className="size-4" />
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="close">Close</SelectItem>
              <SelectItem value="edit">Edit</SelectItem>
            </SelectContent>
          </Select>
          <Tabs defaultValue="auto">
            <TabsList>
              <TabsTrigger value="auto">
                <Ungroup className="size-4" />
              </TabsTrigger>
              <TabsTrigger value="vertical">
                <List className="size-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="px-3">
        <Table className="w-full table-fixed ">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="relative last:[&>.cursor-col-resize]:opacity-0 group last:text-right [&:last-child>*]:justify-end"
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
                      className=" last:text-right [&:last-child>*]:justify-end"
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
      {/* <div className="flex flex-col gap-y-2">
        <Label>Folders</Label>
        <div className="flex flex-wrap gap-5">
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2">
            <div className="min-h-30 flex items-center justify-center">
              <Folder />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Tax submission document</CardTitle>
              <CardDescription>20 Files</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2">
            <div className="min-h-30 flex items-center justify-center">
              <Folder />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Photos</CardTitle>
              <CardDescription>572 Files</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2">
            <div className="min-h-30 flex items-center justify-center">
              <Folder />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Abcd</CardTitle>
              <CardDescription>2 Files</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2">
            <div className="min-h-30 flex items-center justify-center">
              <Folder />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Abode collections</CardTitle>
              <CardDescription>8 Files</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2">
            <div className="min-h-30 flex items-center justify-center">
              <Folder />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Mango mist - outing</CardTitle>
              <CardDescription>19 Files</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2">
            <div className="min-h-30 flex items-center justify-center">
              <Folder />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Procreate illustrations</CardTitle>
              <CardDescription>25 Files</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Label>Files</Label>
        <div className="flex flex-wrap gap-5">
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/Illustration.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Illustration.aed</CardTitle>
              <CardDescription>After effects · May 22</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/video.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>video202306182.mp4</CardTitle>
              <CardDescription>Video · 2 days ago</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/untitled.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Untitled2023.psd</CardTitle>
              <CardDescription>Photoshop · May 28</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/zip.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Satoshi.zip</CardTitle>
              <CardDescription>Zip ·22 Jun</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/ball.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Ball.jpg</CardTitle>
              <CardDescription>Image · Jan 16</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/image_orginal.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Orginal_image.jpg</CardTitle>
              <CardDescription>Image · May 28</CardDescription>
            </CardContent>
          </Card>
          {/* <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/pdf.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>New_catalogue.pdf</CardTitle>
              <CardDescription>Pdf · Mar 16 </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/audio.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Audio324588</CardTitle>
              <CardDescription>Audio · Dec 9 2022</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/sketch.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Illustration.skt</CardTitle>
              <CardDescription>Sketch · May 1</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/image_orginal.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>IMG32009760021.jpg</CardTitle>
              <CardDescription>Image · Dec 12 2022</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/music.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>town-10169.mp3</CardTitle>
              <CardDescription>Audio · May 1</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/document.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Sample doc.doc</CardTitle>
              <CardDescription>Doc · Jan 1</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/pdf.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Plan_product_gu.pdf</CardTitle>
              <CardDescription>Pdf · May 31</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/pdf.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Mosaic menu.pdf</CardTitle>
              <CardDescription>Pdf · Jan 1</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full max-w-43 p-0 pb-1.5 gap-y-2 overflow-hidden">
            <div className="min-h-30 flex">
              <Image
                src="/images/excel.png"
                alt="Illustration"
                width="172"
                height="120"
                className="object-cover"
              />
            </div>
            <CardContent className="px-2.5">
              <CardTitle>Orginal_list.xlxs</CardTitle>
              <CardDescription>Excel · Apr 12</CardDescription>
            </CardContent>
          </Card> 
        </div>
      </div> */}
    </div>
  );
};

export default driveTabelDemo;
