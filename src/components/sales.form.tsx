import SubmitButton from "./submit-button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function SalesForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <div className="grid space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="jKUeh@example.com"
          className=""
        />
      </div>
      <div className="grid space-y-1">
        <Label htmlFor="message">Question or Problem</Label>
        <Textarea
          id="message"
          placeholder="Please share some details about your needs..."
          className="h-32"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
