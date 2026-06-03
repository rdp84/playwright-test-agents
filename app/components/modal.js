export function showModal(message) {
    const modal = document.createElement("div");
    modal.className = "modal";

    modal.innerHTML = `
    <div class="modal-content" data-test-id="modal-content">
      <p>${message}</p>
      <button id="close-modal" data-test-id="close-modal">Close</button>
    </div>
  `;

    document.body.appendChild(modal);

    modal.querySelector("#close-modal").addEventListener("click", () => {
        modal.remove();
    });
}
