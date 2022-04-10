async function addItemHandler(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const url = document.querySelector("#url").value.trim();
  const comment_area = document.querySelector("#comment-area").value.trim();
  const topic_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify({
      name,
      url,
      comment_area,
      topic_id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#add-item").addEventListener("submit", addItemHandler);
