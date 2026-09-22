import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/business-insurance")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
