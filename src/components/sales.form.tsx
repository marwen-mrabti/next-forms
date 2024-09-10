"use client";

import { talkToSales } from "@/actions/sales.action";
import SubmitButton from "./submit-button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import { useFormState } from "react-dom";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { SalesFormSchema } from "@/lib/schemas";

export default function SalesForm() {
  const [lastResult, action] = useFormState(talkToSales, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SalesFormSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  console.log(lastResult);

  return (
    <form
      id={form.id}
      action={action}
      onSubmit={form.onSubmit}
      className="flex flex-col gap-4"
      noValidate
      aria-invalid={form.errors ? true : undefined}
      aria-describedby={form.errors ? form.errorId : undefined}
    >
      <span className="text-xs font-semibold text-red-500">{form.errors}</span>
      {/* protection against bots*/}
      <Input type="text" name="honeypot" style={{ display: "none" }} />

      <div className="grid space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" />
        <span className="text-xs text-red-500">{fields.name.errors}</span>
      </div>
      <div className="grid space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jhon.doe@example.com"
        />
        <span className="text-xs text-red-500">{fields.email.errors}</span>
      </div>
      <div className="grid space-y-1">
        <Label htmlFor="message">Question or Problem</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please share some details about your needs..."
          className="h-32"
        />
        <span className="text-xs text-red-500">{fields.message.errors}</span>
      </div>

      <SubmitButton />
    </form>
  );
}
