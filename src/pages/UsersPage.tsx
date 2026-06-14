import { useUsers } from "@/services/queries/users";

export default function UsersPage() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load users.</p>;

  return (
    <div>
      {data?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}