async function editTopicHandler(e) {
  e.preventDefault();
  const name = document.querySelector("#topic-name").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);

  const response = await fetch(`/api/topics/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
    headers: { "Content-type": "application/json" },
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#update-topic")
  .addEventListener("submit", editTopicHandler);
