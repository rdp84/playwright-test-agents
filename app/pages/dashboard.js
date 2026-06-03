import { renderList } from "../components/list.js";
import { showModal } from "../components/modal.js";
import { showSpinner } from "../components/spinner.js";

export function renderDashboard(root) {
	root.innerHTML = `
    <h1 data-test-id="heading">Dashboard</h1>
    <button id="open-modal" data-test-id="open-modal">Open Modal</button>
    <button id="load-data" data-test-id="load-data">Load Data</button>
    <div id="list-container" data-test-id="list-container"></div>
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
