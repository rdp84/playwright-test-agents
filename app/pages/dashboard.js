import { showModal } from "../components/modal.js";
import { showSpinner } from "../components/spinner.js";
import { renderList } from "../components/list.js";

export function renderDashboard(root) {
    root.innerHTML = `
    <h1>Dashboard</h1>
    <button id="open-modal">Open Modal</button>
    <button id="load-data">Load Data</button>
    <div id="list-container"></div>
  `;

    document.getElementById("open-modal").addEventListener("click", () => {
        showModal("Hello from the modal!");
    });

    document.getElementById("load-data").addEventListener("click", async () => {
        const container = document.getElementById("list-container");
        container.innerHTML = "";
        showSpinner(container);

        await new Promise((r) => setTimeout(r, 1000));

        renderList(container, ["Alpha", "Beta", "Gamma"]);
    });
}
