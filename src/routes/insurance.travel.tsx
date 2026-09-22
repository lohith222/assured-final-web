import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/insurance/travel")({
  beforeLoad: () => {
    throw redirect({ to: "/plans/travel" });
  },
});
