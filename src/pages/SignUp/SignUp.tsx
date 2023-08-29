import { Link } from "react-router-dom";
import useSignUp from "./useSignUp";
import styles from "./signup.module.scss";
function SignUp(): JSX.Element {
  const { name, emailOrNumber, isPendingSubmit, onSubmit, onChange, password, verifyPassword } = useSignUp();
  return (
    <div className={styles["root-container"]}>
      <div className={styles["signup-div"]}>
        <h1>Amazon.co.uk</h1>
        <form onSubmit={onSubmit}>
          <label>
            Your name
            <input
              name="name"
              type="text"
              placeholder="First and last name"
              onChange={onChange}
              value={name}
            />
          </label>
          <label>
            Mobile number or email
            <input name="emailOrNumber" type="text" onChange={onChange} value={emailOrNumber} />
          </label>
          <label>
            Password
            <input name="password" type="password" onChange={onChange} value={password} />
          </label>
          <label>
            Re-enter password
            <input name="verifyPassword" type="password" onChange={onChange} value={verifyPassword} />
          </label>
          <input name="submit" type="submit" value="Submit" disabled={isPendingSubmit} />
        </form>
      </div>
      <div>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
