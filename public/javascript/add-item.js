async function addItemHandler(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const url = document.querySelector("#url").value.trim();
  const display_url = document.querySelector("#display-url").value.trim();
  const comment_area = document.querySelector("#comment-area").value.trim();
  // TODO - add const topic_id;
  // const topic_id = e.target.parentElement.id;
  // console.log(topic_id);

  const response = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify({
      name,
      url,
      display_url,
      comment_area,
      // topic_id,
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
