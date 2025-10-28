import React from "react";
import {
  CellPrimitive,
  CellContent,
  CellSubtext,
  CellHint,
  CellTitle,
} from "@/components/ui/cell-primitive";
import { Info, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const cellPrimitiveDemo = () => {
  return (
    <div>
      <div className="pt-10 ">
        <h1 className="text-xl font-bold text-center text-gray-900 dark:text-white pb-4">
          Cell Primitive Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] max-w-xs">
          <CellPrimitive>
            <CellContent>
              <CellTitle>
                Subu invited you to Frappe<CellHint>Text</CellHint>
              </CellTitle>
              <CellSubtext>Subu invited you to Frappe</CellSubtext>
            </CellContent>
          </CellPrimitive>
          <CellPrimitive>
            <Info className="size-4" />
            <CellContent>
              <CellTitle>
                Subu invited you to Frappe <CellHint>Text</CellHint>
              </CellTitle>
              <CellSubtext>Subu invited you to Frappe</CellSubtext>
            </CellContent>
          </CellPrimitive>
          <CellPrimitive>
            <CellContent>
              <CellTitle>
                Subu invited you to Frappe <CellHint>Text</CellHint>
              </CellTitle>
              <CellSubtext>Subu invited you to Frappe</CellSubtext>
            </CellContent>
            <Info className="size-4" />
          </CellPrimitive>
          <CellPrimitive>
            <Info className="size-4" />
            <CellContent>
              <CellTitle>
                Subu invited you to Frappe<CellHint>Text</CellHint>
              </CellTitle>
              <CellSubtext>Subu invited you to Frappe</CellSubtext>
            </CellContent>
            <Info className="size-4" />
          </CellPrimitive>
        </div>
      </div>
    </div>
  );
};

export default cellPrimitiveDemo;
