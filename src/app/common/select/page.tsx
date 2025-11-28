import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectLabel,
} from "@/components/ui/select";

import { CommandIcon } from "../../../../public/images/svg/commandIcon";

const SelectDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Select Component
        </h1>
        <div className="flex  flex-col justify-center gap-[50px]">
          <div className="flex  items-start justify-center gap-[50px]">
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="md">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="lg">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex  items-start justify-center gap-[50px]">
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="md" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="lg" variant="outline">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex  items-start justify-center gap-[50px]">
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="md" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-[30px_0]">
              <Select>
                <SelectTrigger size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger disabled size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="success" size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="warning" size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger status="error" size="lg" variant="ghost">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aaron">
                    <CommandIcon fill="currentColor" />
                    Aaron Menezes
                  </SelectItem>
                  <SelectItem value="vaani">
                    <CommandIcon fill="currentColor" />
                    Vaani Kapoor
                  </SelectItem>
                  <SelectItem value="daniel">
                    <CommandIcon fill="currentColor" />
                    Daniel Kapoor
                  </SelectItem>
                  <SelectItem value="steven">
                    <CommandIcon fill="currentColor" />
                    Steven James
                  </SelectItem>
                  <SelectItem value="dipen">
                    <CommandIcon fill="currentColor" />
                    Dipen Gala
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center flex-1">
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>North America</SelectLabel>
                  <SelectItem value="est">
                    Eastern Standard Time (EST)
                  </SelectItem>
                  <SelectItem value="cst">
                    Central Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="mst">
                    Mountain Standard Time (MST)
                  </SelectItem>
                  <SelectItem value="pst">
                    Pacific Standard Time (PST)
                  </SelectItem>
                  <SelectItem value="akst">
                    Alaska Standard Time (AKST)
                  </SelectItem>
                  <SelectItem value="hst">
                    Hawaii Standard Time (HST)
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Europe & Africa</SelectLabel>
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                  <SelectItem value="cet">
                    Central European Time (CET)
                  </SelectItem>
                  <SelectItem value="eet">
                    Eastern European Time (EET)
                  </SelectItem>
                  <SelectItem value="west">
                    Western European Summer Time (WEST)
                  </SelectItem>
                  <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                  <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                  <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                  <SelectItem value="cst_china">
                    China Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                  <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                  <SelectItem value="ist_indonesia">
                    Indonesia Central Standard Time (WITA)
                  </SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Australia & Pacific</SelectLabel>
                  <SelectItem value="awst">
                    Australian Western Standard Time (AWST)
                  </SelectItem>
                  <SelectItem value="acst">
                    Australian Central Standard Time (ACST)
                  </SelectItem>
                  <SelectItem value="aest">
                    Australian Eastern Standard Time (AEST)
                  </SelectItem>
                  <SelectItem value="nzst">
                    New Zealand Standard Time (NZST)
                  </SelectItem>
                  <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>South America</SelectLabel>
                  <SelectItem value="art">Argentina Time (ART)</SelectItem>
                  <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                  <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                  <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDemo;
