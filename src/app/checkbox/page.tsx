import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Checkbox Component
        </h1>
        <div className="flex flex-col items-center gap-[30px_0]">
          <div className="flex gap-[0_10px]">
            <Checkbox size="sm" />
            <Checkbox checked={true} size="sm" />
            <Checkbox checked="indeterminate" size="sm" />
          </div>
          <div className="flex gap-[0_10px]">
            <Checkbox size="md" />
            <Checkbox checked={true} size="md" />
            <Checkbox checked="indeterminate" size="md" />
          </div>
          <div className="flex gap-[0_10px]">
            <Checkbox size="md" disabled />
            <Checkbox size="md" checked={true} disabled />
            <Checkbox size="md" checked="indeterminate" disabled />
          </div>
          <div className="flex gap-[0_10px]">
            <Checkbox label="Label" size="sm" />
            <Checkbox label="Label" size="sm" checked={true} />
            <Checkbox label="Label" size="sm" checked="indeterminate" />
            <Checkbox label="Label" size="sm" disabled checked={true} />
          </div>
          <div className="flex gap-[0_10px]">
            <Checkbox label="Label" size="md" />
            <Checkbox label="Label" size="md" checked={true} />
            <Checkbox label="Label" size="md" checked="indeterminate" />
            <Checkbox label="Label" size="md" disabled checked={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxDemo;
