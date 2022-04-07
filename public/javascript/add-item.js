async function addItemHandler() {
  const name = document.querySelector("#name").value.trim();
  const url = document.querySelector("#url").value.trim();
  const display_url = document.querySelector("#display-url").value.trim();
  const comment_area = document.querySelector("#comment-area").value.trim();

  const response = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify({
      name,
      url,
      display_url,
      comment_area,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#add-item").addEventListener("click", addItemHandler);
