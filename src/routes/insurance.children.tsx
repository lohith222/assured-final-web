import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/insurance/children")({
  beforeLoad: () => {
    throw redirect({ to: "/plans/children" });
  },
});
