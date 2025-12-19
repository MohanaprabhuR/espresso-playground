import React from "react";
import {
  CellPrimitive,
  CellContent,
  CellSubtext,
  CellHint,
  CellTitle,
} from "@/components/ui/cell-primitive";
import { Pin, Ellipsis, Diamond, Plus, Reply, SmilePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const cellPrimitiveDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Cell Primitive Component
        </h1>
        <div className="flex justify-center flex-col  mx-auto gap-[50px] ">
          <div className="flex justify-center  mx-auto gap-[50px] ">
            <div className="space-y-6">
              <div className="flex gap-x-3 w-full max-w-[375px]">
                <Avatar size="lg">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-2">
                  <CellPrimitive className="justify-between">
                    <CellTitle>
                      Subu invited you to Frappe<CellHint>3:45 pm</CellHint>
                    </CellTitle>
                    <ButtonGroup destructive>
                      <Button variant="ghost">
                        <Pin className="size-4" />
                      </Button>
                      <Button variant="ghost">
                        <Ellipsis className="size-4" />
                      </Button>
                    </ButtonGroup>
                  </CellPrimitive>
                  <CellPrimitive className="p-2.5 bg-card rounded-lg">
                    <CellSubtext>
                      @Abhay Mukherjee Can you put this ticket in the top of
                      your priority list. We have been facing this issue for
                      multiple orders and delivery has been a bit slow . Keep an
                      eye on the progress of this.
                    </CellSubtext>
                  </CellPrimitive>
                </div>
              </div>
              <div className="flex gap-x-3 w-full max-w-[375px]">
                <Avatar size="lg">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-2">
                  <CellPrimitive className="justify-between">
                    <CellTitle>
                      Subu invited you to Frappe<CellHint>4 pm</CellHint>
                    </CellTitle>
                    <ButtonGroup destructive>
                      <Button variant="ghost">
                        <Pin className="size-4" />
                      </Button>
                      <Button variant="ghost">
                        <Ellipsis className="size-4" />
                      </Button>
                    </ButtonGroup>
                  </CellPrimitive>
                  <CellPrimitive className="p-2.5 bg-card rounded-lg">
                    <CellSubtext>
                      @Emily Garcia Please assist with resolving the login issue
                      for the new users. It&apos;s affecting their onboarding
                      process. Let&apos;s ensure a smooth experience for all.
                    </CellSubtext>
                  </CellPrimitive>
                </div>
              </div>
              <div className="flex gap-x-3 w-full max-w-[375px]">
                <Avatar size="lg">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-2">
                  <CellPrimitive className="justify-between">
                    <CellTitle>
                      Hazel<CellHint>4:30 pm</CellHint>
                    </CellTitle>
                    <ButtonGroup destructive>
                      <Button variant="ghost">
                        <Pin className="size-4" />
                      </Button>
                      <Button variant="ghost">
                        <Ellipsis className="size-4" />
                      </Button>
                    </ButtonGroup>
                  </CellPrimitive>
                  <CellPrimitive className="p-2.5 bg-card rounded-lg">
                    <CellSubtext>
                      @Sofia Patel Can you review the recent feedback from users
                      regarding the mobile app performance? It seems there are
                      some concerns about loading times and responsiveness.
                      Let&apos;s address this promptly.
                    </CellSubtext>
                  </CellPrimitive>
                </div>
              </div>
              <div className="flex gap-x-3 w-full max-w-[375px]">
                <Avatar size="lg">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/210.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-2">
                  <CellPrimitive className="justify-between">
                    <CellTitle>
                      Elijah<CellHint>5:15 pm</CellHint>
                    </CellTitle>
                    <ButtonGroup destructive>
                      <Button variant="ghost">
                        <Pin className="size-4" />
                      </Button>
                      <Button variant="ghost">
                        <Ellipsis className="size-4" />
                      </Button>
                    </ButtonGroup>
                  </CellPrimitive>
                  <CellPrimitive className="p-2.5 bg-card rounded-lg">
                    <CellSubtext>
                      @Aarav Singh Please investigate the reported issues with
                      the payment gateway integration. It&apos;s crucial for
                      seamless transactions on our platform. Your expertise will
                      be highly valuable here.
                    </CellSubtext>
                  </CellPrimitive>
                </div>
              </div>
              <div className="flex gap-x-3 w-full max-w-[375px]">
                <Avatar size="lg">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/185.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-2">
                  <CellPrimitive className="justify-between">
                    <CellTitle>
                      Ava<CellHint>6:00 pm</CellHint>
                    </CellTitle>
                    <ButtonGroup destructive>
                      <Button variant="ghost">
                        <Pin className="size-4" />
                      </Button>
                      <Button variant="ghost">
                        <Ellipsis className="size-4" />
                      </Button>
                    </ButtonGroup>
                  </CellPrimitive>
                  <CellPrimitive className="p-2.5 bg-card rounded-lg">
                    <CellSubtext>
                      @Luna Nguyen Could you analyze the customer feedback
                      related to the checkout process? Optimizing this flow can
                      significantly enhance user satisfaction and conversion
                      rates. Looking forward to your insights.
                    </CellSubtext>
                  </CellPrimitive>
                </div>
              </div>
            </div>
            <div className="divide-y divide-border w-full max-w-[700px]">
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Landing page</CellTitle>
                  <CellSubtext>
                    Select the default home page that appears when you log in
                  </CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="View - list view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Conversation View</CellTitle>
                  <CellSubtext>
                    View threads and comments together in tickets
                  </CellSubtext>
                </CellContent>
                <Switch />
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Default send behaviour</CellTitle>
                  <CellSubtext>
                    Set your default send behavior for tickets
                  </CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Send" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Name format</CellTitle>
                  <CellSubtext>
                    Set the format in which names of agents and contacts appear
                    to you
                  </CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="First name - last name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Signature</CellTitle>
                  <CellSubtext>
                    Include your signature in all ticket replies
                  </CellSubtext>
                </CellContent>
                <Button variant="ghost">
                  <Plus className="size-4" />
                  Add signature
                </Button>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Language</CellTitle>
                  <CellSubtext>Language</CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Country Locale</CellTitle>
                  <CellSubtext>Country Locale</CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Time Zone</CellTitle>
                  <CellSubtext>Time zone</CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder=" GMT+5:30" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Time Format</CellTitle>
                  <CellSubtext>
                    Select the 12 or 24-hour time format for your help desk.
                  </CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="12 hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between py-3.5">
                <CellContent>
                  <CellTitle>Date Format</CellTitle>
                  <CellSubtext>
                    Select a date format that applies to your locale.
                  </CellSubtext>
                </CellContent>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="options1">
                      <Diamond className="size-4" />
                      Options 1
                    </SelectItem>
                    <SelectItem value="options2">
                      <Diamond className="size-4" />
                      Options 2
                    </SelectItem>
                    <SelectItem value="options3">
                      <Diamond className="size-4" />
                      Options 3
                    </SelectItem>
                    <SelectItem value="options4">
                      <Diamond className="size-4" />
                      Options 4
                    </SelectItem>
                    <SelectItem value="options5">
                      <Diamond className="size-4" />
                      Options 5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CellPrimitive>
              <CellPrimitive className="justify-between items-start py-3.5">
                <Checkbox />
                <CellContent>
                  <CellTitle>Shorten Date/Time Info</CellTitle>
                  <CellSubtext>
                    If enabled, the current year&apos;s records will indicate
                    the date, month, and time information (31 Aug 09:45 PM)
                    without the year. Likewise, the current date&apos;s records
                    will indicate the time information (09:45 PM) without the
                    date, month, and year.
                  </CellSubtext>
                </CellContent>
              </CellPrimitive>
            </div>
          </div>
          <div className="flex justify-center  mx-auto gap-[50px]">
            <CellPrimitive className="w-full max-w-[454px]">
              <CellContent className="flex flex-row gap-x-2.5">
                <Avatar size="2xl">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>
                    Subu<CellHint>19 July</CellHint>
                  </CellTitle>
                  <CellSubtext>Subu invited you to Frappe</CellSubtext>
                </CellContent>
              </CellContent>
              <ButtonGroup destructive>
                <Button variant="ghost">
                  <Reply className="size-4" />
                </Button>
                <Button variant="ghost">
                  <Pin className="size-4" />
                </Button>
                <Button variant="ghost">
                  <SmilePlus className="size-4" />
                </Button>
                <Button variant="secondary">
                  <Ellipsis className="size-4" />
                </Button>
              </ButtonGroup>
            </CellPrimitive>
          </div>
          <div className="px-3.5 border rounded-2xl divide-y divide-border w-full max-w-[400px] mx-auto">
            <CellPrimitive className="justify-between py-3.5">
              <CellContent>
                <CellTitle>Conversation View</CellTitle>
                <CellSubtext>
                  View threads and comments together in tickets
                </CellSubtext>
              </CellContent>
              <Switch />
            </CellPrimitive>
            <CellPrimitive className="justify-between py-3.5">
              <CellContent>
                <CellTitle>Conversation View</CellTitle>
                <CellSubtext>
                  View threads and comments together in tickets
                </CellSubtext>
              </CellContent>
              <Switch />
            </CellPrimitive>
            <CellPrimitive className="justify-between py-3.5">
              <CellContent>
                <CellTitle>Conversation View</CellTitle>
              </CellContent>
              <Switch checked />
            </CellPrimitive>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cellPrimitiveDemo;
