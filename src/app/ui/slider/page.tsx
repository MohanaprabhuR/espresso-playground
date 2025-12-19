import React from "react";
import { Slider } from "@/components/ui/slider";

const SliderDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
          Slider Component
        </h1>
        <div className="flex flex-col  mx-auto gap-[50px]">
          <Slider defaultValue={[20]} size="sm" knob={true} />
          <Slider defaultValue={[20]} size="md" knob={true} />
          <Slider defaultValue={[20]} size="lg" knob={true} />
          <Slider defaultValue={[20]} size="xl" knob={true} />
          <Slider defaultValue={[20]} size="xl" knob={true} disabled />
          <Slider defaultValue={[20, 50]} size="sm" knob={true} />
          <Slider defaultValue={[20, 40]} size="md" knob={true} />
          <Slider defaultValue={[20, 60]} size="lg" knob={true} />
          <Slider defaultValue={[20, 70]} size="xl" knob={true} />
          <Slider defaultValue={[20, 70]} size="xl" knob={true} disabled />
          <Slider defaultValue={[20]} size="sm" />
          <Slider defaultValue={[20]} size="md" />
          <Slider defaultValue={[20]} size="lg" />
          <Slider defaultValue={[20]} size="xl" />
          <Slider defaultValue={[20]} size="xl" disabled />

          <Slider defaultValue={[20, 50]} size="sm" />
          <Slider defaultValue={[20, 40]} size="md" />
          <Slider defaultValue={[20, 60]} size="lg" />
          <Slider defaultValue={[20, 70]} size="xl" />
          <Slider defaultValue={[20, 70]} size="xl" disabled />
        </div>
      </div>
    </div>
  );
};

export default SliderDemo;
