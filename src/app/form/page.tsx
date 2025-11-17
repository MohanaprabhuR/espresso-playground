"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CommandIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

// ✅ Schema validation
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const FormFieldDemo = () => {
  // ✅ Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // ✅ Handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="pt-10 ">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white pb-10 text-center tracking-4 leading-normal">
        Form Field Component
      </h1>

      <div className="flex flex-col mx-auto gap-10 w-full  items-center justify-center">
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="User Name..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="User Name..." {...field} size="md" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aaron">
                          <CommandIcon className="size-4" />
                          Aaron Menezes
                        </SelectItem>
                        <SelectItem value="vaani">
                          <CommandIcon className="size-4" />
                          Vaani Kapoor
                        </SelectItem>
                        <SelectItem value="daniel">
                          <CommandIcon className="size-4" />
                          Daniel Kapoor
                        </SelectItem>
                        <SelectItem value="steven">
                          <CommandIcon className="size-4" />
                          Steven James
                        </SelectItem>
                        <SelectItem value="dipen">
                          <CommandIcon className="size-4" />
                          Dipen Gala
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aaron">
                          <CommandIcon className="size-4" />
                          Aaron Menezes
                        </SelectItem>
                        <SelectItem value="vaani">
                          <CommandIcon className="size-4" />
                          Vaani Kapoor
                        </SelectItem>
                        <SelectItem value="daniel">
                          <CommandIcon className="size-4" />
                          Daniel Kapoor
                        </SelectItem>
                        <SelectItem value="steven">
                          <CommandIcon className="size-4" />
                          Steven James
                        </SelectItem>
                        <SelectItem value="dipen">
                          <CommandIcon className="size-4" />
                          Dipen Gala
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Type something" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Type something" size="md" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormFieldDemo;
