import { AdvancedCell } from "@/components/ui/advanced-cell";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  CellContent,
  CellPrimitive,
  CellTitle,
} from "@/components/ui/cell-primitive";
import { Diamond, Loader } from "lucide-react";
import React from "react";
const advancedCellDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Advanced Cell Component
        </h1>
        <div className="flex justify-center flex-col  mx-auto gap-[50px] ">
          <div className="flex flex-wrap gap-[10px]">
            <AdvancedCell size="xs">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="sm">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="md">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="lg">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="xl">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="2xl">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="3xl">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="4xl">
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell>
              <CellPrimitive>
                <CellTitle>Field</CellTitle>
              </CellPrimitive>
            </AdvancedCell>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <AdvancedCell size="xs">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="sm">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="md">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="lg">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="xl">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="2xl">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="3xl">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="4xl">
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell>
              <CellPrimitive>
                <Loader className="size-4 animate-spin" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <AdvancedCell size="xs">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="sm">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="md">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="lg">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="xl">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="2xl">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="3xl">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="4xl">
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell>
              <CellPrimitive>
                <Diamond className="size-4" />
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <AdvancedCell size="xs">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="sm">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="md">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="lg">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="xl">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="2xl">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="3xl">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell size="4xl">
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
            <AdvancedCell>
              <CellPrimitive>
                <Avatar size="sm">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CellContent>
                  <CellTitle>Field</CellTitle>
                </CellContent>
              </CellPrimitive>
            </AdvancedCell>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <AdvancedCell size="xs">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="sm">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="md">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="lg">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="xl">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="2xl">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="3xl">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell size="4xl">
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
            <AdvancedCell>
              <AvatarGroup size="xs" max={3}>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/104.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/92.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/96.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/116.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <Avatar size="xs">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/98.jpg" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </AdvancedCell>
          </div>
        </div>
      </div>
    </div>
  );
};

export default advancedCellDemo;
