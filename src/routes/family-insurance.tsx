import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/family-insurance")({
  beforeLoad: () => {
    throw redirect({ to: "/plans/children" });
  },
});
