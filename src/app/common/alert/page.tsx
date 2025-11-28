"use client";
import React from "react";
import { CloseIcon } from "../../../../public/images/svg/closeIcon";
import { ExclamationIcon } from "../../../../public/images/svg/exclamationIcon";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
  AlertWrapper,
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
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost" iconOnly>
                <CloseIcon className="size-4" />
              </Button>
            </Alert>
            <Alert action>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost" iconOnly>
                <CloseIcon className="size-4" />
              </Button>
            </Alert>
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action>
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
            </Alert>
            <Alert action>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action>
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
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
              <Button iconOnly variant="ghost">
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action>
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action>
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action>
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action>
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="information">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
            </Alert>
            <Alert action variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="information">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
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

              <Button iconOnly variant="ghost">
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
              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action variant="information">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="information">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action variant="information">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="information">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
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
              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action variant="success">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="success">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
            </Alert>
            <Alert action variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="success">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action variant="success">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="success">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action variant="success">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="success">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action variant="warning">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="warning">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
            </Alert>
            <Alert action variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="warning">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action variant="warning">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="warning">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action variant="warning">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="warning">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert action variant="error">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="error">
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
            </Alert>
            <Alert action variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <Button variant="ghost">Update</Button>
            </Alert>
            <Alert action variant="error">
              <ExclamationIcon />
              <AlertTitle>Your trial ends soon!</AlertTitle>
              <ButtonGroup destructive>
                <Button variant="ghost">Update</Button>
                <Button variant="ghost" iconOnly>
                  <CloseIcon />
                </Button>
              </ButtonGroup>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
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

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>

            <Alert longText action variant="error">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="error">
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>

              <Button iconOnly variant="ghost">
                <CloseIcon />
              </Button>
            </Alert>
            <Alert longText action variant="error">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
            </Alert>
            <Alert longText action variant="error">
              <ExclamationIcon />
              <AlertWrapper>
                <AlertContent>
                  <AlertTitle>Your trial ends soon!</AlertTitle>
                  <AlertDescription>
                    Upgrade now to continue enjoying all features without
                    interruption.
                  </AlertDescription>
                </AlertContent>
                <ButtonGroup destructive>
                  <Button variant="outline">Update now</Button>
                  <Button variant="ghost">View plans</Button>
                </ButtonGroup>
              </AlertWrapper>
              <Button iconOnly variant="ghost">
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
