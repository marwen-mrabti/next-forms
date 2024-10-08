"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { SalesFormSchema } from "@/lib/schemas";

export async function talkToSales(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: SalesFormSchema,
  });
  // Check honeypot field to detect bots
  const honeypot = formData.get("honeypot") as string;
  if (honeypot) {
    // If honeypot field is filled, it's likely a bot
    return submission.reply({
      formErrors: ["bot detected"],
    });
  }

  // Validate the form
  if (submission.status !== "success") {
    return submission.reply();
  }

  // Simulating some message sending logic here
  const message = await new Promise<{ sent: boolean }>((resolve, reject) => {
    const isMessageSent = true; // false to simulate error

    if (isMessageSent) {
      resolve({ sent: true });
    } else {
      resolve({ sent: false });
    }
  });

  if (!message.sent) {
    return submission.reply({
      formErrors: ["Failed to send the message. Please try again later."],
    });
  }

  redirect("/success");
}
