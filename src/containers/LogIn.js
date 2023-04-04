import React, { useEffect, useState } from "react";
import "./LogIn.css";
function LogIn() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  function sendData() {
    fetch("http://localhost:7000/user/create",{
        method:"post",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newUser)
    })
      .then(() => {
        alert("your user has been logged successfully");
      })
      .catch((err) => {
        console.log("there is error", err);
      });
  }

  return (
    <div className="container">
      <h2 className="login-title">Log in</h2>

      <div className="login-form">
        <div>
          <label for="name">Name </label>
          <input
            id="name"
            type="text"
            placeholder="Eren Buruk"
            name="name"
            required
            onChange={(e) =>
              setNewUser(() => {
                return { ...newUser, ["name"]: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label for="email">Email </label>
          <input
            id="email"
            type="email"
            placeholder="me@example.com"
            name="email"
            required
            onChange={(e) =>
              setNewUser(() => {
                return { ...newUser, ["email"]: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label for="password">Password </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            required
            onChange={(e) =>
              setNewUser(() => {
                return { ...newUser, ["password"]: e.target.value };
              })
            }
          />
        </div>

        <button onClick={()=>sendData()} className="btn btn--form" type="submit" value="Log in">
          Log in
        </button>
      </div>
    </div>
  );
}

export default LogIn;
