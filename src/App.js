// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleSave = () => {
    setCurrentUser(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Manager</h1>
      <UserForm currentUser={currentUser} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default App;
