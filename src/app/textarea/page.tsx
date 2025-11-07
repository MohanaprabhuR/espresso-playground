import React from "react";
import { Textarea } from "@/components/ui/textarea";

const TextAreaDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Tabs Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <div className="flex  mx-auto gap-[50px]">
            <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
              <Textarea placeholder="Enter the text hear...." size="sm" />
              <Textarea placeholder="Enter the text hear...." size="md" />
              <Textarea placeholder="Enter the text hear...." size="lg" />
            </div>
            <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
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
            <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
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
          </div>
          <div className="flex  mx-auto gap-[50px]">
            <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
              <Textarea placeholder="Enter the text hear...." state="success" />
              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                state="error"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                state="warning"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                disabled
              />
            </div>
            <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                state="success"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                state="error"
                variant="outline"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                variant="outline"
                state="warning"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                disabled
                variant="outline"
              />
            </div>
            <div className="flex  flex-col justify-center gap-[50px] max-w-[400px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="ghost"
                state="success"
              />
              <Textarea
                placeholder="Enter the text hear...."
                state="error"
                size="md"
                variant="ghost"
              />
              <Textarea
                placeholder="Enter the text hear...."
                state="warning"
                size="lg"
                variant="ghost"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                disabled
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAreaDemo;
