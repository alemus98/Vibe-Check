import Login from "../componets/Login";
import Signup from "../componets/Signup";

export default function LoginSignup() {
  return (
    <div className="row">
      <div className="col-6">
        <Login />
      </div>
      <div className="col-6">
        <Signup />
      </div>
    </div>
  );
}
