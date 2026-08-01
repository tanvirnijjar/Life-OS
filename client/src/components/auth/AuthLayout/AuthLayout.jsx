import "./AuthLayout.css";

function AuthLayout({ title, subtitle, children }) {
  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">🌼 Life OS</div>

          <h1>{title}</h1>

          <p>{subtitle}</p>

          {children}
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;