import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Link, ListFilter, Mail, Phone, Search } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const InputDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Input Component
        </h1>
        <div className="flex justify-center flex-col gap-[30px]  mx-auto">
          <div className="flex  gap-[30px] ">
            <Input type="text" placeholder="Text" />
            <Input type="text" size="md" placeholder="Text" />
            <Input type="text" size="lg" placeholder="Text" />
            <Input type="text" size="xl" placeholder="Text" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input variant="outline" type="text" placeholder="Text" />
            <Input variant="outline" type="text" size="md" placeholder="Text" />
            <Input variant="outline" type="text" size="lg" placeholder="Text" />
            <Input variant="outline" type="text" size="xl" placeholder="Text" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input disabled type="text" placeholder="Disabled" />
            <Input disabled type="text" size="md" placeholder="Disabled" />
            <Input disabled type="text" size="lg" placeholder="Disabled" />
            <Input disabled type="text" size="xl" placeholder="Disabled" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input type="text" placeholder="Text" prefix={<Mail />} />
            <Input type="text" size="md" placeholder="Text" prefix={<Mail />} />
            <Input type="text" size="lg" placeholder="Text" prefix={<Mail />} />
            <Input type="text" size="xl" placeholder="Text" prefix={<Mail />} />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              variant="outline"
              type="text"
              placeholder="Text"
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input type="text" placeholder="Text" suffix={<ListFilter />} />
            <Input
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
            />
            <Input
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
            />
            <Input
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              variant="outline"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
            />
            <Input
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
            />
            <Input
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
            />
            <Input
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              variant="outline"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              variant="outline"
              type="text"
              placeholder="Text"
              suffix={<Spinner size="lg" />}
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<Spinner size="lg" />}
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<Spinner size="lg" />}
              prefix={<Mail />}
            />
            <Input
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<Spinner size="lg" />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              status="success"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="success"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="success"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="success"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              status="warning"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="warning"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="warning"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="warning"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              status="error"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="error"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="error"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="error"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>

          <div className="flex  gap-[30px] ">
            <Input
              status="success"
              variant="outline"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="success"
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="success"
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="success"
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              status="warning"
              variant="outline"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="warning"
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="warning"
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="warning"
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              status="error"
              variant="outline"
              type="text"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="error"
              variant="outline"
              type="text"
              size="md"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="error"
              variant="outline"
              type="text"
              size="lg"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
            <Input
              status="error"
              variant="outline"
              type="text"
              size="xl"
              placeholder="Text"
              suffix={<ListFilter />}
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input
              type="text"
              placeholder="Text"
              prefix={
                <Avatar className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              type="text"
              size="md"
              placeholder="Text"
              prefix={
                <Avatar className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              type="text"
              size="lg"
              placeholder="Text"
              prefix={
                <Avatar className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
            <Input
              type="text"
              size="xl"
              placeholder="Text"
              prefix={
                <Avatar className="size-full">
                  <AvatarImage src="https://mockmind-api.uifaces.co/content/human/80.jpg" />
                </Avatar>
              }
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Text" type="date" />
            <Input size="md" placeholder="Text" type="date" />
            <Input size="lg" placeholder="Text" type="date" />
            <Input size="xl" placeholder="Text" type="date" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Text" type="datetime-local" />
            <Input size="md" placeholder="Text" type="datetime-local" />
            <Input size="lg" placeholder="Text" type="datetime-local" />
            <Input size="xl" placeholder="Text" type="datetime-local" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Email" type="email" prefix={<Mail />} />
            <Input
              size="md"
              placeholder="Email"
              type="email"
              prefix={<Mail />}
            />
            <Input
              size="lg"
              placeholder="Email"
              type="email"
              prefix={<Mail />}
            />
            <Input
              size="xl"
              placeholder="Email"
              type="email"
              prefix={<Mail />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Number" type="number" />
            <Input size="md" placeholder="Number" type="number" />
            <Input size="lg" placeholder="Number" type="number" />
            <Input size="xl" placeholder="Number" type="number" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Password" type="password" />
            <Input size="md" placeholder="Password" type="password" />
            <Input size="lg" placeholder="Password" type="password" />
            <Input size="xl" placeholder="Password" type="password" />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Search" type="search" prefix={<Search />} />
            <Input
              size="md"
              placeholder="Search"
              type="search"
              prefix={<Search />}
            />
            <Input
              size="lg"
              placeholder="Search"
              type="search"
              prefix={<Search />}
            />
            <Input
              size="xl"
              placeholder="Search"
              type="search"
              prefix={<Search />}
            />
          </div>

          <div className="flex  gap-[30px] ">
            <Input placeholder="Phone" type="tel" prefix={<Phone />} />
            <Input
              size="md"
              placeholder="Phone"
              type="tel"
              prefix={<Phone />}
            />
            <Input
              size="lg"
              placeholder="Phone"
              type="tel"
              prefix={<Phone />}
            />
            <Input
              size="xl"
              placeholder="Phone"
              type="tel"
              prefix={<Phone />}
            />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Url" type="url" prefix={<Link />} />
            <Input size="md" placeholder="Url" type="url" prefix={<Link />} />
            <Input size="lg" placeholder="Url" type="url" prefix={<Link />} />
            <Input size="xl" placeholder="Url" type="url" prefix={<Link />} />
          </div>
          <div className="flex  gap-[30px] ">
            <Input placeholder="Phone" type="file" />
            <Input size="md" placeholder="Phone" type="file" />
            <Input size="lg" placeholder="Phone" type="file" />
            <Input size="xl" placeholder="Phone" type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
