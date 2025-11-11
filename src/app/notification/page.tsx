"use client";
import React from "react";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationTimeStamp,
  NotificationTitle,
} from "@/components/ui/notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Notification Component
        </h1>
        <div className="flex flex-wrap  flex-col mx-auto gap-[20px] items-center  max-w-[400px]">
          <Notification>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
          </Notification>
          <Notification>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <CloseIcon />
          </Notification>
          <Notification>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
          </Notification>
          <Notification>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <CloseIcon />
          </Notification>
          <Notification action>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <Button variant="ghost">Update</Button>
          </Notification>
          <Notification action>
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <ButtonGroup destructive>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </ButtonGroup>
          </Notification>
          <Notification action>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <Button variant="ghost">Update</Button>
          </Notification>
          <Notification action>
            <ExclamationIcon />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <ButtonGroup destructive>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </ButtonGroup>
          </Notification>
          <Notification longText>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
          </Notification>
          <Notification longText action>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification longText action>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
          </Notification>
          <Notification longText action>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification longText>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
          </Notification>
          <Notification longText>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification longText>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
          </Notification>
          <Notification longText>
            <ExclamationIcon />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
            </NotificationContent>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Join</Button>
                <Button variant="outline">Decline</Button>
              </ButtonGroup>
            </NotificationContent>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationContent>
              <NotificationTitle>Jane Johnson</NotificationTitle>
              <NotificationDescription>
                Your task is due tomorrow
              </NotificationDescription>
              <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
              <ButtonGroup destructive className="pt-3.5">
                <Button variant="secondary">Join</Button>
                <Button variant="outline">Decline</Button>
              </ButtonGroup>
            </NotificationContent>
            <Button variant="ghost">
              <CloseIcon />
            </Button>
          </Notification>
          <Notification modal>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <ButtonGroup
              destructive
              orientation="vertical"
              className="flex flex-col gap-1 w-full"
            >
              <Button variant="secondary" className="w-full">
                Update now
              </Button>
              <Button variant="outline" className="w-full">
                Later
              </Button>
            </ButtonGroup>
          </Notification>
          <Notification modal>
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <ButtonGroup destructive className="w-full">
              <Button variant="secondary" className="w-full">
                Update now
              </Button>
              <Button variant="outline" className="w-full">
                Later
              </Button>
            </ButtonGroup>
          </Notification>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;
