"use client";

import React, { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

const FieldDemo = () => {
  const [value, setValue] = useState([200, 800]);

  return (
    <div className="pt-10">
      <h1 className="text-xl text-primary font-bold pb-10 text-center tracking-4 leading-normal">
        Field Component
      </h1>
      <div className="flex flex-col gap-[30px_0] w-full max-w-[500px] mx-auto">
        <form className="p-4 rounded-xl border">
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Payment Method</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Name on Card
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Evil Rabbit"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Card Number
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <FieldDescription>
                    Enter your 16-digit card number
                  </FieldDescription>
                </Field>
                <div className="grid grid-cols-3 gap-4">
                  <Field>
                    <FieldLabel htmlFor="checkout-exp-month-ts6">
                      Month
                    </FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="checkout-exp-month-ts6">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                      Year
                    </FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="checkout-7j9-exp-year-f59">
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                    <Input id="checkout-7j9-cvv" placeholder="123" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Billing Address</FieldLegend>
              <FieldDescription>
                The billing address associated with your payment method
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox
                    id="checkout-7j9-same-as-shipping-wgm"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="checkout-7j9-same-as-shipping-wgm"
                    className="font-normal"
                  >
                    Same as shipping address
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Comments
                  </FieldLabel>
                  <Textarea
                    variant="outline"
                    id="checkout-7j9-optional-comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <FieldSet className="p-4 rounded-xl border">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="Max Leiter"
                size="xl"
              />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input
                id="password"
                type="password"
                placeholder="********"
                size="xl"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldGroup className="p-4 rounded-xl border">
            <Field>
              <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
              <Textarea
                id="feedback"
                placeholder="Your feedback helps us improve..."
                rows={4}
              />
              <FieldDescription>
                Share your thoughts about our service.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>

        <Field className=" border p-4 rounded-md">
          <FieldLabel>Department</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="support">Customer Support</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>
            Select your department or area of work.
          </FieldDescription>
        </Field>
        <Field className=" border p-4 rounded-md">
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($
            <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
            <span className="font-medium tabular-nums">{value[1]}</span>).
          </FieldDescription>

          <Slider defaultValue={[20, 50]} size="sm" knob={true} />
        </Field>

        <FieldGroup className="border p-4 rounded-md">
          <FieldSet>
            <FieldLegend variant="label">
              Show these items on the desktop
            </FieldLegend>
            <FieldDescription>
              Select the items you want to show on the desktop.
            </FieldDescription>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-hard-disks-ljj"
                  label="Hard disks"
                  size="sm"
                />
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-external-disks-1yg"
                  label="External disks"
                  size="sm"
                />
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-cds-dvds-fzt"
                  label="CDs, DVDs, and iPods"
                  size="sm"
                />
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-connected-servers-6l2"
                  label=" Connected servers"
                  size="sm"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
                Sync Desktop & Documents folders
              </FieldLabel>
              <FieldDescription>
                Your Desktop & Documents folders are being synced with iCloud
                Drive. You can access them from other devices.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>

        <FieldSet className="border p-4 rounded-md">
          <FieldLabel>Subscription Plan</FieldLabel>
          <FieldDescription>
            Yearly and lifetime plans offer significant savings.
          </FieldDescription>

          <RadioGroup defaultValue="option1">
            <RadioGroupItem
              id="opts1"
              value="option1"
              label=" Monthly ($9.99/month)"
              size="sm"
            />
            <RadioGroupItem
              id="opts2"
              value="option2"
              label="Yearly ($99.99/year)"
              size="sm"
            />
            <RadioGroupItem
              id="opts3"
              value="option3"
              label="OLifetime ($299.99)"
              size="sm"
            />
          </RadioGroup>
        </FieldSet>

        <Field orientation="horizontal" className="border p-4 rounded-md">
          <FieldContent>
            <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
            <FieldDescription>
              Enable multi-factor authentication. If you do not have a
              two-factor device, you can use a one-time code sent to your email.
            </FieldDescription>
          </FieldContent>
          <Switch id="2fa" />
        </Field>

        <FieldGroup className="border p-4 rounded-md">
          <FieldSet>
            <FieldLabel htmlFor="compute-environment-p8w">
              Compute Environment
            </FieldLabel>
            <FieldDescription>
              Select the compute environment for your cluster.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes">
              <FieldLabel htmlFor="kubernetes-r2h">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      Run GPU workloads on a K8s configured cluster.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="vm-z4k">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Virtual Machine</FieldTitle>
                    <FieldDescription>
                      Access a VM configured cluster to run GPU workloads.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="vm" id="vm-z4k" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
      </div>
    </div>
  );
};

export default FieldDemo;
