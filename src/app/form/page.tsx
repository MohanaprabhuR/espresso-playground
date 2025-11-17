"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormLabelHintText,
  FormLabelText,
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
import { CommandIcon, ListFilter, MailIcon } from "lucide-react";
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
                    <Input
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                    <Input
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type something" size="md" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>

                  <FormDescription>Hint text goes here</FormDescription>
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

                  <FormDescription>Hint text goes here</FormDescription>
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

                  <FormDescription>Hint text goes here</FormDescription>
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
                  <FormDescription>Hint text goes here</FormDescription>
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
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
          </div>
        </Form>

        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                    <Input
                      status="success"
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                      <SelectTrigger status="success">
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
                      <SelectTrigger size="md" status="success">
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
                    <Textarea placeholder="Type something" status="success" />
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
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="success"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger status="success">
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md" status="success">
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type something" status="success" />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="success"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="success">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="success"
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="success">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="success"
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="success">
                  <FormControl>
                    <Select>
                      <SelectTrigger status="success">
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

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="success">
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md" status="success">
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

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="success">
                  <FormControl>
                    <Textarea placeholder="Type something" status="success" />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="success">
                  <FormControl>
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="success"
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
          </div>
        </Form>

        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                    <Input
                      status="warning"
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                      <SelectTrigger status="warning">
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
                      <SelectTrigger size="md" status="warning">
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
                    <Textarea placeholder="Type something" status="warning" />
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
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="warning"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger status="warning">
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md" status="warning">
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type something" status="warning" />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="warning"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="warning">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="warning"
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="warning">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="warning"
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="warning">
                  <FormControl>
                    <Select>
                      <SelectTrigger status="warning">
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

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="warning">
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md" status="warning">
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

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="warning">
                  <FormControl>
                    <Textarea placeholder="Type something" status="warning" />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="warning">
                  <FormControl>
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="warning"
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
          </div>
        </Form>

        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                    <Input
                      status="error"
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                      <SelectTrigger status="error">
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
                      <SelectTrigger size="md" status="error">
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
                    <Textarea placeholder="Type something" status="error" />
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
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="error"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger status="error">
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md" status="error">
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type something" status="error" />
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
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="error"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="error">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="error"
                      {...field}
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="error">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="error"
                      {...field}
                      size="md"
                      prefix={<MailIcon className="size-4" />}
                      suffix={<ListFilter className="size-4" />}
                    />
                  </FormControl>

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="error">
                  <FormControl>
                    <Select>
                      <SelectTrigger status="error">
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

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="error">
                  <FormControl>
                    <Select>
                      <SelectTrigger size="md" status="error">
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

                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="error">
                  <FormControl>
                    <Textarea placeholder="Type something" status="error" />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem status="error">
                  <FormControl>
                    <Textarea
                      placeholder="Type something"
                      size="md"
                      status="error"
                    />
                  </FormControl>
                  <FormDescription>Hint text goes here</FormDescription>
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
