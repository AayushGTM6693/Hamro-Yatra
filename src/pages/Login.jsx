import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick(email, password, e) {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  }
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("aayush@gmail.com");
  const [password, setPassword] = useState("aayush12");

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button
            type="primary"
            onClick={(e) => handleClick(email, password, e)}
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
