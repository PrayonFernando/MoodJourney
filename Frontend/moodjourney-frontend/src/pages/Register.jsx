import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        preferences: [],
        createdAt: new Date(),
      });

      toast.success("Account Created Successfully!");
      navigate("/recommendation");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use!");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password must be at least 6 characters!");
      } else {
        toast.error("Error signing up!");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">REGISTER YOUR ACCOUNT</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
          required
        />
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? "Registering..." : "REGISTER"}
        </button>
      </form>
      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} className="link-text">
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
