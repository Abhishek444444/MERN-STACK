import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    const successMessage = `Signup Successfully `;
    localStorage.setItem("signupMessage", successMessage);
    alert(successMessage);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    padding: "20px",
  };
  
  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    backdropFilter: "blur(5px)",
  };
  
  const inputStyle = {
    width: "100%",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    backgroundColor: "#f7f7f7",
    fontSize: "16px",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  };
  
  const buttonStyle = {
    backgroundColor: "#ff6f61",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    fontSize: "18px",
    fontWeight: "600",
    transition: "background-color 0.3s, transform 0.2s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  
  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "32px" }}>
          Sign Up
        </h2>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.boxShadow =
              "inset 0 2px 8px rgba(40, 167, 69, 0.3)";
            e.target.style.transform = "scale(1.02)";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow =
              "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
            e.target.style.transform = "scale(1)";
          }}
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.boxShadow =
              "inset 0 2px 8px rgba(40, 167, 69, 0.3)";
            e.target.style.transform = "scale(1.02)";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow =
              "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
            e.target.style.transform = "scale(1)";
          }}
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          onFocus={(e) => {
            e.target.style.boxShadow =
              "inset 0 2px 8px rgba(40, 167, 69, 0.3)";
            e.target.style.transform = "scale(1.02)";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow =
              "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
            e.target.style.transform = "scale(1)";
          }}
        />
        <button
          style={buttonStyle}
          type="submit"
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e85a50")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
  
}

export default Signup;
