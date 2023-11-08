interface User {
  id: number;
  name: string;
  email: string;
}
const Users = async () => {
  // Data fetching
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
    // revalidate mean nextjs refresh data from backend every 10 second
    // { next: { revalidate: 10 } }
  );
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-sm table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
