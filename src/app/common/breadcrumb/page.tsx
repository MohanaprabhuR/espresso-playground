import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommandIcon } from "../../../../public/images/svg/commandIcon";

const BreadcrumbDemo = () => {
  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
          Breadcrumb Component
        </h1>
        <div className="gap-[30px_0] flex flex-col">
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Link</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Link</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Link
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" />
                    Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Link
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" />
                    Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Link</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Link</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Link
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" /> Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Link
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" />
                    Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator type="slash" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" /> Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" /> Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="sm">
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" /> Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px_0]">
            <Breadcrumb>
              <BreadcrumbList size="md">
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Documentation</DropdownMenuItem>
                      <DropdownMenuItem>Themes</DropdownMenuItem>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <CommandIcon fill="currentColor" />
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <CommandIcon fill="currentColor" /> Breadcrumb
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDemo;
