import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tlogin() {
const navigate = useNavigate();
const [inputUserId, setInputUserId] = useState("");
const [inputPassword, setInputPassword] = useState("");
const [message, setMessage] = useState(""); 
const [messageColor, setMessageColor] = useState(""); 
const [emailError, setEmailError] = useState(""); 
const [passwordError, setPasswordError] = useState(""); 

const userId = "isakdaniel@gmail.com";
const password = "isak123";

const handleSubmit = (event) => {
event.preventDefault();
setEmailError("");
setPasswordError("");
setMessage(""); 

let hasError = false;

if (!inputUserId.trim()) {
setEmailError("Email empty");
hasError = true;
}
if (!inputPassword.trim()) {
setPasswordError("Password empty");
hasError = false;
}

if (hasError) return;

if (inputUserId === userId && inputPassword === password) {
setMessage("Login Successful");
setMessageColor("green");

setTimeout(() => {
navigate("/Tlogin2"); 
}, 1500);
} else {
setMessage("Incorrect Username or Password!");
setMessageColor("red");

}
  };

  return (
   <div>
        
<h2>Login Page</h2>
<p style={{ color: messageColor, fontWeight: "bold" }}>{message}</p>
<form onSubmit={handleSubmit}>

<label htmlFor="username">Username</label>

<input
id="username" 
type="text"
value={inputUserId}
onChange={(e) => setInputUserId(e.target.value)}
/><br></br>
<span style={{color:"red",fontWeight: "bold"}} >{emailError}</span>

<br/>
<label htmlFor="password">Password</label>
<input
id="password"
type="password"
value={inputPassword}
onChange={(e) => setInputPassword(e.target.value)}
/><br></br>
<span style={{color:"red",fontWeight: "bold"}}>{passwordError}</span>


<br />

<button type="submit">Submit</button>
</form>
<p
style={{
color: messageColor,
fontWeight: "bold",
marginTop: "10px",
}}
>
        
</p>
</div>
);
}

export default Tlogin;