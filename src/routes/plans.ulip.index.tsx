import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plans/ulip/")({
  beforeLoad: () => {
    throw redirect({ to: "/insurance/ulip" });
  },
});
