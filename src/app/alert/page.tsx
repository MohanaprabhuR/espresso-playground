"use client";
import React from "react";
import { CloseIcon } from "../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../public/images/svg/exclamationIcon";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { ButtonGroup } from "@/components/ui/button-group";

const AlertDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Alert Component
        </h1>
        <div className="flex flex-wrap  mx-auto gap-[50px] items-center">
          <div className="flex flex-wrap  mx-auto gap-[50px] items-center">
            <Alert>
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText>
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText>
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText>
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText>
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action>
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
            </Alert>
            <Alert longText action>
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action>
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
            </Alert>
            <Alert longText action>
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
          </div>
          <div className="flex flex-wrap  mx-auto gap-[50px] items-center">
            <Alert variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText variant="information">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="information">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText variant="information">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="information">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action variant="information">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
            </Alert>
            <Alert longText action variant="information">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action variant="information">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>
            </Alert>
            <Alert longText action variant="information">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
                <ButtonGroup destructive className="pt-3.5">
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertContent>

              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;
