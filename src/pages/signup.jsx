import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/signup.css";

function SignUp() {
  const [username,setusername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res=await fetch("http://localhost:9090/user/create",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                username:username,
                password:password,
                email:email
            })
        });
        if(!res.ok){
            throw new Error("error");
        }
        // const data=await res.json();
        alert("user created");
    }catch(error){
        alert("error");
    }
     
  };

  return (
    <div className="signup">
       
      <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">🚕</div>
            <h1 className="auth-title">Create account</h1>
            <p className="auth-subtitle">Join SwiftRide and start your Trip today</p>
          </div>
       

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={ email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>


          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value= {password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

           

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="form-link">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
