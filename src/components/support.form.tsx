"use client";

import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm } from "@conform-to/react";

import { parseWithZod } from "@conform-to/zod";
import { SupportFormSchema } from "@/lib/schemas";
import { talkToSupport } from "@/actions/support.action";

export default function SupportForm() {
  const [lastResult, action] = useFormState(talkToSupport, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SupportFormSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

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
          className=""
        />
        <span className="text-xs text-red-500">{fields.email.errors}</span>
      </div>
      <div className="grid space-y-1">
        <Label htmlFor="problem">Problem</Label>
        <Textarea
          id="problem"
          name="problem"
          placeholder="Tell us about your problem..."
          className="h-32"
        />
        <span className="text-xs text-red-500">{fields.problem.errors}</span>
      </div>
      <div className="grid space-y-1">
        <Label htmlFor="asset">Asset</Label>
        <Input id="asset" type="file" name="asset" placeholder="Your asset" />
        <span className="text-xs text-red-500">{fields.asset.errors}</span>
      </div>

      <SubmitButton />
    </form>
  );
}
