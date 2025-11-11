import { Badge, BadgeGroup } from "@/components/ui/badge";
import { CommandIcon } from "../../../public/images/svg/commandIcon";
import { Check, CircleCheck, Flag } from "lucide-react";

const Badges = () => {
  return (
    <div className="pt-10 text-center">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
        Badge Component
      </h1>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-center  ">
            <BadgeGroup>
              <Badge variant="outline">Dark</Badge>
              <Badge theme="blue">On schedule</Badge>
              <Badge variant="secondary">
                <Check />
                Completed
              </Badge>
              <Badge theme="red" variant="outline">
                <Flag />
                High
              </Badge>
              <Badge theme="amber" variant="ghost">
                Waiting
              </Badge>
              <Badge variant="outline" theme="green">
                <CircleCheck />
                Success
              </Badge>
              <Badge theme="violet">Design</Badge>
            </BadgeGroup>
          </div>
          <div className="flex justify-center  ">
            <BadgeGroup>
              <Badge variant="outline" size="md">
                Dark
              </Badge>
              <Badge theme="blue">On schedule</Badge>
              <Badge variant="secondary" size="md">
                <Check />
                Completed
              </Badge>
              <Badge theme="red" variant="outline" size="md">
                <Flag />
                High
              </Badge>
              <Badge theme="amber" variant="ghost" size="md">
                Waiting
              </Badge>
              <Badge variant="outline" theme="green" size="md">
                <CircleCheck />
                Success
              </Badge>
              <Badge theme="violet" size="md">
                Design
              </Badge>
            </BadgeGroup>
          </div>
          <div className="flex justify-center  ">
            <BadgeGroup>
              <Badge variant="outline" size="lg">
                Dark
              </Badge>
              <Badge theme="blue">On schedule</Badge>
              <Badge variant="secondary" size="lg">
                <Check />
                Completed
              </Badge>
              <Badge theme="red" variant="outline" size="lg">
                <Flag />
                High
              </Badge>
              <Badge theme="amber" variant="ghost" size="lg">
                Waiting
              </Badge>
              <Badge variant="outline" theme="green" size="lg">
                <CircleCheck />
                Success
              </Badge>
              <Badge theme="violet" size="lg">
                Design
              </Badge>
            </BadgeGroup>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge variant="default" size="sm">
                Gamma
              </Badge>
              <Badge variant="secondary" size="sm">
                Gamma
              </Badge>
              <Badge variant="outline" size="sm">
                Gamma
              </Badge>
              <Badge variant="ghost" size="sm">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge variant="default" size="md">
                Gamma
              </Badge>
              <Badge variant="secondary" size="md">
                Gamma
              </Badge>
              <Badge variant="outline" size="md">
                Gamma
              </Badge>
              <Badge variant="ghost" size="md">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge variant="default" size="lg">
                Gamma
              </Badge>
              <Badge variant="secondary" size="lg">
                Gamma
              </Badge>
              <Badge variant="outline" size="lg">
                Gamma
              </Badge>
              <Badge variant="ghost" size="lg">
                Gamma
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="blue" variant="default" size="sm">
                Gamma
              </Badge>
              <Badge theme="blue" variant="secondary" size="sm">
                Gamma
              </Badge>
              <Badge theme="blue" variant="outline" size="sm">
                Gamma
              </Badge>
              <Badge theme="blue" variant="ghost" size="sm">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge theme="blue" variant="default" size="md">
                Gamma
              </Badge>
              <Badge theme="blue" variant="secondary" size="md">
                Gamma
              </Badge>
              <Badge theme="blue" variant="outline" size="md">
                Gamma
              </Badge>
              <Badge theme="blue" variant="ghost" size="md">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="blue" variant="default" size="lg">
                Gamma
              </Badge>
              <Badge theme="blue" variant="secondary" size="lg">
                Gamma
              </Badge>
              <Badge theme="blue" variant="outline" size="lg">
                Gamma
              </Badge>
              <Badge theme="blue" variant="ghost" size="lg">
                Gamma
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="green" variant="default" size="sm">
                Gamma
              </Badge>
              <Badge theme="green" variant="secondary" size="sm">
                Gamma
              </Badge>
              <Badge theme="green" variant="outline" size="sm">
                Gamma
              </Badge>
              <Badge theme="green" variant="ghost" size="sm">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge theme="green" variant="default" size="md">
                Gamma
              </Badge>
              <Badge theme="green" variant="secondary" size="md">
                Gamma
              </Badge>
              <Badge theme="green" variant="outline" size="md">
                Gamma
              </Badge>
              <Badge theme="green" variant="ghost" size="md">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="green" variant="default" size="lg">
                Gamma
              </Badge>
              <Badge theme="green" variant="secondary" size="lg">
                Gamma
              </Badge>
              <Badge theme="green" variant="outline" size="lg">
                Gamma
              </Badge>
              <Badge theme="green" variant="ghost" size="lg">
                Gamma
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="amber" variant="default" size="sm">
                Gamma
              </Badge>
              <Badge theme="amber" variant="secondary" size="sm">
                Gamma
              </Badge>
              <Badge theme="amber" variant="outline" size="sm">
                Gamma
              </Badge>
              <Badge theme="amber" variant="ghost" size="sm">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge theme="amber" variant="default" size="md">
                Gamma
              </Badge>
              <Badge theme="amber" variant="secondary" size="md">
                Gamma
              </Badge>
              <Badge theme="amber" variant="outline" size="md">
                Gamma
              </Badge>
              <Badge theme="amber" variant="ghost" size="md">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="amber" variant="default" size="lg">
                Gamma
              </Badge>
              <Badge theme="amber" variant="secondary" size="lg">
                Gamma
              </Badge>
              <Badge theme="amber" variant="outline" size="lg">
                Gamma
              </Badge>
              <Badge theme="amber" variant="ghost" size="lg">
                Gamma
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="red" variant="default" size="sm">
                Gamma
              </Badge>
              <Badge theme="red" variant="secondary" size="sm">
                Gamma
              </Badge>
              <Badge theme="red" variant="outline" size="sm">
                Gamma
              </Badge>
              <Badge theme="red" variant="ghost" size="sm">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge theme="red" variant="default" size="md">
                Gamma
              </Badge>
              <Badge theme="red" variant="secondary" size="md">
                Gamma
              </Badge>
              <Badge theme="red" variant="outline" size="md">
                Gamma
              </Badge>
              <Badge theme="red" variant="ghost" size="md">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="red" variant="default" size="lg">
                Gamma
              </Badge>
              <Badge theme="red" variant="secondary" size="lg">
                Gamma
              </Badge>
              <Badge theme="red" variant="outline" size="lg">
                Gamma
              </Badge>
              <Badge theme="red" variant="ghost" size="lg">
                Gamma
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge theme="violet" variant="default" size="sm">
                Gamma
              </Badge>
              <Badge theme="violet" variant="secondary" size="sm">
                Gamma
              </Badge>
              <Badge theme="violet" variant="outline" size="sm">
                Gamma
              </Badge>
              <Badge theme="violet" variant="ghost" size="sm">
                Gamma
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge theme="violet" variant="default" size="md">
                Gamma
              </Badge>
              <Badge theme="violet" variant="secondary" size="md">
                Gamma
              </Badge>
              <Badge theme="violet" variant="outline" size="md">
                Gamma
              </Badge>
              <Badge theme="violet" variant="ghost" size="md">
                Gamma
              </Badge>
            </div>
            <div className="flex  items-center gap-[10px_10px]">
              <Badge theme="violet" variant="default" size="lg">
                Gamma
              </Badge>
              <Badge theme="violet" variant="secondary" size="lg">
                Gamma
              </Badge>
              <Badge theme="violet" variant="outline" size="lg">
                Gamma
              </Badge>
              <Badge theme="violet" variant="ghost" size="lg">
                Gamma
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge variant="default" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="secondary" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="outline" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="ghost" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge variant="default" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="secondary" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="outline" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="ghost" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge variant="default" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="secondary" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="outline" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge variant="ghost" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="blue" variant="default" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="secondary" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="outline" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="ghost" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge showIcon theme="blue" variant="default" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="secondary" size="md">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="outline" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="ghost" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="blue" variant="default" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="secondary" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="outline" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="blue" variant="ghost" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="green" variant="default" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="secondary" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="outline" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="ghost" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge showIcon theme="green" variant="default" size="md">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="secondary" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="outline" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="ghost" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="green" variant="default" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="secondary" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="outline" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="green" variant="ghost" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="amber" variant="default" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="secondary" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="outline" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="ghost" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge showIcon theme="amber" variant="default" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="secondary" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="outline" size="md">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="ghost" size="md">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="amber" variant="default" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="secondary" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="outline" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="amber" variant="ghost" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="red" variant="default" size="sm">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="secondary" size="sm">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="outline" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="ghost" size="sm">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge showIcon theme="red" variant="default" size="md">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="secondary" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="outline" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="ghost" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="red" variant="default" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="secondary" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="outline" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="red" variant="ghost" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
          </div>
          <div className="flex justify-center  gap-[0px_50px]">
            <div className="flex   items-center gap-[10px_10px]">
              <Badge showIcon theme="violet" variant="default" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="secondary" size="sm">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="outline" size="sm">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="ghost" size="sm">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex   items-center gap-[30px_10px]">
              <Badge showIcon theme="violet" variant="default" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="secondary" size="md">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="outline" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="ghost" size="md">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
            <div className="flex  items-center gap-[10px_10px]">
              <Badge showIcon theme="violet" variant="default" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="secondary" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="outline" size="lg">
                <CommandIcon fill="currentColor" />
                Gamma
                <CommandIcon fill="currentColor" />
              </Badge>
              <Badge showIcon theme="violet" variant="ghost" size="lg">
                <CommandIcon fill="currentColor" /> Badge
                <CommandIcon fill="currentColor" />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
