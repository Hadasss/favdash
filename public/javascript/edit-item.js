async function editItemHandler() {
  const name = document.querySelector(".name").value.trim();
  const url = document.querySelector(".url").value.trim();
  const comment_area = document.querySelector(".comment-area").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/items/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name, url, comment_area }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#edit-form").addEventListener("click", editItemHandler);
