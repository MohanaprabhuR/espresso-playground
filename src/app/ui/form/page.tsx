"use client";
import { useState } from "react";
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
import {
  CommandIcon,
  FileUp,
  ListFilter,
  Locate,
  MailIcon,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const SignupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be 8 characters"),
    confirm_password: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type SignupType = z.infer<typeof SignupSchema>;

const FormFieldDemo = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (values: SignupType) => {
    console.log("Signup Data:", values);
  };

  return (
    <div className="pt-10 ">
      <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
        Form Field Component
      </h1>

      <div className="flex flex-col mx-auto gap-10 w-full  items-center justify-center">
        <Form {...form}>
          <div className=" flex gap-x-4 w-full justify-center items-center">
            <FormField
              control={form.control}
              name="example"
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full">
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" size="md">
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full">
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" size="md">
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full">
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" size="md">
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="success">
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="success"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="success"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="success">
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="success"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem status="success">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="success"
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
              render={({}) => (
                <FormItem status="success">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="success"
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
              render={({}) => (
                <FormItem status="success">
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="success">
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
              render={({}) => (
                <FormItem status="success">
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="success"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="warning">
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="warning"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="warning"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="warning">
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="warning"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem status="warning">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="warning"
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
              render={({}) => (
                <FormItem status="warning">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="warning"
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
              render={({}) => (
                <FormItem status="warning">
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="warning">
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
              render={({}) => (
                <FormItem status="warning">
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="warning"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="error">
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
              render={({}) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="error"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Input
                      status="error"
                      placeholder="User Name..."
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="error">
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
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Label</FormLabelText>
                    <FormLabelHintText>Help text</FormLabelHintText>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="error"
                      >
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
              render={({}) => (
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
              render={({}) => (
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
              render={({}) => (
                <FormItem status="error">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="error"
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
              render={({}) => (
                <FormItem status="error">
                  <FormControl>
                    <Input
                      placeholder="User Name..."
                      status="error"
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
              render={({}) => (
                <FormItem status="error">
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full" status="error">
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
              render={({}) => (
                <FormItem status="error">
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="w-full"
                        size="md"
                        status="error"
                      >
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
              render={({}) => (
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
              render={({}) => (
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

        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog Form</Button>
          </DialogTrigger>
          <DialogContent size="lg">
            <DialogHeader>
              <DialogTitle>New lesson</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormLabel>
                      <FormLabelText>Title</FormLabelText>
                    </FormLabel>
                    <FormControl>
                      <Input
                        variant="outline"
                        placeholder="Introduction to product design"
                      />
                    </FormControl>
                    <FormDescription>
                      <Checkbox label="Include a preview" />
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormLabel>
                      <FormLabelText>Content</FormLabelText>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type something..."
                        size="md"
                        variant="outline"
                      />
                    </FormControl>
                    <FormDescription>
                      To add a YouTube video, paste the URL of the video in the
                      editor. learn more
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormLabel>
                      <FormLabelText>Attachment</FormLabelText>
                    </FormLabel>
                    <FormControl>
                      <InputGroup variant="outline">
                        <InputGroupInput
                          placeholder="Choose file or drag here..."
                          size="md"
                        />
                        <InputGroupAddon align="inline-start">
                          <FileUp />
                        </InputGroupAddon>

                        <InputGroupAddon align="inline-end">
                          <Button variant="secondary">Upload</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormControl>
                    <FormDescription>
                      Add your source file here. e,g. .jpg, .pdf, .png
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormLabel>
                      <FormLabelText>Instructor notes</FormLabelText>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type something..."
                        size="md"
                        variant="outline"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="w-full" size="md">
                  Create
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Billing Form</Button>
          </DialogTrigger>
          <DialogContent size="lg">
            <DialogHeader>
              <p className="text-sm tracking-4 leading-normal text-muted-foreground">
                Step 1/2
              </p>
              <DialogTitle className="text-xl font-semibold">
                Billing details
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormControl>
                      <Progress value={20} size="xs" />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormLabel>
                      <FormLabelText>Billing name</FormLabelText>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name"></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <div className="flex gap-x-5">
                <FormField
                  control={form.control}
                  name="example"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>Country</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option2">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option3">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option4">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option5">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="example"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>City</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option2">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option3">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option4">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option5">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <FormField
                control={form.control}
                name="example"
                render={({}) => (
                  <FormItem>
                    <FormLabel>
                      <FormLabelText>Address</FormLabelText>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address"></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <div className="flex gap-x-5">
                <FormField
                  control={form.control}
                  name="example"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>State</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option2">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option3">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option4">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                            <SelectItem value="option5">
                              <Locate className="size-4" /> Option
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="example"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>Postal code</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Postal code"></Input>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div>
                <Checkbox label="I have GSTIN" />
              </div>

              <DialogFooter>
                <Button type="submit" className="w-full" size="md">
                  Next
                </Button>
              </DialogFooter>
            </Form>
          </DialogContent>
        </Dialog>
        <Card size="lg" className="flex-row items-start">
          <Form {...form}>
            <FormField
              control={form.control}
              name="example"
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Currency</FormLabelText>
                  </FormLabel>
                  <FormControl>
                    <Input variant="outline" placeholder="IND...." />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="example"
              render={({}) => (
                <FormItem>
                  <FormLabel>
                    <FormLabelText>Price List</FormLabelText>
                  </FormLabel>
                  <FormControl>
                    <Input variant="outline" placeholder="Standard Selling" />
                  </FormControl>
                  <FormDescription>
                    <Switch label="Ignore Pricing Rule" />
                  </FormDescription>
                </FormItem>
              )}
            />
          </Form>
        </Card>

        <Card size="lg" className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>Name</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" />
                      </FormControl>
                      <FormDescription>Enter User Name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>Email</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@mail.com" />
                      </FormControl>
                      <FormDescription>Enter User Email</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>Password</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <InputGroup>
                            <InputGroupInput
                              size="md"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter password"
                            />
                            <InputGroupAddon align="inline-end">
                              <Button
                                type="button"
                                variant="secondary"
                                size="sm"
                                onClick={() => setShowPassword((p) => !p)}
                              >
                                {showPassword ? "Hide" : "Show"}
                              </Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormControl>
                      <FormDescription>
                        Password must be 8 characters
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>
                        <FormLabelText>Confirm Password</FormLabelText>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Re-enter password"
                        />
                      </FormControl>
                      <FormDescription>
                        Password must be 8 characters
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormFieldDemo;
