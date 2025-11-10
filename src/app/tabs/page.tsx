"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignStartVertical,
  ArrowDownNarrowWide,
  Calendar,
  CalendarCheck,
  CircleCheckBig,
  Earth,
  Eye,
  EyeOff,
  Handshake,
  House,
  Inbox,
  List,
  ListCheck,
  ListOrdered,
  Mail,
  MessageCircle,
  MoveHorizontal,
  MoveVertical,
  Phone,
  Scan,
  Scroll,
  Square,
  SquareUserRound,
  Star,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const TabsDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Tab Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] items-center">
          <div className="flex flex-col  space-y-4.5 w-full max-w-[280px]">
            <div className=" flex justify-between items-center w-full max-w-[280px]">
              <p className="text-base text-secondary-foreground">Direction</p>
              <Tabs defaultValue="auto">
                <TabsList>
                  <TabsTrigger value="auto">
                    <MoveHorizontal className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="vertical">
                    <MoveVertical className="size-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className=" flex justify-between items-center w-full max-w-[280px]">
              <p className="text-base text-secondary-foreground">Overflow X</p>
              <Tabs defaultValue="eyeClose">
                <TabsList>
                  <TabsTrigger value="eyeOpen">
                    <Eye className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="eyeClose">
                    <EyeOff className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="narrowWide">
                    <ArrowDownNarrowWide className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="auto">Auto</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className=" flex justify-between items-center w-full max-w-[280px]">
              <p className="text-base text-secondary-foreground">Align</p>
              <Tabs defaultValue="centerAlign">
                <TabsList>
                  <TabsTrigger value="leftAlign">
                    <AlignStartVertical className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="centerAlign">
                    <AlignHorizontalJustifyCenter className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="rightAlign">
                    <AlignHorizontalJustifyEnd className="size-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className=" flex justify-between items-center w-full max-w-[280px]">
              <p className="text-base text-secondary-foreground">Style</p>
              <Tabs defaultValue="list">
                <TabsList>
                  <TabsTrigger value="list">
                    <List className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="orderedList">
                    <ListOrdered className="size-4" />
                  </TabsTrigger>
                  <TabsTrigger value="checkList">
                    <ListCheck className="size-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className=" flex justify-between items-center w-full max-w-[280px]">
              <p className="text-base text-secondary-foreground">
                Border radius
              </p>
              <div className="flex gap-1 items-center">
                <Input placeholder="0" className="w-20" />
                <Tabs defaultValue="scan">
                  <TabsList>
                    <TabsTrigger value="square">
                      <Square className="size-4" />
                    </TabsTrigger>
                    <TabsTrigger value="scan">
                      <Scan className="size-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <div className=" flex justify-between items-center w-full max-w-[280px]">
              <p className="text-base text-secondary-foreground">Style</p>
              <Tabs defaultValue="yes">
                <TabsList>
                  <TabsTrigger value="yes">Yes</TabsTrigger>
                  <TabsTrigger value="no">No</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <Tabs variant="ghost" defaultValue="teams">
            <TabsList>
              <TabsTrigger value="teams">
                <Handshake className="size-4" />
                Teams
              </TabsTrigger>
              <TabsTrigger value="home">
                <House className="size-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="tab">
                <CircleCheckBig className="size-4" />
                Tab
              </TabsTrigger>
              <TabsTrigger value="others">
                <Earth className="size-4" />
                Others
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="comments">
            <TabsList>
              <TabsTrigger value="inbox">
                <Inbox className="size-4" />
                Inbox
              </TabsTrigger>
              <TabsTrigger value="comments">
                <MessageCircle className="size-4" />
                Comments
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="size-4" />
                Upcoming events
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="home" variant="underline">
            <TabsList>
              <TabsTrigger value="home">
                <House className="size-4" />
                Home
              </TabsTrigger>
              <TabsTrigger value="task">
                <CircleCheckBig className="size-4" />
                Task
              </TabsTrigger>
              <TabsTrigger value="contact">
                <SquareUserRound className="size-4" />
                Contact
              </TabsTrigger>
              <TabsTrigger value="others">
                <Earth className="size-4" />
                Others
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="activity" variant="underline">
            <TabsList>
              <TabsTrigger value="activity">
                <Star className="size-4" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="emails">
                <Mail className="size-4" />
                Emails
              </TabsTrigger>
              <TabsTrigger value="calls">
                <Phone className="size-4" />
                Calls
              </TabsTrigger>
              <TabsTrigger value="events">
                <CalendarCheck className="size-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="tasks">
                <CircleCheckBig className="size-4" />
                Tasks
              </TabsTrigger>
              <TabsTrigger value="notes">
                <Scroll className="size-4" />
                Notes
              </TabsTrigger>
              <TabsTrigger value="comments">
                <MessageCircle className="size-4" />
                Comments
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex gap-[50px]">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" orientation="vertical">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex gap-[50px]">
            <Tabs defaultValue="tab1" variant="outline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="outline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="outline"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex gap-[50px]">
            <Tabs defaultValue="tab1" variant="underline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="underline">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="underline"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex gap-[50px]">
            <Tabs defaultValue="tab1" variant="ghost">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="ghost">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="ghost"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
          <div className="flex gap-[50px]">
            <Tabs defaultValue="tab1" variant="browser">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs defaultValue="tab1" size="md" variant="browser">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
            <Tabs
              defaultValue="tab1"
              size="md"
              variant="browser"
              orientation="vertical"
            >
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                <TabsTrigger value="tab5">Tab 5</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 Content</TabsContent>
              <TabsContent value="tab2">Tab 2 Content</TabsContent>
              <TabsContent value="tab3">Tab 3 Content</TabsContent>
              <TabsContent value="tab4">Tab 4 Content</TabsContent>
              <TabsContent value="tab5">Tab 5 Content</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsDemo;
