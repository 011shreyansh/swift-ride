import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9090/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      if (!res.ok) {
        throw new Error("Login Failed");
      }

      const data = await res.json();  
      localStorage.setItem("token", data.token); 
      alert("login successful"); 
      console.log("Login successful:", data);
    } catch (error) {
      alert("login failed"); 
      console.error("Error:", error);
    }
  };

  return (
    <div className="login">
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">🚕</div>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your SwiftRide account</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <a href="#" className="form-link">Forgot password?</a>
            </div>

            <button type="submit" className="auth-btn">
              Sign In
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="auth-footer">
            Don't have an account? <Link to="/signup" className="form-link">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
