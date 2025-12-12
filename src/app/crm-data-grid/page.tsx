"use client";

import React from "react";
import { faker } from "@faker-js/faker";
import type { ColumnDef } from "@tanstack/react-table";
import { DataGrid } from "@/components/data-grid/data-grid";
import { DataGridKeyboardShortcuts } from "@/components/data-grid/data-grid-keyboard-shortcuts";
import { useDataGrid } from "@/hooks/use-data-grid";

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
      image: `/images/svg/open.svg`,
    },
    {
      label: "Contacted",
      image: `/images/svg/contacted.svg`,
    },
    {
      label: "Nurture",
      image: `/images/svg/nurture.svg`,
    },
    {
      label: "Qualified",
      image: `/images/svg/qualified.svg`,
    },
    {
      label: "Unqualified",
      image: `/images/svg/unqualified.svg`,
    },
    {
      label: "Junk",
      image: `/images/svg/junk.svg`,
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

  React.useEffect(() => {
    dataRef.current = data;
  }, [data]);

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
      {
        id: "checkbox",
        accessorKey: "",
        header: "",
        meta: {
          cell: {
            variant: "checkbox",
          },
        },
        minSize: 40,
        maxSize: 40,
      },
      {
        id: "name",
        accessorFn: (row) => row.name.value || row.name.label,
        header: "Name",
        meta: {
          cell: {
            variant: "select",
            options: nameList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 170,
      },

      {
        id: "organisation",
        accessorFn: (row) => row.organisation.value || row.organisation.label,
        header: "Organisation",
        meta: {
          cell: {
            variant: "select",
            options: organisationList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 144,
      },
      {
        id: "status",
        accessorFn: (row) => row.status.value || row.status.label,
        header: "Status",
        meta: {
          cell: {
            variant: "select",
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
        meta: {
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
        meta: {
          cell: {
            variant: "short-text",
          },
        },
        minSize: 184,
      },

      {
        id: "assigned",
        accessorFn: (row) => row.assigned.value || row.assigned.label,
        header: "Assigned to",
        meta: {
          cell: {
            variant: "select",
            options: assinednameList.map((item) => ({
              label: item.label,
              value: item.label,
              images: item.image,
            })),
          },
        },
        minSize: 168,
      },
      {
        id: "lastModified",
        accessorFn: (row) => row.lastModified,
        header: "Last Modified",
        meta: {
          cell: {
            variant: "short-text",
          },
        },
        minSize: 128,
      },
    ],
    []
  );

  const { table, ...dataGridProps } = useDataGrid({
    columns,
    data,
    onDataChange: handleDataChange,
    getRowId: (row) => row.id,
    enableSearch: true,
  });

  return (
    <div className="flex flex-col mx-auto gap-y-4.5 w-full h-[calc(100vh-50px)] relative pb-11 pt-2.5 overflow-scroll">
      <div className="flex justify-between items-center w-full px-5">
        <div className="gap-x-2 flex">
          <Select>
            <SelectTrigger size="sm" icon={<ChevronDown />}>
              <SelectValue placeholder="Lead Owner" />
            </SelectTrigger>
            <SelectContent>
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
            <SelectContent>
              <SelectItem value="gumroad">
                <Image
                  src="/images/svg/gumroad.svg"
                  alt="gumroad"
                  width="20"
                  height="20"
                />
                Gumroad
              </SelectItem>
              <SelectItem value="attentive">
                <Image
                  src="/images/svg/attentive.svg"
                  alt="Attentive"
                  width="20"
                  height="20"
                />
                Attentive
              </SelectItem>
              <SelectItem value="evergreen">
                <Image
                  src="/images/svg/evergreen.svg"
                  alt="Evergreen"
                  width="20"
                  height="20"
                />
                Evergreen
              </SelectItem>
              <SelectItem value="dropbox">
                <Image
                  src="/images/svg/dropbox.svg"
                  alt="Dropbox"
                  width="20"
                  height="20"
                />
                Dropbox
              </SelectItem>
              <SelectItem value="hourglass">
                <Image
                  src="/images/svg/hourglass.svg"
                  alt="Hourglass"
                  width="20"
                  height="20"
                />
                Hourglass
              </SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="open">
            <SelectTrigger icon={<ChevronDown />} size="sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">
                <Image
                  src="/images/svg/open.svg"
                  alt="Open"
                  width="16"
                  height="16"
                />
                Open
              </SelectItem>
              <SelectItem value="contacted">
                <Image
                  src="/images/svg/contacted.svg"
                  alt="Contacted"
                  width="16"
                  height="16"
                />
                Contacted
              </SelectItem>
              <SelectItem value="nurture">
                <Image
                  src="/images/svg/nurture.svg"
                  alt="Nurture"
                  width="16"
                  height="16"
                />
                Nurture
              </SelectItem>
              <SelectItem value="qualified">
                <Image
                  src="/images/svg/qualified.svg"
                  alt="Qualified"
                  width="16"
                  height="16"
                />
                Qualified
              </SelectItem>
              <SelectItem value="unqualified">
                <Image
                  src="/images/svg/unqualified.svg"
                  alt="Unqualified"
                  width="16"
                  height="16"
                />
                Unqualified
              </SelectItem>
              <SelectItem value="junk">
                <Image
                  src="/images/svg/junk.svg"
                  alt="Junk"
                  width="16"
                  height="16"
                />
                Junk
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="flex gap-x-2">
            <Select>
              <SelectTrigger icon={<ChevronDown />}>
                <EyeOff />
                <SelectValue placeholder="Columns" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="organisation">Organisation</SelectItem>
                <SelectItem value="start-date">Start Date</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="mobile-no">Mobile No</SelectItem>
                <SelectItem value="assigned-to">Assigned To</SelectItem>
                <SelectItem value="last-modified">Last Modified</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger size="sm" icon={<ChevronDown />}>
                <Logs />
                <SelectValue placeholder="Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="options1">Options</SelectItem>
                <SelectItem value="options2">Options</SelectItem>
                <SelectItem value="options3">Options</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger icon={<ChevronDown />}>
                <ListFilter />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
                <SelectItem value="start-date">Start Date</SelectItem>
                <SelectItem value="reference-document-type">
                  Reference Document Type
                </SelectItem>
                <SelectItem value="reference-doc">Reference Doc</SelectItem>
                <SelectItem value="assigned-to">Assigned To</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="due-date">Due Date</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="description">Description</SelectItem>
                <SelectItem value="created-on">Created On</SelectItem>
                <SelectItem value="last-modified">Last Modified</SelectItem>
                <SelectItem value="modified-by">Modified By</SelectItem>
                <SelectItem value="owner">Owner</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger icon={<ChevronDown />}>
                <ArrowDownUp />
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
                <SelectItem value="start-date">Start Date</SelectItem>
                <SelectItem value="reference-document-type">
                  Reference Document Type
                </SelectItem>
                <SelectItem value="reference-doc">Reference Doc</SelectItem>
                <SelectItem value="assigned-to">Assigned To</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="due-date">Due Date</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="description">Description</SelectItem>
                <SelectItem value="created-on">Created On</SelectItem>
                <SelectItem value="last-modified">Last Modified</SelectItem>
                <SelectItem value="modified-by">Modified By</SelectItem>
                <SelectItem value="owner">Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
      <div className="px-3">
        <DataGridKeyboardShortcuts enableSearch={!!dataGridProps.searchState} />
        <DataGrid {...dataGridProps} table={table} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 md:left-[var(--sidebar-width)] md:right-0 border-t px-2 py-1.5 flex items-center justify-between bg-background">
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
