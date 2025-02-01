import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const successMessage = `Login Successfuly Welcome Back, `;
    localStorage.setItem("loginMessage", successMessage);
    alert(successMessage);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "28px" }}>
          Login
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px",
            width: "100%",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#5563DE")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px",
            width: "100%",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#5563DE")}
          onBlur={(e) => (e.target.style.borderColor = "#ddd")}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#5563DE",
            color: "#fff",
            padding: "15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "18px",
            width: "100%",
            fontWeight: "bold",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4453C0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#5563DE")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login
        </button>
      </form>
    </div>
  );
  
};

export default Login;
