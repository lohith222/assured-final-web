import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/travel-insurance")({
  beforeLoad: () => {
    throw redirect({ to: "/plans/travel" });
  },
});
