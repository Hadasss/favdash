async function deleteTopicHandler() {
  console.log("clicked");
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(id);
  const response = await fetch(`/api/topics/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#delete-topic")
  .addEventListener("click", deleteTopicHandler);
