import React from "react";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

const DividerDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Divider Component
        </h1>
        <div className="flex flex-col items-center gap-[50px_0]">
          <div className="flex flex-col items-center gap-[30px_0] w-full">
            <Divider slot={false} />
            <Divider slot={false} padded paddingSize="sm" />
            <Divider slot={false} padded paddingSize="md" />
            <Divider slot={false} padded paddingSize="lg" />
            <Divider>
              <Button variant="primary">Discover</Button>
            </Divider>
            <Divider orientation="horizontal" align="start">
              <Button variant="secondary">Discover</Button>
            </Divider>
            <Divider orientation="horizontal" align="end">
              <Button variant="outline">Discover</Button>
            </Divider>
          </div>

          <div className="flex justify-center gap-[0_80px] h-96">
            <Divider slot={false} orientation="vertical" />
            <Divider
              slot={false}
              orientation="vertical"
              padded
              paddingSize="sm"
            />
            <Divider
              slot={false}
              orientation="vertical"
              padded
              paddingSize="md"
            />
            <Divider
              slot={false}
              orientation="vertical"
              padded
              paddingSize="lg"
            />

            <Divider slot={true} orientation="vertical">
              <Button variant="primary">Discover</Button>
            </Divider>
            <Divider slot={true} orientation="vertical" align="start">
              <Button variant="secondary">Discover</Button>
            </Divider>
            <Divider orientation="vertical" align="end">
              <Button variant="outline">Discover</Button>
            </Divider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividerDemo;
