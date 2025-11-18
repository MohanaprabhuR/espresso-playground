"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommandIcon, MailIcon, SearchIcon } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const modalDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Modal Component
        </h1>
        <div className="flex flex-col items-center  mx-auto gap-[50px] w-full max-w-[100px]">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog - sm</Button>
            </DialogTrigger>
            <DialogContent size="sm">
              <DialogHeader className="flex flex-col gap-y-4">
                <DialogTitle>Title</DialogTitle>
              </DialogHeader>
              <div className="flex justify-between items-center">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aaron">
                      <CommandIcon className="size-4" />
                      Aaron Menezes
                    </SelectItem>
                    <SelectItem value="vaani">
                      <CommandIcon className="size-4" />
                      Vaani Kapoor
                    </SelectItem>
                    <SelectItem value="daniel">
                      <CommandIcon className="size-4" />
                      Daniel Kapoor
                    </SelectItem>
                    <SelectItem value="steven">
                      <CommandIcon className="size-4" />
                      Steven James
                    </SelectItem>
                    <SelectItem value="dipen">
                      <CommandIcon className="size-4" />
                      Dipen Gala
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Switch />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label className="text-accent-foreground">Title</Label>
                <Tabs defaultValue="tab1">
                  <TabsList className="gap-x-1.5">
                    <TabsTrigger
                      value="tab1"
                      className="px-1.5 py-1.5 font-medium"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab2"
                      className="px-1.5 py-1.5 font-medium"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab3"
                      className="px-1.5 py-1.5 font-medium"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab4"
                      className="px-1.5 py-1.5 font-medium"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab5"
                      className="px-1.5 py-1.5 font-medium"
                    >
                      Option
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="space-y-1.5">
                  <Label>Label</Label>
                  <InputGroup>
                    <InputGroupInput
                      type="email"
                      placeholder="Enter your email"
                    />
                    <InputGroupAddon>
                      <MailIcon />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              ))}
              <div className="space-y-1.5">
                <Label>Label</Label>
                <Input type="file" placeholder="file" />
              </div>

              <div className="space-y-1.5">
                <Label>Select from the choices available</Label>

                <RadioGroup
                  defaultValue="option1"
                  className="grid grid-cols-3 gap-3"
                >
                  <RadioGroupItem id="opt1" value="option1" label="Gmail" />
                  <RadioGroupItem id="opt2" value="option2" label="Outlook" />
                  <RadioGroupItem id="opt3" value="option3" label="Microsoft" />
                </RadioGroup>
              </div>

              <DialogFooter className="justify-between ">
                <ButtonGroup aria-label="Media controls" className="h-fit">
                  <Button variant="secondary">Action</Button>
                </ButtonGroup>
                <ButtonGroup
                  aria-label="Media controls"
                  destructive
                  className="h-fit"
                >
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>

                  <Button variant="secondary" type="submit">
                    Save changes
                  </Button>
                </ButtonGroup>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog - md</Button>
            </DialogTrigger>
            <DialogContent size="md">
              <DialogHeader className="flex flex-col gap-y-4">
                <DialogTitle>Title</DialogTitle>
              </DialogHeader>

              <div className="flex justify-between items-center">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aaron">
                      <CommandIcon className="size-4" />
                      Aaron Menezes
                    </SelectItem>
                    <SelectItem value="vaani">
                      <CommandIcon className="size-4" />
                      Vaani Kapoor
                    </SelectItem>
                    <SelectItem value="daniel">
                      <CommandIcon className="size-4" />
                      Daniel Kapoor
                    </SelectItem>
                    <SelectItem value="steven">
                      <CommandIcon className="size-4" />
                      Steven James
                    </SelectItem>
                    <SelectItem value="dipen">
                      <CommandIcon className="size-4" />
                      Dipen Gala
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Switch />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Title</Label>
                <Tabs defaultValue="tab1" size="md">
                  <TabsList className="gap-x-1.5">
                    <TabsTrigger
                      value="tab1"
                      className="py-1.5 px-[14.1px] font-medium tracking-4"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab2"
                      className="py-1.5 px-[14.1px] font-medium tracking-4"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab3"
                      className="py-1.5 px-[14.1px] font-medium tracking-4"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab4"
                      className="py-1.5 px-[14.1px] font-medium tracking-4"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab5"
                      className="py-1.5 px-[14.1px] font-medium tracking-4"
                    >
                      Option
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <Label>Label</Label>
                  <InputGroup>
                    <InputGroupInput
                      type="email"
                      placeholder="Enter your email"
                    />
                    <InputGroupAddon>
                      <MailIcon />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              ))}
              <div className="space-y-1.5">
                <Label>Label</Label>
                <Input type="file" placeholder="file" />
              </div>

              <div className="space-y-1.5">
                <Label>Select from the choices available</Label>

                <RadioGroup
                  defaultValue="option1"
                  className="grid grid-cols-3 gap-3"
                >
                  <RadioGroupItem id="opt1" value="option1" label="Gmail" />
                  <RadioGroupItem id="opt2" value="option2" label="Outlook" />
                  <RadioGroupItem id="opt3" value="option3" label="Microsoft" />
                </RadioGroup>
              </div>

              <DialogFooter className="justify-between ">
                <ButtonGroup aria-label="Media controls" className="h-fit">
                  <Button variant="secondary">Action</Button>
                </ButtonGroup>
                <ButtonGroup
                  aria-label="Media controls"
                  destructive
                  className="h-fit"
                >
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>

                  <Button variant="secondary" type="submit">
                    Save changes
                  </Button>
                </ButtonGroup>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog - lg</Button>
            </DialogTrigger>
            <DialogContent size="lg">
              <DialogHeader className="flex flex-col gap-y-4">
                <DialogTitle>Title</DialogTitle>
              </DialogHeader>
              <div className="flex justify-between items-center">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aaron">
                      <CommandIcon className="size-4" />
                      Aaron Menezes
                    </SelectItem>
                    <SelectItem value="vaani">
                      <CommandIcon className="size-4" />
                      Vaani Kapoor
                    </SelectItem>
                    <SelectItem value="daniel">
                      <CommandIcon className="size-4" />
                      Daniel Kapoor
                    </SelectItem>
                    <SelectItem value="steven">
                      <CommandIcon className="size-4" />
                      Steven James
                    </SelectItem>
                    <SelectItem value="dipen">
                      <CommandIcon className="size-4" />
                      Dipen Gala
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Switch />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Title</Label>
                <Tabs defaultValue="tab1">
                  <TabsList className="gap-x-1.5">
                    <TabsTrigger
                      className="py-1.5 px-[30.1px] font-medium"
                      value="tab1"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      className="py-1.5 px-[30.1px] font-medium"
                      value="tab2"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      className="py-1.5 px-[30.1px] font-medium"
                      value="tab3"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      className="py-1.5 px-[30.1px] font-medium"
                      value="tab4"
                    >
                      Option
                    </TabsTrigger>
                    <TabsTrigger
                      className="py-1.5 px-[30.1px] font-medium"
                      value="tab5"
                    >
                      Option
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="space-y-1.5">
                  <Label>Label</Label>
                  <InputGroup>
                    <InputGroupInput
                      type="email"
                      placeholder="Enter your email"
                    />
                    <InputGroupAddon>
                      <MailIcon />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              ))}
              <div className="space-y-1.5">
                <Label>Label</Label>
                <Input type="file" placeholder="file" />
              </div>

              <div className="space-y-1.5">
                <Label>Select from the choices available</Label>

                <RadioGroup
                  defaultValue="option1"
                  className="grid grid-cols-3 gap-3"
                >
                  <RadioGroupItem id="opt1" value="option1" label="Gmail" />
                  <RadioGroupItem id="opt2" value="option2" label="Outlook" />
                  <RadioGroupItem id="opt3" value="option3" label="Microsoft" />
                </RadioGroup>
              </div>
              <DialogFooter className="justify-between ">
                <ButtonGroup aria-label="Media controls" className="h-fit">
                  <Button variant="secondary">Action</Button>
                </ButtonGroup>
                <ButtonGroup
                  aria-label="Media controls"
                  destructive
                  className="h-fit"
                >
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>

                  <Button variant="secondary" type="submit">
                    Save changes
                  </Button>
                </ButtonGroup>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Share</Button>
            </DialogTrigger>
            <DialogContent className="gap-4 ">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default modalDemo;
