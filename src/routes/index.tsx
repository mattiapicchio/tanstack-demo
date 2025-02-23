import { UserCard } from "@/features/user/components/UserCard";
import { useQueryOctocatUser } from "@/features/user/connectivity/queries.user";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isPending, error, data: user } = useQueryOctocatUser();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto mt-12">
      <UserCard user={user} />
    </div>
  );
}
