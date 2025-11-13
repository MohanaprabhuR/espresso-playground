"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from "@/components/ui/notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ButtonGroup } from "@/components/ui/button-group";
import { X, XIcon } from "lucide-react";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";

const SonnerDemo = () => {
  const handleShowToast = () => {
    toast.custom((t) => (
      <Notification longText>
        <Avatar size="lg">
          <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
          <X className="size-4" onClick={() => toast.dismiss(t)} />
        </Button>
      </Notification>
    ));
  };

  const handleAlertToast = () => {
    toast.custom(
      (t) => (
        <Notification longText>
          <Avatar size="lg">
            <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
            <X className="size-4" onClick={() => toast.dismiss(t)} />
          </Button>
        </Notification>
      ),
      {
        position: "top-center",
      }
    );
  };
  return (
    <div className="pt-10">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
        Sonner Component
      </h1>
      <div className="flex flex-col justify-center items-center gap-[30px_0] mx-auto">
        <Button
          variant="outline"
          onClick={() => {
            toast.custom(
              () => (
                <Alert longText action>
                  <ExclamationIcon />
                  <AlertContent>
                    <AlertTitle>Your trial ends soon!</AlertTitle>
                    <AlertDescription>
                      Upgrade now to continue enjoying all features without
                      interruption.
                    </AlertDescription>
                    <ButtonGroup destructive className="pt-3.5">
                      <Button>Update</Button>
                      <Button>View plans</Button>
                    </ButtonGroup>
                  </AlertContent>
                  <XIcon className="size-4" />
                </Alert>
              ),
              {
                position: "top-center",
              }
            );
          }}
        >
          Show Toast
        </Button>
        <Button variant="outline" onClick={handleShowToast}>
          Notification Sonner
        </Button>
        <Button variant="outline" onClick={handleAlertToast}>
          Notification Custom Align Sonner
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.custom(
              (t) => (
                <Notification>
                  <NotificationTitle>
                    Update available. Get new features!
                  </NotificationTitle>
                  <Button onClick={() => toast.dismiss(t)} variant="ghost">
                    <X className="size-4" />
                  </Button>
                </Notification>
              ),
              {
                position: "top-center",
              }
            );
          }}
        >
          Custom sonner
        </Button>
      </div>
    </div>
  );
};

export default SonnerDemo;
