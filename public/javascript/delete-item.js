async function deleteItemHandler() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/items/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#delete-item")
  .addEventListener("click", deleteItemHandler);
