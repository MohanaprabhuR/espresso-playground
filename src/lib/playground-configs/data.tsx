"use client";

import * as React from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { DataGrid } from "@/components/data-grid/data-grid";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormLabelText,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDataGrid } from "@/hooks/use-data-grid";
import { cn } from "@/lib/utils";
import type { RowHeightValue } from "@/types/data-grid";
import {
  buildComponentCode,
  type PlaygroundConfig,
} from "@/lib/playground-configs/types";

type FormValues = {
  email: string;
};

type GridRow = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
};

const gridSampleData: GridRow[] = [
  { id: "1", name: "Alex Morgan", email: "alex@example.com", role: "Admin" },
  { id: "2", name: "Sam Rivera", email: "sam@example.com", role: "Editor" },
  { id: "3", name: "Jordan Lee", email: "jordan@example.com", role: "Viewer" },
  { id: "4", name: "Taylor Kim", email: "taylor@example.com", role: "Editor" },
];

const tableSampleData: Payment[] = [
  { id: "1", amount: 120, status: "Paid", email: "alex@example.com" },
  { id: "2", amount: 80, status: "Pending", email: "sam@example.com" },
  { id: "3", amount: 45, status: "Failed", email: "jordan@example.com" },
];

const tableColumns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount}`,
  },
];

function FormPreview({ state }: { state: Record<string, unknown> }) {
  const form = useForm<FormValues>({
    defaultValues: { email: "" },
  });

  React.useEffect(() => {
    if (state.showError) {
      form.setError("email", { message: "Please enter a valid email." });
    } else {
      form.clearErrors("email");
    }
  }, [form, state.showError]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => undefined)}
        className="w-full max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem status={state.showError ? "error" : undefined}>
              <FormLabel>
                <FormLabelText>Email</FormLabelText>
              </FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              {state.showDescription ? (
                <FormDescription>
                  We&apos;ll never share your email.
                </FormDescription>
              ) : null}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function DataGridPreview({ state }: { state: Record<string, unknown> }) {
  const [data, setData] = React.useState(gridSampleData);
  const rowHeight = state.rowHeight as RowHeightValue;

  const columns = React.useMemo<ColumnDef<GridRow>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
        meta: { label: "Name", cell: { variant: "short-text" } },
        minSize: 160,
      },
      {
        id: "email",
        accessorKey: "email",
        header: "Email",
        meta: { label: "Email", cell: { variant: "short-text" } },
        minSize: 180,
      },
      {
        id: "role",
        accessorKey: "role",
        header: "Role",
        meta: { label: "Role", cell: { variant: "short-text" } },
        minSize: 120,
      },
    ],
    [],
  );

  const { table, ...dataGridProps } = useDataGrid({
    columns,
    data,
    onDataChange: setData,
    getRowId: (row) => row.id,
    rowHeight,
    enableSearch: Boolean(state.enableSearch),
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <DataGrid
        table={table}
        {...dataGridProps}
        height={Number(state.height)}
        stretchColumns
      />
    </div>
  );
}

function TableTanstackPreview() {
  const table = useReactTable({
    data: tableSampleData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Table className="table-fixed w-full">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                aria-sort={
                  header.column.getIsSorted() === "asc"
                    ? "ascending"
                    : header.column.getIsSorted() === "desc"
                      ? "descending"
                      : "none"
                }
              >
                {header.isPlaceholder ? null : (
                  <div
                    className={cn(
                      header.column.getCanSort() &&
                        "flex cursor-pointer items-center justify-between gap-2 select-none",
                    )}
                    role={header.column.getCanSort() ? "button" : undefined}
                    onClick={header.column.getToggleSortingHandler()}
                    onKeyDown={(event) => {
                      if (
                        header.column.getCanSort() &&
                        (event.key === "Enter" || event.key === " ")
                      ) {
                        event.preventDefault();
                        header.column.getToggleSortingHandler()?.(event);
                      }
                    }}
                    tabIndex={header.column.getCanSort() ? 0 : undefined}
                  >
                    <span className="truncate">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
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
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export const formConfig: PlaygroundConfig = {
  slug: "form",
  controls: [
    {
      type: "boolean",
      key: "showDescription",
      label: "showDescription",
      defaultValue: true,
    },
    {
      type: "boolean",
      key: "showError",
      label: "showError",
      defaultValue: false,
    },
  ],
  Preview: FormPreview,
  buildCode: (state) =>
    buildComponentCode({
      imports: [
        `import { useForm } from "react-hook-form";`,
        `import { Button } from "@/components/ui/button";`,
        `import {`,
        `  Form,`,
        `  FormControl,`,
        `  FormDescription,`,
        `  FormField,`,
        `  FormItem,`,
        `  FormLabel,`,
        `  FormLabelText,`,
        `  FormMessage,`,
        `} from "@/components/ui/form";`,
        `import { Input } from "@/components/ui/input";`,
      ],
      component: "Form",
      props: {},
      multiline: true,
      children: [
        `<FormField`,
        `  control={form.control}`,
        `  name="email"`,
        `  render={({ field }) => (`,
        `    <FormItem${state.showError ? ' status="error"' : ""}>`,
        `      <FormLabel><FormLabelText>Email</FormLabelText></FormLabel>`,
        `      <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>`,
        state.showDescription
          ? `      <FormDescription>We'll never share your email.</FormDescription>`
          : "",
        `      <FormMessage />`,
        `    </FormItem>`,
        `  )}`,
        `/>`,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  apiRows: [
    {
      name: "Form",
      type: "Component",
      description: "FormProvider wrapper from react-hook-form.",
    },
    {
      name: "FormField",
      type: "Component",
      description: "Connects a field to form state via Controller.",
    },
    {
      name: "FormItem",
      type: "Component",
      description: "Layout wrapper for label, control, and messages.",
    },
    {
      name: "FormMessage",
      type: "Component",
      description: "Displays validation error messages.",
    },
  ],
};

export const dataGridConfig: PlaygroundConfig = {
  slug: "data-grid",
  controls: [
    {
      type: "segmented",
      key: "rowHeight",
      label: "rowHeight",
      options: ["short", "medium", "tall", "extra-tall"],
      defaultValue: "short",
    },
    {
      type: "number",
      key: "height",
      label: "height",
      defaultValue: 280,
      min: 200,
      max: 480,
    },
    {
      type: "boolean",
      key: "enableSearch",
      label: "enableSearch",
      defaultValue: false,
    },
  ],
  Preview: DataGridPreview,
  buildCode: (state) =>
    [
      `import { DataGrid } from "@/components/data-grid/data-grid";`,
      `import { useDataGrid } from "@/hooks/use-data-grid";`,
      "",
      `const { table, ...dataGridProps } = useDataGrid({`,
      `  columns,`,
      `  data,`,
      `  onDataChange: setData,`,
      `  getRowId: (row) => row.id,`,
      `  rowHeight: "${state.rowHeight}",`,
      state.enableSearch ? `  enableSearch: true,` : "",
      `});`,
      "",
      `<DataGrid`,
      `  table={table}`,
      `  {...dataGridProps}`,
      `  height={${state.height}}`,
      `  stretchColumns`,
      `/>`,
    ]
      .filter(Boolean)
      .join("\n"),
  apiRows: [
    {
      name: "useDataGrid",
      type: "hook",
      description: "Manages table state, selection, editing, and virtualization.",
    },
    {
      name: "rowHeight",
      type: "string",
      default: '"short"',
      description: "Row height preset.",
    },
    {
      name: "enableSearch",
      type: "boolean",
      default: "false",
      description: "Enable in-grid search.",
    },
    {
      name: "height",
      type: "number",
      description: "Viewport height in pixels.",
    },
  ],
};

export const tableTanstackConfig: PlaygroundConfig = {
  slug: "table-tanstack",
  controls: [],
  Preview: () => <TableTanstackPreview />,
  buildCode: () =>
    [
      `import {`,
      `  flexRender,`,
      `  getCoreRowModel,`,
      `  getSortedRowModel,`,
      `  useReactTable,`,
      `} from "@tanstack/react-table";`,
      `import {`,
      `  Table,`,
      `  TableBody,`,
      `  TableCell,`,
      `  TableHead,`,
      `  TableHeader,`,
      `  TableRow,`,
      `} from "@/components/ui/table";`,
      "",
      `const table = useReactTable({`,
      `  data,`,
      `  columns,`,
      `  getCoreRowModel: getCoreRowModel(),`,
      `  getSortedRowModel: getSortedRowModel(),`,
      `});`,
    ].join("\n"),
  apiRows: [
    {
      name: "useReactTable",
      type: "hook",
      description: "TanStack Table instance for headless table logic.",
    },
    {
      name: "Table",
      type: "Component",
      description: "Styled table container.",
    },
    {
      name: "flexRender",
      type: "function",
      description: "Renders header and cell content from column definitions.",
    },
  ],
};
