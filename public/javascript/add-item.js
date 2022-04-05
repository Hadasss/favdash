async function addItemHandler() {
  const url = document.querySelector("#url").value.trim();
  const display_url = document.querySelector("#display-url").value.trim();
  const name = document.querySelector("#name").value.trim();
  const comment_area = document.querySelector("#textarea").value.trim();

  const response = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify({
      url,
      display_url,
      name,
      comment_area,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#add-item").addEventListener("click", addItemHandler);
