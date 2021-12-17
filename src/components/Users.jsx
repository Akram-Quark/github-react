import React from "react";
import User from "./User";
import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="row W-100 align-center justify-center">
      {users.map((user) => (
        <User
          key={user.id}
          login={user.login}
          avatar={user.avatar_url}
          html={user.html_url}
          repos={user.repos_url}
        ></User>
      ))}
    </div>
  );
}

export default Users;
