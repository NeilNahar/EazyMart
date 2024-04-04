import { useState } from "react";

const SignInSignUp = (props) => {
  const [currentState, setCurrentState] = useState("Sign In");
  return (
    <div className="SignInSignUp">
      <form>
      <div onClick={()=>{props.setShowSignInSignUp(false)}}>X</div>
      <h2>{currentState} </h2>
        {currentState==="Sign Up" && <input type="text" placeholder="Enter Name" />}
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        {currentState==="Sign In" ? <p>Not Registered: <span className="underline" onClick={()=>{setCurrentState("Sign Up")}}>Create Account</span></p> : <p>Already Registered: <span className="underline" onClick={()=>{setCurrentState("Sign In")}}>SignIn</span></p>}
        <button>{currentState}</button>
      </form>
    </div>
  );
};

export default SignInSignUp;
