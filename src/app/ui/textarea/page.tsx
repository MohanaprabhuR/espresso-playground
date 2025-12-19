import React from "react";
import { Textarea } from "@/components/ui/textarea";

const TextAreaDemo = () => {
  return (
    <div>
      <div className="pt-10 md:text-center">
        <h1 className="text-xl text-primary font-bold pb-10 md:text-center tracking-4 leading-normal">
          Textarea Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <div className="flex flex-col  mx-auto gap-[50px]">
            <div className="flex md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea placeholder="Enter the text hear...." size="sm" />
              <Textarea placeholder="Enter the text hear...." size="md" />
              <Textarea placeholder="Enter the text hear...." size="lg" />
            </div>
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
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
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
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
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                status="success"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                status="success"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                status="success"
              />
            </div>
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                status="warning"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                status="warning"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                status="warning"
              />
            </div>
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                status="error"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                status="error"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                status="error"
              />
            </div>
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                status="success"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
                status="success"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                status="success"
                variant="outline"
              />
            </div>
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                status="warning"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
                status="warning"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                status="warning"
                variant="outline"
              />
            </div>
            <div className="flex  md:items-center gap-[50px] max-w-[1200px] mx-auto">
              <Textarea
                placeholder="Enter the text hear...."
                variant="outline"
                status="error"
                size="sm"
              />

              <Textarea
                placeholder="Enter the text hear...."
                size="md"
                variant="outline"
                status="error"
              />
              <Textarea
                placeholder="Enter the text hear...."
                size="lg"
                status="error"
                variant="outline"
              />
            </div>
            <div className="flex md:items-center gap-[50px] max-w-[1200px] mx-auto">
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
