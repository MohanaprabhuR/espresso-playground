"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto "
    >
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom text-base tracking-4 leading-tight ",
          className
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b [&_tr]:hover:bg-transparent ", className)}
      {...props}
    />
  );
}

interface TableBodyProps extends React.ComponentProps<"tbody"> {
  borderNone?: boolean;
}

function TableBody({ className, borderNone, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-0  before:h-2 before:table-row  before:w-full  before:content-['']",
        borderNone &&
          "[&_tr]:border-0 [&_td]:first:rounded-l-lg [&_td]:last:rounded-r-lg [&_td]:first:overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-secondary data-[state=selected]:bg-secondary data-[state=selected]:shadow-sm  border-b  ",
        "[&>td:first-child]:pl-2.5 [&>td:first-child]:text-foreground [&>td:first-child]:font-medium [&>td:first-child:has([role=checkbox])+td]:text-foreground [&>td:first-child:has([role=checkbox])+td]:font-medium [&>td:last-child]:pr-2.5 [&>th:first-child]:pl-2.5  [&>th:last-child]:pr-2.5",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-muted-foreground text-sm px-2 py-[8.5px]  tracking-4 leading-tight font-normal text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:py-0 [&>[role=checkbox]]:translate-y-[2px] [&:has(button)]:py-0",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        " text-secondary-foreground text-base  px-2 py-3.5 tracking-4 leading-tight font-normal  align-middle whitespace-nowrap [&:has([role=checkbox])]:px-1.5  [&:has([role=checkbox])]:w-[28px] [&:has([role=checkbox])]:py-[7px]  [&>[role=checkbox]]:translate-y-[2px] [&:has([data-slot=avatar])]:py-3 [&:has(button)]:py-0",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-x-2 truncate  ">
        {props.children}
      </span>
    </td>
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "text-foreground leading-normal tracking-4 font-normal mt-4 text-sm",
        className
      )}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
