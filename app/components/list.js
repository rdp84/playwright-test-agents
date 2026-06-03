export function renderList(root, items) {
    const ul = document.createElement("ul");
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.setAttribute("data-test-id", `li-${item}`);
        ul.appendChild(li);
    });
    root.appendChild(ul);
}
