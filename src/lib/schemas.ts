import { z } from "zod";

export const SalesFormSchema = z.object({
  name: z
    .string({ message: "name is required" })
    .trim()
    .min(2, { message: "Please enter a valid name" }),
  email: z
    .string({ message: "email is required" })

    .email({ message: "Please enter a valid email" }),
  message: z
    .string({ message: "message is required" })
    .trim()
    .min(10, { message: "message should be at least 10 characters" })
    .max(500, {
      message: "message should be less than 500 characters",
    }),
});

export const SupportFormSchema = z.object({
  name: z
    .string({ message: "name is required" })
    .trim()
    .min(2, { message: "Please enter a valid name" }),
  email: z
    .string({ message: "email is required" })
    .email({ message: "Please enter a valid email" }),
  problem: z
    .string({ message: "Please describe your problem" })
    .trim()
    .min(10, {
      message: "Please describe your problem in more than 10 characters",
    })
    .max(500, {
      message: "Please describe your problem in less than 500 characters",
    }),
  asset: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) => file.size < 1024 * 200,
          "File size must be less than 2mb",
        ),
    )
    .refine(
      (files) => files.every((file) => file.size < 1024 * 200),
      "File size must be less than 2mb",
    )
    .optional(),
});

export type TSalesForm = z.infer<typeof SalesFormSchema>;
export type TSupportForm = z.infer<typeof SupportFormSchema>;
