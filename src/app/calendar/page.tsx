"use client";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { format, subDays, subMonths, subYears } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ChevronDownIcon, ClockIcon, CommandIcon } from "lucide-react";
import React from "react";
import { DropdownNavProps, DropdownProps } from "react-day-picker";

const CalendarDemo = () => {
  const id = useId();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    );

  const today = new Date();
  const [time, setTime] = useState<string | null>(null);

  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
  ];

  const yesterday = subDays(today, 1);
  const lastWeek = subDays(today, 7);
  const lastMonth = subMonths(today, 1);
  const lastYear = subYears(today, 1);
  const [month, setMonth] = useState(today);

  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    _e(_event);
  };

  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10 text-center">
          Calendar Component
        </h1>

        <div className="flex flex-wrap justify-center items-center mx-auto gap-x-[50px] gap-y-20  ">
          <Calendar mode="single" selected={date} onSelect={setDate} />
          <Calendar mode="multiple" defaultMonth={date} numberOfMonths={2} />
          <Calendar mode="range" defaultMonth={date} numberOfMonths={2} />

          <div className="flex flex-col gap-4">
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              captionLayout="dropdown"
              components={{
                DropdownNav: (props: DropdownNavProps) => {
                  return (
                    <div className="flex z-10 relative  items-center gap-2">
                      {props.children}
                    </div>
                  );
                },
                Dropdown: (props: DropdownProps) => {
                  return (
                    <Select
                      value={String(props.value)}
                      onValueChange={(value) => {
                        if (props.onChange) {
                          handleCalendarChange(value, props.onChange);
                        }
                      }}
                    >
                      <SelectTrigger
                        className=" font-medium first:grow"
                        variant="outline"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                        {props.options?.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={String(option.value)}
                            disabled={option.disabled}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Calendar
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              captionLayout={dropdown}
              components={{
                DropdownNav: (props: DropdownNavProps) => {
                  return (
                    <div className="flex z-10 relative  items-center gap-2">
                      {props.children}
                    </div>
                  );
                },
                Dropdown: (props: DropdownProps) => {
                  return (
                    <Select
                      value={String(props.value)}
                      onValueChange={(value) => {
                        if (props.onChange) {
                          handleCalendarChange(value, props.onChange);
                        }
                      }}
                    >
                      <SelectTrigger
                        className=" font-medium first:grow"
                        variant="outline"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                        {props.options?.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={String(option.value)}
                            disabled={option.disabled}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                },
              }}
            />
            <div className="flex flex-col gap-3">
              <Label htmlFor="dropdown" className="px-1">
                Dropdown
              </Label>
              <Select
                value={dropdown}
                onValueChange={(value) =>
                  setDropdown(
                    value as React.ComponentProps<
                      typeof Calendar
                    >["captionLayout"]
                  )
                }
              >
                <SelectTrigger id="dropdown" size="sm" className="w-full">
                  <SelectValue placeholder="Dropdown" />
                </SelectTrigger>
                <SelectContent align="center">
                  <SelectItem value="dropdown">Month and Year</SelectItem>
                  <SelectItem value="dropdown-months">Month Only</SelectItem>
                  <SelectItem value="dropdown-years">Year Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            captionLayout="dropdown"
            components={{
              DropdownNav: (props: DropdownNavProps) => {
                const [monthDropdown, yearDropdown] = React.Children.toArray(
                  props.children
                );

                return (
                  <div className="flex items-center gap-2 relative z-10">
                    {yearDropdown}
                  </div>
                );
              },
              Dropdown: (props: DropdownProps) => (
                <div className="relative z-20">
                  <Select
                    value={String(props.value)}
                    onValueChange={(value) =>
                      handleCalendarChange(value, props.onChange)
                    }
                  >
                    <SelectTrigger
                      className="font-medium first:grow"
                      variant="outline"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                      {props.options?.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={String(option.value)}
                          disabled={option.disabled}
                        >
                          {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "numeric",
                          }).format(
                            new Date(
                              Number(option.value),
                              date?.getMonth() ?? 0
                            )
                          )}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ),
            }}
          /> */}
          <div className="rounded-2xl  overflow-hidden    border bg-popover">
            <Calendar
              mode="single"
              className="border-0 rounded-none"
              selected={date}
              onSelect={setDate}
            />
            <div className="border-t p-3 bg-popover">
              <div className="flex items-center gap-3">
                <Label htmlFor={id} className="text-xs">
                  Enter time
                </Label>
                <div className="relative grow">
                  <Input
                    id={id}
                    type="time"
                    step="1"
                    defaultValue="12:00:00"
                    className="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <ClockIcon size={16} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border overflow-hidden bg-popover">
              <div className="flex max-sm:flex-col">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (newDate) {
                      setDate(newDate);
                      setTime(null);
                    }
                  }}
                  className="p-2 rounded-none"
                  disabled={[
                    { before: today }, // Dates before today
                  ]}
                />
                <div className="relative w-full max-sm:h-48 sm:w-40">
                  <div className="absolute inset-0 py-4 max-sm:border-t">
                    <ScrollArea className="h-full sm:border-s">
                      <div className="space-y-3">
                        <div className="flex h-5 shrink-0 items-center px-5">
                          <p className="text-sm font-medium">
                            {format(date, "EEEE, d")}
                          </p>
                        </div>
                        <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                          {timeSlots.map(({ time: timeSlot, available }) => (
                            <Button
                              key={timeSlot}
                              size="sm"
                              className="w-full"
                              onClick={() => setTime(timeSlot)}
                              disabled={!available}
                            >
                              {timeSlot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border bg-popover">
              <div className="flex max-sm:flex-col">
                <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
                  <div className="h-full sm:border-e">
                    <div className="flex flex-col px-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(today);
                          setMonth(today);
                        }}
                      >
                        Today
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(yesterday);
                          setMonth(yesterday);
                        }}
                      >
                        Yesterday
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(lastWeek);
                          setMonth(lastWeek);
                        }}
                      >
                        Last week
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(lastMonth);
                          setMonth(lastMonth);
                        }}
                      >
                        Last month
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(lastYear);
                          setMonth(lastYear);
                        }}
                      >
                        Last year
                      </Button>
                    </div>
                  </div>
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (newDate) {
                      setDate(newDate);
                    }
                  }}
                  month={month}
                  onMonthChange={setMonth}
                  className="p-2 rounded-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="date-picker" className="px-1">
              Date
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" id="date-picker">
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  className="rounded-none shadow-none"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-3 ">
            <Label htmlFor="time-picker" className="px-1">
              Time
            </Label>
            <Input
              type="time"
              id="time-picker"
              step="1"
              defaultValue="10:30:00"
              className=" [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
          <div className="rounded-2xl shadow-5xl py-4 px-3.5 bg-popover">
            <Label>Time</Label>
            <div className="flex items-center gap-2 mt-2.5">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="01" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => {
                    const value = String(i + 1).padStart(2, "0");
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="00" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 60 }, (_, i) => {
                    const value = String(i).padStart(2, "0");
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="AM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM">AM</SelectItem>
                  <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="rounded-2xl shadow-5xl py-4 px-3.5 bg-popover">
            <Label>Time</Label>
            <div className="flex items-center gap-2 pt-2.5">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="00" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 60 }, (_, i) => {
                    const value = String(i).padStart(2, "0");
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <Button variant="ghost" className="px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.0104 7.6464C14.0722 7.70823 14.1127 7.78272 14.1353 7.86115C14.1481 7.90536 14.1567 7.95162 14.1567 7.99995C14.1567 8.05396 14.1457 8.10521 14.1298 8.15394C14.1256 8.16681 14.1226 8.18005 14.1174 8.19261C14.0921 8.25307 14.056 8.30785 14.0104 8.3535L9.01019 13.3537C8.81495 13.5487 8.4983 13.5488 8.30309 13.3537C8.10789 13.1585 8.10801 12.8418 8.30309 12.6466L12.4497 8.4999H2.34309C2.06699 8.49985 1.84314 8.27606 1.84314 7.99995C1.84316 7.72385 2.067 7.50005 2.34309 7.5H12.4497L8.30309 3.35335C8.10789 3.15809 8.10787 2.84149 8.30309 2.64624C8.49833 2.451 8.81493 2.45104 9.01019 2.64624L14.0104 7.6464Z"
                    fill="#383838"
                  />
                </svg>
              </Button>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="00" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 60 }, (_, i) => {
                    const value = String(i).padStart(2, "0");
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDemo;
