'use client'

import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
  confirmMessage?: string;
};

const SubmitButton = ({
  children,
  pendingText = "Saving...",
  confirmMessage,
  ...props
}: Props) => {
  // pending is true from the moment the parent <form> is submitted
  // until the server action finishes
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      onClick={(e) => {
        if (confirmMessage && !window.confirm(confirmMessage)) e.preventDefault();
      }}
      {...props}
    >
      {pending ? pendingText : children}
    </Button>
  );
};

export default SubmitButton;
