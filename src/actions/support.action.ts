"use server";

import { SupportFormSchema } from "@/lib/schemas";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function talkToSupport(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: SupportFormSchema,
  });

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
