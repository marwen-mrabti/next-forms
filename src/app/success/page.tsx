import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function SubmissionSuccessfulPage() {
  return (
    <section className="grid min-h-screen w-full place-items-center">
      <div className="grid place-items-center rounded-md border border-dashed border-primary p-8 animate-in fade-in-50">
        <div className="grid size-20 place-items-center rounded-full bg-green-500/10">
          <CheckIcon className="size-10 text-green-500" />
        </div>

        <h2 className="mt-4 text-2xl font-semibold">
          Thank you for your submission.
        </h2>
        <p className="text-sm text-muted-foreground">
          We will get back to you soon!
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-secondary-foreground underline underline-offset-4 transition-all duration-200 ease-in-out hover:text-primary"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}
