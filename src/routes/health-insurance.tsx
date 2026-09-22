import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/health-insurance")({
  beforeLoad: () => {
    throw redirect({ to: "/insurance/health" });
  },
});
