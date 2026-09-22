import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/life-insurance")({
  beforeLoad: () => {
    throw redirect({ to: "/plans/term" });
  },
});
