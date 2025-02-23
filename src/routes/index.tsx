import { useQueryOctocatUser } from "@/features/octocat/connectivity/queries.octocat";
import { createFileRoute } from "@tanstack/react-router";

// TODO: can it be refactored?
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isPending, error, data } = useQueryOctocatUser();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("data", data);

  return <div className="p-2 text-red-500">FOO</div>;
}
