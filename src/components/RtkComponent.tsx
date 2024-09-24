// src/components/UserList.tsx
import React from 'react';
import { useGetUsersQuery } from '../Redux/reducer';

const UserList: React.FC = () => {
  // Fetch the user data using the hook
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users!</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;