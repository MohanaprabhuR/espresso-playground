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

              <CloseIcon />
            </Alert>
            <Alert>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
            </Alert>
            <Alert variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert action variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
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

              <CloseIcon />
            </Alert>
          </div>
          <div className="flex flex-wrap  mx-auto gap-[50px] items-center">
            <Alert variant="success">
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <CloseIcon />
            </Alert>
            <Alert variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert action variant="success">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="success">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
            </Alert>
            <Alert action variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
            </Alert>
            <Alert longText variant="success">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="success">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>

              <CloseIcon />
            </Alert>
            <Alert longText variant="success">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="success">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>

              <CloseIcon />
            </Alert>

            <Alert longText action variant="success">
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
            <Alert longText action variant="success">
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

              <CloseIcon />
            </Alert>
            <Alert longText action variant="success">
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
            <Alert longText action variant="success">
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

              <CloseIcon />
            </Alert>
          </div>

          <div className="flex flex-wrap  mx-auto gap-[50px] items-center">
            <Alert variant="warning">
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert action variant="warning">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="warning">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
            </Alert>
            <Alert action variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
            </Alert>
            <Alert longText variant="warning">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="warning">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>

              <CloseIcon />
            </Alert>
            <Alert longText variant="warning">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="warning">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>

              <CloseIcon />
            </Alert>

            <Alert longText action variant="warning">
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
            <Alert longText action variant="warning">
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

              <CloseIcon />
            </Alert>
            <Alert longText action variant="warning">
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
            <Alert longText action variant="warning">
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

              <CloseIcon />
            </Alert>
          </div>

          <div className="flex flex-wrap  mx-auto gap-[50px] items-center">
            <Alert variant="error">
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
            </Alert>
            <Alert variant="error">
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <CloseIcon />
            </Alert>
            <Alert action variant="error">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="error">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
            </Alert>
            <Alert action variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>

              <CloseIcon />
            </Alert>
            <Alert longText variant="error">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="error">
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>

              <CloseIcon />
            </Alert>
            <Alert longText variant="error">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>
            </Alert>
            <Alert longText variant="error">
              <ExclamationIcon />
              <AlertContent>
                <AlertTitle>Your trial ends soon!</AlertTitle>
                <AlertDescription>
                  Upgrade now to continue enjoying all features without
                  interruption.
                </AlertDescription>
              </AlertContent>

              <CloseIcon />
            </Alert>

            <Alert longText action variant="error">
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
            <Alert longText action variant="error">
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

              <CloseIcon />
            </Alert>
            <Alert longText action variant="error">
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
            <Alert longText action variant="error">
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

              <CloseIcon />
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDemo;
