async function editItemHandler(e) {
  e.preventDefault();
  const name = document.querySelector("#item-name").value.trim();
  const display_url = document.querySelector("#display_url").value.trim();
  const url = document.querySelector("#url").value.trim();
  const comment_area = document.querySelector("#comment_area").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/items/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name, display_url, comment_area, url }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

async function deleteItemHandler() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/items/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#edit-item").addEventListener("click", editItemHandler);

document
  .querySelector("#delete-item")
  .addEventListener("click", deleteItemHandler);
