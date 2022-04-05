async function editTopicHandler() {
  const name = document.querySelector("#topic-name").value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/topics/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

async function deleteTopicHandler() {
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/topics/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#edit-topic")
  .addEventListener("click", editTopicHandler);

document
  .querySelector("#delete-topic")
  .addEventListener("click", deleteTopicHandler);
