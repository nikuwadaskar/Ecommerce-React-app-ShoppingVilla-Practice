import React, { useEffect, useState } from "react";
import "./LogIn.css";
function LogIn({ setAuth }) {
  let isMounted = true;
  const controller = new AbortController();
  const signal = controller.signal;
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, [newUser]);
  useEffect(() => {
    return () => {
      isMounted = false;
      controller?.abort();
    };
  }, []);
  function sendData() {
    fetch("http://localhost:7000/user/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
      signal: signal,
    })
      .then(async (res) => {
        let data = await res.json();
        setUserInfo(data.user);
        console.log(data);
        if (data.user) {
          setAuth(true);
        }
      })
      .catch((err) => {
        console.log("there is error", err);
      });
  }

  return (
    <div className="outer_container">
      <div className="container">
        <h1 className="login_title">Log In</h1>

        <div className="login-form">
          <div className="margins">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              type="text"
              placeholder="Apple cat"
              name="name"
              required
              onChange={(e) =>
                setNewUser(() => {
                  return { ...newUser, ["name"]: e.target.value };
                })
              }
            />
          </div>

          <div className="margins">
            <label htmlFor="email">Email </label>
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

          {/* <div className="margins" >
          <label htmlFor="password">Password </label>
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
        </div> */}

          <button
            onClick={() => sendData()}
            className="btn btn--form"
            type="submit"
            value="Log in"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
