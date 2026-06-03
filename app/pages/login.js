import { renderDashboard } from "./dashboard.js";

export function renderLogin(root) {
  root.innerHTML = `
    <h1 data-test-id="heading">Login</h1>
    <form id="login-form">
      <label>Email</label>
      <input id="email" type="email" data-test-id="email" required />

      <label>Password</label>
      <input id="password" type="password" data-test-id="password" required />

      <button id="login-btn" type="submit" data-test-id="login-btn">Login</button>
    </form>
  `;

  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    renderDashboard(root);
  });
}
