async function addTopicHandler() {
  console.log("clicked");
  const name = document.querySelector("#topic-name").value.trim();

  const response = await fetch("/api/topics", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".add-topic").addEventListener("click", addTopicHandler);
