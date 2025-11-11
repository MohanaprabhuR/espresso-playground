"use client";
import React from "react";
import { Tag } from "@/components/ui/tags";

const TagsDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Tag Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px] items-center">
          {/* <div className="flex gap-4 items-start">
            <Tag>Discover</Tag>
            <Tag size="md">Discover</Tag>
            <Tag size="lg">Discover</Tag>
            <Tag size="lg" variant="subtle">
              Discover
            </Tag>
            <Tag size="lg" variant="outline">
              Discover
            </Tag>
            <Tag size="lg" variant="ghost">
              Discover
            </Tag>
          </div> */}
          <div className="flex gap-4 items-start">
            <Tag theme="blue">Discover</Tag>
            <Tag size="md" theme="blue">
              Discover
            </Tag>
            <Tag size="lg" theme="blue">
              Discover
            </Tag>
            <Tag size="lg" theme="blue" variant="subtle">
              Discover
            </Tag>
            <Tag size="lg" theme="blue" variant="outline">
              Discover
            </Tag>
            <Tag size="lg" theme="blue" variant="ghost">
              Discover
            </Tag>
          </div>
          {/* <div className="flex gap-4 items-start">
            <Tag theme="green">Discover</Tag>
            <Tag size="md" theme="green">
              Discover
            </Tag>
            <Tag size="lg" theme="green">
              Discover
            </Tag>
            <Tag size="lg" theme="green" variant="subtle">
              Discover
            </Tag>
            <Tag size="lg" theme="green" variant="outline">
              Discover
            </Tag>
            <Tag size="lg" theme="green" variant="ghost">
              Discover
            </Tag>
          </div>
          <div className="flex gap-4 items-start">
            <Tag theme="amber">Discover</Tag>
            <Tag size="md" theme="amber">
              Discover
            </Tag>
            <Tag size="lg" theme="amber">
              Discover
            </Tag>
            <Tag size="lg" theme="amber" variant="subtle">
              Discover
            </Tag>
            <Tag size="lg" theme="amber" variant="outline">
              Discover
            </Tag>
            <Tag size="lg" theme="amber" variant="ghost">
              Discover
            </Tag>
          </div>
          <div className="flex gap-4 items-start">
            <Tag theme="red">Discover</Tag>
            <Tag size="md" theme="red">
              Discover
            </Tag>
            <Tag size="lg" theme="red">
              Discover
            </Tag>
            <Tag size="lg" theme="red" variant="subtle">
              Discover
            </Tag>
            <Tag size="lg" theme="red" variant="outline">
              Discover
            </Tag>
            <Tag size="lg" theme="red" variant="ghost">
              Discover
            </Tag>
          </div>
          <div className="flex gap-4 items-start">
            <Tag theme="violet">Discover</Tag>
            <Tag size="md" theme="violet">
              Discover
            </Tag>
            <Tag size="lg" theme="violet">
              Discover
            </Tag>
            <Tag size="lg" theme="violet" variant="subtle">
              Discover
            </Tag>
            <Tag size="lg" theme="violet" variant="outline">
              Discover
            </Tag>
            <Tag size="lg" theme="violet" variant="ghost">
              Discover
            </Tag>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TagsDemo;
