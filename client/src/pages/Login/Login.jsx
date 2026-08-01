import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Sign in to continue managing your tasks, goals and notes."
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;