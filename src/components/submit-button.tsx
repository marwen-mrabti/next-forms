import { Button } from "./ui/button";

interface SubmitButtonProps {
  pending?: boolean;
}

export default function SubmitButton({ pending }: Readonly<SubmitButtonProps>) {
  return (
    <Button variant="default" type="submit" className="w-full">
      {pending ? (
        <span className="flex flex-nowrap items-center justify-center">
          <svg
            className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-white"
            viewBox="0 0 24 24"
          ></svg>
          processing ...
        </span>
      ) : (
        <span>Submit</span>
      )}
    </Button>
  );
}
