import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plans/health")({
  beforeLoad: () => {
    throw redirect({ to: "/insurance/health" });
  },
});
