import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auto-insurance")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
