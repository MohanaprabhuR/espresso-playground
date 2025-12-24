"use client";

import React from "react";
import { faker } from "@faker-js/faker";
import type { ColumnDef } from "@tanstack/react-table";
import { DataGrid } from "@/components/data-grid/data-grid";
import { DataGridKeyboardShortcuts } from "@/components/data-grid/data-grid-keyboard-shortcuts";
import { DataGridViewMenu } from "@/components/data-grid/data-grid-view-menu";
import { DataGridFilterMenu } from "@/components/data-grid/data-grid-filter-menu";
import { DataGridSortMenu } from "@/components/data-grid/data-grid-sort-menu";
import { useDataGrid } from "@/hooks/use-data-grid";
import { DirectionProvider } from "@radix-ui/react-direction";
import type { RowHeightValue } from "@/types/data-grid";
import { getFilterFn } from "@/lib/data-grid-filters";

import { cn } from "@/lib/utils";

import {
  ArrowDownUp,
  ChevronDown,
  Ellipsis,
  EyeOff,
  ListFilter,
  Logs,
  Phone,
  Square,
  CheckSquare2,
  Minus,
  Equal,
  X,
  TextAlignStart,
  TextAlignEnd,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataGridRowHeightMenu } from "@/components/data-grid/data-grid-row-height-menu";
import { getDataGridSelectColumn } from "@/components/data-grid/data-grid-select-column";
import { useSidebar } from "@/components/ui/sidebar";

interface Contact {
  id: string;
  name: {
    label: string;
    image: string;
    value?: string;
  };
  organisation: {
    label: string;
    image: string;
    value?: string;
  };
  status: {
    label: string;
    image: string;
    value?: string;
  };

  email: string;
  mobile: string;
  assigned: {
    label: string;
    image: string;
    value: string;
  };
  lastModified: string;
}

// Combined JSON data structure for all lists
const dataLists = {
  names: [
    {
      label: "Jenny Wilson",
      image: `https://mockmind-api.uifaces.co/content/human/94.jpg`,
    },
    {
      label: "Mariana Rodriguez",
      image: `https://mockmind-api.uifaces.co/content/human/93.jpg`,
    },
    {
      label: "Sophie Chen",
      image: `https://mockmind-api.uifaces.co/content/human/92.jpg`,
    },
    {
      label: "David Lee",
      image: `https://mockmind-api.uifaces.co/content/human/91.jpg`,
    },
    {
      label: "Maria Gomez",
      image: `https://mockmind-api.uifaces.co/content/human/90.jpg`,
    },
    {
      label: "Anika Sharma",
      image: `https://mockmind-api.uifaces.co/content/human/89.jpg`,
    },
    {
      label: "Liam Brown",
      image: `https://mockmind-api.uifaces.co/content/human/88.jpg`,
    },
    {
      label: "Daniel Kim",
      image: `https://mockmind-api.uifaces.co/content/human/87.jpg`,
    },
    {
      label: "Nina Lee",
      image: `https://mockmind-api.uifaces.co/content/human/86.jpg`,
    },
    {
      label: "Avery Clark",
      image: `https://mockmind-api.uifaces.co/content/human/85.jpg`,
    },
    {
      label: "Lucas White",
      image: `https://mockmind-api.uifaces.co/content/human/84.jpg`,
    },
    {
      label: "Chloe Allen",
      image: `https://mockmind-api.uifaces.co/content/human/83.jpg`,
    },
    {
      label: "Evelyn Young",
      image: `https://mockmind-api.uifaces.co/content/human/82.jpg`,
    },
    {
      label: "Nathan Green",
      image: `https://mockmind-api.uifaces.co/content/human/81.jpg`,
    },
    {
      label: "Grace Roberts",
      image: `https://mockmind-api.uifaces.co/content/human/80.jpg`,
    },
  ],
  organisations: [
    {
      label: "Gumroad",
      image: `/images/svg/gumroad.svg`,
    },
    {
      label: "Attentive",
      image: `/images/svg/attentive.svg`,
    },
    {
      label: "Evergreen",
      image: `/images/svg/evergreen.svg`,
    },
    {
      label: "Dropbox",
      image: `/images/svg/dropbox.svg`,
    },
    {
      label: "Hourglass",
      image: `/images/svg/hourglass.svg`,
    },
    {
      label: "Miro",
      image: `/images/svg/miro.svg`,
    },
    {
      label: "Zapier",
      image: `/images/svg/zapier.svg`,
    },
    {
      label: "Figma",
      image: `/images/svg/figma.svg`,
    },
    {
      label: "1password",
      image: `/images/svg/1password.svg`,
    },
    {
      label: "Cooper",
      image: `/images/svg/cooper.svg`,
    },
    {
      label: "ChatGPT",
      image: `/images/svg/chatgpt.svg`,
    },
    {
      label: "Github",
      image: `/images/svg/github.svg`,
    },
    {
      label: "Metalab",
      image: `/images/svg/metalab.svg`,
    },
    {
      label: "Adobe Express",
      image: `/images/svg/adobeexpress.svg`,
    },
    {
      label: "Spotify",
      image: `/images/svg/spotify.svg`,
    },
  ],
  statuses: [
    {
      label: "Open",
      image: `/images/svg/new.svg`,
    },
    {
      label: "Contacted",
      image: `/images/svg/resolved.svg`,
    },
    {
      label: "Nurture",
      image: `/images/svg/waiting.svg`,
    },
    {
      label: "Qualified",
      image: `/images/svg/waiting-closed.svg`,
    },
    {
      label: "Unqualified",
      image: `/images/svg/waiting.svg`,
    },
    {
      label: "Junk",
      image: `/images/svg/status.svg`,
    },
  ],
  emails: [
    "stacy@example.com",
    "mariana@example.com",
    "sophie@example.com",
    "david@example.com",
    "nina@example.com",
    "avery@example.com",
    "lucas@example.com",
    "chloe@example.com",
    "evelyn@example.com",
    "nathan@example.com",
    "grace@example.com",
    "jenny@example.com",
    "mariana@example.com",
    "sophie@example.com",
    "david@example.com",
  ],
  mobiles: [
    "+91 9994445678",
    "+91 8885556789",
    "+91 7777335678",
    "+91 6662225678",
    "+91 1110005678",
    "+91 9998885678",
    "+91 8887775678",
    "+91 7776665678",
    "+91 6665555678",
    "+91 5554445678",
    "+91 4443335678",
    "+91 3332225678",
    "+91 2221115678",
    "+91 1110005678",
    "+91 9998885678",
    "+91 8887775678",
  ],
  assigned: [
    {
      label: "Jenny Wilson",
      image: `https://mockmind-api.uifaces.co/content/human/94.jpg`,
    },
    {
      label: "Mariana Rodriguez",
      image: `https://mockmind-api.uifaces.co/content/human/93.jpg`,
    },
    {
      label: "Sophie Chen",
      image: `https://mockmind-api.uifaces.co/content/human/92.jpg`,
    },
    {
      label: "David Lee",
      image: `https://mockmind-api.uifaces.co/content/human/91.jpg`,
    },
    {
      label: "Maria Gomez",
      image: `https://mockmind-api.uifaces.co/content/human/90.jpg`,
    },
    {
      label: "Anika Sharma",
      image: `https://mockmind-api.uifaces.co/content/human/89.jpg`,
    },
    {
      label: "Liam Brown",
      image: `https://mockmind-api.uifaces.co/content/human/88.jpg`,
    },
    {
      label: "Daniel Kim",
      image: `https://mockmind-api.uifaces.co/content/human/87.jpg`,
    },
    {
      label: "Nina Lee",
      image: `https://mockmind-api.uifaces.co/content/human/86.jpg`,
    },
    {
      label: "Avery Clark",
      image: `https://mockmind-api.uifaces.co/content/human/85.jpg`,
    },
    {
      label: "Lucas White",
      image: `https://mockmind-api.uifaces.co/content/human/84.jpg`,
    },
    {
      label: "Chloe Allen",
      image: `https://mockmind-api.uifaces.co/content/human/83.jpg`,
    },
    {
      label: "Evelyn Young",
      image: `https://mockmind-api.uifaces.co/content/human/82.jpg`,
    },
    {
      label: "Nathan Green",
      image: `https://mockmind-api.uifaces.co/content/human/81.jpg`,
    },
    {
      label: "Grace Roberts",
      image: `https://mockmind-api.uifaces.co/content/human/80.jpg`,
    },
  ],
  lastModified: [
    "2 days ago",
    "1 week ago",
    "3 days ago",
    "4 days ago",
    "5 days ago",
    "6 days ago",
    "1 week ago",
    "1 week ago",
    "8 days ago",
    "9 days ago",
    "10 days ago",
    "11 days ago",
    "12 days ago",
    "13 days ago",
    "14 days ago",
  ],
} as const;

function createEmptyContact(): Contact {
  return {
    id: `contact-new-${crypto.randomUUID()}`,
    name: {
      label: "",
      image: "",
      value: "",
    },
    organisation: {
      label: "",
      image: "",
      value: "",
    },
    status: {
      label: "",
      image: "",
      value: "",
    },
    email: "",
    mobile: "",
    assigned: {
      label: "",
      image: "",
      value: "",
    },
    lastModified: "",
  };
}
// Extract individual lists for backward compatibility
const nameList = dataLists.names;
const organisationList = dataLists.organisations;
const statusList = dataLists.statuses;
const emailList = dataLists.emails;
const mobileList = dataLists.mobiles;
const assinednameList = dataLists.assigned;
const lastModifiedList = dataLists.lastModified;
function generateContacts(): Contact[] {
  // Seed faker with a fixed value to ensure consistent data across page refreshes
  faker.seed(12345);

  const contacts: Contact[] = [];

  for (let index = 0; index < 16; index++) {
    // Reset seed for each contact to ensure deterministic selection
    faker.seed(12345 + index * 100);

    const nameIndex = index % nameList.length;
    const orgIndex = index % organisationList.length;
    const statusIndex = index % statusList.length;
    const emailIndex = index % emailList.length;
    const mobileIndex = index % mobileList.length;
    const assignedIndex = index % assinednameList.length;
    const lastModifiedIndex = index % lastModifiedList.length;

    const name = nameList[nameIndex];
    const org = organisationList[orgIndex];
    const status = statusList[statusIndex];
    const email = emailList[emailIndex];
    const mobile = mobileList[mobileIndex];
    const assigned = assinednameList[assignedIndex];
    const lastModified = lastModifiedList[lastModifiedIndex];

    contacts.push({
      id: `contact-${index}`,
      name: {
        ...name,
        value: name.label,
      },
      organisation: {
        ...org,
        value: org.label,
      },
      status: {
        ...status,
        value: status.label,
      },
      email: email,
      mobile: mobile,
      assigned: {
        ...assigned,
        value: assigned.label,
      },
      lastModified: lastModified,
    });
  }

  return contacts;
}

const DataTableDemo = () => {
  const [data, setData] = React.useState<Contact[]>(generateContacts());
  const dataRef = React.useRef(data);
  const [rowSelection, setRowSelection] = React.useState({});
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");
  const [rowHeight, setRowHeight] = React.useState<RowHeightValue>("short");
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const filterFn = getFilterFn<Contact>();

  // Pre-render dropdown content for immediate display
  const organisationDropdownContent = React.useMemo(
    () => (
      <>
        <SelectItem value="gumroad">
          <Image
            src="/images/svg/gumroad.svg"
            alt="gumroad"
            width="16"
            height="16"
            priority
          />
          Gumroad
        </SelectItem>
        <SelectItem value="attentive">
          <Image
            src="/images/svg/attentive.svg"
            alt="Attentive"
            width="16"
            height="16"
            priority
          />
          Attentive
        </SelectItem>
        <SelectItem value="evergreen">
          <Image
            src="/images/svg/evergreen.svg"
            alt="Evergreen"
            width="16"
            height="16"
            priority
          />
          Evergreen
        </SelectItem>
        <SelectItem value="dropbox">
          <Image
            src="/images/svg/dropbox.svg"
            alt="Dropbox"
            width="16"
            height="16"
            priority
          />
          Dropbox
        </SelectItem>
        <SelectItem value="hourglass">
          <Image
            src="/images/svg/hourglass.svg"
            alt="Hourglass"
            width="16"
            height="16"
            priority
          />
          Hourglass
        </SelectItem>
      </>
    ),
    []
  );

  const statusDropdownContent = React.useMemo(
    () => (
      <>
        <SelectItem value="open" className="gap-x-1.5">
          <Image
            src="/images/svg/new.svg"
            alt="Open"
            width="16"
            height="16"
            priority
          />
          Open
        </SelectItem>
        <SelectItem value="contacted" className="gap-x-1.5">
          <Image
            src="/images/svg/resolved.svg"
            alt="Contacted"
            width="16"
            height="16"
            priority
          />
          Contacted
        </SelectItem>
        <SelectItem value="nurture" className="gap-x-1.5">
          <Image
            src="/images/svg/waiting.svg"
            alt="Nurture"
            width="16"
            height="16"
            priority
          />
          Nurture
        </SelectItem>
        <SelectItem value="qualified" className="gap-x-1.5">
          <Image
            src="/images/svg/waiting-closed.svg"
            alt="Qualified"
            width="16"
            height="16"
            priority
          />
          Qualified
        </SelectItem>
        <SelectItem value="unqualified" className="gap-x-1.5">
          <Image
            src="/images/svg/waiting.svg"
            alt="Unqualified"
            width="16"
            height="16"
            priority
          />
          Unqualified
        </SelectItem>
        <SelectItem value="junk" className="gap-x-1.5">
          <Image
            src="/images/svg/status.svg"
            alt="Junk"
            width="16"
            height="16"
            priority
          />
          Junk
        </SelectItem>
      </>
    ),
    []
  );

  React.useEffect(() => {
    dataRef.current = data;
  }, [data]);

  // Preload dropdown images for immediate display
  React.useEffect(() => {
    const imagesToPreload = [
      // Organisation images
      "/images/svg/gumroad.svg",
      "/images/svg/attentive.svg",
      "/images/svg/evergreen.svg",
      "/images/svg/dropbox.svg",
      "/images/svg/hourglass.svg",
      // Status images
      "/images/svg/new.svg",
      "/images/svg/resolved.svg",
      "/images/svg/waiting.svg",
      "/images/svg/waiting-closed.svg",
      "/images/svg/status.svg",
    ];

    imagesToPreload.forEach((src) => {
      // Preload using link tag
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);

      // Also preload using Image object for immediate browser cache
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const handleDataChange = React.useCallback((newData: Contact[]) => {
    // Handle nested property updates for the name and organisation columns
    const updatedData = newData.map((row) => {
      let updatedRow = { ...row };

      // If name column was updated (stored as string value), update the nested property
      const nameColumnValue = (row as any).name;
      if (typeof nameColumnValue === "string") {
        // Find the original row to preserve the name object structure
        const originalRow = dataRef.current.find((r) => r.id === row.id);
        if (originalRow) {
          updatedRow = {
            ...updatedRow,
            name: {
              ...originalRow.name,
              value: nameColumnValue,
            },
          };
        }
      }

      // If organisation column was updated (stored as string value), update the nested property
      const orgColumnValue = (updatedRow as any).organisation;
      if (typeof orgColumnValue === "string") {
        // Find the original row to preserve the organisation object structure
        const originalRow = dataRef.current.find((r) => r.id === row.id);
        if (originalRow) {
          updatedRow = {
            ...updatedRow,
            organisation: {
              ...originalRow.organisation,
              value: orgColumnValue,
            },
          };
        }
      }

      // If status column was updated (stored as string value), update the nested property
      const statusColumnValue = (updatedRow as any).status;
      if (typeof statusColumnValue === "string") {
        // Find the original row to preserve the status object structure
        const originalRow = dataRef.current.find((r) => r.id === row.id);
        if (originalRow) {
          updatedRow = {
            ...updatedRow,
            status: {
              ...originalRow.status,
              value: statusColumnValue,
            },
          };
        }
      }

      // If assigned column was updated (stored as string value), update the nested property
      const assignedColumnValue = (updatedRow as any).assigned;
      if (typeof assignedColumnValue === "string") {
        // Find the original row to preserve the assigned object structure
        const originalRow = dataRef.current.find((r) => r.id === row.id);
        if (originalRow) {
          updatedRow = {
            ...updatedRow,
            assigned: {
              ...originalRow.assigned,
              value: assignedColumnValue,
            },
          };
        }
      }
      return updatedRow;
    });
    setData(updatedData);
  }, []);

  const columns = React.useMemo<ColumnDef<Contact>[]>(
    () => [
      getDataGridSelectColumn<Contact>({
        size: 26,
        minSize: 26,
        maxSize: 26,
      }),
      {
        id: "name",
        accessorFn: (row) => row.name.value || row.name.label,
        header: "Name",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Name",
          cell: {
            variant: "select",
            options: nameList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 250,
      },

      {
        id: "organisation",
        accessorFn: (row) => row.organisation.value || row.organisation.label,
        header: "Organisation",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Organisation",
          cell: {
            variant: "select",
            options: organisationList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 244,
      },
      {
        id: "status",
        accessorFn: (row) => row.status.value || row.status.label,
        header: "Status",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Status",
          cell: {
            variant: "select",
            className: "gap-1.5",
            imageSize: "h-4 w-4",
            options: statusList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 144,
      },

      {
        id: "email",
        accessorKey: "email",
        header: "Email",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Email",
          cell: {
            variant: "short-text",
          },
        },
        minSize: 216,
      },

      {
        id: "mobile",
        accessorKey: "mobile",
        header: "Mobile no.",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Mobile no.",
          cell: {
            variant: "short-text",
          },
        },
        minSize: 150,
      },

      {
        id: "assigned",
        accessorFn: (row) => row.assigned.value || row.assigned.label,
        header: "Assigned to",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Assigned to",
          cell: {
            variant: "select",
            options: assinednameList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 200,
      },
      {
        id: "lastModified",
        accessorFn: (row) => row.lastModified,
        header: "Last modified/Created",
        enableColumnFilter: true,
        filterFn,
        meta: {
          label: "Last modified/Created",
          cell: {
            variant: "short-text",
          },
        },
        minSize: 150,
      },
    ],
    []
  );

  const onRowAdd = React.useCallback(() => {
    setRowSelection({});
    setData((prev) => [...prev, createEmptyContact()]);
    return {
      rowIndex: data.length,
    };
  }, [data.length]);

  const { table, ...dataGridProps } = useDataGrid({
    columns,
    data,
    onDataChange: handleDataChange,
    onRowAdd,
    getRowId: (row) => row.id,
    enableSearch: true,
    dir: direction,
    rowHeight,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,

    initialState: {
      columnPinning: {
        left: ["select"],
      },
    },
  });

  // Sync local rowHeight to tableMeta on initial mount
  React.useEffect(() => {
    if (dataGridProps.tableMeta?.onRowHeightChange) {
      const currentRowHeight = dataGridProps.tableMeta?.rowHeight;
      if (currentRowHeight !== rowHeight) {
        dataGridProps.tableMeta.onRowHeightChange(rowHeight);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  // Sync tableMeta rowHeight changes back to local state (when menu changes it)
  React.useEffect(() => {
    const tableRowHeight = dataGridProps.tableMeta?.rowHeight;
    if (tableRowHeight && tableRowHeight !== rowHeight) {
      setRowHeight(tableRowHeight);
    }
  }, [dataGridProps.tableMeta?.rowHeight]);

  return (
    <div className="flex flex-col mx-auto  w-full relative pb-11  overflow-scroll">
      <div className="flex pt-5.5 lg:pt-2.5 pb-4.5 justify-start lg:justify-between px-3 lg:px-5 gap-2 overflow-scroll scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="gap-x-2 flex items-center">
          <Select defaultValue="lead-owner">
            <SelectTrigger size="sm" icon={<ChevronDown />}>
              <SelectValue placeholder="Lead Owner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lead-owner">Lead Owner</SelectItem>
              <SelectItem value="jenny-wilson">Jenny Wilson</SelectItem>
              <SelectItem value="mariana">Mariana Rodriguez</SelectItem>
              <SelectItem value="sophie-chen ">Sophie Chen </SelectItem>
              <SelectItem value="david-lee">David Lee</SelectItem>
              <SelectItem value="nina-lee">Nina Lee</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="gumroad">
            <SelectTrigger size="sm" icon={<ChevronDown />}>
              <SelectValue placeholder="List View" />
            </SelectTrigger>
            <SelectContent>{organisationDropdownContent}</SelectContent>
          </Select>

          <Select defaultValue="open">
            <SelectTrigger icon={<ChevronDown />} size="sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>{statusDropdownContent}</SelectContent>
          </Select>
        </div>
        <div className="flex gap-x-2 items-center justify-end w-full">
          <Button
            variant="outline"
            onClick={() =>
              setDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"))
            }
            className="gap-2"
          >
            {direction === "ltr" ? (
              <>
                <TextAlignStart className="size-4" />
                LTR
              </>
            ) : (
              <>
                <TextAlignEnd className="size-4" />
                RTL
              </>
            )}
          </Button>
        </div>
        <div className="flex gap-x-2 items-center">
          <DataGridViewMenu table={table} />
          <DataGridFilterMenu table={table} />
          <DataGridSortMenu table={table} />
          <DataGridRowHeightMenu table={table} />
        </div>
      </div>
      <div className="lg:px-3 px-1 w-full">
        <DirectionProvider dir={direction}>
          <DataGridKeyboardShortcuts
            enableSearch={!!dataGridProps.searchState}
          />

          <DataGrid
            table={table}
            {...dataGridProps}
            dir={direction}
            stretchColumns={true}
          />
        </DirectionProvider>
      </div>
      <div
        className={cn(
          "fixed bottom-0 z-50 right-0 border-t px-2 py-1.5 flex items-center justify-between bg-background transition-[left] duration-200 ease-linear",
          isCollapsed
            ? "left-[var(--sidebar-width-icon)]"
            : "left-[var(--sidebar-width)]"
        )}
      >
        <Tabs defaultValue="20">
          <TabsList>
            <TabsTrigger value="20">20</TabsTrigger>
            <TabsTrigger value="50">50</TabsTrigger>
            <TabsTrigger value="80">80</TabsTrigger>
          </TabsList>
        </Tabs>
        <Label>18 of 32</Label>
      </div>
    </div>
  );
};

export default DataTableDemo;
