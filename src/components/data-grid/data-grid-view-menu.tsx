"use client";

import type { Table } from "@tanstack/react-table";
import { CheckIcon, SearchIcon, EyeOff } from "lucide-react";
import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DataGridViewMenuProps<TData> extends React.ComponentProps<
  typeof PopoverContent
> {
  table: Table<TData>;
  disabled?: boolean;
}

export function DataGridViewMenu<TData>({
  table,
  disabled,
  ...props
}: DataGridViewMenuProps<TData>) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const columns = table.getAllColumns().filter((column) => {
    // Filter out columns that shouldn't be shown in the view menu
    return column.id !== "select" && column.getCanHide();
  });

  const filteredColumns = React.useMemo(() => {
    if (!searchQuery.trim()) return columns;
    const query = searchQuery.toLowerCase();
    return columns.filter((column) => {
      const header = column.columnDef.header;
      const headerText =
        typeof header === "string"
          ? header
          : column.id || column.columnDef.meta?.label || "";
      return headerText.toLowerCase().includes(query);
    });
  }, [columns, searchQuery]);

  const visibleColumns = table.getVisibleLeafColumns();
  const allVisible = visibleColumns.length === columns.length;
  const someVisible =
    visibleColumns.length > 0 && visibleColumns.length < columns.length;

  const toggleAllColumns = React.useCallback(
    (checked: boolean) => {
      if (checked) {
        // Show all columns
        table.setColumnVisibility({});
      } else {
        // Hide all columns except the first one (usually checkbox or primary column)
        const columnVisibility: Record<string, boolean> = {};
        columns.forEach((column) => {
          columnVisibility[column.id] = false;
        });
        table.setColumnVisibility(columnVisibility);
      }
    },
    [table, columns]
  );

  const toggleColumn = React.useCallback(
    (columnId: string, checked: boolean) => {
      table.setColumnVisibility((prev) => ({
        ...prev,
        [columnId]: checked,
      }));
    },
    [table]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" disabled={disabled}>
          <EyeOff className="size-4" />
          View
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="end" {...props}>
        <div className="p-2 w-full">
          {/* Search Input */}
          <div className="relative mb-2">
            <Input
              prefix={<SearchIcon />}
              placeholder="Search columns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-8 text-sm"
            />
          </div>

          {/* Select All Checkbox */}
          <div className="px-2 py-1.5 border-b">
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={allVisible}
                onCheckedChange={toggleAllColumns}
                className="h-4 w-4"
                {...(someVisible && { "data-state": "indeterminate" as const })}
              />
              <label
                className="text-sm font-medium cursor-pointer flex-1 tracking-4 leading-normal text-secondary-foreground"
                onClick={() => toggleAllColumns(!allVisible)}
              >
                Select all
              </label>
            </div>
          </div>

          {/* Column List */}
          <div className="max-h-[300px] overflow-y-auto mt-2">
            {filteredColumns.length === 0 ? (
              <div className="px-2 py-4 text-center text-sm text-muted-foreground tracking-4 leading-normal">
                No columns found
              </div>
            ) : (
              <div className="space-y-1">
                {filteredColumns.map((column) => {
                  const isVisible = column.getIsVisible();
                  const header = column.columnDef.header;
                  const headerText =
                    typeof header === "string"
                      ? header
                      : column.id || column.columnDef.meta?.label || column.id;

                  return (
                    <div
                      key={column.id}
                      className={cn(
                        "flex items-center space-x-2 px-2 py-1.5 rounded-lg hover:bg-secondary cursor-pointer",
                        isVisible && "bg-background"
                      )}
                      onClick={() => toggleColumn(column.id, !isVisible)}
                    >
                      <Checkbox
                        checked={isVisible}
                        onCheckedChange={(checked) =>
                          toggleColumn(column.id, checked as boolean)
                        }
                        onClick={(e) => e.stopPropagation()}
                      />
                      <label className="text-sm cursor-pointer flex-1 tracking-4 leading-normal text-secondary-foreground">
                        {headerText}
                      </label>
                      {isVisible && (
                        <CheckIcon className="size-4 text-primary" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
