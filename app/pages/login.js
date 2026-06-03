import { renderDashboard } from "./dashboard.js";

export function renderLogin(root) {
    root.innerHTML = `
    <h1>Login</h1>
    <form id="login-form">
      <label>Email</label>
      <input id="email" type="email" required />

      <label>Password</label>
      <input id="password" type="password" required />

      <button id="login-btn" type="submit">Login</button>
    </form>
  `;

    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        renderDashboard(root);
    });
}
