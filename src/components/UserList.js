// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id} className="mb-2">
            {user.name} ({user.email})
            <button
              className="ml-2 text-blue-500"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>
            <button
              className="ml-2 text-red-500"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
