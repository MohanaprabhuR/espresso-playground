import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Radio Component
        </h1>
        <div className="flex flex-col mx-auto  max-w-[500px] gap-[50px]">
          <div className="flex mwx-w-[300px] mx-auto gap-[50px]">
            <RadioGroup defaultValue="option-one" className="flex gap-3">
              <RadioGroupItem value="option-one" id="option-one" size="sm" />
              <RadioGroupItem value="option-two" id="option-two" size="sm" />
              <RadioGroupItem
                checked
                value="option-twos"
                id="option-twos"
                size="sm"
                disabled
              />
            </RadioGroup>
            <RadioGroup defaultValue="option-one" className="flex gap-3">
              <RadioGroupItem value="option-one" id="option-one" size="md" />
              <RadioGroupItem
                value="option-twos"
                id="option-twos"
                size="md"
                disabled
              />
            </RadioGroup>
          </div>
          <div className="flex mwx-w-[300px] mx-auto gap-[50px] items-start">
            <RadioGroup defaultValue="option1">
              <RadioGroupItem id="opt1" value="option1" label="Option 1" />
              <RadioGroupItem id="opt2" value="option2" label="Option 2" />
              <RadioGroupItem
                id="opt3"
                value="option3"
                label="Option 3"
                disabled
              />
            </RadioGroup>
            <RadioGroup defaultValue="option1">
              <RadioGroupItem
                id="opts1"
                value="option1"
                label="Option 1"
                size="md"
              />
              <RadioGroupItem
                id="opts2"
                value="option2"
                label="Option 2"
                size="md"
              />
              <RadioGroupItem
                id="opts3"
                value="option3"
                label="Option 3"
                size="md"
                disabled
              />
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioDemo;
