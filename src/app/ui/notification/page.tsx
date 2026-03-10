"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { X, CircleAlert } from "lucide-react";
import {
  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationTimeStamp,
  NotificationTitle,
  NotificationWrapper,
} from "@/components/ui/notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
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
            <X />
          </Notification>
          <Notification>
            <CircleAlert />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
          </Notification>
          <Notification>
            <CircleAlert />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <X />
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
                <X />
              </Button>
            </ButtonGroup>
          </Notification>
          <Notification action>
            <CircleAlert />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <Button variant="ghost">Update</Button>
          </Notification>
          <Notification action>
            <CircleAlert />
            <NotificationTitle>
              Update available. Get new features!
            </NotificationTitle>
            <ButtonGroup destructive>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <X />
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
              <X />
            </Button>
          </Notification>
          <Notification longText action>
            <CircleAlert />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
          </Notification>
          <Notification longText action>
            <CircleAlert />
            <NotificationContent>
              <NotificationTitle>System Update Available</NotificationTitle>
              <NotificationDescription>
                A new update is available for the app. Update now to enjoy new
                features and improvements.
              </NotificationDescription>
            </NotificationContent>
            <Button variant="ghost">
              <X />
            </Button>
          </Notification>
          <Notification longText>
            <NotificationWrapper>
              <NotificationContent>
                <NotificationTitle>System Update Available</NotificationTitle>
                <NotificationDescription>
                  A new update is available for the app. Update now to enjoy new
                  features and improvements.
                </NotificationDescription>
              </NotificationContent>
              <ButtonGroup destructive>
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationWrapper>
          </Notification>
          <Notification longText>
            <NotificationWrapper>
              <NotificationContent>
                <NotificationTitle>System Update Available</NotificationTitle>
                <NotificationDescription>
                  A new update is available for the app. Update now to enjoy new
                  features and improvements.
                </NotificationDescription>
              </NotificationContent>
              <ButtonGroup destructive>
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationWrapper>
            <Button variant="ghost">
              <X />
            </Button>
          </Notification>
          <Notification longText>
            <CircleAlert />
            <NotificationWrapper>
              <NotificationContent>
                <NotificationTitle>System Update Available</NotificationTitle>
                <NotificationDescription>
                  A new update is available for the app. Update now to enjoy new
                  features and improvements.
                </NotificationDescription>
              </NotificationContent>
              <ButtonGroup destructive>
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationWrapper>
          </Notification>
          <Notification longText>
            <CircleAlert />
            <NotificationWrapper>
              <NotificationContent>
                <NotificationTitle>System Update Available</NotificationTitle>
                <NotificationDescription>
                  A new update is available for the app. Update now to enjoy new
                  features and improvements.
                </NotificationDescription>
              </NotificationContent>
              <ButtonGroup destructive>
                <Button variant="secondary">Update Now</Button>
                <Button variant="outline">Later</Button>
              </ButtonGroup>
            </NotificationWrapper>
            <Button variant="ghost">
              <X />
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
            <NotificationWrapper>
              <NotificationContent>
                <NotificationTitle>Jane Johnson</NotificationTitle>
                <NotificationDescription>
                  Your task is due tomorrow
                </NotificationDescription>
                <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
              </NotificationContent>
              <ButtonGroup destructive>
                <Button variant="secondary">Join</Button>
                <Button variant="outline">Decline</Button>
              </ButtonGroup>
            </NotificationWrapper>
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
              <X />
            </Button>
          </Notification>
          <Notification notificationPanel>
            <Avatar size="lg">
              <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationWrapper>
              <NotificationContent>
                <NotificationTitle>Jane Johnson</NotificationTitle>
                <NotificationDescription>
                  Your task is due tomorrow
                </NotificationDescription>
                <NotificationTimeStamp>28 min ago</NotificationTimeStamp>
              </NotificationContent>

              <ButtonGroup destructive>
                <Button variant="secondary">Join</Button>
                <Button variant="outline">Decline</Button>
              </ButtonGroup>
            </NotificationWrapper>
            <Button variant="ghost">
              <X />
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
            <ButtonGroup destructive orientation="vertical" className="w-full">
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
