import GoogleIcon from "../icon/GoogleIcon";
import "./Login.scss";
function Login() {
  return (
    <div className="login">
      <div className="login__title">NFT Access</div>
      <div className="login__desc">
        Please fill your detail to access your account.
      </div>
      <div className="login__form form">
        <div className="form__title">Email</div>
        <input
          type="email"
          placeholder="debra.holt@example.com"
          className="form__email"
        />
        <div className="form__title">Password</div>
        <input
          type="password"
          placeholder="••••••••"
          className="form__password"
        />
      </div>
      <div className="login__help">
        <div className="login__check check">
          <input type="checkbox" className="check__box" />
          <div className="check__title">Remember me</div>
        </div>
        <div className="login__forgot">Forgot Password?</div>
      </div>
      <div className="login__auth auth">
        <button type="submit" className="autn__signIn">
          <span>Sign in</span>
        </button>
        <div className="login__google">
          <GoogleIcon />
          <div className="auth__google">Sign in with Google</div>
        </div>
      </div>
      <div className="login__singUp">
      Don’t have an account? <span>Sign up</span>
      </div>
    </div>
  );
}

export default Login;
