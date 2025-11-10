import React from "react";
import { Textarea } from "@/components/ui/textarea";

const TextAreaDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Textarea Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <div className="flex flex-col  mx-auto gap-[50px]">
            <div className="flex   items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea placeholder="Enter the text hear...." size="sm" />
              <Textarea placeholder="Enter the text hear...." size="md" />
              <Textarea placeholder="Enter the text hear...." size="lg" />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                size="sm"
                placeholder="Enter the text hear...."
                variant="outline"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                variant="outline"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea placeholder="Enter the text hear...." variant="ghost" />
              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="ghost"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                variant="ghost"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                state="success"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                state="success"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="success"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                state="warning"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                state="warning"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="warning"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                state="error"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                state="error"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="error"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                state="success"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
                state="success"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="success"
                variant="outline"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                state="warning"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
                state="warning"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="warning"
                variant="outline"
              />
            </div>
            <div className="flex  items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                state="error"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
                state="error"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="error"
                variant="outline"
              />
            </div>
            <div className="flex items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                disabled
                size="sm"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                disabled
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAreaDemo;
