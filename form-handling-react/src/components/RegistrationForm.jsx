import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  //To Handle input change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  //To Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // const { username, email, password } = formData;

    //Error handling
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");

    console.log("User Registered Successfully: ", formData);

    //Clear Form
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>User Registration</h2>

        {error && <p style={{ color: "red" }}> {error} </p>}
        <div>
          <label> Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Email</label>
          <input type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
           />
        </div>

        <div>
          <label> Password</label>
          <input type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange} />

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
