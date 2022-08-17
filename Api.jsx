import React, { useEffect, useState } from "react";

export const Api = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <table>
          {users.map((user) => (
            <>
              <tr key={user.id}>
                {user.name}
                {user.username}
                {user.email}
              </tr>
            </>
          ))}
        </table>
      )}
    </div>
  );
};
