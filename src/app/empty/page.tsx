import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  BellIcon,
  PlusIcon,
  RefreshCcwIcon,
  UploadCloudIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

const EmptyDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Empty Component
        </h1>
        <div className="flex flex-col gap-[30px_0]">
          <Empty className="border  w-full max-w-[500px] mx-auto">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <UploadCloudIcon />
              </EmptyMedia>
              <EmptyTitle>Cloud Storage Empty</EmptyTitle>
              <EmptyDescription>
                Upload files to your cloud storage to access them anywhere.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm">
                Upload Files
              </Button>
            </EmptyContent>
          </Empty>

          <Empty className="border w-full max-w-[500px] mx-auto">
            <EmptyHeader>
              <EmptyMedia>
                <AvatarGroup size="xs">
                  <Avatar>
                    <AvatarImage
                      src="https://mockmind-api.uifaces.co/content/human/80.jpg"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      src="https://mockmind-api.uifaces.co/content/human/92.jpg"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      src="https://mockmind-api.uifaces.co/content/human/104.jpg"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
              </EmptyMedia>
              <EmptyTitle>No Team Members</EmptyTitle>
              <EmptyDescription>
                Invite your team to collaborate on this project.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="outline">
                <PlusIcon className="size-4" />
                Invite Members
              </Button>
            </EmptyContent>
          </Empty>
          <Empty className="w-full max-w-[500px] bg-muted mx-auto">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <BellIcon className="size-4" />
              </EmptyMedia>
              <EmptyTitle>No Notifications</EmptyTitle>
              <EmptyDescription>
                You&apos;re all caught up. New notifications will appear here.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm">
                <RefreshCcwIcon className="size-4" />
                Refresh
              </Button>
            </EmptyContent>
          </Empty>
          <Empty className="w-full max-w-[500px] mx-auto border">
            <EmptyHeader>
              <EmptyMedia variant="default">
                <Avatar size="3xl" status="sleep">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </EmptyMedia>
              <EmptyTitle>User Offline</EmptyTitle>
              <EmptyDescription>
                This user is currently offline. You can leave a message to
                notify them or try again later.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="destructive">
                Leave Message
              </Button>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    </div>
  );
};

export default EmptyDemo;
